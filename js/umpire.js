// js/umpire.js
// Interactive Referee Scoreboard & Live Court Simulator Umpire Console

export class UmpireConsole {
  constructor(state, sync, matchId, onFinishCallback) {
    this.state = state;
    this.sync = sync;
    this.matchId = matchId;
    this.onFinish = onFinishCallback;
    this.lang = 'en';

    // Retrieve match
    this.match = this.state.matches.find(m => m.id === matchId);
    if (!this.match) throw new Error(`Match not found: ${matchId}`);

    const isGroup = this.match.stage === 'Group Stage';
    this.targetPoints = isGroup ? 15 : 21;
    this.maxPoints = isGroup ? 21 : 30;

    // Load active teams/players
    this.team1Obj = this.state.teams.find(t => t.name === this.match.team1);
    this.team2Obj = this.state.teams.find(t => t.name === this.match.team2);

    this.team1Players = this.team1Obj ? [this.team1Obj.player1, this.team1Obj.player2] : ["Team A Player 1", "Team A Player 2"];
    this.team2Players = this.team2Obj ? [this.team2Obj.player1, this.team2Obj.player2] : ["Team B Player 1", "Team B Player 2"];

    // Initialize scoring variables
    this.score1 = 0; // Current set score Team 1
    this.score2 = 0; // Current set score Team 2
    this.sets = [];  // Historic set scores (e.g. [{t1: 15, t2: 12}])
    
    // Auto-fill from match if it was already in progress
    if (this.match.sets && this.match.sets.length > 0 && this.match.status === 'Live') {
      this.sets = [...this.match.sets];
      this.score1 = this.match.score1 || 0;
      this.score2 = this.match.score2 || 0;
    }
    
    this.currentSet = this.sets.length + 1;
    this.servingTeam = 'A'; // 'A' or 'B'
    this.history = []; // Operations log for UNDO
    this.isCourtSwapped = false;
    this.set3SwapHappened = false;

    // Set initial positions: Player 1 (Right court), Player 2 (Left court)
    this.team1Right = this.team1Players[0];
    this.team1Left = this.team1Players[1];
    
    this.team2Right = this.team2Players[0]; // Diagonal to A's Right
    this.team2Left = this.team2Players[1];

    this.init();
  }

  init() {
    this.createOverlayContainer();
    this.render();
    
    // Broadcast live match start
    this.sync.broadcast('LIVE_MATCH_START', {
      matchId: this.matchId,
      matchState: this.serializeState()
    });
  }

  createOverlayContainer() {
    if (document.getElementById('umpire-overlay-container')) return;
    const overlay = document.createElement('div');
    overlay.id = 'umpire-overlay-container';
    overlay.className = 'umpire-overlay-backdrop';
    document.body.appendChild(overlay);
  }

  serializeState() {
    return {
      sets: [...this.sets, { t1: this.score1, t2: this.score2 }],
      score1: this.score1,
      score2: this.score2,
      currentSet: this.currentSet,
      servingTeam: this.servingTeam,
      isEven: (this.servingTeam === 'A' ? this.score1 : this.score2) % 2 === 0,
      serverName: this.getServerName(),
      partnerName: this.getServerPartnerName(),
      receiverName: this.getReceiverName(),
      receiverPartnerName: this.getReceiverPartnerName(),
      isCourtSwapped: this.isCourtSwapped
    };
  }

  broadcastUpdate() {
    const updatePayload = this.serializeState();
    updatePayload.matchId = this.matchId;
    this.sync.broadcast('LIVE_SCORE_UPDATE', updatePayload);
  }

  getServerName() {
    const isEven = (this.servingTeam === 'A' ? this.score1 : this.score2) % 2 === 0;
    if (this.servingTeam === 'A') {
      return isEven ? this.team1Right : this.team1Left;
    } else {
      return isEven ? this.team2Right : this.team2Left;
    }
  }

  getServerPartnerName() {
    const isEven = (this.servingTeam === 'A' ? this.score1 : this.score2) % 2 === 0;
    if (this.servingTeam === 'A') {
      return isEven ? this.team1Left : this.team1Right;
    } else {
      return isEven ? this.team2Left : this.team2Right;
    }
  }

  getReceiverName() {
    const isEven = (this.servingTeam === 'A' ? this.score1 : this.score2) % 2 === 0;
    // Receiver stands diagonally opposite to the server
    if (this.servingTeam === 'A') {
      return isEven ? this.team2Right : this.team2Left;
    } else {
      return isEven ? this.team1Right : this.team1Left;
    }
  }

  getReceiverPartnerName() {
    const isEven = (this.servingTeam === 'A' ? this.score1 : this.score2) % 2 === 0;
    if (this.servingTeam === 'A') {
      return isEven ? this.team2Left : this.team2Right;
    } else {
      return isEven ? this.team1Left : this.team1Right;
    }
  }

  saveToHistory() {
    this.history.push({
      score1: this.score1,
      score2: this.score2,
      sets: JSON.parse(JSON.stringify(this.sets)),
      currentSet: this.currentSet,
      servingTeam: this.servingTeam,
      team1Right: this.team1Right,
      team1Left: this.team1Left,
      team2Right: this.team2Right,
      team2Left: this.team2Left
    });
  }

  undo() {
    if (this.history.length === 0) return;
    const previous = this.history.pop();
    this.score1 = previous.score1;
    this.score2 = previous.score2;
    this.sets = previous.sets;
    this.currentSet = previous.currentSet;
    this.servingTeam = previous.servingTeam;
    this.team1Right = previous.team1Right;
    this.team1Left = previous.team1Left;
    this.team2Right = previous.team2Right;
    this.team2Left = previous.team2Left;

    this.render();
    this.broadcastUpdate();
  }

  addPoint(team) {
    this.saveToHistory();
    const isVi = this.lang === 'vi';

    if (team === 'A') {
      // Swapping rule: swap only if this team holds the serve
      if (this.servingTeam === 'A') {
        const temp = this.team1Right;
        this.team1Right = this.team1Left;
        this.team1Left = temp;
      }
      this.score1++;
      this.servingTeam = 'A';
    } else {
      if (this.servingTeam === 'B') {
        const temp = this.team2Right;
        this.team2Right = this.team2Left;
        this.team2Left = temp;
      }
      this.score2++;
      this.servingTeam = 'B';
    }

    // Check if in Set 3 and score reaches mid-point swap
    if (this.currentSet === 3 && !this.set3SwapHappened) {
      const midPoint = this.targetPoints === 15 ? 8 : 11;
      if (this.score1 === midPoint || this.score2 === midPoint) {
        this.set3SwapHappened = true;
        this.showSwapNotice(isVi 
          ? `⚡ Điểm số đạt mốc ${midPoint}! Cả hai đội đổi bên sân.`
          : `⚡ Score reached ${midPoint}! Both teams must swap sides.`
        );
        this.isCourtSwapped = !this.isCourtSwapped;
      }
    }

    this.checkSetWinner();
    this.render();
    
    // Play sound / trigger animated motion every score
    this.triggerServeAnimation();
    this.broadcastUpdate();
  }

  triggerServeAnimation() {
    const shuttle = document.querySelector('.umpire-court-svg .svg-shuttle');
    if (shuttle) {
      // Re-trigger animation
      shuttle.setAttribute('dur', '0.7s');
      shuttle.innerHTML = `
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `;
    }
  }

  checkSetWinner() {
    const s1 = this.score1;
    const s2 = this.score2;
    const maxVal = Math.max(s1, s2);
    const minVal = Math.min(s1, s2);
    const diff = maxVal - minVal;

    // Check standard win BWF
    let isWon = false;
    if (maxVal >= this.targetPoints) {
      if (diff >= 2) {
        isWon = true;
      } else if (maxVal === this.maxPoints) {
        isWon = true;
      }
    }

    if (isWon) {
      const setIndex = this.currentSet - 1;
      this.sets.push({ t1: s1, t2: s2 });
      
      // Check overall sets won
      let t1SetsWon = 0;
      let t2SetsWon = 0;
      this.sets.forEach(s => {
        if (s.t1 > s.t2) t1SetsWon++;
        else t2SetsWon++;
      });

      if (t1SetsWon === 2 || t2SetsWon === 2) {
        // MATCH OVER!
        this.submitMatch(t1SetsWon, t2SetsWon);
      } else {
        // Start next set
        const winnerName = s1 > s2 ? this.match.team1 : this.match.team2;
        
        this.showSwapNotice(this.lang === 'vi' 
          ? `Set ${this.currentSet} kết thúc! Đội ${winnerName} thắng set này. Chuẩn bị sang Set ${this.currentSet + 1}. Cả hai đội đổi bên sân.`
          : `Set ${this.currentSet} completed! ${winnerName} won this set. Prepare for Set ${this.currentSet + 1}. Both teams must swap sides.`
        );

        this.score1 = 0;
        this.score2 = 0;
        this.currentSet++;
        this.servingTeam = s1 > s2 ? 'A' : 'B';
        this.isCourtSwapped = !this.isCourtSwapped;
      }
    }
  }

  submitMatch(t1SetsWon, t2SetsWon) {
    const finalWinner = t1SetsWon > t2SetsWon ? this.match.team1 : this.match.team2;
    
    // Save to global state
    this.state.updateMatchScore(this.matchId, this.sets, t1SetsWon, t2SetsWon, "Completed");
    
    // Broadcast end to other tabs
    this.sync.broadcast('LIVE_MATCH_END', { matchId: this.matchId });
    this.sync.setMatchLiveStatus(this.matchId, false);

    // Show premium celebration end card modal
    this.showMatchEndNotice(finalWinner);
  }

  close() {
    this.sync.broadcast('LIVE_MATCH_END', { matchId: this.matchId });
    this.sync.setMatchLiveStatus(this.matchId, false);
    
    const container = document.getElementById('umpire-overlay-container');
    if (container) {
      container.classList.add('hidden');
      container.innerHTML = '';
    }
    
    if (this.onFinish) this.onFinish();

    // Route back to dashboard homepage
    if (window.BadmintonAppInstance) {
      window.BadmintonAppInstance.switchTab('dashboard');
    }
  }

  showSwapNotice(text) {
    const isVi = this.lang === 'vi';
    const modal = document.createElement('div');
    modal.className = 'swap-notice-modal-backdrop';
    modal.innerHTML = `
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in">
        <div class="swap-icon-container mb-4 text-glow-volt animate-bounce" style="font-size: 3rem; filter: drop-shadow(0 0 12px rgba(132, 204, 22, 0.45));">
          🏸
        </div>
        <h3 class="text-sm font-black text-glow-volt mb-2" style="font-size: 1.2rem; letter-spacing: 0.05em;">${isVi ? 'ĐỔI BÊN SÂN!' : 'SWAP COURTS!'}</h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold" style="line-height: 1.5;">${text}</p>
        <button class="btn btn-sm btn-volt w-full py-2.5 font-bold uppercase tracking-wider" id="swap-notice-btn-ok">
          ${isVi ? 'Đã hiểu & Tiếp tục' : 'Got It & Continue'}
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('swap-notice-btn-ok').onclick = () => {
      modal.classList.add('animate-fade-out');
      setTimeout(() => modal.remove(), 300);
    };

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      if (document.body.contains(modal)) {
        modal.classList.add('animate-fade-out');
        setTimeout(() => modal.remove(), 300);
      }
    }, 5000);
  }

  showMatchEndNotice(winnerName) {
    const isVi = this.lang === 'vi';
    const stage = this.match.stage || 'Group Stage';
    
    // Stage-specific celebration details mapping
    let title = isVi ? 'CHIẾN THẮNG TRẬN ĐẤU!' : 'WIN THE MATCH!';
    let subtitle = isVi ? 'TRẬN ĐẤU ĐÃ KẾT THÚC' : 'MATCH COMPLETED';
    let message = isVi 
      ? `🎉 Chúc mừng đội **${winnerName}** đã xuất sắc giành chiến thắng trong trận đấu này! 🎉`
      : `🎉 Congratulations to **${winnerName}** on winning this match! 🎉`;
    let icon = '🏸';
    let labelWinner = isVi ? 'ĐỘI GIÀNH CHIẾN THẮNG' : 'MATCH WINNER';
    let themeColor = '#84cc16'; // volt green
    let glowFilter = 'rgba(132, 204, 22, 0.45)';

    if (stage === 'Semi-finals') {
      title = isVi ? 'CHÚC MỪNG CHIẾN THẮNG BÁN KẾT!' : 'CONGRATULATIONS ON WINNING!';
      subtitle = isVi ? 'GIÀNH VÉ VÀO CHUNG KẾT' : 'QUALIFIED FOR THE FINALS';
      message = isVi
        ? `⚡ Tuyệt vời! Đội **${winnerName}** đã giành chiến thắng trận đấu Bán Kết và chính thức giành quyền bước vào trận Chung Kết tranh chức vô địch (Grand Final)! 🏆`
        : `⚡ Spectacular! **${winnerName}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`;
      icon = '🏅';
      labelWinner = isVi ? 'ĐỘI CHIẾN THẮNG BÁN KẾT' : 'SEMI-FINALS WINNER';
      themeColor = '#06b6d4'; // Cyan
      glowFilter = 'rgba(6, 182, 212, 0.45)';
    } else if (stage === 'Grand Final') {
      title = isVi ? 'NHÀ VÔ ĐỊCH GIẢI ĐẤU!' : 'TOURNAMENT CHAMPIONS!';
      subtitle = isVi ? 'CÚP VÔ ĐỊCH GEAR GAMES 2026' : 'GEAR GAMES BADMINTON 2026 CUP';
      message = isVi
        ? `👑 TÂN VƯƠNG GIẢI ĐẤU! Xin được nhiệt liệt vinh danh nhà vô địch Gear Games Badminton 2026: **${winnerName}**! Chiến thắng lịch sử vô cùng xứng đáng! 🏆🥇`
        : `👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${winnerName}**! A historic and well-deserved victory! 🏆🥇`;
      icon = '🏆';
      labelWinner = isVi ? 'QUÁN QUÂN GIẢI ĐẤU' : 'TOURNAMENT CHAMPIONS';
      themeColor = '#fbbf24'; // Gold
      glowFilter = 'rgba(251, 191, 36, 0.5)';
    } else if (stage === 'Bronze Match') {
      title = isVi ? 'ĐOẠT HẠNG BA CHUNG CUỘC!' : 'BRONZE MEDALISTS!';
      subtitle = isVi ? 'HUY CHƯƠNG ĐỒNG THUỘC VỀ' : 'BRONZE MEDAL SECURED';
      message = isVi
        ? `🥉 Tuyệt vời! Đội **${winnerName}** đã giành chiến thắng trận tranh Hạng Ba và xuất sắc mang về tấm **Huy Chương Đồng** danh giá! 🥉`
        : `🥉 Superb! **${winnerName}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`;
      icon = '🥉';
      labelWinner = isVi ? 'HẠNG BA CHUNG CUỘC' : 'BRONZE WINNER';
      themeColor = '#ea580c'; // Bronze orange
      glowFilter = 'rgba(234, 88, 12, 0.45)';
    }

    const modal = document.createElement('div');
    modal.className = 'match-end-modal-backdrop relative';
    modal.innerHTML = `
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${glowFilter}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${glowFilter}); line-height: 1;">
            ${icon}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${themeColor}; filter: drop-shadow(0 0 8px ${glowFilter});">${title}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${subtitle}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${labelWinner}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${winnerName}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${this.sets.map((s, idx) => `
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${idx + 1}: <span class="text-volt">${s.t1}</span>-<span class="text-cyan">${s.t2}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${message}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="match-end-btn-home" style="font-size: 0.85rem; background-color: ${themeColor}; color: #000; box-shadow: 0 4px 14px ${glowFilter}; border: none;">
            🏠 ${isVi ? 'Quay về trang chủ' : 'Back to Homepage'}
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('match-end-btn-home').onclick = () => {
      modal.classList.add('animate-fade-out');
      setTimeout(() => {
        modal.remove();
        this.close();
      }, 300);
    };
  }


  toggleServe() {
    this.saveToHistory();
    this.servingTeam = this.servingTeam === 'B' ? 'A' : 'B';
    this.render();
    this.broadcastUpdate();
  }

  swapPlayers(team) {
    this.saveToHistory();
    if (team === '1') {
      const temp = this.team1Right;
      this.team1Right = this.team1Left;
      this.team1Left = temp;
    } else {
      const temp = this.team2Right;
      this.team2Right = this.team2Left;
      this.team2Left = temp;
    }
    this.render();
    this.broadcastUpdate();
  }

  render() {
    const container = document.getElementById('umpire-overlay-container');
    if (!container) return;

    container.classList.remove('hidden');

    const isVi = this.lang === 'vi';
    const isEven = (this.servingTeam === 'A' ? this.score1 : this.score2) % 2 === 0;

    // Players positioning side-by-side:
    // If not swapped: Team 1 (A) is bottom, Team 2 (B) is top.
    // If swapped: Team 2 (B) is bottom, Team 1 (A) is top.
    let brName, blName, trName, tlName;

    if (!this.isCourtSwapped) {
      brName = this.team1Right;
      blName = this.team1Left;
      trName = this.team2Right; // Screen left x=90 (Top side right court)
      tlName = this.team2Left;  // Screen right x=210 (Top side left court)
    } else {
      brName = this.team2Right;
      blName = this.team2Left;
      trName = this.team1Right; // Screen left x=90
      tlName = this.team1Left;  // Screen right x=210
    }

    const serverName = this.getServerName();
    const receiverName = this.getReceiverName();

    // Map each position's roles
    const getRole = (name) => {
      if (name === serverName) return 'S';
      if (name === receiverName) return 'R';
      return 'P';
    };

    const getBgClass = (name) => {
      if (name === serverName) return 'volt';
      if (name === receiverName) return 'cyan';
      return 'neutral';
    };

    const getTextColorClass = (name) => {
      if (name === serverName) return 'text-volt';
      if (name === receiverName) return 'text-cyan';
      return 'text-slate-200';
    };

    const getShuttleBadge = (name) => {
      if (name !== serverName) return '';
      return `
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;
    };


    // Find Server and Receiver coordinates for shuttlecock flight and highlights
    let serverX, serverY, receiverX, receiverY;
    if (serverName === brName) { serverX = 210; serverY = 355; }
    else if (serverName === blName) { serverX = 90; serverY = 355; }
    else if (serverName === trName) { serverX = 90; serverY = 145; }
    else { serverX = 210; serverY = 145; }

    if (receiverName === brName) { receiverX = 210; receiverY = 355; }
    else if (receiverName === blName) { receiverX = 90; receiverY = 355; }
    else if (receiverName === trName) { receiverX = 90; receiverY = 145; }
    else { receiverX = 210; receiverY = 145; }

    const getHighlightPath = (x, y) => {
      if (y === 355) {
        return x === 210
          ? `M 150,310 L 280,310 L 280,440 L 150,440 Z`
          : `M 20,310 L 150,310 L 150,440 L 20,440 Z`;
      } else {
        return x === 90
          ? `M 20,60 L 150,60 L 150,190 L 20,190 Z`
          : `M 150,60 L 280,60 L 280,190 L 150,190 Z`;
      }
    };

    const serverBoxHighlight = getHighlightPath(serverX, serverY);
    const receiverBoxHighlight = getHighlightPath(receiverX, receiverY);

    // Parabolic motion path for live shuttle
    const cpX = (serverX + receiverX) / 2 + 30;
    const cpY = (serverY + receiverY) / 2 - 40;

    // Previous sets status text
    const setsDisplay = this.sets.map((s, idx) => `
      <div class="umpire-set-badge">
        <span>Set ${idx + 1}:</span>
        <strong>${s.t1} - ${s.t2}</strong>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="umpire-card glass-card">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE
            </span>
            <span class="text-xs font-bold text-slate-300">${this.match.pitch} | ${this.match.stage}</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">${isVi ? 'BÀN TRỌNG TÀI ĐIỀU PHỐI' : 'UMPIRE CONTROL PANEL'}</h2>
          <button class="btn btn-xs btn-neutral" id="umpire-btn-close">✕ ${isVi ? 'Thoát Sân' : 'Exit'}</button>
        </div>

        <!-- Scores and Set layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <!-- Umpire Controls Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets review -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${setsDisplay}
              <div class="umpire-set-badge current">
                <span>Set ${this.currentSet}:</span>
                <strong class="text-volt">${this.score1} - ${this.score2}</strong>
              </div>
            </div>

            <!-- Huge Scoreboard buttons -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Team 1 Plus -->
              <div class="flex flex-col gap-2">
                <div class="text-center font-black text-2xs truncate text-volt mb-1" title="${this.match.team1}">
                  ${this.match.team1}
                </div>
                <button class="umpire-score-btn team-a-glow flex flex-col justify-center items-center" id="umpire-add-a">
                  <span class="score-num font-mono">${this.score1}</span>
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">${isVi ? 'CỘNG ĐIỂM ❶' : 'ADD POINT ❶'}</span>
                </button>
                <div class="flex gap-2">
                  <button class="btn btn-xs btn-neutral flex-1 py-2 font-bold text-4xs" id="umpire-swap-players-1">🔄 Court Swap</button>
                </div>
              </div>

              <!-- Team 2 Plus -->
              <div class="flex flex-col gap-2">
                <div class="text-center font-black text-2xs truncate text-cyan mb-1" title="${this.match.team2}">
                  ${this.match.team2}
                </div>
                <button class="umpire-score-btn team-b-glow flex flex-col justify-center items-center" id="umpire-add-b">
                  <span class="score-num font-mono">${this.score2}</span>
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">${isVi ? 'CỘNG ĐIỂM ❷' : 'ADD POINT ❷'}</span>
                </button>
                <div class="flex gap-2">
                  <button class="btn btn-xs btn-neutral flex-1 py-2 font-bold text-4xs" id="umpire-swap-players-2">🔄 Court Swap</button>
                </div>
              </div>
            </div>

            <!-- Auxiliary Panel Actions -->
            <div class="bg-slate-950/60 p-4 rounded-lg border border-slate-900 grid grid-cols-3 gap-3 items-center">
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold" id="umpire-btn-undo" ${this.history.length === 0 ? 'disabled' : ''}>
                  ↩ ${isVi ? 'Hoàn Tác (Undo)' : 'Undo Action'}
                </button>
              </div>
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold flex items-center justify-center gap-1.5" id="umpire-btn-serve">
                  🏸 ${isVi ? 'Đổi Lượt Giao' : 'Toggle Serve'}
                </button>
              </div>
              <div class="text-center text-4xs text-slate-400 font-semibold flex flex-col items-center justify-center border-l border-slate-800">
                <div>${isVi ? 'Giao cầu thuộc về:' : 'Current Serve:'}</div>
                <div class="font-extrabold text-volt mt-1 text-2xs uppercase">${this.servingTeam === 'A' ? 'Team 1' : 'Team 2'}</div>
              </div>
            </div>
          </div>

          <!-- Umpire Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">${isVi ? 'VỊ TRÍ ĐỨNG SÂN THỰC TẾ (BWF)' : 'ACTUAL PLAYER POSITIONS ON COURT'}</h4>
            <div style="width: 100%; max-width: 250px; aspect-ratio: 3/5;">
              <svg class="court-svg umpire-court-svg" viewBox="0 0 300 500" width="100%" height="100%">
                <defs>
                  <filter id="ump-glow-volt" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="ump-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <!-- Court boundaries -->
                <rect x="20" y="40" width="260" height="420" class="court-line outer" />
                <line x1="40" y1="40" x2="40" y2="460" class="court-line singles-side" />
                <line x1="260" y1="40" x2="260" y2="460" class="court-line singles-side" />
                <line x1="150" y1="40" x2="150" y2="190" class="court-line center" />
                <line x1="150" y1="310" x2="150" y2="460" class="court-line center" />
                <line x1="20" y1="190" x2="280" y2="190" class="court-line service-short" />
                <line x1="20" y1="310" x2="280" y2="310" class="court-line service-short" />
                <line x1="20" y1="60" x2="280" y2="60" class="court-line service-long-doubles" />
                <line x1="20" y1="440" x2="280" y2="440" class="court-line service-long-doubles" />
                <line x1="10" y1="250" x2="290" y2="250" class="court-line net" />
                <circle cx="10" cy="250" r="4" class="net-post" />
                <circle cx="290" cy="250" r="4" class="net-post" />

                <!-- Court highlights -->
                <path d="${serverBoxHighlight}" class="svg-highlight-box serving" filter="url(#ump-glow-volt)" />
                <path d="${receiverBoxHighlight}" class="svg-highlight-box receiving" filter="url(#ump-glow-cyan)" />

                <!-- Flight Arrow path -->
                <path id="umpire-shuttle-path" d="M ${serverX},${serverY} Q ${cpX},${cpY} ${receiverX},${receiverY}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${blName === serverName ? 'server' : (blName === receiverName ? 'receiver' : 'partner')}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${getBgClass(blName)}" />
                  <text x="0" y="4" class="avatar-text">${getRole(blName)}</text>
                  ${getShuttleBadge(blName)}
                </g>
                <text x="90" y="383" class="svg-player-name ${getTextColorClass(blName)} font-bold">${blName.split(' ')[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${brName === serverName ? 'server' : (brName === receiverName ? 'receiver' : 'partner')}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${getBgClass(brName)}" />
                  <text x="0" y="4" class="avatar-text">${getRole(brName)}</text>
                  ${getShuttleBadge(brName)}
                </g>
                <text x="210" y="383" class="svg-player-name ${getTextColorClass(brName)} font-bold">${brName.split(' ')[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${trName === serverName ? 'server' : (trName === receiverName ? 'receiver' : 'partner')}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${getBgClass(trName)}" />
                  <text x="0" y="4" class="avatar-text">${getRole(trName)}</text>
                  ${getShuttleBadge(trName)}
                </g>
                <text x="90" y="123" class="svg-player-name ${getTextColorClass(trName)} font-bold">${trName.split(' ')[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${tlName === serverName ? 'server' : (tlName === receiverName ? 'receiver' : 'partner')}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${getBgClass(tlName)}" />
                  <text x="0" y="4" class="avatar-text">${getRole(tlName)}</text>
                  ${getShuttleBadge(tlName)}
                </g>
                <text x="210" y="123" class="svg-player-name ${getTextColorClass(tlName)} font-bold">${tlName.split(' ')[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (${isVi ? '0,2,4' : '0,2,4'}) and **Left** on Odd (${isVi ? '1,3,5' : '1,3,5'}). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `;

    // Event hooks
    document.getElementById('umpire-btn-close').onclick = () => {
      if (confirm(isVi ? 'Bạn có muốn dừng điều phối trận này không? Trạng thái Live sẽ bị hủy.' : 'Do you want to exit the scoring room? The live status will be suspended.')) {
        this.close();
      }
    };
    
    document.getElementById('umpire-add-a').onclick = () => this.addPoint('A');
    document.getElementById('umpire-add-b').onclick = () => this.addPoint('B');
    document.getElementById('umpire-btn-serve').onclick = () => this.toggleServe();
    document.getElementById('umpire-btn-undo').onclick = () => this.undo();
    document.getElementById('umpire-swap-players-1').onclick = () => this.swapPlayers('1');
    document.getElementById('umpire-swap-players-2').onclick = () => this.swapPlayers('2');
  }
}
