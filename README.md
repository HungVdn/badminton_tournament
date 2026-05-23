# 🏸 Gear Games Badminton Tournament 2026

A premium, real-time tournament dashboard for the **Gear Games Internal Badminton Tournament 2026**. Built as a fully client-side Single-Page Application with glassmorphic dark-mode aesthetics, bilingual support (Vietnamese/English), and zero backend dependencies.

![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

---

## ✨ Features

### 🏠 Dashboard
- Live countdown timer to tournament kick-off (May 31, 2026 @ 13:30)
- Real-time match completion progress bar with percentage
- Total points scored tracker across all matches
- Mini leaderboard previews for Men's Doubles & Mixed's Doubles

### 📊 Standings Leaderboard
- Dynamic 5-criteria ranking engine (Wins → Net Sets → Head-to-Head → Net Points → Lots)
- Automatic tie-breaker resolution
- Visual playoff qualification cutoff — top 4 rows highlighted with neon category-colored left borders; eliminated rows dimmed
- Completion badges when a team finishes all group matches

### 📅 Fixtures & Schedule
- BWF-style horizontal scorecard layout with vertical opponent stacking
- Stage-separated sections (Grand Final → Bronze → Semi-finals → Group Stage)
- **Live search bar** — filter matches by team name, player name, pitch, or stage
- **Status filter pills** — toggle between All / Scheduled / Completed
- 2-column responsive grid (MD | XD) on wide screens, single column on mobile

### 🌳 Playoff Bracket Tree
- Auto-populated semi-finals and finals from group standings
- Horizontal scrollable bracket visualization
- Integrated "Bảng Vàng" (Hall of Fame) award column with Gold/Silver/Bronze/4th nodes

### 🏆 Bảng Vàng (Honors Podium)
- 3D-style podium steps (Gold center, Silver left, Bronze right)
- **3D hover lift effects** with category-colored glow shadows
- **Canvas confetti celebration** triggered on page load
- Responsive mobile reflow into vertical stacked award cards

### 📘 Doubles Service Simulator
- Interactive SVG court diagram with BWF-compliant doubles rules
- **Click directly on court boxes** to toggle Even/Odd service positions
- Animated shuttlecock parabolic flight path via SVG `<animateMotion>`
- Real-time server/receiver position highlighting with neon glow filters

### 👥 Teams Directory
- Detailed performance telemetry per team (Played, Won, Lost, Win%, Standing Points)
- Net Sets and Net Points ratios with dynamic colored badges (+green / -rose)
- **Real-time standings rank badge** (#1, #2, etc.) on each card
- **Match form guide** (W/L pills) with hover tooltips showing match details
- Category-themed ambient glow backdrops (volt for MD, cyan for XD)

### 🔐 Admin Score Manager
- Passkey-protected admin mode (`admin2026`)
- Set-by-set score input with BWF validation (deuce rules, 30-point caps, best-of-3)
- Instant standings recalculation and bracket propagation on save

### 🌐 Bilingual Support
- Full Vietnamese (VI) and English (EN) toggle for all labels, rules, and UI elements

---

## 🛠️ Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Bundler** | [Vite](https://vitejs.dev/) 5.2 |
| **Language** | Vanilla ES6+ JavaScript (Modules) |
| **Styling** | Custom CSS with CSS Variables, Glassmorphism, Neon Glows |
| **Typography** | [Outfit](https://fonts.google.com/specimen/Outfit) (Headings), [Inter](https://fonts.google.com/specimen/Inter) (Body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Telemetry) |
| **Persistence** | `localStorage` (zero backend, fully offline-capable) |
| **Graphics** | Inline SVG icons, SVG court simulator, HTML5 Canvas confetti |

---

## 📁 Project Structure

```
badminton_tournament/
├── index.html              # Main SPA entry point
├── style.css               # Design system (1600+ lines of premium styles)
├── package.json            # Vite dev dependencies
├── vite.config.js          # Vite configuration
├── js/
│   ├── app.js              # Main coordinator (routing, rendering, tabs)
│   ├── state.js            # Tournament state engine (standings, brackets)
│   ├── data.js             # Player/team/match data + regulations
│   ├── admin.js            # Score entry panel with BWF validation
│   └── court-simulator.js  # Interactive SVG doubles service simulator
└── dist/                   # Production build output
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ installed

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd badminton_tournament

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000` (or the next available port).

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` folder — ready for static hosting.

### Preview Production Build

```bash
npm run preview
```

---

## 🌍 Deployment

This is a **static site** — deploy anywhere that serves HTML/CSS/JS:

### Vercel (Recommended)
1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy** — live in under 1 minute

### Netlify
1. Connect your GitHub repo on [netlify.com](https://netlify.com)
2. Set build command to `npm run build` and publish directory to `dist`

### GitHub Pages
1. Run `npm run build`
2. Deploy the `dist/` folder using `gh-pages` or manually

---

## 🔑 Admin Access

To enter Admin mode and edit match scores:

1. Click the **🔐 Đăng Nhập Admin** button in the header
2. Enter the passkey: `admin2026`
3. Click the ✏️ edit button on any match card to input set-by-set scores
4. Standings and brackets update automatically on save

---

## 📋 Tournament Format

| Phase | Format | Points per Set |
|:------|:-------|:--------------|
| **Group Stage** | Round-Robin (5 teams per category) | 15 points/set |
| **Semi-finals** | Single Elimination (Top 4 advance) | 21 points/set |
| **Bronze Match** | Single Match | 21 points/set |
| **Grand Final** | Single Match | 21 points/set |

**Ranking Priority:** Match Wins → Net Sets → Head-to-Head → Net Points → Drawing of Lots

---

## 📄 License

This project is **private** and built for internal use by the Gear Games Badminton Committee.

© 2026 IrrationaL & Gear Games Badminton Committee. All rights reserved.
