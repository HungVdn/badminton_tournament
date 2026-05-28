import { db } from './firebase.js';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

// js/sync.js
// Synchronization Engine using the browser's native BroadcastChannel API
// Enables zero-latency, real-time updates across multiple open browser tabs/devices.

export class TournamentSync {
  constructor(state, onRemoteUpdateCallback) {
    this.state = state;
    this.onRemoteUpdate = onRemoteUpdateCallback;
    this.channelName = 'badminton_live_sync';
    this.channel = null;
    this.senderId = Math.random().toString(36).substring(2);
    this.lastRemoteTimestamp = 0;
    
    this.init();
  }

  init() {
    try {
      // Connect to the broadcast channel
      this.channel = new BroadcastChannel(this.channelName);
      this.channel.onmessage = (event) => this.handleMessage(event.data);
    } catch (e) {
      console.warn('BroadcastChannel not supported in this browser. Falling back to storage event listeners.', e);
      // Fallback: Listen to localStorage changes for older browsers
      window.addEventListener('storage', (e) => {
        if (e.key === 'badminton_live_sync_fallback') {
          try {
            const data = JSON.parse(e.newValue);
            this.handleMessage(data);
          } catch (err) {
            console.error('Failed to parse fallback storage sync message', err);
          }
        }
      });
    }

    // Connect to Firebase real-time synchronization if database is configured
    if (db) {
      try {
        onSnapshot(doc(db, "badminton", "liveSync"), (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            if (data && data.timestamp > this.lastRemoteTimestamp) {
              this.lastRemoteTimestamp = data.timestamp;
              // Skip updates originated from this specific tab (already handled locally)
              if (data.senderId !== this.senderId) {
                this.handleMessage(data.message);
              }
            }
          }
        });
      } catch (e) {
        console.error("Failed to connect liveSync to Firestore:", e);
      }
    }
  }

  // Get active live matches from localStorage
  getLiveMatches() {
    const data = localStorage.getItem('badminton_live_matches');
    return data ? JSON.parse(data) : {};
  }

  // Save active live matches to localStorage
  saveLiveMatches(liveMatches) {
    localStorage.setItem('badminton_live_matches', JSON.stringify(liveMatches));
  }

  // Broadcast a message to other tabs and Firestore
  broadcast(type, payload) {
    const message = { type, payload, timestamp: Date.now() };
    
    // Broadcast via BroadcastChannel
    if (this.channel) {
      this.channel.postMessage(message);
    }
    
    // Fallback: Trigger a storage event by updating local storage
    localStorage.setItem('badminton_live_sync_fallback', JSON.stringify(message));

    // Publish live update to Firestore
    if (db) {
      try {
        setDoc(doc(db, "badminton", "liveSync"), {
          senderId: this.senderId,
          timestamp: Date.now(),
          message: message
        });
      } catch (e) {
        console.error("Failed to broadcast live update to Firestore:", e);
      }
    }
  }

  // Receive and process incoming real-time broadcasts
  handleMessage(message) {
    if (!message || !message.type || !message.payload) return;
    
    const { type, payload } = message;
    
    switch (type) {
      case 'LIVE_SCORE_UPDATE':
        this.applyLiveUpdate(payload);
        break;
      case 'LIVE_MATCH_START':
        this.setMatchLiveStatus(payload.matchId, true, payload.matchState);
        break;
      case 'LIVE_MATCH_END':
        this.setMatchLiveStatus(payload.matchId, false);
        break;
    }
  }

  // Set the live status of a match in storage
  setMatchLiveStatus(matchId, isLive, matchState = null) {
    const liveMatches = this.getLiveMatches();
    if (isLive) {
      liveMatches[matchId] = {
        matchId,
        isLive: true,
        updatedAt: Date.now(),
        ...(matchState || {})
      };
    } else {
      delete liveMatches[matchId];
    }
    this.saveLiveMatches(liveMatches);
    
    if (this.onRemoteUpdate) {
      this.onRemoteUpdate('STATUS_UPDATE', { matchId, isLive });
    }
  }

  // Save and apply a live score update received from a remote referee
  applyLiveUpdate(update) {
    const { 
      matchId, sets, score1, score2, currentSet, servingTeam, isEven, 
      serverName, partnerName, receiverName, receiverPartnerName,
      isCourtSwapped, team1Right, team1Left, team2Right, team2Left
    } = update;
    
    const liveMatches = this.getLiveMatches();
    liveMatches[matchId] = {
      matchId,
      isLive: true,
      updatedAt: Date.now(),
      sets,
      score1,
      score2,
      currentSet,
      servingTeam,
      isEven,
      serverName,
      partnerName,
      receiverName,
      receiverPartnerName,
      isCourtSwapped,
      team1Right,
      team1Left,
      team2Right,
      team2Left
    };
    this.saveLiveMatches(liveMatches);

    // Update match state in local array without saving as completed
    const match = this.state.matches.find(m => m.id === matchId);
    if (match) {
      match.sets = sets;
      match.score1 = score1;
      match.score2 = score2;
      match.status = 'Live';
    }

    if (this.onRemoteUpdate) {
      this.onRemoteUpdate('SCORE_UPDATE', update);
    }
  }
}
