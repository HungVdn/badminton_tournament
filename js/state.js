import { INITIAL_PLAYERS, INITIAL_TEAMS, INITIAL_MATCHES } from './data.js';
import { FirebaseService } from './firebase-service.js';

export class TournamentState {
  constructor() {
    this.players = [];
    this.teams = [];
    this.matches = [];
    this.scoreConfig = {};
    this.listeners = [];
    this.init();
  }

  init() {
    const savedPlayers = localStorage.getItem('badminton_players');
    const savedTeams = localStorage.getItem('badminton_teams');
    const savedMatches = localStorage.getItem('badminton_matches');
    const savedScoreConfig = localStorage.getItem('badminton_scoreConfig');

    this.players = savedPlayers ? JSON.parse(savedPlayers) : [...INITIAL_PLAYERS];
    this.teams = savedTeams ? JSON.parse(savedTeams) : [...INITIAL_TEAMS];

    const migratePitches = (matchesList) => {
      if (!Array.isArray(matchesList)) return { updated: matchesList, changed: false };
      let changed = false;
      const updated = matchesList.map(m => {
        let pitch = m.pitch;
        if (pitch === "Pitch 15") { pitch = "Pitch 1"; changed = true; }
        else if (pitch === "Pitch 16") { pitch = "Pitch 2"; changed = true; }
        else if (pitch === "Pitch 20") { pitch = "Pitch 3"; changed = true; }
        else if (pitch === "Pitch 21") { pitch = "Pitch 4"; changed = true; }
        return { ...m, pitch };
      });
      return { updated, changed };
    };

    let loadedMatches = savedMatches ? JSON.parse(savedMatches) : [...INITIAL_MATCHES];
    const initialMigration = migratePitches(loadedMatches);
    this.matches = initialMigration.updated;
    if (initialMigration.changed) {
      this.saveToStorageLocal();
    }

    const defaultScoreConfig = {
      "Men's Doubles": {
        "Group Stage": { targetPoints: 15, maxPoints: 21, setsToWin: 2 },
        "Semi-finals": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Grand Final": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Bronze Match": { targetPoints: 21, maxPoints: 30, setsToWin: 2 }
      },
      "Mixed's Doubles": {
        "Group Stage": { targetPoints: 15, maxPoints: 21, setsToWin: 2 },
        "Semi-finals": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Grand Final": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Bronze Match": { targetPoints: 21, maxPoints: 30, setsToWin: 2 }
      }
    };

    let parsed = null;
    if (savedScoreConfig) {
      try {
        parsed = JSON.parse(savedScoreConfig);
      } catch (e) {
        parsed = null;
      }
    }

    if (parsed) {
      if (parsed["Group Stage"] && !parsed["Men's Doubles"]) {
        this.scoreConfig = {
          "Men's Doubles": JSON.parse(JSON.stringify(parsed)),
          "Mixed's Doubles": JSON.parse(JSON.stringify(parsed))
        };
      } else {
        this.scoreConfig = parsed;
      }
    } else {
      this.scoreConfig = defaultScoreConfig;
    }

    this.propagateKnockoutTeams();
    this.saveToStorageLocal();

    // Set up real-time Firebase syncing
    if (FirebaseService.isAvailable()) {
      try {
        FirebaseService.onStateChange((data) => {
          if (data) {
            let changed = false;
            if (data.matches) {
              const migration = migratePitches(data.matches);
              if (JSON.stringify(this.matches) !== JSON.stringify(migration.updated)) {
                this.matches = migration.updated;
                changed = true;
              }
            }
            if (data.scoreConfig && JSON.stringify(this.scoreConfig) !== JSON.stringify(data.scoreConfig)) {
              this.scoreConfig = data.scoreConfig;
              changed = true;
            }
            if (data.players && JSON.stringify(this.players) !== JSON.stringify(data.players)) {
              this.players = data.players;
              changed = true;
            }
            if (data.teams && JSON.stringify(this.teams) !== JSON.stringify(data.teams)) {
              this.teams = data.teams;
              changed = true;
            }
            if (changed) {
              this.propagateKnockoutTeams();
              this.saveToStorageLocal();
              this.notifyListeners();
            }
          } else {
            // First run: Upload current local state to Firebase as initial value
            this.saveToFirebase();
          }
        });
      } catch (e) {
        console.error("❌ Failed to establish real-time Firebase sync listener:", e);
      }
    }
  }

  saveToStorageLocal() {
    localStorage.setItem('badminton_players', JSON.stringify(this.players));
    localStorage.setItem('badminton_teams', JSON.stringify(this.teams));
    localStorage.setItem('badminton_matches', JSON.stringify(this.matches));
    localStorage.setItem('badminton_scoreConfig', JSON.stringify(this.scoreConfig));
  }

  saveToStorage() {
    this.saveToStorageLocal();
    this.saveToFirebase();
  }

  saveToFirebase() {
    if (FirebaseService.isAvailable()) {
      FirebaseService.saveState({
        players: this.players,
        teams: this.teams,
        matches: this.matches,
        scoreConfig: this.scoreConfig
      });
    }
  }

  resetToDefault() {
    localStorage.removeItem('badminton_players');
    localStorage.removeItem('badminton_teams');
    localStorage.removeItem('badminton_matches');
    localStorage.removeItem('badminton_scoreConfig');
    this.players = [...INITIAL_PLAYERS];
    this.teams = [...INITIAL_TEAMS];
    this.matches = INITIAL_MATCHES.map(m => ({
      ...m,
      status: 'Scheduled',
      score1: '',
      score2: '',
      sets: [],
      winner: ''
    }));
    this.scoreConfig = {
      "Men's Doubles": {
        "Group Stage": { targetPoints: 15, maxPoints: 21, setsToWin: 2 },
        "Semi-finals": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Grand Final": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Bronze Match": { targetPoints: 21, maxPoints: 30, setsToWin: 2 }
      },
      "Mixed's Doubles": {
        "Group Stage": { targetPoints: 15, maxPoints: 21, setsToWin: 2 },
        "Semi-finals": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Grand Final": { targetPoints: 21, maxPoints: 30, setsToWin: 2 },
        "Bronze Match": { targetPoints: 21, maxPoints: 30, setsToWin: 2 }
      }
    };
    this.propagateKnockoutTeams();
    this.saveToStorageLocal();
    
    if (FirebaseService.isAvailable()) {
      FirebaseService.resetAll({
        players: this.players,
        teams: this.teams,
        matches: this.matches,
        scoreConfig: this.scoreConfig
      });
    }
    
    this.notifyListeners();
  }

  getScoreConfig(category, stage) {
    let cat = category;
    let stg = stage;
    if (!stage) {
      stg = category;
      cat = "Men's Doubles";
    }
    if (this.scoreConfig[cat] && this.scoreConfig[cat][stg]) {
      return this.scoreConfig[cat][stg];
    }
    if (this.scoreConfig[stg]) {
      return this.scoreConfig[stg];
    }
    return { targetPoints: 21, maxPoints: 30, setsToWin: 2 };
  }

  updateScoreConfig(category, stage, config) {
    if (!this.scoreConfig[category]) {
      this.scoreConfig[category] = {};
    }
    this.scoreConfig[category][stage] = {
      targetPoints: Number(config.targetPoints),
      maxPoints: Number(config.maxPoints),
      setsToWin: Number(config.setsToWin)
    };
    this.saveToStorage();
    this.notifyListeners();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this));
  }

  updateMatchScore(matchId, sets, score1, score2, status) {
    const match = this.matches.find(m => m.id === matchId);
    if (!match) return false;

    match.sets = sets;
    match.score1 = score1;
    match.score2 = score2;
    match.status = status;

    if (status === 'Completed') {
      match.winner = score1 > score2 ? match.team1 : match.team2;
    } else {
      match.winner = '';
    }

    // After updating a match score, we recalculate/propagate updates
    this.propagateKnockoutTeams();
    this.saveToStorage();
    this.notifyListeners();
    return true;
  }

  calculateStandings(category) {
    const categoryTeams = this.teams.filter(t => t.category === category);
    const categoryMatches = this.matches.filter(m => m.category === category && m.stage === 'Group Stage');

    // Initialize stats
    const stats = {};
    categoryTeams.forEach(team => {
      stats[team.name] = {
        name: team.name,
        teamId: team.id,
        player1: team.player1,
        player2: team.player2,
        played: 0,
        won: 0,
        lost: 0,
        points: 0, // Match wins
        setsWon: 0,
        setsLost: 0,
        netSets: 0,
        pointsWon: 0,
        pointsLost: 0,
        netPoints: 0
      };
    });

    // Populate stats from completed group matches
    categoryMatches.forEach(match => {
      if (match.status !== 'Completed') return;

      const t1 = match.team1;
      const t2 = match.team2;

      // Check if both teams exist in stats
      if (!stats[t1] || !stats[t2]) return;

      stats[t1].played += 1;
      stats[t2].played += 1;

      const s1 = Number(match.score1) || 0;
      const s2 = Number(match.score2) || 0;

      stats[t1].setsWon += s1;
      stats[t1].setsLost += s2;
      stats[t2].setsWon += s2;
      stats[t2].setsLost += s1;

      if (s1 > s2) {
        stats[t1].won += 1;
        stats[t1].points += 1;
        stats[t2].lost += 1;
      } else {
        stats[t2].won += 1;
        stats[t2].points += 1;
        stats[t1].lost += 1;
      }

      // Sum points scored in each set
      match.sets.forEach(set => {
        const p1 = Number(set.t1) || 0;
        const p2 = Number(set.t2) || 0;
        stats[t1].pointsWon += p1;
        stats[t1].pointsLost += p2;
        stats[t2].pointsWon += p2;
        stats[t2].pointsLost += p1;
      });
    });

    // Calculate net values
    Object.values(stats).forEach(teamStat => {
      teamStat.netSets = teamStat.setsWon - teamStat.setsLost;
      teamStat.netPoints = teamStat.pointsWon - teamStat.pointsLost;
    });

    const standings = Object.values(stats);

    // Custom sorting function implementing the 5 tournament criteria
    standings.sort((a, b) => {
      // 1. Total Points (Match Wins)
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      // 2. Net Sets (Sets difference)
      if (b.netSets !== a.netSets) {
        return b.netSets - a.netSets;
      }

      // 3. Head-to-Head Result (Only if exactly 2 teams are tied on points and net sets)
      // First, check if there are other teams with the exact same points and netSets
      const identicalTies = standings.filter(t => t.points === a.points && t.netSets === a.netSets);
      if (identicalTies.length === 2) {
        const directMatch = categoryMatches.find(m => 
          m.status === 'Completed' && 
          ((m.team1 === a.name && m.team2 === b.name) || (m.team1 === b.name && m.team2 === a.name))
        );
        if (directMatch) {
          if (directMatch.winner === a.name) return -1;
          if (directMatch.winner === b.name) return 1;
        }
      }

      // 4. Net Points (Points difference)
      if (b.netPoints !== a.netPoints) {
        return b.netPoints - a.netPoints;
      }

      // 5. Drawing of Lots (fallback)
      return a.name.localeCompare(b.name);
    });

    return standings;
  }

  isGroupStageComplete(category) {
    const groupMatches = this.matches.filter(m => m.category === category && m.stage === 'Group Stage');
    return groupMatches.length > 0 && groupMatches.every(m => m.status === 'Completed');
  }

  propagateKnockoutTeams() {
    const categories = ["Men's Doubles", "Mixed's Doubles"];

    categories.forEach(cat => {
      const isComplete = this.isGroupStageComplete(cat);
      const standings = this.calculateStandings(cat);

      // Determine team names or placeholders
      const t1 = isComplete ? standings[0].name : `1st Place ${cat === "Men's Doubles" ? "MD" : "XD"}`;
      const t2 = isComplete ? standings[1].name : `2nd Place ${cat === "Men's Doubles" ? "MD" : "XD"}`;
      const t3 = isComplete ? standings[2].name : `3rd Place ${cat === "Men's Doubles" ? "MD" : "XD"}`;
      const t4 = isComplete ? standings[3].name : `4th Place ${cat === "Men's Doubles" ? "MD" : "XD"}`;

      // We need to manage the knockout matches.
      // Let's check if knockout matches already exist in matches. If not, initialize them!
      const catSuffix = cat === "Men's Doubles" ? "MD" : "XD";
      const sf1Id = `SF1-${catSuffix}`;
      const sf2Id = `SF2-${catSuffix}`;
      const fId = `F-${catSuffix}`;
      const bId = `B-${catSuffix}`;

      let sf1 = this.matches.find(m => m.id === sf1Id);
      let sf2 = this.matches.find(m => m.id === sf2Id);
      let fMatch = this.matches.find(m => m.id === fId);
      let bMatch = this.matches.find(m => m.id === bId);

      const sfTime = "4:30 - 5:10";
      const finalTime = cat === "Men's Doubles" ? "5:15 - 5:55" : "6:00 - 6:40";

      // 1. Semi-finals
      if (!sf1) {
        sf1 = {
          id: sf1Id,
          category: cat,
          stage: "Semi-finals",
          pitch: cat === "Men's Doubles" ? "Pitch 1" : "Pitch 3",
          time: sfTime,
          team1: t1,
          team2: t4,
          score1: "",
          score2: "",
          sets: [],
          status: "Scheduled"
        };
        this.matches.push(sf1);
      } else {
        // Override team names if match is not completed OR if it contains placeholder text (e.g. 'Place')
        if (sf1.status !== 'Completed' || (sf1.team1 && sf1.team1.includes('Place')) || (sf1.team2 && sf1.team2.includes('Place'))) {
          sf1.team1 = t1;
          sf1.team2 = t4;
        }
        sf1.pitch = cat === "Men's Doubles" ? "Pitch 1" : "Pitch 3";
        sf1.time = sfTime;
      }

      if (!sf2) {
        sf2 = {
          id: sf2Id,
          category: cat,
          stage: "Semi-finals",
          pitch: cat === "Men's Doubles" ? "Pitch 2" : "Pitch 4",
          time: sfTime,
          team1: t2,
          team2: t3,
          score1: "",
          score2: "",
          sets: [],
          status: "Scheduled"
        };
        this.matches.push(sf2);
      } else {
        if (sf2.status !== 'Completed' || (sf2.team1 && sf2.team1.includes('Place')) || (sf2.team2 && sf2.team2.includes('Place'))) {
          sf2.team1 = t2;
          sf2.team2 = t3;
        }
        sf2.pitch = cat === "Men's Doubles" ? "Pitch 2" : "Pitch 4";
        sf2.time = sfTime;
      }

      // Calculate winners/losers of SFs if completed, else placeholders
      const sf1Winner = sf1.status === 'Completed' ? sf1.winner : `Winner SF1 (${catSuffix})`;
      const sf1Loser = sf1.status === 'Completed' ? (sf1.winner === sf1.team1 ? sf1.team2 : sf1.team1) : `Loser SF1 (${catSuffix})`;

      const sf2Winner = sf2.status === 'Completed' ? sf2.winner : `Winner SF2 (${catSuffix})`;
      const sf2Loser = sf2.status === 'Completed' ? (sf2.winner === sf2.team1 ? sf2.team2 : sf2.team1) : `Loser SF2 (${catSuffix})`;

      // 2. Third-place (Bronze Match)
      if (!bMatch) {
        bMatch = {
          id: bId,
          category: cat,
          stage: "Bronze Match",
          pitch: "Pitch 2",
          time: finalTime,
          team1: sf1Loser,
          team2: sf2Loser,
          score1: "",
          score2: "",
          sets: [],
          status: "Scheduled"
        };
        this.matches.push(bMatch);
      } else {
        if (bMatch.status !== 'Completed' || (bMatch.team1 && bMatch.team1.includes('Loser')) || (bMatch.team2 && bMatch.team2.includes('Loser'))) {
          bMatch.team1 = sf1Loser;
          bMatch.team2 = sf2Loser;
        }
        bMatch.pitch = "Pitch 2";
        bMatch.time = finalTime;
      }

      // 3. Grand Finals (Championship)
      if (!fMatch) {
        fMatch = {
          id: fId,
          category: cat,
          stage: "Grand Final",
          pitch: "Pitch 3",
          time: finalTime,
          team1: sf1Winner,
          team2: sf2Winner,
          score1: "",
          score2: "",
          sets: [],
          status: "Scheduled"
        };
        this.matches.push(fMatch);
      } else {
        if (fMatch.status !== 'Completed' || (fMatch.team1 && fMatch.team1.includes('Winner')) || (fMatch.team2 && fMatch.team2.includes('Winner'))) {
          fMatch.team1 = sf1Winner;
          fMatch.team2 = sf2Winner;
        }
        fMatch.pitch = "Pitch 3";
        fMatch.time = finalTime;
      }
    });
  }
}
