export class CourtSimulator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isEven = true;
    this.servingTeam = 'A'; // 'A' or 'B'
    this.serverIndex = 0; // 0 or 1
    this.receiverIndex = 0; // 0 or 1
    this.lang = 'vi';
    
    // Team players mock data
    this.teamAPlayers = ["Player 1", "Player 2"];
    this.teamBPlayers = ["Player 3", "Player 4"];
    
    this.init();
  }

  setLanguage(lang) {
    this.lang = lang;
    this.render();
  }

  setScoreParity(isEven) {
    this.isEven = isEven;
    this.render();
  }

  setTeams(teamA, teamB) {
    this.teamAPlayers = teamA;
    this.teamBPlayers = teamB;
    this.render();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  render() {
    if (!this.container) return;
    
    // Server positions:
    // Even score: Server is in RIGHT court.
    // Odd score: Server is in LEFT court.
    // Bottom side (Team A) Right court is on bottom-right of court, Left is bottom-left.
    // Top side (Team B) Right court is on top-left of court (relative to spectator), Left is top-right.
    
    const serverName = this.isEven ? this.teamAPlayers[0] : this.teamAPlayers[1];
    const partnerName = this.isEven ? this.teamAPlayers[1] : this.teamAPlayers[0];
    
    // The receiver is diagonally opposite.
    // If server is in right court (bottom-right), receiver must be in their right court (top-left on screen).
    // If server is in left court (bottom-left), receiver must be in their left court (top-right on screen).
    const receiverName = this.isEven ? this.teamBPlayers[0] : this.teamBPlayers[1];
    const receiverPartnerName = this.isEven ? this.teamBPlayers[1] : this.teamBPlayers[0];

    const labelScoreEven = this.lang === 'vi' ? 'Điểm Chẵn (0, 2, 4...)' : 'Even Score (0, 2, 4...)';
    const labelScoreOdd = this.lang === 'vi' ? 'Điểm Lẻ (1, 3, 5...)' : 'Odd Score (1, 3, 5...)';
    const labelCourtRules = this.lang === 'vi' ? 'Mô Phỏng Luật Giao Cầu Đôi' : 'Doubles Service Simulator';
    const labelExplanation = this.lang === 'vi' 
      ? `Đội giao cầu (Phía dưới) có điểm số **${this.isEven ? 'CHẴN' : 'LẺ'}**:` 
      : `Serving Team (Bottom) has an **${this.isEven ? 'EVEN' : 'ODD'}** score:`;

    const explanationDetail = this.lang === 'vi'
      ? `<ul>
          <li><strong>Người giao cầu:</strong> <span class="highlight-volt">${serverName}</span> giao cầu từ ô bên <strong>${this.isEven ? 'PHẢI' : 'TRÁI'}</strong>.</li>
          <li><strong>Người nhận cầu:</strong> <span class="highlight-cyan">${receiverName}</span> đứng ô đối diện nhận cầu.</li>
          <li><strong>Vùng cầu hợp lệ:</strong> Ô giao cầu đôi (rộng hơn nhưng ngắn hơn vùng giao đơn) được tô viền sáng.</li>
         </ul>`
      : `<ul>
          <li><strong>Server:</strong> <span class="highlight-volt">${serverName}</span> serves from the <strong>${this.isEven ? 'RIGHT' : 'LEFT'}</strong> court.</li>
          <li><strong>Receiver:</strong> <span class="highlight-cyan">${receiverName}</span> stands in the diagonal court to receive.</li>
          <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
         </ul>`;

    // SVG coordinates mapping:
    // Court size: width = 300, height = 500
    // Net: y = 250
    // Left boundary: x = 20, Right boundary: x = 280 (width = 260)
    // Singles left: x = 40, Singles right: x = 260
    // Short service lines: y = 190 (top), y = 310 (bottom)
    // Doubles long service lines: y = 60 (top), y = 440 (bottom)
    // Back boundary lines: y = 40 (top), y = 460 (bottom)
    
    // Coordinates based on server position (Bottom side):
    const serverX = this.isEven ? 210 : 90;
    const serverY = 385;
    
    const partnerX = this.isEven ? 90 : 210;
    const partnerY = 440;
    
    const receiverX = this.isEven ? 90 : 210;
    const receiverY = 115;
    
    const receiverPartnerX = this.isEven ? 210 : 90;
    const receiverPartnerY = 60;
    
    // Active service court path (Bottom half):
    const serverBoxHighlight = this.isEven 
      ? `M 150,310 L 280,310 L 280,440 L 150,440 Z` // Bottom-right
      : `M 20,310 L 150,310 L 150,440 L 20,440 Z`; // Bottom-left
      
    // Target receiving court path (Top half):
    const receiverBoxHighlight = this.isEven
      ? `M 20,60 L 150,60 L 150,190 L 20,190 Z` // Top-left on screen (diagonal to bottom-right)
      : `M 150,60 L 280,60 L 280,190 L 150,190 Z`; // Top-right on screen (diagonal to bottom-left)

    // Dash shuttle path
    const startShuttleX = serverX;
    const startShuttleY = serverY - 10;
    const endShuttleX = receiverX;
    const endShuttleY = receiverY + 10;
    const cpX = (startShuttleX + endShuttleX) / 2 + 30; // curve control point
    const cpY = (startShuttleY + endShuttleY) / 2 - 40;

    this.container.innerHTML = `
      <div class="court-sim-card glass-card">
        <h3 class="court-title flex items-center justify-between">
          <span>${labelCourtRules}</span>
          <div class="sim-lang-badge">BWF RULES</div>
        </h3>
        
        <div class="court-sim-grid">
          <div class="court-visual-wrapper">
            <svg class="court-svg" viewBox="0 0 300 500" width="100%" height="100%">
              <defs>
                <filter id="neon-glow-volt" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="neon-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <!-- Court Outer Boundary -->
              <rect x="20" y="40" width="260" height="420" class="court-line outer" />
              
              <!-- Singles Sidelines (Inner) -->
              <line x1="40" y1="40" x2="40" y2="460" class="court-line singles-side" />
              <line x1="260" y1="40" x2="260" y2="460" class="court-line singles-side" />
              
              <!-- Center Line -->
              <line x1="150" y1="40" x2="150" y2="190" class="court-line center" />
              <line x1="150" y1="310" x2="150" y2="460" class="court-line center" />
              
              <!-- Short Service Lines -->
              <line x1="20" y1="190" x2="280" y2="190" class="court-line service-short" />
              <line x1="20" y1="310" x2="280" y2="310" class="court-line service-short" />
              
              <!-- Doubles Long Service Lines -->
              <line x1="20" y1="60" x2="280" y2="60" class="court-line service-long-doubles" />
              <line x1="20" y1="440" x2="280" y2="440" class="court-line service-long-doubles" />
              
              <!-- Net Line -->
              <line x1="10" y1="250" x2="290" y2="250" class="court-line net" />
              <!-- Net Post Left & Right -->
              <circle cx="10" cy="250" r="4" class="net-post" />
              <circle cx="290" cy="250" r="4" class="net-post" />
              
              <!-- HIGHLIGHT ACTIVE SERVING BOX -->
              <path d="${serverBoxHighlight}" class="svg-highlight-box serving" filter="url(#neon-glow-volt)" />
              
              <!-- HIGHLIGHT TARGET RECEIVING BOX -->
              <path d="${receiverBoxHighlight}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path d="M ${startShuttleX},${startShuttleY} Q ${cpX},${cpY} ${endShuttleX},${endShuttleY}" class="svg-shuttle-path" />
              <circle cx="${endShuttleX}" cy="${endShuttleY}" r="5" class="svg-shuttle" filter="url(#neon-glow-cyan)" />

              <!-- Player Avatars Bottom (Team A) -->
              <!-- Server -->
              <g class="player-avatar server">
                <circle cx="${serverX}" cy="${serverY}" r="14" class="avatar-bg volt" />
                <text x="${serverX}" y="${serverY + 4}" class="avatar-text">S</text>
              </g>
              <text x="${serverX}" y="${serverY + 28}" class="svg-player-name text-volt">${serverName.split(' ')[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${partnerX}" cy="${partnerY}" r="12" class="avatar-bg neutral" />
                <text x="${partnerX}" y="${partnerY + 4}" class="avatar-text">P</text>
              </g>
              <text x="${partnerX}" y="${partnerY + 26}" class="svg-player-name text-muted">${partnerName.split(' ')[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${receiverX}" cy="${receiverY}" r="14" class="avatar-bg cyan" />
                <text x="${receiverX}" y="${receiverY + 4}" class="avatar-text">R</text>
              </g>
              <text x="${receiverX}" y="${receiverY - 20}" class="svg-player-name text-cyan">${receiverName.split(' ')[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${receiverPartnerX}" cy="${receiverPartnerY}" r="12" class="avatar-bg neutral" />
                <text x="${receiverPartnerX}" y="${receiverPartnerY + 4}" class="avatar-text">P</text>
              </g>
              <text x="${receiverPartnerX}" y="${receiverPartnerY - 18}" class="svg-player-name text-muted">${receiverPartnerName.split(' ')[0]}</text>
            </svg>
          </div>
          
          <div class="court-controls-wrapper flex flex-col justify-between">
            <div>
              <div class="selector-title">${this.lang === 'vi' ? 'Trạng Thái Điểm Số' : 'Score Status'}</div>
              <div class="sim-toggle-buttons grid grid-cols-2 gap-2 mb-4">
                <button class="btn-toggle-sim ${this.isEven ? 'active glow-volt' : ''}" id="sim-btn-even">
                  ${labelScoreEven}
                </button>
                <button class="btn-toggle-sim ${!this.isEven ? 'active glow-cyan' : ''}" id="sim-btn-odd">
                  ${labelScoreOdd}
                </button>
              </div>
              
              <div class="sim-explanation">
                <div class="exp-header flex items-center gap-2 mb-2">
                  <span class="indicator-dot pulse-${this.isEven ? 'volt' : 'cyan'}"></span>
                  <span>${labelExplanation}</span>
                </div>
                <div class="exp-details">${explanationDetail}</div>
              </div>
            </div>
            
            <div class="court-sim-footer mt-4 p-3 glass-panel rounded-lg text-xs text-muted">
              ${this.lang === 'vi' 
                ? '💡 <strong>Gợi ý:</strong> Vị trí giao cầu đổi bên khi và chỉ khi đội giao cầu thắng pha cầu đó và ghi điểm chẵn/lẻ. Đội nhận cầu không thay đổi vị trí khi thắng điểm.'
                : '💡 <strong>Tip:</strong> Players only swap courts when their team wins a point on their own serve. The receiving team stays in their positions.'}
            </div>
          </div>
        </div>
      </div>
    `;

    // Add event listeners
    document.getElementById('sim-btn-even')?.addEventListener('click', () => this.setScoreParity(true));
    document.getElementById('sim-btn-odd')?.addEventListener('click', () => this.setScoreParity(false));
  }
}
