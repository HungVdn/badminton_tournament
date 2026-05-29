import { UmpireConsole } from './umpire.js';

export class AdminPanel {
  constructor(state, onUpdateCallback, sync) {
    this.state = state;
    this.onUpdate = onUpdateCallback;
    this.sync = sync;
    this.isAdmin = false;
    this.isRef = false;
    this.refPitch = '';
    this.activeMatchId = null;
    this.lang = 'en';
    
    this.passkeys = {
      'goodmintongg2026': { role: 'admin', label: 'Super Admin' },
      'ref1': { role: 'ref', pitch: 'Pitch 1', label: 'Pitch 1 Umpire' },
      'ref2': { role: 'ref', pitch: 'Pitch 2', label: 'Pitch 2 Umpire' },
      'ref3': { role: 'ref', pitch: 'Pitch 3', label: 'Pitch 3 Umpire' },
      'ref4': { role: 'ref', pitch: 'Pitch 4', label: 'Pitch 4 Umpire' }
    };
    
    this.init();
  }

  setLanguage(lang) {
    this.lang = 'en';
  }

  init() {
    this.isAdmin = sessionStorage.getItem('badminton_isAdmin') === 'true';
    this.isRef = sessionStorage.getItem('badminton_isRef') === 'true';
    this.refPitch = sessionStorage.getItem('badminton_refPitch') || '';
    this.createModalContainer();
    this.setupAdminToggleListener();
  }

  createModalContainer() {
    // Inject modal HTML structure into body if not already present
    if (document.getElementById('score-modal-container')) return;
    
    const modalDiv = document.createElement('div');
    modalDiv.id = 'score-modal-container';
    modalDiv.className = 'modal-backdrop hidden';
    document.body.appendChild(modalDiv);
    
    // Inject Admin Login Modal structure
    if (document.getElementById('admin-modal-container')) return;
    const adminDiv = document.createElement('div');
    adminDiv.id = 'admin-modal-container';
    adminDiv.className = 'modal-backdrop hidden';
    document.body.appendChild(adminDiv);

    // Inject Score Settings Modal structure
    if (!document.getElementById('score-config-modal-container')) {
      const configDiv = document.createElement('div');
      configDiv.id = 'score-config-modal-container';
      configDiv.className = 'modal-backdrop hidden';
      document.body.appendChild(configDiv);
    }
  }

  setupAdminToggleListener() {
    // Event delegation for admin triggers in the app
    document.body.addEventListener('click', (e) => {
      const toggleAdminBtn = e.target.closest('#btn-toggle-admin');
      if (toggleAdminBtn) {
        if (this.isAdmin || this.isRef) {
          this.logout();
        } else {
          this.showAdminLogin();
        }
      }

      const scoreSettingsBtn = e.target.closest('#btn-score-settings');
      if (scoreSettingsBtn) {
        if (this.isAdmin) {
          this.showScoreConfigModal();
        } else {
          this.showToast('You must be a Super Admin to modify scoring settings.', 'info');
        }
      }
      
      const editBtn = e.target.closest('.btn-edit-match');
      if (editBtn) {
        const matchId = editBtn.getAttribute('data-match-id');
        const match = this.state.matches.find(m => m.id === matchId);
        if (!match) return;

        // Validation: Check if players are decided
        const readyCheck = this.checkMatchReadyState(match);
        if (!readyCheck.ready) {
          this.showUnreadyAlert(readyCheck.reason);
          return;
        }

        // Validation: Must be super admin, or referee of this pitch
        if (this.isAdmin || (this.isRef && match.pitch === this.refPitch)) {
          this.openScoreModal(matchId);
        } else {
          this.showToast('You are not authorized to edit matches on this pitch!', 'info');
        }
      }

      const joinBtn = e.target.closest('.btn-join-match');
      if (joinBtn) {
        const matchId = joinBtn.getAttribute('data-match-id');
        const match = this.state.matches.find(m => m.id === matchId);
        if (!match) return;

        // Validation: Check if players are decided
        const readyCheck = this.checkMatchReadyState(match);
        if (!readyCheck.ready) {
          this.showUnreadyAlert(readyCheck.reason);
          return;
        }

        if (this.isAdmin || (this.isRef && match.pitch === this.refPitch)) {
          this.openUmpireConsole(matchId);
        } else {
          this.showToast('You are not authorized to umpire on this pitch!', 'info');
        }
      }
    });
  }

  checkMatchReadyState(match) {
    // 1. Group Stage check
    if (
      (match.team1 && match.team1.includes('Place')) ||
      (match.team2 && match.team2.includes('Place'))
    ) {
      return {
        ready: false,
        reason: `This match cannot be played yet! Please wait for the Group Stage to complete to decide the playing teams.`
      };
    }

    // 2. Playoff (SF) check
    const catSuffix = match.category === "Men's Doubles" ? "MD" : "XD";
    
    const isWaitingSF1 = (match.team1 && (match.team1.includes('SF1') || match.team1.includes('Winner SF1') || match.team1.includes('Loser SF1'))) ||
                         (match.team2 && (match.team2.includes('SF1') || match.team2.includes('Winner SF1') || match.team2.includes('Loser SF1')));
    
    const isWaitingSF2 = (match.team1 && (match.team1.includes('SF2') || match.team1.includes('Winner SF2') || match.team1.includes('Loser SF2'))) ||
                         (match.team2 && (match.team2.includes('SF2') || match.team2.includes('Winner SF2') || match.team2.includes('Loser SF2')));

    if (isWaitingSF1) {
      const sf1Id = `SF1-${catSuffix}`;
      const sf1Match = this.state.matches.find(m => m.id === sf1Id);
      if (sf1Match && sf1Match.status !== 'Completed') {
        const waitingLabel = `Semi-final 1 (${match.category})`;
        return {
          ready: false,
          reason: `This match is waiting for the result of semi-final match **${waitingLabel}** to complete.`
        };
      }
    }

    if (isWaitingSF2) {
      const sf2Id = `SF2-${catSuffix}`;
      const sf2Match = this.state.matches.find(m => m.id === sf2Id);
      if (sf2Match && sf2Match.status !== 'Completed') {
        const waitingLabel = `Semi-final 2 (${match.category})`;
        return {
          ready: false,
          reason: `This match is waiting for the result of semi-final match **${waitingLabel}** to complete.`
        };
      }
    }

    return { ready: true };
  }

  showUnreadyAlert(reason) {
    const modal = document.createElement('div');
    modal.className = 'swap-notice-modal-backdrop'; // reusable backdrop
    modal.innerHTML = `
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in" style="max-width: 400px; width: 90%; border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25);">
        <div class="mb-4 text-danger animate-pulse" style="font-size: 3rem;">
          ⚠️
        </div>
        <h3 class="text-sm font-black text-danger mb-2" style="font-size: 1.15rem; letter-spacing: 0.05em;">
          MATCH NOT READY!
        </h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">
          ${reason}
        </p>
        <button class="btn btn-sm btn-danger w-full py-2.5 font-bold uppercase tracking-wider" id="unready-alert-btn-ok">
          Got It
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('unready-alert-btn-ok').onclick = () => {
      modal.classList.add('animate-fade-out');
      setTimeout(() => modal.remove(), 300);
    };
  }

  openUmpireConsole(matchId) {
    if (!this.sync) return;
    new UmpireConsole(this.state, this.sync, matchId, () => {
      this.onUpdate();
    });
  }

  logout() {
    this.isAdmin = false;
    this.isRef = false;
    this.refPitch = '';
    sessionStorage.setItem('badminton_isAdmin', 'false');
    sessionStorage.setItem('badminton_isRef', 'false');
    sessionStorage.removeItem('badminton_refPitch');
    sessionStorage.removeItem('badminton_authLabel');
    this.onUpdate();
    
    const notification = 'Logged out successfully!';
    this.showToast(notification, 'info');
  }

  showAdminLogin() {
    const container = document.getElementById('admin-modal-container');
    if (!container) return;

    const title = 'Portal Login';
    const desc = 'Enter Admin or Umpire passkey:';
    const labelPass = 'Passkey';
    const btnLogin = 'Login';
    const btnCancel = 'Cancel';
    
    container.innerHTML = `
      <div class="modal-card glass-card">
        <h3 class="modal-title">${title}</h3>
        <p class="modal-desc">${desc}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${labelPass}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${btnCancel}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${btnLogin}</button>
        </div>
      </div>
    `;
    
    container.classList.remove('hidden');
    document.getElementById('admin-passkey-input').focus();
    
    document.getElementById('btn-cancel-admin').onclick = () => container.classList.add('hidden');
    document.getElementById('btn-submit-admin').onclick = () => this.handleAdminLogin();
    document.getElementById('admin-passkey-input').onkeydown = (e) => {
      if (e.key === 'Enter') this.handleAdminLogin();
    };
  }

  handleAdminLogin() {
    const input = document.getElementById('admin-passkey-input');
    const errorDiv = document.getElementById('admin-login-error');
    if (!input || !errorDiv) return;
    
    const key = input.value;
    const auth = this.passkeys[key];
    
    if (auth) {
      if (auth.role === 'admin') {
        this.isAdmin = true;
        this.isRef = false;
        this.refPitch = '';
        sessionStorage.setItem('badminton_isAdmin', 'true');
        sessionStorage.setItem('badminton_isRef', 'false');
        sessionStorage.removeItem('badminton_refPitch');
        sessionStorage.setItem('badminton_authLabel', auth.label);
      } else {
        this.isRef = true;
        this.isAdmin = false;
        this.refPitch = auth.pitch;
        sessionStorage.setItem('badminton_isAdmin', 'false');
        sessionStorage.setItem('badminton_isRef', 'true');
        sessionStorage.setItem('badminton_refPitch', auth.pitch);
        sessionStorage.setItem('badminton_authLabel', auth.label);
      }
      
      document.getElementById('admin-modal-container').classList.add('hidden');
      this.onUpdate();
      
      const text = `Login success! Role: ${auth.label}.`;
      this.showToast(text, 'success');
    } else {
      errorDiv.textContent = 'Incorrect passkey. Please try again.';
      errorDiv.classList.remove('hidden');
      input.classList.add('input-error');
      input.focus();
    }
  }

  openScoreModal(matchId) {
    this.activeMatchId = matchId;
    const match = this.state.matches.find(m => m.id === matchId);
    if (!match) return;

    const container = document.getElementById('score-modal-container');
    if (!container) return;

    const stageConfig = this.state.getScoreConfig(match.category, match.stage);
    const targetPoints = stageConfig.targetPoints;
    const maxPoints = stageConfig.maxPoints;
    const setsToWin = stageConfig.setsToWin;
    const maxSets = setsToWin * 2 - 1;

    const modalTitle = 'Match Score Editor';
    const lblSets = 'Set';
    const lblT1 = match.team1;
    const lblT2 = match.team2;
    const btnSave = 'Save Score';
    const btnCancel = 'Cancel';
    const btnReset = 'Clear Score';

    let setRowsHtml = '';
    for (let i = 1; i <= maxSets; i++) {
      const setVal = match.sets[i - 1] || { t1: '', t2: '' };
      const isRequired = (i === 1) ? 'required' : '';
      setRowsHtml += `
        <!-- Set ${i} -->
        <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s${i}-row">
          <div class="col-span-2">
            <input type="number" min="0" max="${maxPoints}" id="s${i}-t1" class="form-input score-box text-left" placeholder="0" value="${setVal.t1 !== undefined ? setVal.t1 : ''}" ${isRequired} />
          </div>
          <div class="text-center font-bold text-muted">${lblSets} ${i}</div>
          <div class="col-span-2">
            <input type="number" min="0" max="${maxPoints}" id="s${i}-t2" class="form-input score-box text-right" placeholder="0" value="${setVal.t2 !== undefined ? setVal.t2 : ''}" ${isRequired} />
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${modalTitle}</h3>
          <span class="badge bg-purple">${match.stage} (${targetPoints} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">Team 1</div>
          <div>VS</div>
          <div class="col-span-2 text-right">Team 2</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${lblT1}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${lblT2}</div>
        </div>

        <form id="score-form" class="space-y-4">
          ${setRowsHtml}

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${btnReset}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${btnCancel}</button>
              <button type="submit" class="btn btn-primary">${btnSave}</button>
            </div>
          </div>
        </form>
      </div>
    `;

    container.classList.remove('hidden');
    
    // Dynamic input visibility controller
    const inputs = [];
    for (let i = 1; i <= maxSets; i++) {
      inputs.push({
        t1: document.getElementById(`s${i}-t1`),
        t2: document.getElementById(`s${i}-t2`),
        row: document.getElementById(`s${i}-row`)
      });
    }

    const updateSetVisibility = () => {
      let t1Won = 0;
      let t2Won = 0;
      
      for (let i = 1; i <= maxSets; i++) {
        const row = inputs[i - 1].row;
        const t1Input = inputs[i - 1].t1;
        const t2Input = inputs[i - 1].t2;
        
        if (i === 1) {
          t1Input.disabled = false;
          t2Input.disabled = false;
          row.classList.remove('opacity-40');
          t1Input.setAttribute('required', 'required');
          t2Input.setAttribute('required', 'required');
          
          const val1 = Number(t1Input.value);
          const val2 = Number(t2Input.value);
          const v = this.validateSetScore(val1, val2, targetPoints, maxPoints);
          if (v.valid) {
            if (v.winner === 1) t1Won++; else t2Won++;
          }
          continue;
        }
        
        const prevWinnerReached = (t1Won === setsToWin || t2Won === setsToWin);
        let prevSetsFilled = true;
        for (let idx = 0; idx < i - 1; idx++) {
          const prevT1 = Number(inputs[idx].t1.value);
          const prevT2 = Number(inputs[idx].t2.value);
          if (!this.validateSetScore(prevT1, prevT2, targetPoints, maxPoints).valid) {
            prevSetsFilled = false;
            break;
          }
        }
        
        if (prevSetsFilled && !prevWinnerReached) {
          row.classList.remove('opacity-40');
          t1Input.disabled = false;
          t2Input.disabled = false;
          t1Input.setAttribute('required', 'required');
          t2Input.setAttribute('required', 'required');
          
          const val1 = Number(t1Input.value);
          const val2 = Number(t2Input.value);
          const v = this.validateSetScore(val1, val2, targetPoints, maxPoints);
          if (v.valid) {
            if (v.winner === 1) t1Won++; else t2Won++;
          }
        } else {
          row.classList.add('opacity-40');
          t1Input.disabled = true;
          t2Input.disabled = true;
          t1Input.value = '';
          t2Input.value = '';
          t1Input.removeAttribute('required');
          t2Input.removeAttribute('required');
        }
      }
    };

    inputs.forEach(inp => {
      inp.t1.addEventListener('input', updateSetVisibility);
      inp.t2.addEventListener('input', updateSetVisibility);
    });
    updateSetVisibility();

    // Event hooks
    document.getElementById('btn-cancel-score').onclick = () => container.classList.add('hidden');
    document.getElementById('btn-clear-score').onclick = () => this.handleClearScore(matchId);
    document.getElementById('score-form').onsubmit = (e) => {
      e.preventDefault();
      this.handleSaveScore(match, stageConfig);
    };
  }

  // Set-level validation based on BWF Rules
  validateSetScore(t1, t2, targetPoints, maxPoints) {
    if (isNaN(t1) || isNaN(t2)) return { valid: false };
    if (t1 < 0 || t2 < 0) return { valid: false };
    
    const maxVal = Math.max(t1, t2);
    const minVal = Math.min(t1, t2);
    const diff = maxVal - minVal;
    const winner = t1 > t2 ? 1 : 2;

    // Must reach targetPoints
    if (maxVal < targetPoints) return { valid: false };

    // Standard win
    if (maxVal === targetPoints && diff >= 2) {
      return { valid: true, winner };
    }

    // Deuce scenario
    if (maxVal > targetPoints) {
      // Must win by 2 points
      if (diff === 2 && maxVal < maxPoints) {
        return { valid: true, winner };
      }
      // Reached the max point cap
      if (maxVal === maxPoints && diff === 1) {
        return { valid: true, winner };
      }
    }

    return { valid: false };
  }

  handleClearScore(matchId) {
    if (confirm('Are you sure you want to clear the score for this match?')) {
      this.state.updateMatchScore(matchId, [], "", "", "Scheduled");
      document.getElementById('score-modal-container').classList.add('hidden');
      this.showToast('Match score cleared.', 'info');
    }
  }

  handleSaveScore(match, stageConfig) {
    const targetPoints = stageConfig.targetPoints;
    const maxPoints = stageConfig.maxPoints;
    const setsToWin = stageConfig.setsToWin;
    const maxSets = setsToWin * 2 - 1;
    
    const errorDiv = document.getElementById('score-error-msg');
    errorDiv.classList.add('hidden');
    
    const sets = [];
    let t1WonSets = 0;
    let t2WonSets = 0;
    
    for (let i = 1; i <= maxSets; i++) {
      const t1Val = document.getElementById(`s${i}-t1`).value;
      const t2Val = document.getElementById(`s${i}-t2`).value;
      
      // If we already have a winner, subsequent sets must be empty
      if (t1WonSets === setsToWin || t2WonSets === setsToWin) {
        if (t1Val !== '' || t2Val !== '') {
          this.showInputError(errorDiv, `Set ${i} score should be empty since match has already ended.`);
          return;
        }
        continue;
      }
      
      // Since match has not ended yet, this set is required
      if (t1Val === '' || t2Val === '') {
        this.showInputError(errorDiv, `Please fill in Set ${i} score.`);
        return;
      }
      
      const t1 = Number(t1Val);
      const t2 = Number(t2Val);
      
      const v = this.validateSetScore(t1, t2, targetPoints, maxPoints);
      if (!v.valid) {
        this.showInputError(errorDiv, `Set ${i} is invalid. Winner must reach ${targetPoints} and lead by 2, or reach cap limit of ${maxPoints} points.`);
        return;
      }
      
      sets.push({ t1, t2 });
      if (v.winner === 1) t1WonSets++;
      else t2WonSets++;
    }
    
    if (t1WonSets < setsToWin && t2WonSets < setsToWin) {
      this.showInputError(errorDiv, `No team has won the required ${setsToWin} sets to win the match.`);
      return;
    }
    
    // Update Match state
    const matchWinner = t1WonSets > t2WonSets ? match.team1 : match.team2;
    this.state.updateMatchScore(match.id, sets, t1WonSets, t2WonSets, "Completed");
    
    // Close modal & notify
    document.getElementById('score-modal-container').classList.add('hidden');
    this.showToast('Score updated successfully!', 'success');
  }

  showInputError(div, text) {
    div.textContent = text;
    div.classList.remove('hidden');
  }

  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-alert toast-${type}`;
    toast.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="toast-icon">${type === 'success' ? '✓' : type === 'info' ? 'ℹ' : '⚠'}</span>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(toast);
    
    // Animation in
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  showScoreConfigModal() {
    const container = document.getElementById('score-config-modal-container');
    if (!container) return;

    const categories = ["Men's Doubles", "Mixed's Doubles"];
    const stages = ["Group Stage", "Semi-finals", "Grand Final", "Bronze Match"];
    const configs = {};
    categories.forEach(cat => {
      configs[cat] = {};
      stages.forEach(stage => {
        configs[cat][stage] = this.state.getScoreConfig(cat, stage);
      });
    });

    const renderStageFields = (cat) => {
      return stages.map(stage => {
        const config = configs[cat][stage];
        const keyPrefix = cat === "Men's Doubles" ? "md" : "xd";
        const cardId = stage.replace(/\s+/g, '-').toLowerCase();
        return `
          <div class="score-config-stage-card glass-panel p-3.5 rounded-lg border border-slate-700/40 flex flex-col gap-3">
            <div class="text-2xs font-black text-volt border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>${stage}</span>
              <span class="badge bg-slate-850 text-slate-400 font-bold" style="font-size: 0.55rem; padding: 2px 6px;">Stage Rules</span>
            </div>
            
            <div class="grid grid-cols-3 gap-2">
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Target Pts</label>
                <input type="number" min="5" max="50" id="${keyPrefix}-${cardId}-target" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${config.targetPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Max Pts</label>
                <input type="number" min="5" max="60" id="${keyPrefix}-${cardId}-max" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${config.maxPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Sets to Win</label>
                <select id="${keyPrefix}-${cardId}-sets" class="form-input text-center" style="font-weight: bold; background: #0b0f19; font-size: 0.8rem; padding: 0.5rem 0.25rem; height: 42px; cursor: pointer; line-height: 1.5;">
                  <option value="1" ${config.setsToWin === 1 ? 'selected' : ''}>1 Set</option>
                  <option value="2" ${config.setsToWin === 2 ? 'selected' : ''}>Best of 3</option>
                  <option value="3" ${config.setsToWin === 3 ? 'selected' : ''}>Best of 5</option>
                </select>
              </div>
            </div>
          </div>
        `;
      }).join('');
    };

    container.innerHTML = `
      <div class="modal-card score-config-modal glass-card animate-scale-in" style="max-width: 680px; width: 95%;">
        <div class="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div>
            <h3 class="modal-title m-0 text-glow-volt">⚙️ Match Scoring Settings</h3>
            <p class="modal-desc m-0">Configure rules for target points, max points, and sets to win per tournament stage.</p>
          </div>
          <button class="btn btn-xs btn-neutral" id="btn-close-score-config">✕</button>
        </div>

        <!-- Category Tabs -->
        <div class="flex border-b border-slate-800/80 mb-4 justify-center gap-4">
          <button type="button" class="score-config-tab active font-black pb-2 px-4 text-volt" id="tab-config-md" style="font-size: 0.85rem; border-bottom: 2px solid var(--volt); background: none; border-top: none; border-left: none; border-right: none; cursor: pointer; outline: none; transition: all 0.2s;">💎 Men's Doubles (MD)</button>
          <button type="button" class="score-config-tab font-black pb-2 px-4 text-slate-500" id="tab-config-xd" style="font-size: 0.85rem; border-bottom: 2px solid transparent; background: none; border-top: none; border-left: none; border-right: none; cursor: pointer; outline: none; transition: all 0.2s;">🔮 Mixed's Doubles (XD)</button>
        </div>

        <!-- Presets Section -->
        <div class="mb-5 bg-slate-950/45 p-3 rounded-lg border border-slate-800/80">
          <div class="flex justify-between items-center mb-2">
            <span class="text-5xs uppercase font-extrabold text-slate-500 tracking-wider">⚡ QUICK SCORE PRESETS</span>
            <span class="text-[9px] font-black text-slate-400">Applies to the active tab</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <button type="button" class="btn btn-xs btn-outline" id="preset-bwf-standard">🏸 BWF Standard (21pts, Best of 3)</button>
            <button type="button" class="btn btn-xs btn-outline" id="preset-fast-15">⚡ Short Game (15pts, Best of 3)</button>
            <button type="button" class="btn btn-xs btn-outline" id="preset-single-set">🎯 Single Set (21pts, 1 Set)</button>
          </div>
        </div>

        <form id="score-config-form" class="space-y-4">
          <!-- MD Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[45vh] overflow-y-auto pr-1" id="config-section-md">
            ${renderStageFields("Men's Doubles")}
          </div>

          <!-- XD Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[45vh] overflow-y-auto pr-1 hidden" id="config-section-xd">
            ${renderStageFields("Mixed's Doubles")}
          </div>

          <div id="score-config-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
            <button type="button" class="btn btn-neutral" id="btn-cancel-score-config">Cancel</button>
            <button type="submit" class="btn btn-primary">Apply Settings</button>
          </div>
        </form>
      </div>
    `;

    container.classList.remove('hidden');

    let activeTab = "md"; // "md" or "xd"
    
    // Tab switching logic
    const tabMD = document.getElementById('tab-config-md');
    const tabXD = document.getElementById('tab-config-xd');
    const secMD = document.getElementById('config-section-md');
    const secXD = document.getElementById('config-section-xd');

    tabMD.onclick = () => {
      activeTab = "md";
      tabMD.classList.add('text-volt');
      tabMD.style.borderColor = 'var(--volt)';
      tabXD.classList.remove('text-volt');
      tabXD.classList.add('text-slate-500');
      tabXD.style.borderColor = 'transparent';
      secMD.classList.remove('hidden');
      secXD.classList.add('hidden');
    };

    tabXD.onclick = () => {
      activeTab = "xd";
      tabXD.classList.add('text-volt');
      tabXD.style.borderColor = 'var(--volt)';
      tabMD.classList.remove('text-volt');
      tabMD.classList.add('text-slate-500');
      tabMD.style.borderColor = 'transparent';
      secXD.classList.remove('hidden');
      secMD.classList.add('hidden');
    };

    // Preset listeners
    const applyPreset = (presetRules) => {
      const prefix = activeTab;
      stages.forEach(stage => {
        const cardId = stage.replace(/\s+/g, '-').toLowerCase();
        const rule = presetRules[stage] || presetRules.default;
        document.getElementById(`${prefix}-${cardId}-target`).value = rule.targetPoints;
        document.getElementById(`${prefix}-${cardId}-max`).value = rule.maxPoints;
        document.getElementById(`${prefix}-${cardId}-sets`).value = rule.setsToWin;
      });
    };

    document.getElementById('preset-bwf-standard').onclick = () => {
      applyPreset({
        default: { targetPoints: 21, maxPoints: 30, setsToWin: 2 }
      });
      this.showToast(`Standard BWF presets filled for ${activeTab === 'md' ? "Men's Doubles" : "Mixed's Doubles"}!`, 'info');
    };

    document.getElementById('preset-fast-15').onclick = () => {
      applyPreset({
        default: { targetPoints: 15, maxPoints: 21, setsToWin: 2 }
      });
      this.showToast(`Short Game presets filled for ${activeTab === 'md' ? "Men's Doubles" : "Mixed's Doubles"}!`, 'info');
    };

    document.getElementById('preset-single-set').onclick = () => {
      applyPreset({
        default: { targetPoints: 21, maxPoints: 30, setsToWin: 1 }
      });
      this.showToast(`Single Set presets filled for ${activeTab === 'md' ? "Men's Doubles" : "Mixed's Doubles"}!`, 'info');
    };

    // Close buttons
    const closeBtn = document.getElementById('btn-close-score-config');
    const cancelBtn = document.getElementById('btn-cancel-score-config');
    const closeForm = () => container.classList.add('hidden');
    closeBtn.onclick = closeForm;
    cancelBtn.onclick = closeForm;

    // Form submit
    document.getElementById('score-config-form').onsubmit = (e) => {
      e.preventDefault();
      
      const errorDiv = document.getElementById('score-config-error-msg');
      errorDiv.classList.add('hidden');

      // Validation and update
      for (const cat of categories) {
        const keyPrefix = cat === "Men's Doubles" ? "md" : "xd";
        for (const stage of stages) {
          const cardId = stage.replace(/\s+/g, '-').toLowerCase();
          const target = Number(document.getElementById(`${keyPrefix}-${cardId}-target`).value);
          const max = Number(document.getElementById(`${keyPrefix}-${cardId}-max`).value);
          const sets = Number(document.getElementById(`${keyPrefix}-${cardId}-sets`).value);

          if (max < target) {
            errorDiv.textContent = `Max points cannot be less than target points in ${cat} - ${stage}.`;
            errorDiv.classList.remove('hidden');
            return;
          }

          this.state.updateScoreConfig(cat, stage, { targetPoints: target, maxPoints: max, setsToWin: sets });
        }
      }

      container.classList.add('hidden');
      this.showToast('Match scoring settings updated successfully!', 'success');
      this.onUpdate();
    };
  }
}
