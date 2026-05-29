# 🏸 Gear Games Badminton Tournament 2026

A premium, interactive Single-Page Application (SPA) designed to manage, spectate, and umpire the **Gear Games Internal Badminton Tournament 2026**. Built with high-performance glassmorphic dark-mode aesthetics, custom CSS, and zero external backend dependencies.

![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red)

---

## ⚡ Core Features

### 🏠 Tournament Dashboard
- **Countdown Timer**: A sleek glassmorphic countdown module ticking down to the tournament start (May 31, 2026 at 13:30).
- **Match Progress**: Real-time tournament completion bar showing the percentage of finished matches.
- **Global Score Tracker**: Dynamically aggregates total points scored across all played sets.
- **Leaderboard Previews**: Quick-access cards displaying the top-performing teams.

### 📊 Standings Leaderboard
- **5-Point Tie-Breaker Engine**: Calculates standings based on official tournament rules: Match Wins → Net Sets → Head-to-Head → Net Points → Drawing of Lots.
- **Visual Playoff Cutoffs**: Top 4 qualifying teams feature a glowing green neon indicator (`SEMIS`), while eliminated teams are faded out (`OUT`).
- **Completion Badges**: Automatically tags teams who have completed all their round-robin group stage matches.

### 📅 Fixtures & Esports Tickets
- **Visual Design**: Reimagines match scorecards as high-contrast Esports match tickets with category-colored side borders (Volt for Men's Doubles, Cyan for Mixed's Doubles).
- **Live Search**: Fast, responsive input to instantly filter matches by team name, player name, pitch name, or tournament stage.
- **Status Filter**: Toggle pills to switch between All, Scheduled, or Completed fixtures.

### 🌳 Connected Playoff Brackets
- **Modern Curved Connectors**: An interactive tournament tree featuring sleek CSS curved lines that adapt dynamically to viewport and column heights.
- **Auto-Promotion**: Automatically promotes group stage winners/runners-up to Semi-finals, Grand Finals, and Bronze Match spots.
- **Path Highlighting**: Hover or tap on any team's name to highlight their tournament path throughout the bracket tree.

### 🏆 Honors Podium (Bảng Vàng)
- **3D columns layout**: Silver column on the left, tallest Gold column in the center with a floating crown (`👑`), and Bronze column on the right.
- **Pewter Fourth-Place Card**: Pebble-style glassmorphic badge denoting the pewter 🎖️ **Honorable Mention** award.
- **Avatar Halos**: Avatars are framed inside circular metallic glowing rings corresponding to their tier.
- **Emoji Medal Icons**: Overlaps avatars with clean, high-contrast emoji medal badges (`🥇`, `🥈`, `🥉`, `🎖️`).
- **Confetti Celebration**: Spawns an animated canvas confetti shower upon tournament completion.

### 👥 Teams Directory
- **Performance Telemetry**: Displays overall tournament statistics (Played, Won, Lost, Win%, Standing Points) calculated across all matches including playoffs.
- **Playoff-Aware Rankings**: Assigns overall tournament placement (Rank #1-4 determined by Grand Final and Bronze Match outcomes, falling back to group standings).
- **Rank-based Card Sorting**: Automatically sorts profile cards on the Teams directory page so the highest-ranking teams appear first.
- **Chronological Form Guide**: Colorful capsule pills showing recent match results (W/L) with detailed hover tooltips.

### 📘 Doubles Service Simulator
- **Visual Court Graphics**: Inline interactive SVG badminton court with service boundaries.
- **Rules Engine**: BWF-compliant doubles serve tracking. Clicking court zones swaps server/receiver positions based on even/odd scores.
- **Shuttlecock Animation**: Displays parabolic flight paths between courts using SVG motion paths.

### ⚡ Live Referee Sync Engine & Cloud Sync
- **Firebase Realtime Database**: Synchronizes the entire tournament state (players, teams, matches, settings) and active live match data across all client devices.
- **Local Fallback**: Utilizes localStorage to store scores and state if offline or if Firebase is unavailable, ensuring offline resilience.
- **BroadcastChannel API**: Synchronizes referee console actions locally between browser tabs in real-time.

### 🔐 Admin & Referee Console
- **Passkey Gateway**: Restricts access based on referee pitch roles (`ref1`, `ref2`, `ref3`, `ref4`) or Super Admin credentials (`goodmintongg2026`).
- **Live Umpiring Interface**: Referee console featuring massive tap-to-increment overlays, score undo buttons, and deuce validation.

---

## 📁 Project Structure & Codebase Architecture

```
badminton_tournament/
├── index.html              # Main SPA application structure
├── style.css               # Premium design system (3100+ lines of CSS variables and keyframes)
├── package.json            # Vite configuration and scripts
├── vite.config.js          # Vite custom port configuration
├── js/
│   ├── app.js              # Coordinator managing tab routing, search filters, and modals
│   ├── state.js            # Core state engine calculating standings and brackets
│   ├── data.js             # Initial matches schedule and teams database
│   ├── firebase-config.js  # Firebase configuration and connection details
│   ├── firebase-service.js # Firebase Realtime Database sync service layer
│   ├── admin.js            # Login handler and referee role dispatcher
│   ├── sync.js             # BroadcastChannel sync layer
│   ├── umpire.js           # Live referee scorekeeper overlay console
│   └── court-simulator.js  # Interactive SVG doubles rules simulator
├── public/                 # Static assets directory
│   └── teams/              # Team avatar profiles and badges (MD-1 to MD-5, XD-1 to XD-5 PNGs)
└── dist/                   # Bundled production builds (compiled output)
```

---

## 🚀 Getting Started

### Installation
1. Install [Node.js](https://nodejs.org/) (version 18+ recommended).
2. Install package dependencies:
   ```bash
   npm install
   ```

### Running Locally
Run the Vite development server:
```bash
npm run dev
```
The app will be available locally (default port is `http://localhost:3000`).

### Production Build
Build a minimized production bundle:
```bash
npm run build
```

---

## 🔑 Portal Access Passkeys

To access the referee scoreboards or the admin panel:
1. Click the **🔐 Portal Login** button in the top navigation bar.
2. Enter a valid passkey:
   - **Super Admin**: `goodmintongg2026` (access to all scorekeeping and override features)
   - **Pitch 1 Umpire**: `ref1` (locked to Pitch 1 matches)
   - **Pitch 2 Umpire**: `ref2` (locked to Pitch 2 matches)
   - **Pitch 3 Umpire**: `ref3` (locked to Pitch 3 matches)
   - **Pitch 4 Umpire**: `ref4` (locked to Pitch 4 matches)

---

## 📄 License

This project is **private** and built for internal use by the Gear Games Badminton Committee.

© 2026 IrrationaL & Gear Games Badminton Committee. All rights reserved.
