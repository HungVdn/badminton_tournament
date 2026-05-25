global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

import { TournamentState } from './js/state.js';

const state = new TournamentState();
console.log("=== Men's Doubles Standings ===");
console.log(state.calculateStandings("Men's Doubles").map((x, i) => ({
  rank: i + 1,
  name: x.name,
  played: x.played,
  won: x.won,
  lost: x.lost,
  points: x.points,
  netSets: x.netSets,
  netPoints: x.netPoints
})));

console.log("\n=== Mixed's Doubles Standings ===");
console.log(state.calculateStandings("Mixed's Doubles").map((x, i) => ({
  rank: i + 1,
  name: x.name,
  played: x.played,
  won: x.won,
  lost: x.lost,
  points: x.points,
  netSets: x.netSets,
  netPoints: x.netPoints
})));
