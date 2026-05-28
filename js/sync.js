import { FirebaseService } from './firebase-service.js';

export class TournamentSync {
  constructor(state, onRemoteUpdateCallback) {
    this.state = state;
    this.onRemoteUpdate = onRemoteUpdateCallback;
    this.channelName = 'badminton_live_sync';
    this.channel = null;
    
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

    // Set up Firebase Realtime Database sync for live matches
    if (FirebaseService.isAvailable()) {
      try {
        FirebaseService.onAllLiveMatchesChange((remoteLiveMatches) => {
          const localLiveMatches = this.getLiveMatches();
          let hasChanges = false;

          // Check for new or updated matches from Firebase
          for (const matchId in remoteLiveMatches) {
            const remoteMatch = remoteLiveMatches[matchId];
            const localMatch = localLiveMatches[matchId];

            if (!localMatch || JSON.stringify(localMatch) !== JSON.stringify(remoteMatch)) {
              localLiveMatches[matchId] = remoteMatch;
              hasChanges = true;

              // Also update the local state.js match status to 'Live' and set scores
              const match = this.state.matches.find(m => m.id === matchId);
              if (match) {
                match.sets = remoteMatch.sets || [];
                match.score1 = remoteMatch.score1 !== undefined ? remoteMatch.score1 : '';
                match.score2 = remoteMatch.score2 !== undefined ? remoteMatch.score2 : '';
                match.status = 'Live';
              }

              if (this.onRemoteUpdate) {
                this.onRemoteUpdate('SCORE_UPDATE', remoteMatch);
              }
            }
          }

          // Check for deleted live matches (ended)
          for (const matchId in localLiveMatches) {
            if (!remoteLiveMatches || !remoteLiveMatches[matchId]) {
              delete localLiveMatches[matchId];
              hasChanges = true;

              // Update state match status
              const match = this.state.matches.find(m => m.id === matchId);
              if (match && match.status === 'Live') {
                match.status = 'Scheduled';
              }

              if (this.onRemoteUpdate) {
                this.onRemoteUpdate('STATUS_UPDATE', { matchId, isLive: false });
              }
            }
          }

          if (hasChanges) {
            this.saveLiveMatches(localLiveMatches);
            if (this.onRemoteUpdate) {
              this.onRemoteUpdate('LIVE_SYNC_RELOAD', {});
            }
          }
        });
      } catch (e) {
        console.error("❌ Failed to connect live sync listener to Firebase:", e);
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

  // Broadcast a message to other tabs and Firebase
  broadcast(type, payload) {
    const message = { type, payload, timestamp: Date.now() };
    
    // Broadcast via BroadcastChannel
    if (this.channel) {
      this.channel.postMessage(message);
    }
    
    // Fallback: Trigger a storage event by updating local storage
    localStorage.setItem('badminton_live_sync_fallback', JSON.stringify(message));

    // Also push to Firebase Realtime Database
    if (FirebaseService.isAvailable()) {
      if (type === 'LIVE_MATCH_START') {
        const liveMatchData = {
          matchId: payload.matchId,
          isLive: true,
          updatedAt: Date.now(),
          ...(payload.matchState || {})
        };
        FirebaseService.saveLiveMatch(payload.matchId, liveMatchData);
      } else if (type === 'LIVE_SCORE_UPDATE') {
        FirebaseService.saveLiveMatch(payload.matchId, {
          ...payload,
          isLive: true,
          updatedAt: Date.now()
        });
      } else if (type === 'LIVE_MATCH_END') {
        FirebaseService.removeLiveMatch(payload.matchId);
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
      
      if (FirebaseService.isAvailable()) {
        FirebaseService.saveLiveMatch(matchId, liveMatches[matchId]);
      }
    } else {
      delete liveMatches[matchId];
      
      if (FirebaseService.isAvailable()) {
        FirebaseService.removeLiveMatch(matchId);
      }
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

    if (FirebaseService.isAvailable()) {
      FirebaseService.saveLiveMatch(matchId, liveMatches[matchId]);
    }

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
