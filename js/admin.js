export class AdminPanel {
  constructor(state, onUpdateCallback) {
    this.state = state;
    this.onUpdate = onUpdateCallback;
    this.isAdmin = false;
    this.activeMatchId = null;
    this.lang = 'vi';
    this.passkey = 'admin2026';
    
    this.init();
  }

  setLanguage(lang) {
    this.lang = lang;
  }

  init() {
    this.isAdmin = sessionStorage.getItem('badminton_isAdmin') === 'true';
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
  }

  setupAdminToggleListener() {
    // Event delegation for admin triggers in the app
    document.body.addEventListener('click', (e) => {
      const toggleAdminBtn = e.target.closest('#btn-toggle-admin');
      if (toggleAdminBtn) {
        if (this.isAdmin) {
          this.logout();
        } else {
          this.showAdminLogin();
        }
      }
      
      const editBtn = e.target.closest('.btn-edit-match');
      if (editBtn && this.isAdmin) {
        const matchId = editBtn.getAttribute('data-match-id');
        this.openScoreModal(matchId);
      }
    });
  }

  logout() {
    this.isAdmin = false;
    sessionStorage.setItem('badminton_isAdmin', 'false');
    this.onUpdate();
    
    const notification = this.lang === 'vi' ? 'Đã đăng xuất quyền Admin' : 'Logged out from Admin Mode';
    this.showToast(notification, 'info');
  }

  showAdminLogin() {
    const container = document.getElementById('admin-modal-container');
    if (!container) return;

    const title = this.lang === 'vi' ? 'Đăng Nhập Admin' : 'Admin Login';
    const desc = this.lang === 'vi' ? 'Nhập mã truy cập để kích hoạt quyền nhập điểm:' : 'Enter passkey to enable score reporting:';
    const labelPass = this.lang === 'vi' ? 'Mã bảo mật' : 'Passkey';
    const btnLogin = this.lang === 'vi' ? 'Đăng Nhập' : 'Login';
    const btnCancel = this.lang === 'vi' ? 'Hủy' : 'Cancel';
    
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
    
    if (input.value === this.passkey) {
      this.isAdmin = true;
      sessionStorage.setItem('badminton_isAdmin', 'true');
      document.getElementById('admin-modal-container').classList.add('hidden');
      this.onUpdate();
      
      const text = this.lang === 'vi' ? 'Đăng nhập thành công! Quyền chỉnh sửa điểm đã mở.' : 'Login success! Admin score editor activated.';
      this.showToast(text, 'success');
    } else {
      errorDiv.textContent = this.lang === 'vi' ? 'Mã bảo mật không đúng. Hãy thử lại.' : 'Incorrect passkey. Please try again.';
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

    const isGroup = match.stage === 'Group Stage';
    const targetPoints = isGroup ? 15 : 21;
    const maxPoints = isGroup ? 21 : 30;

    const modalTitle = this.lang === 'vi' ? 'Nhập Điểm Trận Đấu' : 'Match Score Editor';
    const lblSets = this.lang === 'vi' ? 'Set' : 'Set';
    const lblT1 = match.team1;
    const lblT2 = match.team2;
    const btnSave = this.lang === 'vi' ? 'Lưu Kết Quả' : 'Save Score';
    const btnCancel = this.lang === 'vi' ? 'Hủy' : 'Cancel';
    const btnReset = this.lang === 'vi' ? 'Xóa Điểm' : 'Clear Score';

    const s1_t1 = match.sets[0] ? match.sets[0].t1 : '';
    const s1_t2 = match.sets[0] ? match.sets[0].t2 : '';
    const s2_t1 = match.sets[1] ? match.sets[1].t1 : '';
    const s2_t2 = match.sets[1] ? match.sets[1].t2 : '';
    const s3_t1 = match.sets[2] ? match.sets[2].t1 : '';
    const s3_t2 = match.sets[2] ? match.sets[2].t2 : '';

    container.innerHTML = `
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${modalTitle}</h3>
          <span class="badge ${isGroup ? 'bg-indigo' : 'bg-purple'}">${match.stage} (${targetPoints} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">${this.lang === 'vi' ? 'Đội 1' : 'Team 1'}</div>
          <div>VS</div>
          <div class="col-span-2 text-right">${this.lang === 'vi' ? 'Đội 2' : 'Team 2'}</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${lblT1}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${lblT2}</div>
        </div>

        <form id="score-form" class="space-y-4">
          <!-- Set 1 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${maxPoints}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${s1_t1}" required />
            </div>
            <div class="text-center font-bold text-muted">${lblSets} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${maxPoints}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${s1_t2}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${maxPoints}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${s2_t1}" required />
            </div>
            <div class="text-center font-bold text-muted">${lblSets} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${maxPoints}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${s2_t2}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${maxPoints}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${s3_t1}" />
            </div>
            <div class="text-center font-bold text-muted">${lblSets} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${maxPoints}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${s3_t2}" />
            </div>
          </div>

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
    
    // Automatically manage Set 3 input requirement based on first 2 sets
    const s1t1 = document.getElementById('s1-t1');
    const s1t2 = document.getElementById('s1-t2');
    const s2t1 = document.getElementById('s2-t1');
    const s2t2 = document.getElementById('s2-t2');
    const s3t1 = document.getElementById('s3-t1');
    const s3t2 = document.getElementById('s3-t2');
    const s3Row = document.getElementById('s3-row');

    const updateSet3Visibility = () => {
      const set1Res = this.validateSetScore(Number(s1t1.value), Number(s1t2.value), targetPoints);
      const set2Res = this.validateSetScore(Number(s2t1.value), Number(s2t2.value), targetPoints);
      
      if (set1Res.valid && set2Res.valid) {
        // If one team won both sets (e.g. 2-0), Set 3 is disabled
        if (set1Res.winner === set2Res.winner) {
          s3Row.classList.add('opacity-40');
          s3t1.disabled = true;
          s3t2.disabled = true;
          s3t1.value = '';
          s3t2.value = '';
          s3t1.removeAttribute('required');
          s3t2.removeAttribute('required');
        } else {
          // If sets are 1-1, Set 3 is required
          s3Row.classList.remove('opacity-40');
          s3t1.disabled = false;
          s3t2.disabled = false;
          s3t1.setAttribute('required', 'required');
          s3t2.setAttribute('required', 'required');
        }
      } else {
        s3Row.classList.add('opacity-40');
        s3t1.disabled = true;
        s3t2.disabled = true;
        s3t1.value = '';
        s3t2.value = '';
        s3t1.removeAttribute('required');
        s3t2.removeAttribute('required');
      }
    };

    [s1t1, s1t2, s2t1, s2t2].forEach(elem => {
      elem.addEventListener('input', updateSet3Visibility);
    });
    updateSet3Visibility();

    // Event hooks
    document.getElementById('btn-cancel-score').onclick = () => container.classList.add('hidden');
    document.getElementById('btn-clear-score').onclick = () => this.handleClearScore(matchId);
    document.getElementById('score-form').onsubmit = (e) => {
      e.preventDefault();
      this.handleSaveScore(match, targetPoints);
    };
  }

  // Set-level validation based on BWF Rules
  validateSetScore(t1, t2, targetPoints) {
    if (isNaN(t1) || isNaN(t2)) return { valid: false };
    if (t1 < 0 || t2 < 0) return { valid: false };
    
    const maxVal = Math.max(t1, t2);
    const minVal = Math.min(t1, t2);
    const diff = maxVal - minVal;
    const winner = t1 > t2 ? 1 : 2;

    // Must reach targetPoints (e.g. 15 or 21)
    if (maxVal < targetPoints) return { valid: false };

    // Standard win (e.g., 15-13 or less, 21-19 or less)
    if (maxVal === targetPoints && diff >= 2) {
      return { valid: true, winner };
    }

    // Deuce scenario
    const capLimit = targetPoints === 15 ? 21 : 30;
    if (maxVal > targetPoints) {
      // Must win by 2 points
      if (diff === 2 && maxVal < capLimit) {
        return { valid: true, winner };
      }
      // Reached the max point cap (e.g., 21-20 or 30-29)
      if (maxVal === capLimit && diff === 1) {
        return { valid: true, winner };
      }
    }

    return { valid: false };
  }

  handleClearScore(matchId) {
    if (confirm(this.lang === 'vi' ? 'Bạn có chắc chắn muốn xóa điểm trận này không?' : 'Are you sure you want to clear the score for this match?')) {
      this.state.updateMatchScore(matchId, [], "", "", "Scheduled");
      document.getElementById('score-modal-container').classList.add('hidden');
      this.showToast(this.lang === 'vi' ? 'Đã xóa điểm trận đấu.' : 'Match score cleared.', 'info');
    }
  }

  handleSaveScore(match, targetPoints) {
    const s1t1 = Number(document.getElementById('s1-t1').value);
    const s1t2 = Number(document.getElementById('s1-t2').value);
    const s2t1 = Number(document.getElementById('s2-t1').value);
    const s2t2 = Number(document.getElementById('s2-t2').value);
    const s3t1Input = document.getElementById('s3-t1');
    const s3t2Input = document.getElementById('s3-t2');
    
    const errorDiv = document.getElementById('score-error-msg');
    
    // 1. Validate Set 1
    const v1 = this.validateSetScore(s1t1, s1t2, targetPoints);
    if (!v1.valid) {
      this.showInputError(errorDiv, this.lang === 'vi' 
        ? `Set 1 chưa hợp lệ. Đội thắng phải đạt ít nhất ${targetPoints} điểm và hơn đối thủ 2 điểm (hoặc chạm mốc giới hạn ${targetPoints === 15 ? 21 : 30} điểm).` 
        : `Set 1 is invalid. Winner must reach ${targetPoints} and lead by 2, or reach cap limit of ${targetPoints === 15 ? 21 : 30} points.`
      );
      return;
    }

    // 2. Validate Set 2
    const v2 = this.validateSetScore(s2t1, s2t2, targetPoints);
    if (!v2.valid) {
      this.showInputError(errorDiv, this.lang === 'vi' 
        ? `Set 2 chưa hợp lệ. Đội thắng phải đạt ít nhất ${targetPoints} điểm và hơn đối thủ 2 điểm.` 
        : `Set 2 is invalid. Winner must reach at least ${targetPoints} and lead by 2.`
      );
      return;
    }

    const sets = [
      { t1: s1t1, t2: s1t2 },
      { t1: s2t1, t2: s2t2 }
    ];

    let t1WonSets = (v1.winner === 1 ? 1 : 0) + (v2.winner === 1 ? 1 : 0);
    let t2WonSets = (v1.winner === 2 ? 1 : 0) + (v2.winner === 2 ? 1 : 0);

    // 3. Process Set 3 if necessary
    if (t1WonSets === 1 && t2WonSets === 1) {
      const s3t1 = Number(s3t1Input.value);
      const s3t2 = Number(s3t2Input.value);
      
      const v3 = this.validateSetScore(s3t1, s3t2, targetPoints);
      if (!v3.valid) {
        this.showInputError(errorDiv, this.lang === 'vi' 
          ? `Tỉ số Set 1 & 2 là hòa 1-1. Bạn phải nhập thông tin Set 3 hợp lệ.` 
          : `Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.`
        );
        return;
      }
      
      sets.push({ t1: s3t1, t2: s3t2 });
      if (v3.winner === 1) t1WonSets++;
      else t2WonSets++;
    }

    // Update Match state
    const matchWinner = t1WonSets > t2WonSets ? match.team1 : match.team2;
    this.state.updateMatchScore(match.id, sets, t1WonSets, t2WonSets, "Completed");
    
    // Close modal & notify
    document.getElementById('score-modal-container').classList.add('hidden');
    this.showToast(this.lang === 'vi' ? 'Đã cập nhật kết quả thành công!' : 'Score updated successfully!', 'success');
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
}
