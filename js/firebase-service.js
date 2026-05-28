// js/firebase-service.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, remove, update } from 'firebase/database';
import { firebaseConfig } from './firebase-config.js';

let app = null;
let db = null;

try {
  app = initializeApp(firebaseConfig);
  db = getDatabase(app);
  console.log("🔥 Firebase Realtime Database initialized successfully!");
} catch (e) {
  console.error("❌ Failed to initialize Firebase:", e);
}

export const FirebaseService = {
  // Check if Firebase is available
  isAvailable() {
    return db !== null;
  },

  // Save the complete tournament state (or parts of it)
  saveState(stateData) {
    if (!this.isAvailable()) return Promise.resolve();
    return set(ref(db, 'tournament'), {
      players: stateData.players,
      teams: stateData.teams,
      matches: stateData.matches,
      scoreConfig: stateData.scoreConfig,
      updatedAt: Date.now()
    }).catch(e => {
      console.error("❌ Firebase saveState failed:", e);
    });
  },

  // Listen to remote changes to the full tournament node
  onStateChange(callback) {
    if (!this.isAvailable()) return () => {};
    const tournamentRef = ref(db, 'tournament');
    return onValue(tournamentRef, (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val());
      } else {
        callback(null);
      }
    }, (error) => {
      console.error("❌ Firebase onStateChange error:", error);
    });
  },

  // Reset the database to initial values
  resetAll(initialData) {
    if (!this.isAvailable()) return Promise.resolve();
    // Reset tournament state and clear live matches
    const updates = {};
    updates['tournament'] = {
      players: initialData.players,
      teams: initialData.teams,
      matches: initialData.matches,
      scoreConfig: initialData.scoreConfig,
      updatedAt: Date.now()
    };
    updates['live'] = null; // deletes `/live` node

    return update(ref(db), updates).catch(e => {
      console.error("❌ Firebase resetAll failed:", e);
    });
  },

  // --- Live Umpire Matches ---

  // Save/update live match details
  saveLiveMatch(matchId, liveMatchState) {
    if (!this.isAvailable()) return Promise.resolve();
    return set(ref(db, `live/${matchId}`), {
      ...liveMatchState,
      updatedAt: Date.now()
    }).catch(e => {
      console.error(`❌ Firebase saveLiveMatch (${matchId}) failed:`, e);
    });
  },

  // Remove live match once completed/stopped
  removeLiveMatch(matchId) {
    if (!this.isAvailable()) return Promise.resolve();
    return remove(ref(db, `live/${matchId}`)).catch(e => {
      console.error(`❌ Firebase removeLiveMatch (${matchId}) failed:`, e);
    });
  },

  // Listen to all live matches for real-time spectating and dashboard updates
  onAllLiveMatchesChange(callback) {
    if (!this.isAvailable()) return () => {};
    const liveRef = ref(db, 'live');
    return onValue(liveRef, (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val());
      } else {
        callback({});
      }
    }, (error) => {
      console.error("❌ Firebase onAllLiveMatchesChange error:", error);
    });
  }
};
