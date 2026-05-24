// js/umpire.js
// Interactive Referee Scoreboard & Live Court Simulator Umpire Console

export class UmpireConsole {
  constructor(state, sync, matchId, onFinishCallback) {
    this.state = state;
    this.sync = sync;
    this.matchId = matchId;
    this.onFinish = onFinishCallback;
    this.lang = localStorage.getItem('badminton_lang') || 'vi';

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
      receiverPartnerName: this.getReceiverPartnerName()
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
        alert(this.lang === 'vi' 
          ? `Set ${this.currentSet} kết thúc! Đội ${winnerName} thắng set này. Chuẩn bị sang Set ${this.currentSet + 1}.` 
          : `Set ${this.currentSet} completed! ${winnerName} won this set. Prepare for Set ${this.currentSet + 1}.`
        );
        this.score1 = 0;
        this.score2 = 0;
        this.currentSet++;
        this.servingTeam = s1 > s2 ? 'A' : 'B';
        
        // BWF Court End Change: Swap sides visually (simulated by swapping names on console)
        const tempR1 = this.team1Right, tempL1 = this.team1Left;
        this.team1Right = this.team2Right;
        this.team1Left = this.team2Left;
        this.team2Right = tempR1;
        this.team2Left = tempL1;

        const tempPlayers = this.team1Players;
        this.team1Players = this.team2Players;
        this.team2Players = tempPlayers;
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

    alert(this.lang === 'vi' 
      ? `Trận đấu KẾT THÚC! Đội ${finalWinner} giành chiến thắng chung cuộc!` 
      : `Match COMPLETED! ${finalWinner} won the match!`
    );

    this.close();
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
  }

  toggleServe() {
    this.saveToHistory();
    this.servingTeam = this.servingTeam === 'A' ? 'B' : 'A';
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
    const server = this.getServerName();
    const receiver = this.getReceiverName();
    const isEven = (this.servingTeam === 'A' ? this.score1 : this.score2) % 2 === 0;

    // SVG coordinates setup mapping:
    const serverX = this.servingTeam === 'A' ? (isEven ? 210 : 90) : (isEven ? 90 : 210);
    const serverY = this.servingTeam === 'A' ? 385 : 115;
    
    const partnerX = this.servingTeam === 'A' ? (isEven ? 90 : 210) : (isEven ? 210 : 90);
    const partnerY = this.servingTeam === 'A' ? 440 : 60;
    
    const receiverX = this.servingTeam === 'A' ? (isEven ? 90 : 210) : (isEven ? 210 : 90);
    const receiverY = this.servingTeam === 'A' ? 115 : 385;
    
    const receiverPartnerX = this.servingTeam === 'A' ? (isEven ? 210 : 90) : (isEven ? 90 : 210);
    const receiverPartnerY = this.servingTeam === 'A' ? 60 : 440;

    // Highlights
    const serverBoxHighlight = this.servingTeam === 'A'
      ? (isEven ? `M 150,310 L 280,310 L 280,440 L 150,440 Z` : `M 20,310 L 150,310 L 150,440 L 20,440 Z`)
      : (isEven ? `M 20,60 L 150,60 L 150,190 L 20,190 Z` : `M 150,60 L 280,60 L 280,190 L 150,190 Z`);

    const receiverBoxHighlight = this.servingTeam === 'A'
      ? (isEven ? `M 20,60 L 150,60 L 150,190 L 20,190 Z` : `M 150,60 L 280,60 L 280,190 L 150,190 Z`)
      : (isEven ? `M 150,310 L 280,310 L 280,440 L 150,440 Z` : `M 20,310 L 150,310 L 150,440 L 20,440 Z`);

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

                <!-- Rendering Player Avatars depending on active sides -->
                <!-- Bottom side (Team A) -->
                <g class="player-avatar ${this.servingTeam === 'A' ? 'server' : 'partner'}">
                  <circle cx="${this.servingTeam === 'A' ? (isEven ? 210 : 90) : (isEven ? 90 : 210)}" 
                          cy="385" r="13" class="avatar-bg ${this.servingTeam === 'A' ? 'volt' : 'neutral'}" />
                  <text x="${this.servingTeam === 'A' ? (isEven ? 210 : 90) : (isEven ? 90 : 210)}" 
                        y="389" class="avatar-text">${this.servingTeam === 'A' ? 'S' : 'P'}</text>
                </g>
                <text x="${isEven ? 210 : 90}" y="415" class="svg-player-name text-slate-200 font-bold">${(isEven ? this.team1Right : this.team1Left).split(' ')[0]}</text>

                <g class="player-avatar ${this.servingTeam === 'A' ? 'partner' : 'server'}">
                  <circle cx="${this.servingTeam === 'A' ? (isEven ? 90 : 210) : (isEven ? 210 : 90)}" 
                          cy="440" r="11" class="avatar-bg neutral" />
                  <text x="${this.servingTeam === 'A' ? (isEven ? 90 : 210) : (isEven ? 210 : 90)}" 
                        y="444" class="avatar-text">P</text>
                </g>
                <text x="${isEven ? 90 : 210}" y="468" class="svg-player-name text-muted">${(isEven ? this.team1Left : this.team1Right).split(' ')[0]}</text>

                <!-- Top side (Team B) -->
                <g class="player-avatar ${this.servingTeam === 'B' ? 'server' : 'receiver'}">
                  <circle cx="${this.servingTeam === 'B' ? (isEven ? 90 : 210) : (isEven ? 90 : 210)}" 
                          cy="115" r="13" class="avatar-bg ${this.servingTeam === 'B' ? 'volt' : 'cyan'}" />
                  <text x="${this.servingTeam === 'B' ? (isEven ? 90 : 210) : (isEven ? 90 : 210)}" 
                        y="119" class="avatar-text">${this.servingTeam === 'B' ? 'S' : 'R'}</text>
                </g>
                <text x="${isEven ? 90 : 210}" y="95" class="svg-player-name text-slate-200 font-bold">${(isEven ? this.team2Right : this.team2Left).split(' ')[0]}</text>

                <g class="player-avatar ${this.servingTeam === 'B' ? 'partner' : 'partner'}">
                  <circle cx="${this.servingTeam === 'B' ? (isEven ? 210 : 90) : (isEven ? 210 : 90)}" 
                          cy="60" r="11" class="avatar-bg neutral" />
                  <text x="${this.servingTeam === 'B' ? (isEven ? 210 : 90) : (isEven ? 210 : 90)}" 
                        y="64" class="avatar-text">P</text>
                </g>
                <text x="${isEven ? 210 : 90}" y="42" class="svg-player-name text-muted">${(isEven ? this.team2Left : this.team2Right).split(' ')[0]}</text>
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
