import { TournamentState } from './state.js';
import { AdminPanel } from './admin.js';
import { CourtSimulator } from './court-simulator.js';
import { REGULATIONS_DATA } from './data.js';

class ConfettiShower {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.colors = ['#84cc16', '#22d3ee', '#a855f7', '#f43f5e', '#eab308'];
    this.animationFrame = null;
  }

  start() {
    this.stop();
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'confetti-canvas';
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    
    const handler = () => this.resize();
    window.addEventListener('resize', handler);
    this.resizeHandler = handler;

    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height,
        r: Math.random() * 4 + 3,
        d: Math.random() * this.canvas.height,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        tilt: Math.random() * 8 - 4,
        tiltAngleIncremental: Math.random() * 0.05 + 0.02,
        tiltAngle: 0,
        speed: Math.random() * 2 + 1.5
      });
    }

    const draw = () => {
      if (!this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      let activeParticles = 0;
      this.particles.forEach(p => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += p.speed;
        p.x += Math.sin(p.tiltAngle) * 0.5;
        p.tilt = Math.sin(p.tiltAngle - p.r/2) * 4;

        this.ctx.beginPath();
        this.ctx.lineWidth = p.r;
        this.ctx.strokeStyle = p.color;
        this.ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        this.ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        this.ctx.stroke();

        if (p.y <= this.canvas.height) {
          activeParticles++;
        }
      });

      if (activeParticles > 0) {
        this.animationFrame = requestAnimationFrame(draw);
      } else {
        this.stop();
      }
    };

    draw();
  }

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
      this.resizeHandler = null;
    }
    if (this.canvas) {
      this.canvas.remove();
      this.canvas = null;
      this.ctx = null;
    }
    this.particles = [];
  }
}

class BadmintonApp {
  constructor() {
    this.state = new TournamentState();
    this.lang = localStorage.getItem('badminton_lang') || 'vi';
    this.activeTab = 'dashboard';
    this.activeCategoryFilter = 'all';
    this.fixtureSearchText = '';
    this.fixtureStatusFilter = 'all';
    this.confetti = new ConfettiShower();
    this.countdownTimer = null;
    
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
    setTimeout(() => this.updateActivePill(), 100);
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

    window.addEventListener('resize', () => this.updateActivePill());

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
    if (this.confetti) this.confetti.stop();
    
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
    this.updateActivePill();
  }

  updateActivePill() {
    const activeTab = document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`);
    const wrapper = document.querySelector('.nav-tabs-wrapper');
    if (!wrapper) return;
    
    let pill = document.querySelector('.nav-active-pill');
    if (!pill) {
      pill = document.createElement('div');
      pill.className = 'nav-active-pill';
      wrapper.appendChild(pill);
    }
    
    if (activeTab) {
      pill.style.width = `${activeTab.offsetWidth}px`;
      pill.style.transform = `translateX(${activeTab.offsetLeft}px)`;
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
      results: isVi ? '🏆 Bảng Vàng' : '🏆 Final Results',
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
      case 'results':
        this.renderResults(viewContainer);
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
          <div class="text-xs text-muted mt-3">⚡ 31 May 2026 @ 13:30 | Beta Era court ⚡</div>
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
    this.startCountdown();
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

      // Check if team has finished all of their matches (4 matches total in a 5-team group)
      const isTeamFinished = team.played === standings.length - 1;
      const finishedBadge = isTeamFinished
        ? `<span class="finished-tag">${isVi ? 'Đủ 4 trận' : '4 Matches'}</span>`
        : '';

      // Check head-to-head status if identical matches
      const h2hIcon = '';
      
      return `
        <tr class="${isTop4 ? 'row-top-4' : 'row-eliminated'} ${isMD ? 'md-row' : 'xd-row'}">
          <td class="text-center">${rankBadge}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${team.name}</span>
              ${advanceTag}
              ${finishedBadge}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${team.player1} & ${team.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${team.points}</td>
          <td class="text-center font-bold ${isTeamFinished ? 'text-emerald-400' : 'text-slate-200'}">${team.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${team.won}</td>
          <td class="text-center font-semibold ${team.lost > 0 ? 'text-rose-400' : 'text-slate-400'}">${team.lost}</td>
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
            ? '<strong>Quy tắc xếp hạng:</strong> Top 4 đội sẽ tự động giành vé vào Bán Kết. Ưu tiên xét: Thắng ván ➔ Hiệu số hiệp ➔ Đối kháng trực tiếp ➔ Hiệu số điểm.' 
            : '<strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points.'}
        </div>
      </div>
    `;
  }

  renderFixtures(viewContainer) {
    const isVi = this.lang === 'vi';
    
    let contentHtml = '';
    if (this.activeCategoryFilter === 'all') {
      contentHtml = `
        <div class="fixtures-grid gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `;
    } else if (this.activeCategoryFilter === 'md') {
      contentHtml = `
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
        </div>
      `;
    } else {
      contentHtml = `
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `;
    }

    viewContainer.innerHTML = `
      <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0"><svg class="nav-icon mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px; vertical-align: middle;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${isVi ? 'Lịch Thi Đấu & Kết Quả' : 'Match Schedule & Results'}</h2>
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

      <!-- Search & Status filter deck -->
      <div class="filter-deck">
        <div class="filter-search-wrapper">
          <span class="filter-search-icon">🔍</span>
          <input type="text" class="filter-search-input" id="fixture-search" 
                 placeholder="${isVi ? 'Tìm tên đội chơi hoặc vận động viên...' : 'Search team or player name...'}" 
                 value="${this.fixtureSearchText}">
        </div>

        <div class="filter-pills">
          <button class="filter-pill ${this.fixtureStatusFilter === 'all' ? 'active' : ''}" data-status="all">
            ${isVi ? 'Tất cả trạng thái' : 'All'}
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter === 'Scheduled' ? 'active' : ''}" data-status="Scheduled">
            ${isVi ? 'Lịch thi đấu' : 'Scheduled'}
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter === 'Completed' ? 'active' : ''}" data-status="Completed">
            ${isVi ? 'Đã kết thúc' : 'Completed'}
          </button>
        </div>
      </div>

      ${contentHtml}
    `;

    // Event filters
    document.getElementById('fix-filter-all').onclick = () => { this.activeCategoryFilter = 'all'; this.renderActiveView(); };
    document.getElementById('fix-filter-md').onclick = () => { this.activeCategoryFilter = 'md'; this.renderActiveView(); };
    document.getElementById('fix-filter-xd').onclick = () => { this.activeCategoryFilter = 'xd'; this.renderActiveView(); };

    // Search events
    const searchInput = document.getElementById('fixture-search');
    searchInput.oninput = (e) => {
      this.fixtureSearchText = e.target.value;
      this.renderActiveView();
      const input = document.getElementById('fixture-search');
      if (input) {
        input.focus();
        input.setSelectionRange(this.fixtureSearchText.length, this.fixtureSearchText.length);
      }
    };

    // Pill click events
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      pill.onclick = () => {
        this.fixtureStatusFilter = pill.getAttribute('data-status');
        this.renderActiveView();
      };
    });
  }

  checkPlayersIncludeSearch(t1Name, t2Name, search) {
    const t1 = this.state.teams.find(t => t.name === t1Name);
    const t2 = this.state.teams.find(t => t.name === t2Name);
    if (t1 && (t1.player1.toLowerCase().includes(search) || t1.player2.toLowerCase().includes(search))) {
      return true;
    }
    if (t2 && (t2.player1.toLowerCase().includes(search) || t2.player2.toLowerCase().includes(search))) {
      return true;
    }
    return false;
  }

  renderCategoryFixtures(category) {
    const isVi = this.lang === 'vi';
    const isMD = category === "Men's Doubles";
    const title = isMD ? "Men's Doubles" : "Mixed's Doubles";
    
    // Filter matches for this category
    let catMatches = this.state.matches.filter(m => m.category === category);

    // Apply status filter
    if (this.fixtureStatusFilter !== 'all') {
      catMatches = catMatches.filter(m => m.status === this.fixtureStatusFilter);
    }

    // Apply search filter
    if (this.fixtureSearchText.trim() !== '') {
      const search = this.fixtureSearchText.toLowerCase().trim();
      catMatches = catMatches.filter(m => 
        m.team1.toLowerCase().includes(search) || 
        m.team2.toLowerCase().includes(search) || 
        (m.stage && m.stage.toLowerCase().includes(search)) ||
        (m.pitch && m.pitch.toLowerCase().includes(search)) ||
        this.checkPlayersIncludeSearch(m.team1, m.team2, search)
      );
    }
    
    // Group by stage
    const groupMatches = catMatches.filter(m => m.stage === 'Group Stage');
    const semis = catMatches.filter(m => m.stage === 'Semi-finals');
    const grandFinal = catMatches.filter(m => m.stage === 'Grand Final');
    const bronzeMatch = catMatches.filter(m => m.stage === 'Bronze Match');

    const grandFinalBadge = isVi ? 'TRẬN CHUNG KẾT' : 'GRAND CHAMPIONSHIP';
    const bronzeBadge = isVi ? 'TRANH HẠNG BA' : 'BRONZE FINALS';
    const semisBadge = isVi ? 'VÒNG BÁN KẾT' : 'SEMIFINALS STAGE';
    const groupBadge = isVi ? 'VÒNG BẢNG XOAY VÒNG' : 'GROUP STAGE QUALIFYING';

    const renderStageSection = (matches, stageTitle) => {
      if (matches.length === 0) return '';
      return `
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${isMD ? 'var(--volt)' : 'var(--cyan)'};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${isMD ? 'text-volt' : 'text-cyan'} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${stageTitle}</span>
            <span class="text-slate-600 font-medium">${matches.length} ${matches.length === 1 ? 'Match' : 'Matches'}</span>
          </div>
          <div class="flex flex-col gap-3">
            ${this.renderMatchCards(matches)}
          </div>
        </div>
      `;
    };

    return `
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${isMD ? '💎' : '🔮'}</span>
          <span class="${isMD ? 'text-volt' : 'text-cyan'}">${title}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${renderStageSection(grandFinal, grandFinalBadge)}
          ${renderStageSection(bronzeMatch, bronzeBadge)}
          ${renderStageSection(semis, semisBadge)}
          ${renderStageSection(groupMatches, groupBadge)}
        </div>
      </div>
    `;
  }

  renderMatchCards(matches) {
    const isVi = this.lang === 'vi';
    
    if (matches.length === 0) {
      return `<div class="col-span-2 text-center text-muted py-6">${isVi ? 'Không tìm thấy trận đấu nào' : 'No matches found'}</div>`;
    }

    return matches.map(match => {
      const isCompleted = match.status === 'Completed';
      
      const hasPlaceholders = (match.team1 && (match.team1.includes('Place') || match.team1.includes('Winner') || match.team1.includes('Loser'))) ||
                            (match.team2 && (match.team2.includes('Place') || match.team2.includes('Winner') || match.team2.includes('Loser')));

      // Style highlight rules based on stages
      let highlightClass = '';
      let statusBadge = '';
      
      if (match.stage === 'Grand Final') {
        highlightClass = 'border-glow-gold bg-gold-gradient';
        statusBadge = isCompleted 
          ? `<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>${isVi ? 'CHUNG KẾT' : 'GRAND FINAL'}</span>`
          : `<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">${isVi ? 'CHUNG KẾT' : 'GRAND FINAL'}</span>`;
      } else if (match.stage === 'Bronze Match') {
        highlightClass = 'border-glow-bronze bg-bronze-gradient';
        statusBadge = isCompleted 
          ? `<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>${isVi ? 'TRANH HẠNG 3' : 'BRONZE MATCH'}</span>`
          : `<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">${isVi ? 'TRANH HẠNG 3' : 'BRONZE MATCH'}</span>`;
      } else {
        highlightClass = isCompleted ? 'border-completed' : 'border-scheduled';
        statusBadge = isCompleted 
          ? `<span class="match-badge completed">${isVi ? 'KẾT THÚC' : 'FINAL'}</span>`
          : `<span class="match-badge scheduled">${isVi ? 'LỊCH HẸN' : 'SCHEDULED'}</span>`;
      }

      const editBtn = this.admin.isAdmin
        ? `<button class="btn btn-xs btn-outline glow-cyan btn-edit-match flex items-center gap-1.5 ${hasPlaceholders ? 'disabled-btn' : ''}" 
                    data-match-id="${match.id}" 
                    ${hasPlaceholders ? 'disabled style="opacity: 0.4; pointer-events: none; cursor: not-allowed; border-color: rgba(255,255,255,0.05); color: var(--text-muted);"' : ''}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; flex-shrink: 0;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"/></svg> <span>${hasPlaceholders ? (isVi ? 'Khóa' : 'Locked') : (isVi ? 'Nhập Điểm' : 'Edit Score')}</span>
           </button>`
        : '';

      const isMD = match.category === "Men's Doubles";
      const catBadge = isMD
        ? `<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>`
        : `<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>`;

      // BWF Scoreboard columns builder
      const team1Obj = this.state.teams.find(t => t.name === match.team1);
      const team2Obj = this.state.teams.find(t => t.name === match.team2);
      const team1Players = team1Obj ? `${team1Obj.player1} & ${team1Obj.player2}` : '';
      const team2Players = team2Obj ? `${team2Obj.player1} & ${team2Obj.player2}` : '';

      const winnerColorClass = isMD ? 'text-volt' : 'text-cyan';

      let t1ScoresHtml = '';
      let t2ScoresHtml = '';
      if (isCompleted && match.sets && match.sets.length > 0) {
        const dot1 = match.winner === match.team1 ? `<span class="${winnerColorClass}" style="font-size: 0.55rem; width: 8px;">●</span>` : '<span style="width: 8px;"></span>';
        const dot2 = match.winner === match.team2 ? `<span class="${winnerColorClass}" style="font-size: 0.55rem; width: 8px;">●</span>` : '<span style="width: 8px;"></span>';
        
        t1ScoresHtml += dot1;
        t2ScoresHtml += dot2;
        
        match.sets.forEach(s => {
          t1ScoresHtml += `<span class="${s.t1 > s.t2 ? winnerColorClass : 'text-slate-400'}" style="width: 22px; display: inline-block; text-align: center;">${s.t1}</span>`;
          t2ScoresHtml += `<span class="${s.t2 > s.t1 ? winnerColorClass : 'text-slate-400'}" style="width: 22px; display: inline-block; text-align: center;">${s.t2}</span>`;
        });
        
        // Pad to 3 sets to keep visual alignment consistent
        for (let i = match.sets.length; i < 3; i++) {
          t1ScoresHtml += '<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>';
          t2ScoresHtml += '<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>';
        }
      } else {
        // Scheduled
        t1ScoresHtml = '<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';
        t2ScoresHtml = '<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';
      }

      const adminCardClass = this.admin.isAdmin ? 'admin-card' : '';

      return `
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${highlightClass} ${adminCardClass}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${catBadge}
              <span>${match.pitch} | ${match.time}</span>
            </div>
            ${statusBadge}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${isCompleted && match.winner === match.team1 ? winnerColorClass : 'text-slate-200'} truncate" title="${match.team1}">
                  ${match.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${team1Players || (isVi ? 'Đang xác định' : 'TBD')}">${team1Players || (isVi ? 'Đang xác định' : 'TBD')}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${t1ScoresHtml}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${isCompleted && match.winner === match.team2 ? winnerColorClass : 'text-slate-200'} truncate" title="${match.team2}">
                  ${match.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${team2Players || (isVi ? 'Đang xác định' : 'TBD')}">${team2Players || (isVi ? 'Đang xác định' : 'TBD')}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${t2ScoresHtml}
              </div>
            </div>
          </div>

          <!-- Edit Button Footer (If Admin) -->
          ${editBtn ? `<div class="flex justify-end mt-1 pt-2 border-t border-slate-900/50">${editBtn}</div>` : ''}
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

    const renderMiniBracketStandings = (category) => {
      const standings = this.state.calculateStandings(category);
      return standings.map((team, idx) => {
        const rank = idx + 1;
        const isTop4 = rank <= 4;
        const rankBadgeClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
        const seedLabel = rank === 1 
          ? '🥇 Seed 1' 
          : rank === 2 
          ? '🥈 Seed 2' 
          : rank === 3 
          ? '🥉 Seed 3' 
          : rank === 4 
          ? '🎫 Seed 4' 
          : (isVi ? '❌ Loại' : '❌ Out');
        const advanceColor = isTop4 ? 'text-emerald-400' : 'text-slate-500';
        
        return `
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${team.name}">
              <span class="rank-circle font-bold ${rankBadgeClass}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${rank}</span>
              <span class="font-bold text-slate-200 truncate">${team.name}</span>
            </div>
            <span class="font-extrabold ${advanceColor}" style="font-size: 0.55rem; flex-shrink: 0;">${seedLabel}</span>
          </div>
        `;
      }).join('');
    };

    const renderBracketTree = (data, title, isVolt, category) => {
      const themeClass = isVolt ? 'text-volt border-glow-volt' : 'text-cyan border-glow-cyan';
      const awards = this.getAwardResults(category);
      
      const renderNode = (match) => {
        if (!match) return `<div class="bracket-node empty">N/A</div>`;
        const isComp = match.status === 'Completed';
        
        const hasPlaceholders = (match.team1 && (match.team1.includes('Place') || match.team1.includes('Winner') || match.team1.includes('Loser'))) ||
                              (match.team2 && (match.team2.includes('Place') || match.team2.includes('Winner') || match.team2.includes('Loser')));
          
        const editIcon = this.admin.isAdmin
          ? (hasPlaceholders 
              ? `<span title="${isVi ? 'Chưa thể nhập điểm' : 'Cannot edit score yet'}" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>`
              : `<button class="btn-edit-node-score btn-edit-match" data-match-id="${match.id}">✏️</button>`)
          : '';

        const team1Obj = this.state.teams.find(t => t.name === match.team1);
        const team2Obj = this.state.teams.find(t => t.name === match.team2);
        const team1Players = team1Obj ? `${team1Obj.player1} & ${team1Obj.player2}` : '';
        const team2Players = team2Obj ? `${team2Obj.player1} & ${team2Obj.player2}` : '';

        // BWF scores helper for compact bracket node
        const winnerColorClass = isVolt ? 'text-volt' : 'text-cyan';
        let t1ScoresHtml = '';
        let t2ScoresHtml = '';
        if (isComp && match.sets && match.sets.length > 0) {
          const dot1 = match.winner === match.team1 ? `<span class="${winnerColorClass}" style="font-size: 0.45rem; width: 6px;">●</span>` : '<span style="width: 6px;"></span>';
          const dot2 = match.winner === match.team2 ? `<span class="${winnerColorClass}" style="font-size: 0.45rem; width: 6px;">●</span>` : '<span style="width: 6px;"></span>';
          
          t1ScoresHtml += dot1;
          t2ScoresHtml += dot2;
          
          match.sets.forEach(s => {
            t1ScoresHtml += `<span class="${s.t1 > s.t2 ? winnerColorClass : 'text-slate-400'}" style="width: 16px; display: inline-block; text-align: center;">${s.t1}</span>`;
            t2ScoresHtml += `<span class="${s.t2 > s.t1 ? winnerColorClass : 'text-slate-400'}" style="width: 16px; display: inline-block; text-align: center;">${s.t2}</span>`;
          });
          
          // Pad to 3 sets
          for (let i = match.sets.length; i < 3; i++) {
            t1ScoresHtml += '<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>';
            t2ScoresHtml += '<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>';
          }
        } else {
          // Scheduled
          t1ScoresHtml = '<span style="width: 6px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';
          t2ScoresHtml = '<span style="width: 8px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';
        }

        const footerHtml = isComp 
          ? `<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ ${isVi ? 'Đã kết thúc' : 'Finished'}</div>` 
          : `<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${match.time}</div>`;
          
        return `
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${isComp ? 'completed' : ''}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${match.pitch} | ${match.stage}</span>
              ${editIcon}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${isComp && match.winner === match.team1 ? winnerColorClass : 'text-slate-300'}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${match.team1}">${match.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${team1Players || (isVi ? 'Đang xác định' : 'TBD')}">${team1Players || (isVi ? 'Đang xác định' : 'TBD')}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${t1ScoresHtml}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${isComp && match.winner === match.team2 ? winnerColorClass : 'text-slate-300'}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${match.team2}">${match.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${team2Players || (isVi ? 'Đang xác định' : 'TBD')}">${team2Players || (isVi ? 'Đang xác định' : 'TBD')}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${t2ScoresHtml}
                </div>
              </div>
            </div>
            
            ${footerHtml}
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
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 ${isVi ? 'BẢNG XẾP HẠNG' : 'GROUP STANDINGS'}</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${renderMiniBracketStandings(category)}
              </div>
              <div class="text-4xs text-muted text-center mt-2.5 font-semibold leading-relaxed">
                💡 ${isVi ? 'Top 4 đội tiến vào<br>vòng đấu loại trực tiếp' : 'Top 4 teams advance to<br>playoff bracket stage'}
              </div>
            </div>

            <!-- Connectors Column 0 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork" style="height: 100%; border: none; display: flex; flex-direction: column; justify-content: space-around;">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
            </div>

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

            <!-- Connectors Column 2 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
              <div class="connector-fork mt-8">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
            </div>

            <!-- Bảng Vàng / Podium Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px; gap: 0.75rem;">
              <div class="node-label mb-2 text-center text-gold font-bold" style="letter-spacing: 0.05em;">🏆 ${isVi ? 'BẢNG VÀNG' : 'FINAL RESULTS'}</div>
              
              <!-- Gold Node -->
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>${isVi ? 'VÔ ĐỊCH' : 'CHAMPION'}</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${awards.goldTeam.name}">${awards.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${awards.goldTeam.players}">${awards.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>${isVi ? 'Á QUÂN' : 'RUNNER-UP'}</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${awards.silverTeam.name}">${awards.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${awards.silverTeam.players}">${awards.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>${isVi ? 'HẠNG 3' : '3RD PLACE'}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${awards.bronzeTeam.name}">${awards.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${awards.bronzeTeam.players}">${awards.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>${isVi ? 'HẠNG 4' : '4TH PLACE'}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${awards.fourthTeam.name}">${awards.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${awards.fourthTeam.players}">${awards.fourthTeam.players}</div>
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

      ${renderBracketTree(md, "Men's Doubles", true, "Men's Doubles")}
      ${renderBracketTree(xd, "Mixed's Doubles", false, "Mixed's Doubles")}
    `;
  }

  getAwardResults(category) {
    const suffix = category === "Men's Doubles" ? "MD" : "XD";
    const fMatch = this.state.matches.find(m => m.id === `F-${suffix}`);
    const bMatch = this.state.matches.find(m => m.id === `B-${suffix}`);

    const isVi = this.lang === 'vi';
    let goldTeam = { name: isVi ? 'Chưa xác định' : 'TBD', players: isVi ? 'Đội vô địch' : 'Championship Winner', confirmed: false };
    let silverTeam = { name: isVi ? 'Chưa xác định' : 'TBD', players: isVi ? 'Đội hạng nhì' : 'Championship Runner-up', confirmed: false };
    let bronzeTeam = { name: isVi ? 'Chưa xác định' : 'TBD', players: isVi ? 'Đội hạng ba' : 'Bronze Winner', confirmed: false };
    let fourthTeam = { name: isVi ? 'Chưa xác định' : 'TBD', players: isVi ? 'Đội hạng tư' : 'Bronze Runner-up', confirmed: false };

    const getPlayersStr = (teamName) => {
      if (!teamName) return '';
      const team = this.state.teams.find(t => t.name === teamName);
      return team ? `${team.player1} & ${team.player2}` : '';
    };

    if (fMatch) {
      if (fMatch.status === 'Completed') {
        const winnerName = fMatch.winner;
        const loserName = fMatch.winner === fMatch.team1 ? fMatch.team2 : fMatch.team1;
        goldTeam = { name: winnerName, players: getPlayersStr(winnerName), confirmed: true };
        silverTeam = { name: loserName, players: getPlayersStr(loserName), confirmed: true };
      } else {
        const isPlaceholder = fMatch.team1.includes('Winner') || fMatch.team2.includes('Winner');
        if (!isPlaceholder) {
          goldTeam = { 
            name: isVi ? 'Chung Kết Đang Đấu' : 'Grand Finalists',
            players: `${fMatch.team1} vs ${fMatch.team2}`, 
            confirmed: false 
          };
          silverTeam = { 
            name: isVi ? 'Đang Tranh Chức Á Quân' : 'Chasing Runner-up',
            players: isVi ? 'Đội thua trận Chung kết' : 'Runner-up of Grand Final',
            confirmed: false 
          };
        }
      }
    }

    if (bMatch) {
      if (bMatch.status === 'Completed') {
        const winnerName = bMatch.winner;
        const loserName = bMatch.winner === bMatch.team1 ? bMatch.team2 : bMatch.team1;
        bronzeTeam = { name: winnerName, players: getPlayersStr(winnerName), confirmed: true };
        fourthTeam = { name: loserName, players: getPlayersStr(loserName), confirmed: true };
      } else {
        const isPlaceholder = bMatch.team1.includes('Loser') || bMatch.team2.includes('Loser');
        if (!isPlaceholder) {
          bronzeTeam = {
            name: isVi ? 'Tranh Hạng 3 Đang Đấu' : 'Bronze Contenders',
            players: `${bMatch.team1} vs ${bMatch.team2}`,
            confirmed: false
          };
        }
      }
    }

    return { goldTeam, silverTeam, bronzeTeam, fourthTeam };
  }

  renderResults(container) {
    const isVi = this.lang === 'vi';
    
    const mdAwards = this.getAwardResults("Men's Doubles");
    const xdAwards = this.getAwardResults("Mixed's Doubles");

    const renderPodium = (awards, categoryTitle, isMD) => {
      const isConfirmed = awards.goldTeam.confirmed || awards.silverTeam.confirmed || awards.bronzeTeam.confirmed;
      const themeColorClass = isMD ? 'text-volt border-glow-volt' : 'text-cyan border-glow-cyan';
      const indicatorBarColor = isMD ? 'bg-volt' : 'bg-cyan';
      
      return `
        <div class="glass-card mb-8 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[3px] ${isMD ? 'bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600' : 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600'}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${isMD ? 'text-volt' : 'text-cyan'} text-glow-volt">
            <span>🏆</span>
            <span>${categoryTitle}</span>
          </h3>
          <p class="text-xs text-muted mb-6">
            ${isConfirmed 
              ? (isVi ? '⚡ Kết quả thi đấu chính thức đã được ghi nhận' : '⚡ Official championship matches completed')
              : (isVi ? '⏳ Đang chờ các trận chung kết & tranh hạng 3 diễn ra' : '⏳ Waiting for championship finals to complete')}
          </p>

          <div class="podium-container">
            <!-- 2nd Place Step -->
            <div class="podium-step second-place">
              <span class="podium-medal">🥈</span>
              <div class="podium-team truncate max-w-full" title="${awards.silverTeam.name}">${awards.silverTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${awards.silverTeam.players}">${awards.silverTeam.players}</div>
              <span class="podium-label">${isVi ? 'Á Quân' : 'Runner-up'}</span>
            </div>

            <!-- 1st Place Step -->
            <div class="podium-step first-place">
              <span class="podium-medal">🥇</span>
              <div class="podium-team truncate max-w-full" title="${awards.goldTeam.name}">${awards.goldTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${awards.goldTeam.players}">${awards.goldTeam.players}</div>
              <span class="podium-label">${isVi ? 'Vô Địch' : 'Champion'}</span>
            </div>

            <!-- 3rd Place Step -->
            <div class="podium-step third-place">
              <span class="podium-medal">🥉</span>
              <div class="podium-team truncate max-w-full" title="${awards.bronzeTeam.name}">${awards.bronzeTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${awards.bronzeTeam.players}">${awards.bronzeTeam.players}</div>
              <span class="podium-label">${isVi ? 'Hạng 3' : '3rd Place'}</span>
            </div>
          </div>

          <!-- Honorable 4th Place Card -->
          <div class="max-w-[280px] mx-auto mt-8 glass-panel border border-slate-700/30 p-2.5 rounded-lg flex items-center justify-center gap-2.5 hover-glowing">
            <span class="text-lg">🏅</span>
            <div class="text-left truncate">
              <div class="text-4xs text-muted font-bold uppercase tracking-wider">${isVi ? 'Hạng 4 Khuyến Khích' : 'Honorable 4th Place'}</div>
              <div class="text-2xs font-extrabold text-slate-300 truncate" title="${awards.fourthTeam.name}">${awards.fourthTeam.name}</div>
              <div class="text-4xs text-muted truncate" title="${awards.fourthTeam.players}">${awards.fourthTeam.players}</div>
            </div>
          </div>
        </div>
      `;
    };

    container.innerHTML = `
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Bảng Vàng Danh Vọng</h2>
        <p class="view-subtitle">${isVi ? 'Vinh danh nhà vô địch và các thứ hạng danh giá của mùa giải' : 'Honoring the champions and premium standings of the season'}</p>
      </div>

      ${renderPodium(mdAwards, "Men's Doubles", true)}
      ${renderPodium(xdAwards, "Mixed's Doubles", false)}
    `;

    setTimeout(() => {
      if (this.activeTab === 'results' && this.confetti) {
        this.confetti.start();
      }
    }, 150);
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

    // Teams rendering grouped by category
    const renderTeamGroup = (teams, category) => {
      const isMD = category === "Men's Doubles";
      const themeColor = isMD ? 'text-volt' : 'text-cyan';
      const standings = this.state.calculateStandings(category);

      const teamCards = teams.map(team => {
        // Calculate dynamic wins/games played from all completed matches
        const completedMatches = this.state.matches.filter(m => 
          m.category === category && 
          m.status === 'Completed' && 
          (m.team1 === team.name || m.team2 === team.name)
        );

        let wins = 0;
        let losses = 0;
        let setsWon = 0;
        let setsLost = 0;
        let pointsWon = 0;
        let pointsLost = 0;

        completedMatches.forEach(m => {
          const isTeam1 = (m.team1 === team.name);
          if (m.winner === team.name) {
            wins++;
          } else {
            losses++;
          }

          if (isTeam1) {
            setsWon += Number(m.score1) || 0;
            setsLost += Number(m.score2) || 0;
          } else {
            setsWon += Number(m.score2) || 0;
            setsLost += Number(m.score1) || 0;
          }

          if (m.sets && Array.isArray(m.sets)) {
            m.sets.forEach(set => {
              const p1 = Number(set.t1) || 0;
              const p2 = Number(set.t2) || 0;
              if (isTeam1) {
                pointsWon += p1;
                pointsLost += p2;
              } else {
                pointsWon += p2;
                pointsLost += p1;
              }
            });
          }
        });

        const played = completedMatches.length;
        const winPercent = played > 0 ? Math.round((wins / played) * 100) : 0;
        const netSets = setsWon - setsLost;
        const netPoints = pointsWon - pointsLost;
        const pts = wins; // 1 point per match win

        // Calculate Rank from Standings
        const rankIndex = standings.findIndex(t => t.name === team.name);
        const rank = rankIndex !== -1 ? rankIndex + 1 : '-';

        // Build match form guide W-L pills
        const formPills = completedMatches.map(m => {
          const isWin = (m.winner === team.name);
          const badgeClass = isWin 
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20';
          const label = isWin ? 'W' : 'L';
          const tooltip = `${m.stage}: ${m.team1} vs ${m.team2} (${m.score1}-${m.score2})`;
          return `<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${badgeClass}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${tooltip}">${label}</span>`;
        }).join('');

        const formPillsHtml = formPills.length > 0 
          ? formPills 
          : `<span class="text-slate-500 text-5xs italic font-sans">${isVi ? 'Chưa đấu' : 'No matches'}</span>`;

        return `
          <div class="team-profile-card glass-panel border border-slate-700/50 p-4 rounded-lg hover-glowing flex flex-col justify-between"
               style="background: radial-gradient(circle at top right, ${isMD ? 'rgba(163, 230, 53, 0.05)' : 'rgba(34, 211, 238, 0.05)'} 0%, rgba(15, 22, 42, 0.45) 80%);">
            <div>
              <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <div class="flex items-center gap-1.5 truncate max-w-[70%]">
                  <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${team.name}">${team.name}</span>
                </div>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                  <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${rank}</span>
                  <span class="badge ${isMD ? 'bg-volt' : 'bg-cyan'} text-slate-950 font-bold text-4xs">TEAM</span>
                </div>
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
                
                <!-- Form guide -->
                <div class="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                  <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">${isVi ? 'PHONG ĐỘ:' : 'FORM:'}</span>
                  <div class="flex items-center gap-1">
                    ${formPillsHtml}
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
              <!-- Summary row -->
              <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${played}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${isVi ? 'Đã đấu' : 'Pld'}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold ${isMD ? 'text-volt' : 'text-cyan'}">${wins}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${isVi ? 'Thắng' : 'Won'}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold ${losses > 0 ? 'text-rose-400' : 'text-slate-400'}">${losses}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${isVi ? 'Thua' : 'Lost'}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${winPercent}%</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${isVi ? 'Tỉ Lệ' : 'Win%'}</div>
                </div>
              </div>

              <!-- Telemetry detail list -->
              <div class="flex flex-col gap-1.5 font-mono">
                <div class="flex items-center justify-between text-slate-400">
                  <span>${isVi ? 'Điểm tích lũy:' : 'Standing Pts:'}</span>
                  <span class="font-extrabold text-slate-200">${pts}</span>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${isVi ? 'Set Thắng/Bại:' : 'Sets W/L:'}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${setsWon}-${setsLost}</span>
                    <span class="text-5xs font-bold px-1 py-0.5 rounded ${netSets > 0 ? 'bg-emerald-500/10 text-emerald-400' : netSets < 0 ? 'bg-rose-500/10 text-rose-400' : 'bg-slate-800 text-slate-400'}">
                      ${netSets > 0 ? '+' : ''}${netSets}
                    </span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${isVi ? 'Điểm Thắng/Bại:' : 'Points W/L:'}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${pointsWon}-${pointsLost}</span>
                    <span class="text-5xs font-bold px-1 py-0.5 rounded ${netPoints > 0 ? 'bg-emerald-500/10 text-emerald-400' : netPoints < 0 ? 'bg-rose-500/10 text-rose-400' : 'bg-slate-800 text-slate-400'}">
                      ${netPoints > 0 ? '+' : ''}${netPoints}
                    </span>
                  </div>
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
    `;
  }

  startCountdown() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }

    const targetDate = new Date('May 31, 2026 13:30:00').getTime();

    const updateTimer = () => {
      const cdDays = document.getElementById('cd-days');
      const cdHours = document.getElementById('cd-hours');
      const cdMins = document.getElementById('cd-minutes');
      const cdSecs = document.getElementById('cd-seconds');

      // If elements are not in the DOM, clear the timer
      if (!cdDays) {
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer);
          this.countdownTimer = null;
        }
        return;
      }

      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        if (this.countdownTimer) {
          clearInterval(this.countdownTimer);
          this.countdownTimer = null;
        }
        cdDays.textContent = '00';
        cdHours.textContent = '00';
        cdMins.textContent = '00';
        cdSecs.textContent = '00';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      cdDays.textContent = days.toString().padStart(2, '0');
      cdHours.textContent = hours.toString().padStart(2, '0');
      cdMins.textContent = minutes.toString().padStart(2, '0');
      cdSecs.textContent = seconds.toString().padStart(2, '0');
    };

    // Run immediately once to avoid visual delay
    updateTimer();
    this.countdownTimer = setInterval(updateTimer, 1000);
  }
}

// Instantiate App
window.addEventListener('DOMContentLoaded', () => {
  new BadmintonApp();
});
