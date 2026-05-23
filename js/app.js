import { TournamentState } from './state.js';
import { AdminPanel } from './admin.js';
import { CourtSimulator } from './court-simulator.js';
import { REGULATIONS_DATA } from './data.js';

class BadmintonApp {
  constructor() {
    this.state = new TournamentState();
    this.lang = localStorage.getItem('badminton_lang') || 'vi';
    this.activeTab = 'dashboard';
    this.activeCategoryFilter = 'all';
    
    // Core controllers
    this.admin = new AdminPanel(this.state, () => this.handleStateChange());
    this.courtSimulator = null;

    this.state.addListener(() => this.handleStateChange());
    
    this.init();
  }

  init() {
    this.setupDOM();
    this.setupEventListeners();
    this.admin.setLanguage(this.lang);
    this.renderActiveView();
    this.updateNavbar();
    this.startCountdown();
  }

  setupDOM() {
    // Initial static text bindings depending on language
    this.translateStaticElements();
  }

  setupEventListeners() {
    // Navigation Tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-tab');
        if (target) {
          this.switchTab(target);
        }
      });
    });

    // Language Toggle
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        this.lang = this.lang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('badminton_lang', this.lang);
        this.admin.setLanguage(this.lang);
        if (this.courtSimulator) this.courtSimulator.setLanguage(this.lang);
        this.translateStaticElements();
        this.renderActiveView();
        this.updateNavbar();
      });
    }

    // Reset Database (Admin Mode Only)
    const resetBtn = document.getElementById('btn-reset-db');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (!this.admin.isAdmin) return;
        if (confirm(this.lang === 'vi' ? 'CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ dữ liệu giải đấu về trạng thái ban đầu. Bạn có muốn tiếp tục?' : 'WARNING: This will reset all tournament scores and standings to defaults. Proceed?')) {
          this.state.resetToDefault();
          this.admin.showToast(this.lang === 'vi' ? 'Đã thiết lập lại dữ liệu!' : 'Database reset to default!', 'success');
        }
      });
    }
  }

  handleStateChange() {
    this.renderActiveView();
    this.updateNavbar();
  }

  switchTab(tabId) {
    this.activeTab = tabId;
    
    // Update active tab styles
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === tabId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    this.renderActiveView();
    
    // If switching to rules, re-initialize simulator
    if (tabId === 'rules') {
      setTimeout(() => {
        this.courtSimulator = new CourtSimulator('court-sim-container');
        this.courtSimulator.setLanguage(this.lang);
        const mdTeam = this.state.teams.filter(t => t.category === "Men's Doubles")[0];
        const xdTeam = this.state.teams.filter(t => t.category === "Mixed's Doubles")[0];
        if (mdTeam && xdTeam) {
          this.courtSimulator.setTeams(
            [mdTeam.player1, mdTeam.player2],
            [xdTeam.player1, xdTeam.player2]
          );
        }
      }, 50);
    }
  }

  translateStaticElements() {
    const isVi = this.lang === 'vi';
    
    // Tab text translation
    const tabTexts = {
      dashboard: isVi ? '🏠 Bảng Tin' : '🏠 Dashboard',
      standings: isVi ? '📊 Xếp Hạng' : '📊 Standings',
      fixtures: isVi ? '📅 Lịch Thi Đấu' : '📅 Fixtures',
      bracket: isVi ? '🌳 Sơ Đồ Cây' : '🌳 Bracket',
      rules: isVi ? '📘 Luật Đánh Đôi' : '📘 Doubles Rules',
      teams: isVi ? '👥 Đội Chơi' : '👥 Teams'
    };

    Object.keys(tabTexts).forEach(tabId => {
      const tabEl = document.querySelector(`.nav-tab[data-tab="${tabId}"] span`);
      if (tabEl) tabEl.textContent = tabTexts[tabId];
    });

    // Language Button Text
    const langBtnSpan = document.querySelector('#btn-lang-toggle span');
    if (langBtnSpan) {
      langBtnSpan.textContent = isVi ? 'ENGLISH' : 'TIẾNG VIỆT';
    }
  }

  updateNavbar() {
    const isVi = this.lang === 'vi';
    const adminBtn = document.getElementById('btn-toggle-admin');
    const resetBtn = document.getElementById('btn-reset-db');
    
    if (adminBtn) {
      if (this.admin.isAdmin) {
        adminBtn.innerHTML = `🛡️ ${isVi ? 'Thoát Admin' : 'Exit Admin'}`;
        adminBtn.classList.remove('btn-outline');
        adminBtn.classList.add('btn-danger');
        if (resetBtn) resetBtn.classList.remove('hidden');
      } else {
        adminBtn.innerHTML = `🔐 ${isVi ? 'Đăng Nhập Admin' : 'Admin Login'}`;
        adminBtn.classList.remove('btn-danger');
        adminBtn.classList.add('btn-outline');
        if (resetBtn) resetBtn.classList.add('hidden');
      }
    }
  }

  renderActiveView() {
    const viewContainer = document.getElementById('main-view-container');
    if (!viewContainer) return;
    
    viewContainer.className = `view-fade-in`;

    switch (this.activeTab) {
      case 'dashboard':
        this.renderDashboard(viewContainer);
        break;
      case 'standings':
        this.renderStandings(viewContainer);
        break;
      case 'fixtures':
        this.renderFixtures(viewContainer);
        break;
      case 'bracket':
        this.renderBracket(viewContainer);
        break;
      case 'rules':
        this.renderRules(viewContainer);
        break;
      case 'teams':
        this.renderTeams(viewContainer);
        break;
    }
  }

  renderDashboard(container) {
    const isVi = this.lang === 'vi';
    const totalMatches = this.state.matches.length;
    const completedMatches = this.state.matches.filter(m => m.status === 'Completed').length;
    const completionPercent = totalMatches > 0 ? Math.round((completedMatches / totalMatches) * 100) : 0;
    
    // Sum stats
    let totalPointsScored = 0;
    this.state.matches.forEach(m => {
      if (m.status === 'Completed') {
        m.sets.forEach(s => {
          totalPointsScored += s.t1 + s.t2;
        });
      }
    });

    const titleText = isVi ? 'GIẢI VÔ ĐỊCH CẦU LÔNG GEAR GAMES 2026' : 'GEAR GAMES BADMINTON CHAMPIONSHIP 2026';
    const subText = isVi ? 'Hệ thống cập nhật xếp hạng, tỷ số & sơ đồ trực tiếp' : 'Live standings, schedule fixtures & bracket generator';
    const countTitle = isVi ? 'THỜI GIAN KHAI MẠC' : 'COUNTDOWN TO TOURNAMENT';
    
    container.innerHTML = `
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${titleText}</h1>
        <p class="hero-subtitle">${subText}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${countTitle}</div>
          <div class="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            <div class="countdown-box">
              <span id="cd-days" class="cd-num">00</span>
              <span class="cd-lbl">${isVi ? 'Ngày' : 'Days'}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-hours" class="cd-num">00</span>
              <span class="cd-lbl">${isVi ? 'Giờ' : 'Hrs'}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-minutes" class="cd-num">00</span>
              <span class="cd-lbl">${isVi ? 'Phút' : 'Mins'}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-seconds" class="cd-num">00</span>
              <span class="cd-lbl">${isVi ? 'Giây' : 'Secs'}</span>
            </div>
          </div>
          <div class="text-xs text-muted mt-3">⚡ 31 May 2026 @ 13:30 | Gear Games badminton court arena ⚡</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="dashboard-stat-card glass-card border-glow-volt">
          <div class="stat-icon text-volt">🏆</div>
          <div class="stat-info">
            <span class="stat-value">${completedMatches}/${totalMatches}</span>
            <span class="stat-label">${isVi ? 'Trận Đã Đấu' : 'Matches Completed'}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${completionPercent}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${completionPercent}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${totalPointsScored}</span>
            <span class="stat-label">${isVi ? 'Tổng Điểm Đã Ghi' : 'Total Points Scored'}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-cyan" style="width: 100%"></div>
          </div>
          <div class="text-right text-xs text-cyan font-bold mt-1">Live Statistics</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-purple">
          <div class="stat-icon text-purple">👥</div>
          <div class="stat-info">
            <span class="stat-value">10 Đội</span>
            <span class="stat-label">${isVi ? '20 Vận Động Viên' : '20 Registered Players'}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-purple" style="width: 100%"></div>
          </div>
          <div class="text-right text-xs text-purple font-bold mt-1">Men's & Mixed Doubles</div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Quick standings MD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-volt font-bold">💎 Men's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-md">${isVi ? 'Xem Chi Tiết' : 'View Full'}</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Men's Doubles")}
          </div>
        </div>

        <!-- Quick standings XD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-cyan font-bold">🔮 Mixed's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-xd">${isVi ? 'Xem Chi Tiết' : 'View Full'}</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Mixed's Doubles")}
          </div>
        </div>
      </div>
    `;

    document.getElementById('dash-goto-md')?.addEventListener('click', () => this.switchTab('standings'));
    document.getElementById('dash-goto-xd')?.addEventListener('click', () => this.switchTab('standings'));
  }

  renderMiniStandingsTable(category) {
    const standings = this.state.calculateStandings(category);
    const isVi = this.lang === 'vi';
    
    let rowsHtml = standings.slice(0, 3).map((team, idx) => {
      const icon = idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉';
      return `
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${icon}</td>
          <td class="font-bold text-slate-100">${team.name}</td>
          <td class="text-center font-semibold text-volt">${team.points}</td>
          <td class="text-center text-slate-300">${team.played}</td>
          <td class="text-center text-slate-300">${team.netSets > 0 ? '+' + team.netSets : team.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${team.pointsWon}-${team.pointsLost}</td>
        </tr>
      `;
    }).join('');

    if (standings.length === 0) {
      rowsHtml = `<tr><td colspan="6" class="text-center text-muted py-4">${isVi ? 'Không có dữ liệu' : 'No data available'}</td></tr>`;
    }

    return `
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>${isVi ? 'Đội Chơi' : 'Team'}</th>
            <th class="text-center">${isVi ? 'Điểm Win' : 'Wins'}</th>
            <th class="text-center">${isVi ? 'Trận' : 'Pld'}</th>
            <th class="text-center">${isVi ? 'Hiệu Set' : 'Sets'}</th>
            <th class="text-center">${isVi ? 'Tổng Điểm' : 'Points'}</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
  }

  renderStandings(container) {
    const isVi = this.lang === 'vi';
    
    container.innerHTML = `
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0">📊 ${isVi ? 'Bảng Xếp Hạng Giải Đấu' : 'Tournament Leaderboards'}</h2>
          <p class="view-subtitle">${isVi ? 'Cập nhật điểm và phân hạng trực tiếp' : 'Real-time calculated ranks and tie-breaker statistics'}</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter === 'all' ? 'active bg-slate-800 text-volt' : 'btn-text'}" id="std-filter-all">
            ${isVi ? 'Tất Cả' : 'All'}
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter === 'md' ? 'active bg-slate-800 text-volt' : 'btn-text'}" id="std-filter-md">
            Men's Doubles
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter === 'xd' ? 'active bg-slate-800 text-volt' : 'btn-text'}" id="std-filter-xd">
            Mixed's Doubles
          </button>
        </div>
      </div>

      <div class="space-y-8">
        ${this.activeCategoryFilter === 'all' || this.activeCategoryFilter === 'md' ? this.renderCategoryStandings("Men's Doubles") : ''}
        ${this.activeCategoryFilter === 'all' || this.activeCategoryFilter === 'xd' ? this.renderCategoryStandings("Mixed's Doubles") : ''}
      </div>
    `;

    // Event handlers
    document.getElementById('std-filter-all').onclick = () => { this.activeCategoryFilter = 'all'; this.renderActiveView(); };
    document.getElementById('std-filter-md').onclick = () => { this.activeCategoryFilter = 'md'; this.renderActiveView(); };
    document.getElementById('std-filter-xd').onclick = () => { this.activeCategoryFilter = 'xd'; this.renderActiveView(); };
  }

  renderCategoryStandings(category) {
    const isVi = this.lang === 'vi';
    const standings = this.state.calculateStandings(category);
    const isMD = category === "Men's Doubles";
    const headerColor = isMD ? 'text-volt' : 'text-cyan';

    const rowsHtml = standings.map((team, idx) => {
      const rank = idx + 1;
      const isTop4 = rank <= 4;
      const isComplete = this.state.isGroupStageComplete(category);
      const isWinner = rank === 1 && isComplete;

      // Custom badge style
      let rankBadge = `<span class="rank-circle font-bold ${rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : ''}">${rank}</span>`;
      let advanceTag = '';
      if (isTop4) {
        advanceTag = `<span class="advance-tag neon-green">${isVi ? 'BÁN KẾT' : 'SEMIS'}</span>`;
      } else {
        advanceTag = `<span class="advance-tag text-muted">${isVi ? 'LOẠI' : 'OUT'}</span>`;
      }

      // Check head-to-head status if identical matches
      const h2hIcon = '';
      
      return `
        <tr class="${isTop4 ? 'row-top-4' : 'row-eliminated'}">
          <td class="text-center">${rankBadge}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2">
              <span>${team.name}</span>
              ${advanceTag}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${team.player1} & ${team.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${team.points}</td>
          <td class="text-center text-slate-200 font-semibold">${team.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${team.won}</td>
          <td class="text-center text-slate-400">${team.lost}</td>
          <td class="text-center text-slate-200 font-bold ${team.netSets >= 0 ? 'text-emerald-400' : 'text-rose-400'}">
            ${team.setsWon}-${team.setsLost} 
            <span class="text-xs font-normal">(${team.netSets >= 0 ? '+' + team.netSets : team.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${team.pointsWon}-${team.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${team.netPoints >= 0 ? '+' + team.netPoints : team.netPoints})</span>
          </td>
        </tr>
      `;
    }).join('');

    return `
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${isMD ? '💎' : '🔮'}</span>
          <span class="${headerColor}">${category}</span>
          <span class="badge bg-slate-800 text-slate-400 text-xs font-normal ml-2">Qualifying Stage</span>
        </h3>
        
        <div class="overflow-x-auto">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="text-center" style="width: 60px;">#</th>
                <th>${isVi ? 'Đội Chơi / Thành Viên' : 'Team / Members'}</th>
                <th class="text-center">${isVi ? 'Tổng Điểm' : 'Pts'}</th>
                <th class="text-center">${isVi ? 'Trận' : 'Pld'}</th>
                <th class="text-center">${isVi ? 'Thắng' : 'Won'}</th>
                <th class="text-center">${isVi ? 'Thua' : 'Lost'}</th>
                <th class="text-center">${isVi ? 'Hiệu Số Ván' : 'Sets (Net)'}</th>
                <th class="text-center">${isVi ? 'Tổng Điểm Ghi' : 'Set Pts (Net)'}</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span>${isVi 
            ? '<strong>Quy tắc xếp hạng:</strong> Top 4 đội sẽ tự động giành vé vào Bán Kết. Ưu tiên xét: Thắng ván $\\rightarrow$ Hiệu số hiệp $\\rightarrow$ Đối kháng trực tiếp $\\rightarrow$ Hiệu số điểm.' 
            : '<strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins $\\rightarrow$ Net Sets $\\rightarrow$ Head-to-Head $\\rightarrow$ Net Points.'}
        </div>
      </div>
    `;
  }

  renderFixtures(viewContainer) {
    const isVi = this.lang === 'vi';
    
    // Group matches
    const groupMatches = this.state.matches.filter(m => m.stage === 'Group Stage');
    const knockoutMatches = this.state.matches.filter(m => m.stage !== 'Group Stage');

    // Category sorting filter
    let filteredGroup = groupMatches;
    let filteredKnockout = knockoutMatches;

    if (this.activeCategoryFilter === 'md') {
      filteredGroup = groupMatches.filter(m => m.category === "Men's Doubles");
      filteredKnockout = knockoutMatches.filter(m => m.category === "Men's Doubles");
    } else if (this.activeCategoryFilter === 'xd') {
      filteredGroup = groupMatches.filter(m => m.category === "Mixed's Doubles");
      filteredKnockout = knockoutMatches.filter(m => m.category === "Mixed's Doubles");
    }

    viewContainer.innerHTML = `
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0">📅 ${isVi ? 'Lịch Thi Đấu & Kết Quả' : 'Match Schedule & Results'}</h2>
          <p class="view-subtitle">${isVi ? 'Theo dõi thời gian, sân thi đấu và tỉ số trực tiếp' : 'List of scheduled tournament fixtures and match scores'}</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter === 'all' ? 'active bg-slate-800 text-volt' : 'btn-text'}" id="fix-filter-all">
            ${isVi ? 'Tất Cả' : 'All'}
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter === 'md' ? 'active bg-slate-800 text-volt' : 'btn-text'}" id="fix-filter-md">
            Men's Doubles
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter === 'xd' ? 'active bg-slate-800 text-volt' : 'btn-text'}" id="fix-filter-xd">
            Mixed's Doubles
          </button>
        </div>
      </div>

      <!-- Knockout Stage Card -->
      <div class="glass-card mb-8">
        <h3 class="flex items-center justify-between border-b border-slate-700/50 pb-3 mb-4 font-bold text-glow-cyan">
          <span>🎯 VÒNG LOẠI TRỰC TIẾP (KNOCK OUT STAGE)</span>
          <span class="badge bg-cyan text-slate-900 font-bold">STAGE 2</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${this.renderMatchCards(filteredKnockout)}
        </div>
      </div>

      <!-- Group Stage Card -->
      <div class="glass-card">
        <h3 class="flex items-center justify-between border-b border-slate-700/50 pb-3 mb-4 font-bold text-glow-volt">
          <span>📌 VÒNG BẢNG XOAY VÒNG (GROUP STAGE)</span>
          <span class="badge bg-volt text-slate-900 font-bold">STAGE 1</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${this.renderMatchCards(filteredGroup)}
        </div>
      </div>
    `;

    // Event filters
    document.getElementById('fix-filter-all').onclick = () => { this.activeCategoryFilter = 'all'; this.renderActiveView(); };
    document.getElementById('fix-filter-md').onclick = () => { this.activeCategoryFilter = 'md'; this.renderActiveView(); };
    document.getElementById('fix-filter-xd').onclick = () => { this.activeCategoryFilter = 'xd'; this.renderActiveView(); };
  }

  renderMatchCards(matches) {
    const isVi = this.lang === 'vi';
    
    if (matches.length === 0) {
      return `<div class="col-span-2 text-center text-muted py-6">${isVi ? 'Không tìm thấy trận đấu nào' : 'No matches found'}</div>`;
    }

    return matches.map(match => {
      const isCompleted = match.status === 'Completed';
      const score1 = isCompleted ? match.score1 : '-';
      const score2 = isCompleted ? match.score2 : '-';
      
      const setsText = isCompleted 
        ? match.sets.map(s => `${s.t1}-${s.t2}`).join(', ')
        : (isVi ? 'Chưa thi đấu' : 'Scheduled');
        
      const cardBorderClass = isCompleted ? 'border-completed' : 'border-scheduled';
      const statusBadge = isCompleted 
        ? `<span class="match-badge completed">${isVi ? 'KẾT THÚC' : 'FINAL'}</span>`
        : `<span class="match-badge scheduled">${isVi ? 'LỊCH HẸN' : 'SCHEDULED'}</span>`;

      const editBtn = this.admin.isAdmin
        ? `<button class="btn btn-xs btn-outline glow-cyan btn-edit-match flex items-center gap-1" data-match-id="${match.id}">
            ✏️ ${isVi ? 'Nhập Điểm' : 'Edit Score'}
           </button>`
        : '';

      const isMD = match.category === "Men's Doubles";
      const catBadge = isMD
        ? `<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>`
        : `<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>`;

      return `
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${cardBorderClass}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${catBadge}
              <span>${match.pitch} | ${match.time}</span>
            </div>
            ${statusBadge}
          </div>

          <div class="grid grid-cols-5 items-center gap-2 mb-3 text-center">
            <!-- Team 1 -->
            <div class="col-span-2 text-left font-bold ${isCompleted && match.winner === match.team1 ? 'text-volt' : 'text-slate-200'}">
              <div class="truncate" title="${match.team1}">${match.team1}</div>
            </div>
            
            <!-- Score box -->
            <div class="score-display flex items-center justify-center gap-1.5 font-extrabold text-base bg-slate-950/70 py-1 rounded px-2 text-slate-200">
              <span class="${isCompleted && match.winner === match.team1 ? 'text-volt' : ''}">${score1}</span>
              <span class="text-slate-500 font-normal">:</span>
              <span class="${isCompleted && match.winner === match.team2 ? 'text-cyan' : ''}">${score2}</span>
            </div>

            <!-- Team 2 -->
            <div class="col-span-2 text-right font-bold ${isCompleted && match.winner === match.team2 ? 'text-cyan' : 'text-slate-200'}">
              <div class="truncate" title="${match.team2}">${match.team2}</div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-1 pt-2 border-t border-slate-900/50 text-xs">
            <span class="text-slate-400 font-semibold truncate max-w-[200px]" title="${setsText}">
              🎾 ${setsText}
            </span>
            ${editBtn}
          </div>
        </div>
      `;
    }).join('');
  }

  renderBracket(container) {
    const isVi = this.lang === 'vi';
    
    // Retrieve the 4 knockout matches for MD and XD
    const getKnockoutData = (cat) => {
      const suffix = cat === "Men's Doubles" ? "MD" : "XD";
      return {
        sf1: this.state.matches.find(m => m.id === `SF1-${suffix}`),
        sf2: this.state.matches.find(m => m.id === `SF2-${suffix}`),
        f: this.state.matches.find(m => m.id === `F-${suffix}`),
        b: this.state.matches.find(m => m.id === `B-${suffix}`)
      };
    };

    const md = getKnockoutData("Men's Doubles");
    const xd = getKnockoutData("Mixed's Doubles");

    const renderBracketTree = (data, title, isVolt) => {
      const themeClass = isVolt ? 'text-volt border-glow-volt' : 'text-cyan border-glow-cyan';
      
      const renderNode = (match) => {
        if (!match) return `<div class="bracket-node empty">N/A</div>`;
        const isComp = match.status === 'Completed';
        const score1 = isComp ? match.score1 : '-';
        const score2 = isComp ? match.score2 : '-';
        
        const detailsText = isComp 
          ? match.sets.map(s => `${s.t1}-${s.t2}`).join(' / ')
          : match.time;
          
        return `
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${isComp ? 'completed' : ''}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1 pb-1 border-b border-slate-800">
              <span>${match.pitch} | ${match.stage}</span>
              ${this.admin.isAdmin ? `<button class="btn-edit-node-score btn-edit-match" data-match-id="${match.id}">✏️</button>` : ''}
            </div>
            
            <div class="node-team flex items-center justify-between font-bold text-3xs ${isComp && match.winner === match.team1 ? 'text-emerald-400' : 'text-slate-300'}">
              <span class="truncate pr-1" title="${match.team1}">${match.team1}</span>
              <span>${score1}</span>
            </div>
            
            <div class="node-team flex items-center justify-between font-bold text-3xs mt-1 ${isComp && match.winner === match.team2 ? 'text-emerald-400' : 'text-slate-300'}">
              <span class="truncate pr-1" title="${match.team2}">${match.team2}</span>
              <span>${score2}</span>
            </div>
            
            <div class="node-footer text-4xs text-slate-400 font-semibold mt-1">
              🎾 ${detailsText}
            </div>
          </div>
        `;
      };

      return `
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${isVolt ? 'text-volt' : 'text-cyan'}">${title} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Semifinals Column -->
            <div class="bracket-col">
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 1</div>
                ${renderNode(data.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${renderNode(data.sf2)}
              </div>
            </div>

            <!-- Connectors Column 1 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork">
                <div class="connector-line horizontal"></div>
                <div class="connector-line vertical height-half"></div>
              </div>
              <div class="connector-fork mt-8">
                <div class="connector-line horizontal"></div>
                <div class="connector-line vertical height-half"></div>
              </div>
            </div>

            <!-- Finals Column -->
            <div class="bracket-col flex flex-col justify-around">
              <div class="bracket-group">
                <div class="node-label text-gold font-bold">🏆 GRAND CHAMPIONSHIP</div>
                ${renderNode(data.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${renderNode(data.b)}
              </div>
            </div>
          </div>
        </div>
      `;
    };

    container.innerHTML = `
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Sơ Đồ Cây Vòng Đoạt Cúp</h2>
        <p class="view-subtitle">${isVi ? 'Tự động tính phân cặp & lộ trình thăng cấp trực quan' : 'Automatic calculated tournament brackets and playoff trees'}</p>
      </div>

      ${renderBracketTree(md, "Men's Doubles", true)}
      ${renderBracketTree(xd, "Mixed's Doubles", false)}
    `;
  }

  renderRules(container) {
    const isVi = this.lang === 'vi';
    const reg = isVi ? REGULATIONS_DATA.vi : REGULATIONS_DATA.en;

    const sectionsHtml = reg.sections.map(sec => {
      // Highlight certain markdown patterns in rules
      const formattedContent = sec.content.map(line => {
        let fLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-100">$1</strong>');
        fLine = fLine.replace(/\\rightarrow/g, ' ➔ ');
        fLine = fLine.replace(/\$(.*?)\$/g, '<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>');
        return `<p class="mb-2 text-slate-300 leading-relaxed text-sm">${fLine}</p>`;
      }).join('');

      return `
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${sec.title}</h3>
          <div>${formattedContent}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">📘 Quy Định & Luật Thi Đấu</h2>
        <p class="view-subtitle">${isVi ? 'Tra cứu điều lệ chính thức & giả lập sân giao cầu trực tuyến' : 'Official tournament handbook and dynamic doubles service simulator'}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Interactive Simulator Widget (Grid span 5) -->
        <div class="lg:col-span-5" id="court-sim-container">
          <!-- Will be loaded dynamically via CourtSimulator -->
        </div>

        <!-- Rules Handbook (Grid span 7) -->
        <div class="lg:col-span-7 flex flex-col gap-2">
          <div class="glass-card flex-1">
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${reg.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${reg.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${sectionsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderTeams(container) {
    const isVi = this.lang === 'vi';
    const totalPlayers = this.state.players.length;

    // Build unique players directory cards
    const playersHtml = this.state.players.map(p => {
      let formatColor = p.preferred_format === "Men's Doubles" 
        ? 'bg-volt' 
        : p.preferred_format === "Mixed's Doubles" 
        ? 'bg-cyan' 
        : 'bg-indigo';

      return `
        <div class="player-card glass-panel p-3 border border-slate-800 rounded-lg hover-glowing">
          <div class="flex items-center gap-3">
            <div class="player-circle font-bold">${p.name.substring(0, 2).toUpperCase()}</div>
            <div>
              <div class="font-bold text-slate-100 text-xs">${p.name}</div>
              <div class="flex gap-1.5 items-center mt-1">
                <span class="badge ${formatColor} text-slate-950 text-4xs font-bold">${p.preferred_format}</span>
                <span class="text-4xs text-muted truncate max-w-[100px]">${p.preferred_partnership}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Teams rendering grouped by category
    const renderTeamGroup = (teams, category) => {
      const isMD = category === "Men's Doubles";
      const themeColor = isMD ? 'text-volt' : 'text-cyan';

      const teamCards = teams.map(team => {
        // Calculate dynamic wins/games played
        const groupMatches = this.state.matches.filter(m => 
          m.category === category && 
          m.status === 'Completed' && 
          (m.team1 === team.name || m.team2 === team.name)
        );

        let wins = 0;
        let setsWon = 0;
        let setsLost = 0;
        groupMatches.forEach(m => {
          if (m.winner === team.name) wins++;
          if (m.team1 === team.name) {
            setsWon += m.score1;
            setsLost += m.score2;
          } else {
            setsWon += m.score2;
            setsLost += m.score1;
          }
        });

        const winPercent = groupMatches.length > 0 ? Math.round((wins / groupMatches.length) * 100) : 0;

        return `
          <div class="team-profile-card glass-panel border border-slate-700/50 p-4 rounded-lg hover-glowing flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${team.name}">${team.name}</span>
                <span class="badge ${isMD ? 'bg-volt' : 'bg-cyan'} text-slate-950 font-bold text-4xs">TEAM</span>
              </div>

              <!-- Members -->
              <div class="flex flex-col gap-1.5 mb-4 text-xs">
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${team.player1}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${team.player2}</span>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="bg-slate-950/60 p-2.5 rounded border border-slate-900 text-4xs">
              <div class="grid grid-cols-3 gap-1 text-center font-semibold text-slate-400">
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${groupMatches.length}</div>
                  <div>${isVi ? 'Đã Đấu' : 'Played'}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-volt">${wins}</div>
                  <div>${isVi ? 'Thắng' : 'Won'}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${winPercent}%</div>
                  <div>${isVi ? 'Tỉ Lệ' : 'Win %'}</div>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="glass-card mb-6">
          <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2">
            <span class="${themeColor}">${isMD ? '💎' : '🔮'}</span>
            <span class="${themeColor}">${category} (${teams.length} Teams)</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            ${teamCards}
          </div>
        </div>
      `;
    };

    const mdTeams = this.state.teams.filter(t => t.category === "Men's Doubles");
    const xdTeams = this.state.teams.filter(t => t.category === "Mixed's Doubles");

    container.innerHTML = `
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Thành Viên & Đội Đăng Ký</h2>
        <p class="view-subtitle">${isVi ? 'Hồ sơ thành viên và danh sách đội hình phân hạng' : 'Browse player preferences and team statistics'}</p>
      </div>

      <!-- Teams lists -->
      ${renderTeamGroup(mdTeams, "Men's Doubles")}
      ${renderTeamGroup(xdTeams, "Mixed's Doubles")}

      <!-- Players gallery -->
      <div class="glass-card mt-8">
        <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2 text-slate-200">
          <span>🎯</span>
          <span>${isVi ? 'Danh Sách VĐV Cá Nhân' : 'Individual Player Preferences'} (${totalPlayers} Players)</span>
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          ${playersHtml}
        </div>
      </div>
    `;
  }

  startCountdown() {
    const targetDate = new Date('May 31, 2026 13:30:00').getTime();
    
    const cdDays = document.getElementById('cd-days');
    const cdHours = document.getElementById('cd-hours');
    const cdMins = document.getElementById('cd-minutes');
    const cdSecs = document.getElementById('cd-seconds');

    if (!cdDays) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        if (cdDays) {
          cdDays.textContent = '00';
          cdHours.textContent = '00';
          cdMins.textContent = '00';
          cdSecs.textContent = '00';
        }
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (cdDays) {
        cdDays.textContent = days.toString().padStart(2, '0');
        cdHours.textContent = hours.toString().padStart(2, '0');
        cdMins.textContent = minutes.toString().padStart(2, '0');
        cdSecs.textContent = seconds.toString().padStart(2, '0');
      }
    }, 1000);
  }
}

// Instantiate App
window.addEventListener('DOMContentLoaded', () => {
  new BadmintonApp();
});
