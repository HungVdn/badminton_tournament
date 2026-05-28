(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const A=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],D=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],N=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],B={en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Alpha Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class R{constructor(){this.players=[],this.teams=[],this.matches=[],this.scoreConfig={},this.listeners=[],this.init()}init(){const e=localStorage.getItem("badminton_players"),a=localStorage.getItem("badminton_teams"),t=localStorage.getItem("badminton_matches"),i=localStorage.getItem("badminton_scoreConfig");this.players=e?JSON.parse(e):[...A],this.teams=a?JSON.parse(a):[...D],this.matches=t?JSON.parse(t):[...N];const n={"Men's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}},"Mixed's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}}};let s=null;if(i)try{s=JSON.parse(i)}catch{s=null}s?s["Group Stage"]&&!s["Men's Doubles"]?this.scoreConfig={"Men's Doubles":JSON.parse(JSON.stringify(s)),"Mixed's Doubles":JSON.parse(JSON.stringify(s))}:this.scoreConfig=s:this.scoreConfig=n,this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches)),localStorage.setItem("badminton_scoreConfig",JSON.stringify(this.scoreConfig))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),localStorage.removeItem("badminton_scoreConfig"),this.players=[...A],this.teams=[...D],this.matches=N.map(e=>({...e,status:"Scheduled",score1:"",score2:"",sets:[],winner:""})),this.scoreConfig={"Men's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}},"Mixed's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}}},this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}getScoreConfig(e,a){let t=e,i=a;return a||(i=e,t="Men's Doubles"),this.scoreConfig[t]&&this.scoreConfig[t][i]?this.scoreConfig[t][i]:this.scoreConfig[i]?this.scoreConfig[i]:{targetPoints:21,maxPoints:30,setsToWin:2}}updateScoreConfig(e,a,t){this.scoreConfig[e]||(this.scoreConfig[e]={}),this.scoreConfig[e][a]={targetPoints:Number(t.targetPoints),maxPoints:Number(t.maxPoints),setsToWin:Number(t.setsToWin)},this.saveToStorage(),this.notifyListeners()}addListener(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e(this))}updateMatchScore(e,a,t,i,n){const s=this.matches.find(r=>r.id===e);return s?(s.sets=a,s.score1=t,s.score2=i,s.status=n,n==="Completed"?s.winner=t>i?s.team1:s.team2:s.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(e){const a=this.teams.filter(s=>s.category===e),t=this.matches.filter(s=>s.category===e&&s.stage==="Group Stage"),i={};a.forEach(s=>{i[s.name]={name:s.name,teamId:s.id,player1:s.player1,player2:s.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),t.forEach(s=>{if(s.status!=="Completed")return;const r=s.team1,o=s.team2;if(!i[r]||!i[o])return;i[r].played+=1,i[o].played+=1;const l=Number(s.score1)||0,d=Number(s.score2)||0;i[r].setsWon+=l,i[r].setsLost+=d,i[o].setsWon+=d,i[o].setsLost+=l,l>d?(i[r].won+=1,i[r].points+=1,i[o].lost+=1):(i[o].won+=1,i[o].points+=1,i[r].lost+=1),s.sets.forEach(c=>{const h=Number(c.t1)||0,p=Number(c.t2)||0;i[r].pointsWon+=h,i[r].pointsLost+=p,i[o].pointsWon+=p,i[o].pointsLost+=h})}),Object.values(i).forEach(s=>{s.netSets=s.setsWon-s.setsLost,s.netPoints=s.pointsWon-s.pointsLost});const n=Object.values(i);return n.sort((s,r)=>{if(r.points!==s.points)return r.points-s.points;if(r.netSets!==s.netSets)return r.netSets-s.netSets;if(n.filter(l=>l.points===s.points&&l.netSets===s.netSets).length===2){const l=t.find(d=>d.status==="Completed"&&(d.team1===s.name&&d.team2===r.name||d.team1===r.name&&d.team2===s.name));if(l){if(l.winner===s.name)return-1;if(l.winner===r.name)return 1}}return r.netPoints!==s.netPoints?r.netPoints-s.netPoints:s.name.localeCompare(r.name)}),n}isGroupStageComplete(e){const a=this.matches.filter(t=>t.category===e&&t.stage==="Group Stage");return a.length>0&&a.every(t=>t.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(a=>{const t=this.isGroupStageComplete(a),i=this.calculateStandings(a),n=t?i[0].name:`1st Place ${a==="Men's Doubles"?"MD":"XD"}`,s=t?i[1].name:`2nd Place ${a==="Men's Doubles"?"MD":"XD"}`,r=t?i[2].name:`3rd Place ${a==="Men's Doubles"?"MD":"XD"}`,o=t?i[3].name:`4th Place ${a==="Men's Doubles"?"MD":"XD"}`,l=a==="Men's Doubles"?"MD":"XD",d=`SF1-${l}`,c=`SF2-${l}`,h=`F-${l}`,p=`B-${l}`;let g=this.matches.find(S=>S.id===d),m=this.matches.find(S=>S.id===c),u=this.matches.find(S=>S.id===h),f=this.matches.find(S=>S.id===p);const $="4:30 - 5:10",v=a==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";g?(g.status!=="Completed"||g.team1&&g.team1.includes("Place")||g.team2&&g.team2.includes("Place"))&&(g.team1=n,g.team2=o):(g={id:d,category:a,stage:"Semi-finals",pitch:a==="Men's Doubles"?"Pitch 15":"Pitch 20",time:$,team1:n,team2:o,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(g)),m?(m.status!=="Completed"||m.team1&&m.team1.includes("Place")||m.team2&&m.team2.includes("Place"))&&(m.team1=s,m.team2=r):(m={id:c,category:a,stage:"Semi-finals",pitch:a==="Men's Doubles"?"Pitch 16":"Pitch 21",time:$,team1:s,team2:r,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(m));const y=g.status==="Completed"?g.winner:`Winner SF1 (${l})`,w=g.status==="Completed"?g.winner===g.team1?g.team2:g.team1:`Loser SF1 (${l})`,b=m.status==="Completed"?m.winner:`Winner SF2 (${l})`,x=m.status==="Completed"?m.winner===m.team1?m.team2:m.team1:`Loser SF2 (${l})`;f?(f.status!=="Completed"||f.team1&&f.team1.includes("Loser")||f.team2&&f.team2.includes("Loser"))&&(f.team1=w,f.team2=x):(f={id:p,category:a,stage:"Bronze Match",pitch:a==="Men's Doubles"?"Pitch 15":"Pitch 20",time:v,team1:w,team2:x,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(f)),u?(u.status!=="Completed"||u.team1&&u.team1.includes("Winner")||u.team2&&u.team2.includes("Winner"))&&(u.team1=y,u.team2=b):(u={id:h,category:a,stage:"Grand Final",pitch:a==="Men's Doubles"?"Pitch 16":"Pitch 21",time:v,team1:y,team2:b,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(u))})}}class H{constructor(e,a,t,i){if(this.state=e,this.sync=a,this.matchId=t,this.onFinish=i,this.lang="en",this.match=this.state.matches.find(s=>s.id===t),!this.match)throw new Error(`Match not found: ${t}`);const n=this.state.getScoreConfig(this.match.category,this.match.stage);this.targetPoints=n.targetPoints,this.maxPoints=n.maxPoints,this.setsToWin=n.setsToWin,this.team1Obj=this.state.teams.find(s=>s.name===this.match.team1),this.team2Obj=this.state.teams.find(s=>s.name===this.match.team2),this.team1Players=this.team1Obj?[this.team1Obj.player1,this.team1Obj.player2]:["Team A Player 1","Team A Player 2"],this.team2Players=this.team2Obj?[this.team2Obj.player1,this.team2Obj.player2]:["Team B Player 1","Team B Player 2"],this.score1=0,this.score2=0,this.sets=[],this.match.sets&&this.match.sets.length>0&&this.match.status==="Live"&&(this.sets=[...this.match.sets],this.score1=this.match.score1||0,this.score2=this.match.score2||0),this.currentSet=this.sets.length+1,this.servingTeam="A",this.history=[],this.isCourtSwapped=!1,this.set3SwapHappened=!1,this.team1Right=this.team1Players[0],this.team1Left=this.team1Players[1],this.team2Right=this.team2Players[0],this.team2Left=this.team2Players[1],this.init()}init(){this.createOverlayContainer(),this.render(),this.sync.broadcast("LIVE_MATCH_START",{matchId:this.matchId,matchState:this.serializeState()})}createOverlayContainer(){if(document.getElementById("umpire-overlay-container"))return;const e=document.createElement("div");e.id="umpire-overlay-container",e.className="umpire-overlay-backdrop",document.body.appendChild(e)}serializeState(){return{sets:[...this.sets,{t1:this.score1,t2:this.score2}],score1:this.score1,score2:this.score2,currentSet:this.currentSet,servingTeam:this.servingTeam,isEven:(this.servingTeam==="A"?this.score1:this.score2)%2===0,serverName:this.getServerName(),partnerName:this.getServerPartnerName(),receiverName:this.getReceiverName(),receiverPartnerName:this.getReceiverPartnerName(),isCourtSwapped:this.isCourtSwapped}}broadcastUpdate(){const e=this.serializeState();e.matchId=this.matchId,this.sync.broadcast("LIVE_SCORE_UPDATE",e)}getServerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Right:this.team1Left:e?this.team2Right:this.team2Left}getServerPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Left:this.team1Right:e?this.team2Left:this.team2Right}getReceiverName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Right:this.team2Left:e?this.team1Right:this.team1Left}getReceiverPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Left:this.team2Right:e?this.team1Left:this.team1Right}saveToHistory(){this.history.push({score1:this.score1,score2:this.score2,sets:JSON.parse(JSON.stringify(this.sets)),currentSet:this.currentSet,servingTeam:this.servingTeam,team1Right:this.team1Right,team1Left:this.team1Left,team2Right:this.team2Right,team2Left:this.team2Left})}undo(){if(this.history.length===0)return;const e=this.history.pop();this.score1=e.score1,this.score2=e.score2,this.sets=e.sets,this.currentSet=e.currentSet,this.servingTeam=e.servingTeam,this.team1Right=e.team1Right,this.team1Left=e.team1Left,this.team2Right=e.team2Right,this.team2Left=e.team2Left,this.render(),this.broadcastUpdate()}addPoint(e){if(this.saveToHistory(),e==="A"){if(this.servingTeam==="A"){const t=this.team1Right;this.team1Right=this.team1Left,this.team1Left=t}this.score1++,this.servingTeam="A"}else{if(this.servingTeam==="B"){const t=this.team2Right;this.team2Right=this.team2Left,this.team2Left=t}this.score2++,this.servingTeam="B"}const a=this.setsToWin*2-1;if(this.currentSet===a&&!this.set3SwapHappened){const t=Math.ceil(this.targetPoints/2);(this.score1===t||this.score2===t)&&(this.set3SwapHappened=!0,this.showSwapNotice(`⚡ Score reached ${t}! Both teams must swap sides.`),this.isCourtSwapped=!this.isCourtSwapped)}this.checkSetWinner(),this.render(),this.triggerServeAnimation(),this.broadcastUpdate()}triggerServeAnimation(){const e=document.querySelector(".umpire-court-svg .svg-shuttle");e&&(e.setAttribute("dur","0.7s"),e.innerHTML=`
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `)}checkSetWinner(){const e=this.score1,a=this.score2,t=Math.max(e,a),i=Math.min(e,a),n=t-i;let s=!1;if(t>=this.targetPoints&&(n>=2||t===this.maxPoints)&&(s=!0),s){this.currentSet-1,this.sets.push({t1:e,t2:a});let r=0,o=0;if(this.sets.forEach(l=>{l.t1>l.t2?r++:o++}),r===this.setsToWin||o===this.setsToWin)this.submitMatch(r,o);else{const l=e>a?this.match.team1:this.match.team2;this.showSwapNotice(`Set ${this.currentSet} completed! ${l} won this set. Prepare for Set ${this.currentSet+1}. Both teams must swap sides.`),this.score1=0,this.score2=0,this.currentSet++,this.servingTeam=e>a?"A":"B",this.isCourtSwapped=!this.isCourtSwapped}}}submitMatch(e,a){const t=e>a?this.match.team1:this.match.team2;this.state.updateMatchScore(this.matchId,this.sets,e,a,"Completed"),this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1),this.showMatchEndNotice(t)}close(){this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1);const e=document.getElementById("umpire-overlay-container");e&&(e.classList.add("hidden"),e.innerHTML=""),this.onFinish&&this.onFinish(),window.BadmintonAppInstance&&window.BadmintonAppInstance.switchTab("dashboard")}showSwapNotice(e){const a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in">
        <div class="swap-icon-container mb-4 text-glow-volt animate-bounce" style="font-size: 3rem; filter: drop-shadow(0 0 12px rgba(132, 204, 22, 0.45));">
          🏸
        </div>
        <h3 class="text-sm font-black text-glow-volt mb-2" style="font-size: 1.2rem; letter-spacing: 0.05em;">SWAP COURTS!</h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold" style="line-height: 1.5;">${e}</p>
        <button class="btn btn-sm btn-volt w-full py-2.5 font-bold uppercase tracking-wider" id="swap-notice-btn-ok">
          Got It & Continue
        </button>
      </div>
    `,document.body.appendChild(a),document.getElementById("swap-notice-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)},setTimeout(()=>{document.body.contains(a)&&(a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300))},5e3)}showMatchEndNotice(e){const a=this.match.stage||"Group Stage";let t="WIN THE MATCH!",i="MATCH COMPLETED",n=`🎉 Congratulations to **${e}** on winning this match! 🎉`,s="🏸",r="MATCH WINNER",o="#84cc16",l="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(t="CONGRATULATIONS ON WINNING!",i="QUALIFIED FOR THE FINALS",n=`⚡ Spectacular! **${e}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,s="🏅",r="SEMI-FINALS WINNER",o="#06b6d4",l="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(t="TOURNAMENT CHAMPIONS!",i="GEAR GAMES BADMINTON 2026 CUP",n=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${e}**! A historic and well-deserved victory! 🏆🥇`,s="🏆",r="TOURNAMENT CHAMPIONS",o="#fbbf24",l="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(t="BRONZE MEDALISTS!",i="BRONZE MEDAL SECURED",n=`🥉 Superb! **${e}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,s="🥉",r="BRONZE WINNER",o="#ea580c",l="rgba(234, 88, 12, 0.45)");const d=document.createElement("div");d.className="match-end-modal-backdrop relative",d.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${l}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${l}); line-height: 1;">
            ${s}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${o}; filter: drop-shadow(0 0 8px ${l});">${t}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${i}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${r}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${e}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${this.sets.map((c,h)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${h+1}: <span class="text-volt">${c.t1}</span>-<span class="text-cyan">${c.t2}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${n}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="match-end-btn-home" style="font-size: 0.85rem; background-color: ${o}; color: #000; box-shadow: 0 4px 14px ${l}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild(d),document.getElementById("match-end-btn-home").onclick=()=>{d.classList.add("animate-fade-out"),setTimeout(()=>{d.remove(),this.close()},300)}}toggleServe(){this.saveToHistory(),this.servingTeam=this.servingTeam==="B"?"A":"B",this.render(),this.broadcastUpdate()}swapPlayers(e){if(this.saveToHistory(),e==="1"){const a=this.team1Right;this.team1Right=this.team1Left,this.team1Left=a}else{const a=this.team2Right;this.team2Right=this.team2Left,this.team2Left=a}this.render(),this.broadcastUpdate()}render(){const e=document.getElementById("umpire-overlay-container");if(!e)return;e.classList.remove("hidden"),(this.servingTeam==="A"?this.score1:this.score2)%2;let a,t,i,n;this.isCourtSwapped?(a=this.team2Right,t=this.team2Left,i=this.team1Right,n=this.team1Left):(a=this.team1Right,t=this.team1Left,i=this.team2Right,n=this.team2Left);const s=this.getServerName(),r=this.getReceiverName(),o=b=>b===s?"S":b===r?"R":"P",l=b=>b===s?"volt":b===r?"cyan":"neutral",d=b=>b===s?"text-volt":b===r?"text-cyan":"text-slate-200",c=b=>b!==s?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let h,p,g,m;s===a?(h=210,p=355):s===t?(h=90,p=355):s===i?(h=90,p=145):(h=210,p=145),r===a?(g=210,m=355):r===t?(g=90,m=355):r===i?(g=90,m=145):(g=210,m=145);const u=(b,x)=>x===355?b===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":b===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",f=u(h,p),$=u(g,m),v=(h+g)/2+30,y=(p+m)/2-40,w=this.sets.map((b,x)=>`
      <div class="umpire-set-badge">
        <span>Set ${x+1}:</span>
        <strong>${b.t1} - ${b.t2}</strong>
      </div>
    `).join("");e.innerHTML=`
      <div class="umpire-card glass-card">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE
            </span>
            <span class="text-xs font-bold text-slate-300">${this.match.pitch} | ${this.match.stage} (${this.targetPoints} pts, Best of ${this.setsToWin*2-1})</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">UMPIRE CONTROL PANEL</h2>
          <button class="btn btn-xs btn-neutral" id="umpire-btn-close">✕ Exit</button>
        </div>

        <!-- Scores and Set layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <!-- Umpire Controls Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets review -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${w}
              <div class="umpire-set-badge current">
                <span>Set ${this.currentSet}:</span>
                <strong class="text-volt">${this.score1} - ${this.score2}</strong>
              </div>
            </div>

            <!-- Huge Scoreboard buttons -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Team 1 Plus -->
              <div class="flex flex-col gap-2">
                <div class="text-center font-black text-2xs truncate text-volt mb-1" title="${this.match.team1}">
                  ${this.match.team1}
                </div>
                <button class="umpire-score-btn team-a-glow flex flex-col justify-center items-center" id="umpire-add-a">
                  <span class="score-num font-mono">${this.score1}</span>
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">ADD POINT ❶</span>
                </button>
                <div class="flex gap-2">
                  <button class="btn btn-xs btn-neutral flex-1 py-2 font-bold text-4xs" id="umpire-swap-players-1">🔄 Court Swap</button>
                </div>
              </div>

              <!-- Team 2 Plus -->
              <div class="flex flex-col gap-2">
                <div class="text-center font-black text-2xs truncate text-cyan mb-1" title="${this.match.team2}">
                  ${this.match.team2}
                </div>
                <button class="umpire-score-btn team-b-glow flex flex-col justify-center items-center" id="umpire-add-b">
                  <span class="score-num font-mono">${this.score2}</span>
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">ADD POINT ❷</span>
                </button>
                <div class="flex gap-2">
                  <button class="btn btn-xs btn-neutral flex-1 py-2 font-bold text-4xs" id="umpire-swap-players-2">🔄 Court Swap</button>
                </div>
              </div>
            </div>

            <!-- Auxiliary Panel Actions -->
            <div class="bg-slate-950/60 p-4 rounded-lg border border-slate-900 grid grid-cols-3 gap-3 items-center">
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold" id="umpire-btn-undo" ${this.history.length===0?"disabled":""}>
                  ↩ Undo Action
                </button>
              </div>
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold flex items-center justify-center gap-1.5" id="umpire-btn-serve">
                  🏸 Toggle Serve
                </button>
              </div>
              <div class="text-center text-4xs text-slate-400 font-semibold flex flex-col items-center justify-center border-l border-slate-800">
                <div>Current Serve:</div>
                <div class="font-extrabold text-volt mt-1 text-2xs uppercase">${this.servingTeam==="A"?"Team 1":"Team 2"}</div>
              </div>
            </div>
          </div>

          <!-- Umpire Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">ACTUAL PLAYER POSITIONS ON COURT</h4>
            <div style="width: 100%; max-width: 250px; aspect-ratio: 3/5;">
              <svg class="court-svg umpire-court-svg" viewBox="0 0 300 500" width="100%" height="100%">
                <defs>
                  <filter id="ump-glow-volt" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="ump-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <!-- Court boundaries -->
                <rect x="20" y="40" width="260" height="420" class="court-line outer" />
                <line x1="40" y1="40" x2="40" y2="460" class="court-line singles-side" />
                <line x1="260" y1="40" x2="260" y2="460" class="court-line singles-side" />
                <line x1="150" y1="40" x2="150" y2="190" class="court-line center" />
                <line x1="150" y1="310" x2="150" y2="460" class="court-line center" />
                <line x1="20" y1="190" x2="280" y2="190" class="court-line service-short" />
                <line x1="20" y1="310" x2="280" y2="310" class="court-line service-short" />
                <line x1="20" y1="60" x2="280" y2="60" class="court-line service-long-doubles" />
                <line x1="20" y1="440" x2="280" y2="440" class="court-line service-long-doubles" />
                <line x1="10" y1="250" x2="290" y2="250" class="court-line net" />
                <circle cx="10" cy="250" r="4" class="net-post" />
                <circle cx="290" cy="250" r="4" class="net-post" />

                <!-- Court highlights -->
                <path d="${f}" class="svg-highlight-box serving" filter="url(#ump-glow-volt)" />
                <path d="${$}" class="svg-highlight-box receiving" filter="url(#ump-glow-cyan)" />

                <!-- Flight Arrow path -->
                <path id="umpire-shuttle-path" d="M ${h},${p} Q ${v},${y} ${g},${m}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${t===s?"server":t===r?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${l(t)}" />
                  <text x="0" y="4" class="avatar-text">${o(t)}</text>
                  ${c(t)}
                </g>
                <text x="90" y="383" class="svg-player-name ${d(t)} font-bold">${t.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${a===s?"server":a===r?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${l(a)}" />
                  <text x="0" y="4" class="avatar-text">${o(a)}</text>
                  ${c(a)}
                </g>
                <text x="210" y="383" class="svg-player-name ${d(a)} font-bold">${a.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${i===s?"server":i===r?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${l(i)}" />
                  <text x="0" y="4" class="avatar-text">${o(i)}</text>
                  ${c(i)}
                </g>
                <text x="90" y="123" class="svg-player-name ${d(i)} font-bold">${i.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${n===s?"server":n===r?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${l(n)}" />
                  <text x="0" y="4" class="avatar-text">${o(n)}</text>
                  ${c(n)}
                </g>
                <text x="210" y="123" class="svg-player-name ${d(n)} font-bold">${n.split(" ")[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (0,2,4) and **Left** on Odd (1,3,5). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("umpire-btn-close").onclick=()=>{confirm("Do you want to exit the scoring room? The live status will be suspended.")&&this.close()},document.getElementById("umpire-add-a").onclick=()=>this.addPoint("A"),document.getElementById("umpire-add-b").onclick=()=>this.addPoint("B"),document.getElementById("umpire-btn-serve").onclick=()=>this.toggleServe(),document.getElementById("umpire-btn-undo").onclick=()=>this.undo(),document.getElementById("umpire-swap-players-1").onclick=()=>this.swapPlayers("1"),document.getElementById("umpire-swap-players-2").onclick=()=>this.swapPlayers("2")}}class F{constructor(e,a,t){this.state=e,this.onUpdate=a,this.sync=t,this.isAdmin=!1,this.isRef=!1,this.refPitch="",this.activeMatchId=null,this.lang="en",this.passkeys={goodmintongg2026:{role:"admin",label:"Super Admin"},ref15:{role:"ref",pitch:"Pitch 15",label:"Pitch 15 Umpire"},ref16:{role:"ref",pitch:"Pitch 16",label:"Pitch 16 Umpire"},ref20:{role:"ref",pitch:"Pitch 20",label:"Pitch 20 Umpire"},ref21:{role:"ref",pitch:"Pitch 21",label:"Pitch 21 Umpire"}},this.init()}setLanguage(e){this.lang="en"}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.isRef=sessionStorage.getItem("badminton_isRef")==="true",this.refPitch=sessionStorage.getItem("badminton_refPitch")||"",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const e=document.createElement("div");if(e.id="score-modal-container",e.className="modal-backdrop hidden",document.body.appendChild(e),document.getElementById("admin-modal-container"))return;const a=document.createElement("div");if(a.id="admin-modal-container",a.className="modal-backdrop hidden",document.body.appendChild(a),!document.getElementById("score-config-modal-container")){const t=document.createElement("div");t.id="score-config-modal-container",t.className="modal-backdrop hidden",document.body.appendChild(t)}}setupAdminToggleListener(){document.body.addEventListener("click",e=>{e.target.closest("#btn-toggle-admin")&&(this.isAdmin||this.isRef?this.logout():this.showAdminLogin()),e.target.closest("#btn-score-settings")&&(this.isAdmin?this.showScoreConfigModal():this.showToast("You must be a Super Admin to modify scoring settings.","info"));const i=e.target.closest(".btn-edit-match");if(i){const s=i.getAttribute("data-match-id"),r=this.state.matches.find(l=>l.id===s);if(!r)return;const o=this.checkMatchReadyState(r);if(!o.ready){this.showUnreadyAlert(o.reason);return}this.isAdmin||this.isRef&&r.pitch===this.refPitch?this.openScoreModal(s):this.showToast("You are not authorized to edit matches on this pitch!","info")}const n=e.target.closest(".btn-join-match");if(n){const s=n.getAttribute("data-match-id"),r=this.state.matches.find(l=>l.id===s);if(!r)return;const o=this.checkMatchReadyState(r);if(!o.ready){this.showUnreadyAlert(o.reason);return}this.isAdmin||this.isRef&&r.pitch===this.refPitch?this.openUmpireConsole(s):this.showToast("You are not authorized to umpire on this pitch!","info")}})}checkMatchReadyState(e){if(e.team1&&e.team1.includes("Place")||e.team2&&e.team2.includes("Place"))return{ready:!1,reason:"This match cannot be played yet! Please wait for the Group Stage to complete to decide the playing teams."};const a=e.category==="Men's Doubles"?"MD":"XD",t=e.team1&&(e.team1.includes("SF1")||e.team1.includes("Winner SF1")||e.team1.includes("Loser SF1"))||e.team2&&(e.team2.includes("SF1")||e.team2.includes("Winner SF1")||e.team2.includes("Loser SF1")),i=e.team1&&(e.team1.includes("SF2")||e.team1.includes("Winner SF2")||e.team1.includes("Loser SF2"))||e.team2&&(e.team2.includes("SF2")||e.team2.includes("Winner SF2")||e.team2.includes("Loser SF2"));if(t){const n=`SF1-${a}`,s=this.state.matches.find(r=>r.id===n);if(s&&s.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 1 (${e.category})`}** to complete.`}}if(i){const n=`SF2-${a}`,s=this.state.matches.find(r=>r.id===n);if(s&&s.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 2 (${e.category})`}** to complete.`}}return{ready:!0}}showUnreadyAlert(e){const a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in" style="max-width: 400px; width: 90%; border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25);">
        <div class="mb-4 text-danger animate-pulse" style="font-size: 3rem;">
          ⚠️
        </div>
        <h3 class="text-sm font-black text-danger mb-2" style="font-size: 1.15rem; letter-spacing: 0.05em;">
          MATCH NOT READY!
        </h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">
          ${e}
        </p>
        <button class="btn btn-sm btn-danger w-full py-2.5 font-bold uppercase tracking-wider" id="unready-alert-btn-ok">
          Got It
        </button>
      </div>
    `,document.body.appendChild(a),document.getElementById("unready-alert-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)}}openUmpireConsole(e){this.sync&&new H(this.state,this.sync,e,()=>{this.onUpdate()})}logout(){this.isAdmin=!1,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.removeItem("badminton_authLabel"),this.onUpdate(),this.showToast("Logged out successfully!","info")}showAdminLogin(){const e=document.getElementById("admin-modal-container");if(!e)return;const a="Portal Login",t="Enter Admin or Umpire passkey:",i="Passkey",n="Login",s="Cancel";e.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${a}</h3>
        <p class="modal-desc">${t}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${i}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${s}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${n}</button>
        </div>
      </div>
    `,e.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>e.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=r=>{r.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const e=document.getElementById("admin-passkey-input"),a=document.getElementById("admin-login-error");if(!e||!a)return;const t=e.value,i=this.passkeys[t];if(i){i.role==="admin"?(this.isAdmin=!0,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","true"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.setItem("badminton_authLabel",i.label)):(this.isRef=!0,this.isAdmin=!1,this.refPitch=i.pitch,sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","true"),sessionStorage.setItem("badminton_refPitch",i.pitch),sessionStorage.setItem("badminton_authLabel",i.label)),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const n=`Login success! Role: ${i.label}.`;this.showToast(n,"success")}else a.textContent="Incorrect passkey. Please try again.",a.classList.remove("hidden"),e.classList.add("input-error"),e.focus()}openScoreModal(e){this.activeMatchId=e;const a=this.state.matches.find(v=>v.id===e);if(!a)return;const t=document.getElementById("score-modal-container");if(!t)return;const i=this.state.getScoreConfig(a.category,a.stage),n=i.targetPoints,s=i.maxPoints,r=i.setsToWin,o=r*2-1,l="Match Score Editor",d="Set",c=a.team1,h=a.team2,p="Save Score",g="Cancel",m="Clear Score";let u="";for(let v=1;v<=o;v++){const y=a.sets[v-1]||{t1:"",t2:""},w=v===1?"required":"";u+=`
        <!-- Set ${v} -->
        <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s${v}-row">
          <div class="col-span-2">
            <input type="number" min="0" max="${s}" id="s${v}-t1" class="form-input score-box text-left" placeholder="0" value="${y.t1!==void 0?y.t1:""}" ${w} />
          </div>
          <div class="text-center font-bold text-muted">${d} ${v}</div>
          <div class="col-span-2">
            <input type="number" min="0" max="${s}" id="s${v}-t2" class="form-input score-box text-right" placeholder="0" value="${y.t2!==void 0?y.t2:""}" ${w} />
          </div>
        </div>
      `}t.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${l}</h3>
          <span class="badge bg-purple">${a.stage} (${n} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">Team 1</div>
          <div>VS</div>
          <div class="col-span-2 text-right">Team 2</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${c}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${h}</div>
        </div>

        <form id="score-form" class="space-y-4">
          ${u}

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${m}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${g}</button>
              <button type="submit" class="btn btn-primary">${p}</button>
            </div>
          </div>
        </form>
      </div>
    `,t.classList.remove("hidden");const f=[];for(let v=1;v<=o;v++)f.push({t1:document.getElementById(`s${v}-t1`),t2:document.getElementById(`s${v}-t2`),row:document.getElementById(`s${v}-row`)});const $=()=>{let v=0,y=0;for(let w=1;w<=o;w++){const b=f[w-1].row,x=f[w-1].t1,S=f[w-1].t2;if(w===1){x.disabled=!1,S.disabled=!1,b.classList.remove("opacity-40"),x.setAttribute("required","required"),S.setAttribute("required","required");const M=Number(x.value),P=Number(S.value),C=this.validateSetScore(M,P,n,s);C.valid&&(C.winner===1?v++:y++);continue}const T=v===r||y===r;let L=!0;for(let M=0;M<w-1;M++){const P=Number(f[M].t1.value),C=Number(f[M].t2.value);if(!this.validateSetScore(P,C,n,s).valid){L=!1;break}}if(L&&!T){b.classList.remove("opacity-40"),x.disabled=!1,S.disabled=!1,x.setAttribute("required","required"),S.setAttribute("required","required");const M=Number(x.value),P=Number(S.value),C=this.validateSetScore(M,P,n,s);C.valid&&(C.winner===1?v++:y++)}else b.classList.add("opacity-40"),x.disabled=!0,S.disabled=!0,x.value="",S.value="",x.removeAttribute("required"),S.removeAttribute("required")}};f.forEach(v=>{v.t1.addEventListener("input",$),v.t2.addEventListener("input",$)}),$(),document.getElementById("btn-cancel-score").onclick=()=>t.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(e),document.getElementById("score-form").onsubmit=v=>{v.preventDefault(),this.handleSaveScore(a,i)}}validateSetScore(e,a,t,i){if(isNaN(e)||isNaN(a))return{valid:!1};if(e<0||a<0)return{valid:!1};const n=Math.max(e,a),s=Math.min(e,a),r=n-s,o=e>a?1:2;if(n<t)return{valid:!1};if(n===t&&r>=2)return{valid:!0,winner:o};if(n>t){if(r===2&&n<i)return{valid:!0,winner:o};if(n===i&&r===1)return{valid:!0,winner:o}}return{valid:!1}}handleClearScore(e){confirm("Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(e,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Match score cleared.","info"))}handleSaveScore(e,a){const t=a.targetPoints,i=a.maxPoints,n=a.setsToWin,s=n*2-1,r=document.getElementById("score-error-msg");r.classList.add("hidden");const o=[];let l=0,d=0;for(let c=1;c<=s;c++){const h=document.getElementById(`s${c}-t1`).value,p=document.getElementById(`s${c}-t2`).value;if(l===n||d===n){if(h!==""||p!==""){this.showInputError(r,`Set ${c} score should be empty since match has already ended.`);return}continue}if(h===""||p===""){this.showInputError(r,`Please fill in Set ${c} score.`);return}const g=Number(h),m=Number(p),u=this.validateSetScore(g,m,t,i);if(!u.valid){this.showInputError(r,`Set ${c} is invalid. Winner must reach ${t} and lead by 2, or reach cap limit of ${i} points.`);return}o.push({t1:g,t2:m}),u.winner===1?l++:d++}if(l<n&&d<n){this.showInputError(r,`No team has won the required ${n} sets to win the match.`);return}l>d?e.team1:e.team2,this.state.updateMatchScore(e.id,o,l,d,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Score updated successfully!","success")}showInputError(e,a){e.textContent=a,e.classList.remove("hidden")}showToast(e,a="success"){const t=document.createElement("div");t.className=`toast-alert toast-${a}`,t.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${a==="success"?"✓":a==="info"?"ℹ":"⚠"}</span>
        <span>${e}</span>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3e3)}showScoreConfigModal(){const e=document.getElementById("score-config-modal-container");if(!e)return;const a=["Men's Doubles","Mixed's Doubles"],t=["Group Stage","Semi-finals","Grand Final","Bronze Match"],i={};a.forEach(m=>{i[m]={},t.forEach(u=>{i[m][u]=this.state.getScoreConfig(m,u)})});const n=m=>t.map(u=>{const f=i[m][u],$=m==="Men's Doubles"?"md":"xd",v=u.replace(/\s+/g,"-").toLowerCase();return`
          <div class="score-config-stage-card glass-panel p-3.5 rounded-lg border border-slate-700/40 flex flex-col gap-3">
            <div class="text-2xs font-black text-volt border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>${u}</span>
              <span class="badge bg-slate-850 text-slate-400 font-bold" style="font-size: 0.55rem; padding: 2px 6px;">Stage Rules</span>
            </div>
            
            <div class="grid grid-cols-3 gap-2">
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Target Pts</label>
                <input type="number" min="5" max="50" id="${$}-${v}-target" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${f.targetPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Max Pts</label>
                <input type="number" min="5" max="60" id="${$}-${v}-max" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${f.maxPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Sets to Win</label>
                <select id="${$}-${v}-sets" class="form-input text-center" style="font-weight: bold; background: #0b0f19; font-size: 0.8rem; padding: 0.5rem 0.25rem; height: 42px; cursor: pointer; line-height: 1.5;">
                  <option value="1" ${f.setsToWin===1?"selected":""}>1 Set</option>
                  <option value="2" ${f.setsToWin===2?"selected":""}>Best of 3</option>
                  <option value="3" ${f.setsToWin===3?"selected":""}>Best of 5</option>
                </select>
              </div>
            </div>
          </div>
        `}).join("");e.innerHTML=`
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
            ${n("Men's Doubles")}
          </div>

          <!-- XD Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[45vh] overflow-y-auto pr-1 hidden" id="config-section-xd">
            ${n("Mixed's Doubles")}
          </div>

          <div id="score-config-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
            <button type="button" class="btn btn-neutral" id="btn-cancel-score-config">Cancel</button>
            <button type="submit" class="btn btn-primary">Apply Settings</button>
          </div>
        </form>
      </div>
    `,e.classList.remove("hidden");let s="md";const r=document.getElementById("tab-config-md"),o=document.getElementById("tab-config-xd"),l=document.getElementById("config-section-md"),d=document.getElementById("config-section-xd");r.onclick=()=>{s="md",r.classList.add("text-volt"),r.style.borderColor="var(--volt)",o.classList.remove("text-volt"),o.classList.add("text-slate-500"),o.style.borderColor="transparent",l.classList.remove("hidden"),d.classList.add("hidden")},o.onclick=()=>{s="xd",o.classList.add("text-volt"),o.style.borderColor="var(--volt)",r.classList.remove("text-volt"),r.classList.add("text-slate-500"),r.style.borderColor="transparent",d.classList.remove("hidden"),l.classList.add("hidden")};const c=m=>{const u=s;t.forEach(f=>{const $=f.replace(/\s+/g,"-").toLowerCase(),v=m[f]||m.default;document.getElementById(`${u}-${$}-target`).value=v.targetPoints,document.getElementById(`${u}-${$}-max`).value=v.maxPoints,document.getElementById(`${u}-${$}-sets`).value=v.setsToWin})};document.getElementById("preset-bwf-standard").onclick=()=>{c({default:{targetPoints:21,maxPoints:30,setsToWin:2}}),this.showToast(`Standard BWF presets filled for ${s==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")},document.getElementById("preset-fast-15").onclick=()=>{c({default:{targetPoints:15,maxPoints:21,setsToWin:2}}),this.showToast(`Short Game presets filled for ${s==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")},document.getElementById("preset-single-set").onclick=()=>{c({default:{targetPoints:21,maxPoints:30,setsToWin:1}}),this.showToast(`Single Set presets filled for ${s==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")};const h=document.getElementById("btn-close-score-config"),p=document.getElementById("btn-cancel-score-config"),g=()=>e.classList.add("hidden");h.onclick=g,p.onclick=g,document.getElementById("score-config-form").onsubmit=m=>{m.preventDefault();const u=document.getElementById("score-config-error-msg");u.classList.add("hidden");for(const f of a){const $=f==="Men's Doubles"?"md":"xd";for(const v of t){const y=v.replace(/\s+/g,"-").toLowerCase(),w=Number(document.getElementById(`${$}-${y}-target`).value),b=Number(document.getElementById(`${$}-${y}-max`).value),x=Number(document.getElementById(`${$}-${y}-sets`).value);if(b<w){u.textContent=`Max points cannot be less than target points in ${f} - ${v}.`,u.classList.remove("hidden");return}this.state.updateScoreConfig(f,v,{targetPoints:w,maxPoints:b,setsToWin:x})}}e.classList.add("hidden"),this.showToast("Match scoring settings updated successfully!","success"),this.onUpdate()}}}class W{constructor(e){this.container=document.getElementById(e),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="en",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(e){this.lang="en",this.render()}setScoreParity(e){this.isEven=e,this.render()}setTeams(e,a){this.teamAPlayers=e,this.teamBPlayers=a,this.render()}init(){this.container&&this.render()}render(){var L,M,P,C;if(!this.container)return;const e=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],a=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],t=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],i=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],n="Even Score (0, 2, 4...)",s="Odd Score (1, 3, 5...)",r="Doubles Service Simulator",o=`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,l=`<ul>
        <li><strong>Server:</strong> <span class="highlight-volt">${e}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
        <li><strong>Receiver:</strong> <span class="highlight-cyan">${t}</span> stands in the diagonal court to receive.</li>
        <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
       </ul>`,d=this.isEven?210:90,c=400,h=this.isEven?90:210,p=400,g=this.isEven?90:210,m=100,u=this.isEven?210:90,f=100,$=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",v=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",y=d,w=c-10,b=g,x=m+10,S=(y+b)/2+30,T=(w+x)/2-40;this.container.innerHTML=`
      <div class="court-sim-card glass-card">
        <h3 class="court-title flex items-center justify-between">
          <span>${r}</span>
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
              <path d="${$}" class="svg-highlight-box serving" filter="url(#neon-glow-volt)" />
              
              <!-- HIGHLIGHT TARGET RECEIVING BOX -->
              <path d="${v}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${y},${w} Q ${S},${T} ${b},${x}" class="svg-shuttle-path" />
              <circle r="5" class="svg-shuttle" filter="url(#neon-glow-cyan)">
                <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                  <mpath href="#shuttle-path" />
                </animateMotion>
              </circle>

              <!-- TRANSPARENT CLICKABLE AREAS FOR SERVICE BOXES -->
              <path d="M 150,310 L 280,310 L 280,440 L 150,440 Z" class="svg-click-box" id="svg-click-right" style="cursor: pointer; fill: transparent; pointer-events: all;" />
              <path d="M 20,310 L 150,310 L 150,440 L 20,440 Z" class="svg-click-box" id="svg-click-left" style="cursor: pointer; fill: transparent; pointer-events: all;" />

              <!-- Player Avatars Bottom (Team A) -->
              <!-- Server -->
              <g class="player-avatar server">
                <circle cx="${d}" cy="${c}" r="14" class="avatar-bg volt" />
                <text x="${d}" y="${c+4}" class="avatar-text">S</text>
              </g>
              <text x="${d}" y="${c+28}" class="svg-player-name text-volt">${e.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${h}" cy="${p}" r="12" class="avatar-bg neutral" />
                <text x="${h}" y="${p+4}" class="avatar-text">P</text>
              </g>
              <text x="${h}" y="${p+28}" class="svg-player-name text-muted">${a.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${g}" cy="${m}" r="14" class="avatar-bg cyan" />
                <text x="${g}" y="${m+4}" class="avatar-text">R</text>
              </g>
              <text x="${g}" y="${m-22}" class="svg-player-name text-cyan">${t.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${u}" cy="${f}" r="12" class="avatar-bg neutral" />
                <text x="${u}" y="${f+4}" class="avatar-text">P</text>
              </g>
              <text x="${u}" y="${f-22}" class="svg-player-name text-muted">${i.split(" ")[0]}</text>
            </svg>
          </div>
          
          <div class="court-controls-wrapper flex flex-col justify-between">
            <div>
              <div class="selector-title">Score Status</div>
              <div class="sim-toggle-buttons grid grid-cols-2 gap-2 mb-4">
                <button class="btn-toggle-sim ${this.isEven?"active glow-volt":""}" id="sim-btn-even">
                  ${n}
                </button>
                <button class="btn-toggle-sim ${this.isEven?"":"active glow-cyan"}" id="sim-btn-odd">
                  ${s}
                </button>
              </div>
              
              <div class="sim-explanation">
                <div class="exp-header flex items-center gap-2 mb-2">
                  <span class="indicator-dot pulse-${this.isEven?"volt":"cyan"}"></span>
                  <span>${o}</span>
                </div>
                <div class="exp-details">${l}</div>
              </div>
            </div>
            
            <div class="court-sim-footer mt-4 p-3 glass-panel rounded-lg text-xs text-muted">
              💡 <strong>Tip:</strong> Click directly on the bottom court boxes to toggle even/odd service. Players only swap courts when their team wins a point on their own serve.
            </div>
          </div>
        </div>
      </div>
    `,(L=document.getElementById("sim-btn-even"))==null||L.addEventListener("click",()=>this.setScoreParity(!0)),(M=document.getElementById("sim-btn-odd"))==null||M.addEventListener("click",()=>this.setScoreParity(!1)),(P=document.getElementById("svg-click-right"))==null||P.addEventListener("click",()=>this.setScoreParity(!0)),(C=document.getElementById("svg-click-left"))==null||C.addEventListener("click",()=>this.setScoreParity(!1))}}class O{constructor(e,a){this.state=e,this.onRemoteUpdate=a,this.channelName="badminton_live_sync",this.channel=null,this.init()}init(){try{this.channel=new BroadcastChannel(this.channelName),this.channel.onmessage=e=>this.handleMessage(e.data)}catch(e){console.warn("BroadcastChannel not supported in this browser. Falling back to storage event listeners.",e),window.addEventListener("storage",a=>{if(a.key==="badminton_live_sync_fallback")try{const t=JSON.parse(a.newValue);this.handleMessage(t)}catch(t){console.error("Failed to parse fallback storage sync message",t)}})}}getLiveMatches(){const e=localStorage.getItem("badminton_live_matches");return e?JSON.parse(e):{}}saveLiveMatches(e){localStorage.setItem("badminton_live_matches",JSON.stringify(e))}broadcast(e,a){const t={type:e,payload:a,timestamp:Date.now()};this.channel&&this.channel.postMessage(t),localStorage.setItem("badminton_live_sync_fallback",JSON.stringify(t))}handleMessage(e){if(!e||!e.type||!e.payload)return;const{type:a,payload:t}=e;switch(a){case"LIVE_SCORE_UPDATE":this.applyLiveUpdate(t);break;case"LIVE_MATCH_START":this.setMatchLiveStatus(t.matchId,!0,t.matchState);break;case"LIVE_MATCH_END":this.setMatchLiveStatus(t.matchId,!1);break}}setMatchLiveStatus(e,a,t=null){const i=this.getLiveMatches();a?i[e]={matchId:e,isLive:!0,updatedAt:Date.now(),...t||{}}:delete i[e],this.saveLiveMatches(i),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:e,isLive:a})}applyLiveUpdate(e){const{matchId:a,sets:t,score1:i,score2:n,currentSet:s,servingTeam:r,isEven:o,serverName:l,partnerName:d,receiverName:c,receiverPartnerName:h,isCourtSwapped:p,team1Right:g,team1Left:m,team2Right:u,team2Left:f}=e,$=this.getLiveMatches();$[a]={matchId:a,isLive:!0,updatedAt:Date.now(),sets:t,score1:i,score2:n,currentSet:s,servingTeam:r,isEven:o,serverName:l,partnerName:d,receiverName:c,receiverPartnerName:h,isCourtSwapped:p,team1Right:g,team1Left:m,team2Right:u,team2Left:f},this.saveLiveMatches($);const v=this.state.matches.find(y=>y.id===a);v&&(v.sets=t,v.score1=i,v.score2=n,v.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",e)}}class z{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const e=()=>this.resize();window.addEventListener("resize",e),this.resizeHandler=e;for(let t=0;t<120;t++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const a=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let t=0;this.particles.forEach(i=>{i.tiltAngle+=i.tiltAngleIncremental,i.y+=i.speed,i.x+=Math.sin(i.tiltAngle)*.5,i.tilt=Math.sin(i.tiltAngle-i.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=i.r,this.ctx.strokeStyle=i.color,this.ctx.moveTo(i.x+i.tilt+i.r/2,i.y),this.ctx.lineTo(i.x+i.tilt,i.y+i.tilt+i.r/2),this.ctx.stroke(),i.y<=this.canvas.height&&t++}),t>0?this.animationFrame=requestAnimationFrame(a):this.stop()};a()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class G{constructor(){window.BadmintonAppInstance=this,this.state=new R,this.lang="en",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new z,this.countdownTimer=null,this.activeSpectateMatchId=null,this.sync=new O(this.state,(e,a)=>this.handleSyncUpdate(e,a)),this.admin=new F(this.state,()=>this.handleStateChange(),this.sync),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}getTeamRank(e,a){const t=this.state.calculateStandings(a),i=a==="Men's Doubles"?"MD":"XD",n=this.state.matches.find(o=>o.id===`F-${i}`),s=this.state.matches.find(o=>o.id===`B-${i}`);if(n&&n.status==="Completed"){if(n.winner===e)return 1;if(n.team1===e||n.team2===e)return 2}if(s&&s.status==="Completed"){if(s.winner===e)return 3;if(s.team1===e||s.team2===e)return 4}const r=t.findIndex(o=>o.name===e);return r!==-1?r+1:"-"}getTeamStats(e,a){const i=this.state.calculateStandings(a).find(u=>u.name===e)||{points:0},n=this.state.matches.filter(u=>u.category===a&&u.status==="Completed"&&(u.team1===e||u.team2===e)),s=n.length,r=n.filter(u=>u.winner===e).length,o=s-r,l=s>0?Math.round(r/s*100):0;let d=0,c=0,h=0,p=0;n.forEach(u=>{const f=u.team1===e,$=Number(u.score1)||0,v=Number(u.score2)||0;f?(d+=$,c+=v):(d+=v,c+=$),u.sets&&u.sets.forEach(y=>{const w=Number(y.t1)||0,b=Number(y.t2)||0;f?(h+=w,p+=b):(h+=b,p+=w)})});const g=d-c,m=h-p;return{played:s,wins:r,losses:o,pts:i.points,setsWon:d,setsLost:c,netSets:g,pointsWon:h,pointsLost:p,netPoints:m,winPercent:l,completedMatches:n}}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(t=>{t.addEventListener("click",i=>{const n=i.currentTarget.getAttribute("data-tab");n&&this.switchTab(n)})}),window.addEventListener("resize",()=>this.updateActivePill());const a=document.getElementById("btn-reset-db");a&&a.addEventListener("click",()=>{this.admin.isAdmin&&confirm("WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast("Database reset to default!","success"))}),document.body.addEventListener("click",t=>{const i=t.target.closest(".btn-spectate-match");if(i){const n=i.getAttribute("data-match-id");this.openSpectateOverlay(n)}})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(e){this.activeTab=e,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(t=>{t.getAttribute("data-tab")===e?t.classList.add("active"):t.classList.remove("active")}),this.renderActiveView(),e==="rules"&&setTimeout(()=>{this.courtSimulator=new W("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const t=this.state.teams.filter(n=>n.category==="Men's Doubles")[0],i=this.state.teams.filter(n=>n.category==="Mixed's Doubles")[0];t&&i&&this.courtSimulator.setTeams([t.player1,t.player2],[i.player1,i.player2])},50),this.updateActivePill()}updateActivePill(){const e=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),a=document.querySelector(".nav-tabs-wrapper");if(!a)return;let t=document.querySelector(".nav-active-pill");t||(t=document.createElement("div"),t.className="nav-active-pill",a.appendChild(t)),e&&(t.style.width=`${e.offsetWidth}px`,t.style.transform=`translateX(${e.offsetLeft}px)`)}translateStaticElements(){}updateNavbar(){const e=document.getElementById("btn-toggle-admin"),a=document.getElementById("btn-reset-db");if(e){let t=document.getElementById("navbar-welcome-user"),i=document.getElementById("btn-score-settings");if(this.admin.isAdmin||this.admin.isRef){const s=sessionStorage.getItem("badminton_authLabel")||(this.admin.isAdmin?"Super Admin":this.admin.refPitch+" Umpire");t||(t=document.createElement("span"),t.id="navbar-welcome-user",t.className="text-5xs text-slate-300 font-extrabold tracking-wide uppercase mr-1 flex items-center gap-1.5",e.parentNode.insertBefore(t,e)),t.innerHTML=`<span class="w-1.5 h-1.5 rounded-full bg-volt pulse-dot"></span> Welcome, <span class="text-volt font-black">${s}</span>`,t.classList.remove("hidden"),this.admin.isAdmin?(i||(i=document.createElement("button"),i.id="btn-score-settings",i.className="btn btn-xs btn-outline btn-volt flex items-center gap-1 mr-1",i.innerHTML="⚙️ <span>Score Settings</span>",e.parentNode.insertBefore(i,e)),i.classList.remove("hidden")):i&&i.classList.add("hidden"),e.innerHTML="✕ <span>Logout</span>",e.className="btn btn-xs btn-danger font-bold flex items-center gap-1",a&&this.admin.isAdmin&&a.classList.remove("hidden")}else t&&(t.classList.add("hidden"),t.innerHTML=""),i&&i.classList.add("hidden"),e.innerHTML="🔐 <span>Admin Login</span>",e.className="btn btn-xs btn-outline flex items-center gap-1",a&&a.classList.add("hidden")}}renderActiveView(){const e=document.getElementById("main-view-container");if(!e)return;switch(e.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(e);break;case"standings":this.renderStandings(e);break;case"fixtures":this.renderFixtures(e);break;case"bracket":this.renderBracket(e);break;case"results":this.renderResults(e);break;case"rules":this.renderRules(e);break;case"teams":this.renderTeams(e);break}e.querySelectorAll(".glass-card, .dashboard-stat-card, .team-card, .match-card, .bracket-node, .standings-table tbody tr").forEach((t,i)=>{t.classList.add("animate-fade-slide-up"),t.style.animationDelay=`${i*.03}s`})}renderDashboard(e){var l,d;const a=this.state.matches.length,t=this.state.matches.filter(c=>c.status==="Completed").length,i=a>0?Math.round(t/a*100):0;let n=0;this.state.matches.forEach(c=>{c.status==="Completed"&&c.sets.forEach(h=>{n+=h.t1+h.t2})});const s="GEAR GAMES BADMINTON CHAMPIONSHIP 2026",r="Live standings, schedule fixtures & bracket generator",o="COUNTDOWN TO TOURNAMENT";e.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${s}</h1>
        <p class="hero-subtitle">${r}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${o}</div>
          <div class="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            <div class="countdown-box">
              <span id="cd-days" class="cd-num">00</span>
              <span class="cd-lbl">Days</span>
            </div>
            <div class="countdown-box">
              <span id="cd-hours" class="cd-num">00</span>
              <span class="cd-lbl">Hrs</span>
            </div>
            <div class="countdown-box">
              <span id="cd-minutes" class="cd-num">00</span>
              <span class="cd-lbl">Mins</span>
            </div>
            <div class="countdown-box">
              <span id="cd-seconds" class="cd-num">00</span>
              <span class="cd-lbl">Secs</span>
            </div>
          </div>
          <div class="text-xs text-muted mt-3">⚡ 31 May 2026 @ 13:30 | Alpha Era court ⚡</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="dashboard-stat-card glass-card border-glow-volt">
          <div class="stat-icon text-volt">🏆</div>
          <div class="stat-info">
            <span class="stat-value">${t}/${a}</span>
            <span class="stat-label">Matches Completed</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${i}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${i}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${n}</span>
            <span class="stat-label">Total Points Scored</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-cyan" style="width: 100%"></div>
          </div>
          <div class="text-right text-xs text-cyan font-bold mt-1">Live Statistics</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-purple">
          <div class="stat-icon text-purple">👥</div>
          <div class="stat-info">
            <span class="stat-value">10 Teams</span>
            <span class="stat-label">20 Registered Players</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-purple" style="width: 100%"></div>
          </div>
          <div class="text-right text-xs text-purple font-bold mt-1">Men's & Mixed Doubles</div>
        </div>
      </div>

      <!-- Live Stadium Center Card -->
      <div class="glass-card mb-6 border border-slate-800">
        <div class="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 flex-wrap gap-2">
          <h3 class="m-0 flex items-center gap-2">
            <span class="live-dot pulse-red"></span>
            <span class="text-glow-volt font-black uppercase text-xs" style="letter-spacing: 0.05em;">
              🔴 LIVE COURT TRACKER
            </span>
          </h3>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${this.renderLivePitches()}
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Quick standings MD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-volt font-bold">💎 Men's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-md">View Full</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Men's Doubles")}
          </div>
        </div>

        <!-- Quick standings XD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-cyan font-bold">🔮 Mixed's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-xd">View Full</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Mixed's Doubles")}
          </div>
        </div>
      </div>
    `,(l=document.getElementById("dash-goto-md"))==null||l.addEventListener("click",()=>this.switchTab("standings")),(d=document.getElementById("dash-goto-xd"))==null||d.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(e){const a=this.state.calculateStandings(e);let t=a.slice(0,3).map((i,n)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${n===0?"🥇":n===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${i.name}</td>
          <td class="text-center font-semibold text-volt">${i.points}</td>
          <td class="text-center text-slate-300">${i.played}</td>
          <td class="text-center text-slate-300">${i.netSets>0?"+"+i.netSets:i.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${i.pointsWon}-${i.pointsLost}</td>
        </tr>
      `).join("");return a.length===0&&(t='<tr><td colspan="6" class="text-center text-muted py-4">No data available</td></tr>'),`
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>Team</th>
            <th class="text-center">Wins</th>
            <th class="text-center">Pld</th>
            <th class="text-center">Sets</th>
            <th class="text-center">Points</th>
          </tr>
        </thead>
        <tbody>
          ${t}
        </tbody>
      </table>
    `}renderStandings(e){e.innerHTML=`
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0">📊 Tournament Leaderboards</h2>
          <p class="view-subtitle">Real-time calculated ranks and tie-breaker statistics</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-all">
            All
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="md"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-md">
            Men's Doubles
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="xd"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-xd">
            Mixed's Doubles
          </button>
        </div>
      </div>

      <div class="space-y-8">
        ${this.activeCategoryFilter==="all"||this.activeCategoryFilter==="md"?this.renderCategoryStandings("Men's Doubles"):""}
        ${this.activeCategoryFilter==="all"||this.activeCategoryFilter==="xd"?this.renderCategoryStandings("Mixed's Doubles"):""}
      </div>
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(e){const a=this.state.calculateStandings(e),t=e==="Men's Doubles",i=t?"text-volt":"text-cyan",n=a.map((s,r)=>{const o=r+1,l=o<=4,d=this.state.isGroupStageComplete(e);let c=`<span class="rank-circle font-bold ${o===1?"gold":o===2?"silver":o===3?"bronze":""}">${o}</span>`,h="";d&&(l?h='<span class="advance-tag neon-green">SEMIS</span>':h='<span class="advance-tag neon-red">OUT</span>');const p=s.played===a.length-1,g=p?'<span class="finished-tag">4 Matches</span>':"";return`
        <tr class="${l?"row-top-4":"row-eliminated"} ${t?"md-row":"xd-row"}">
          <td class="text-center">${c}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${s.name}</span>
              ${h}
              ${g}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${s.player1} & ${s.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${s.points}</td>
          <td class="text-center font-bold ${p?"text-emerald-400":"text-slate-200"}">${s.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${s.won}</td>
          <td class="text-center font-semibold ${s.lost>0?"text-rose-400":"text-slate-400"}">${s.lost}</td>
          <td class="text-center text-slate-200 font-bold ${s.netSets>=0?"text-emerald-400":"text-rose-400"}">
            ${s.setsWon}-${s.setsLost} 
            <span class="text-xs font-normal">(${s.netSets>=0?"+"+s.netSets:s.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${s.pointsWon}-${s.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${s.netPoints>=0?"+"+s.netPoints:s.netPoints})</span>
          </td>
        </tr>
      `}).join("");return`
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${t?"💎":"🔮"}</span>
          <span class="${i}">${e}</span>
          <span class="badge bg-slate-800 text-slate-400 text-xs font-normal ml-2">Qualifying Stage</span>
        </h3>
        
        <div class="overflow-x-auto">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="text-center" style="width: 60px;">#</th>
                <th>Team / Members</th>
                <th class="text-center">Pts</th>
                <th class="text-center">Pld</th>
                <th class="text-center">Won</th>
                <th class="text-center">Lost</th>
                <th class="text-center">Sets (Net)</th>
                <th class="text-center">Set Pts (Net)</th>
              </tr>
            </thead>
            <tbody>
              ${n}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span><strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points.</span>
        </div>
      </div>
    `}renderFixtures(e){let a="";this.activeCategoryFilter==="all"?a=`
        <div class="fixtures-grid gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `:this.activeCategoryFilter==="md"?a=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
        </div>
      `:a=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `,e.innerHTML=`
      <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0"><svg class="nav-icon mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px; vertical-align: middle;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Match Schedule & Results</h2>
          <p class="view-subtitle">List of scheduled tournament fixtures and match scores</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-all">
            All
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="md"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-md">
            Men's Doubles
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="xd"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-xd">
            Mixed's Doubles
          </button>
        </div>
      </div>

      <!-- Search & Status filter deck -->
      <div class="filter-deck">
        <div class="filter-search-wrapper">
          <span class="filter-search-icon">🔍</span>
          <input type="text" class="filter-search-input" id="fixture-search" 
                 placeholder="Search team or player name..." 
                 value="${this.fixtureSearchText}">
        </div>

        <div class="filter-pills">
          <button class="filter-pill ${this.fixtureStatusFilter==="all"?"active":""}" data-status="all">
            All
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Scheduled"?"active":""}" data-status="Scheduled">
            Scheduled
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Completed"?"active":""}" data-status="Completed">
            Completed
          </button>
        </div>
      </div>

      ${a}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const t=document.getElementById("fixture-search");t.oninput=n=>{this.fixtureSearchText=n.target.value,this.renderActiveView();const s=document.getElementById("fixture-search");s&&(s.focus(),s.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(n=>{n.onclick=()=>{this.fixtureStatusFilter=n.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(e,a,t){const i=this.state.teams.find(s=>s.name===e),n=this.state.teams.find(s=>s.name===a);return!!(i&&(i.player1.toLowerCase().includes(t)||i.player2.toLowerCase().includes(t))||n&&(n.player1.toLowerCase().includes(t)||n.player2.toLowerCase().includes(t)))}renderCategoryFixtures(e){const a=e==="Men's Doubles",t=a?"Men's Doubles":"Mixed's Doubles";let i=this.state.matches.filter(m=>m.category===e);if(this.fixtureStatusFilter!=="all"&&(i=i.filter(m=>m.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const m=this.fixtureSearchText.toLowerCase().trim();i=i.filter(u=>u.team1.toLowerCase().includes(m)||u.team2.toLowerCase().includes(m)||u.stage&&u.stage.toLowerCase().includes(m)||u.pitch&&u.pitch.toLowerCase().includes(m)||this.checkPlayersIncludeSearch(u.team1,u.team2,m))}const n=i.filter(m=>m.stage==="Group Stage"),s=i.filter(m=>m.stage==="Semi-finals"),r=i.filter(m=>m.stage==="Grand Final"),o=i.filter(m=>m.stage==="Bronze Match"),l="GRAND CHAMPIONSHIP",d="BRONZE FINALS",c="SEMIFINALS STAGE",h="GROUP STAGE QUALIFYING",p=(m,u)=>m.length===0?"":`
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${a?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${a?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${u}</span>
            <span class="text-slate-600 font-medium">${m.length} ${m.length===1?"Match":"Matches"}</span>
          </div>
          <div class="flex flex-col gap-3">
            ${this.renderMatchCards(m)}
          </div>
        </div>
      `;let g="No matches scheduled or completed";return this.fixtureSearchText.trim()!==""?g="No matches found matching your search":this.fixtureStatusFilter==="Scheduled"?g="No matches scheduled":this.fixtureStatusFilter==="Completed"&&(g="No matches completed"),`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${a?"💎":"🔮"}</span>
          <span class="${a?"text-volt":"text-cyan"}">${t}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${i.length===0?`
            <div class="glass-card text-center py-8 px-4 flex flex-col items-center justify-center gap-2 border border-dashed border-slate-800/60" style="background: rgba(15, 23, 42, 0.15); border-radius: 12px;">
              <span class="text-xl">📅</span>
              <span class="text-slate-400 font-semibold text-xs">${g}</span>
            </div>
          `:`
            ${p(r,l)}
            ${p(o,d)}
            ${p(s,c)}
            ${p(n,h)}
          `}
        </div>
      </div>
    `}renderMatchCards(e){if(e.length===0)return'<div class="col-span-2 text-center text-muted py-6">No matches found</div>';const a=this.sync.getLiveMatches();return e.map(t=>{const i=a[t.id],n=!!i,s=t.status==="Completed";t.team1&&(t.team1.includes("Place")||t.team1.includes("Winner")||t.team1.includes("Loser"))||t.team2&&(t.team2.includes("Place")||t.team2.includes("Winner")||t.team2.includes("Loser"));let r="",o="";n?(r="border-glow-volt bg-volt-gradient",o=`
          <span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--danger); color: #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);">
            <span class="live-dot-pulse"></span> LIVE
          </span>
        `):t.stage==="Grand Final"?(r="border-glow-gold bg-gold-gradient",o=s?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>GRAND FINAL</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">GRAND FINAL</span>'):t.stage==="Bronze Match"?(r="border-glow-bronze bg-bronze-gradient",o=s?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>BRONZE MATCH</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">BRONZE MATCH</span>'):(r=s?"border-completed":"border-scheduled",o=s?'<span class="match-badge completed">FINAL</span>':'<span class="match-badge scheduled">SCHEDULED</span>');const l=t.category==="Men's Doubles",d=l?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',c=this.state.teams.find(L=>L.name===t.team1),h=this.state.teams.find(L=>L.name===t.team2),p=c?`${c.player1} & ${c.player2}`:"",g=h?`${h.player1} & ${h.player2}`:"",m=l?"text-volt":"text-cyan",f=this.state.getScoreConfig(t.category,t.stage).setsToWin*2-1,$=s?t.sets:n?i.sets:[],v=s?t.score1:n?i.score1:"-",y=s?t.score2:n?i.score2:"-";let w="",b="";if((s||n)&&$&&$.length>0){const L=s&&t.winner===t.team1?`<span class="${m}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',M=s&&t.winner===t.team2?`<span class="${m}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';w+=L,b+=M,$.forEach(P=>{w+=`<span class="${P.t1>P.t2?m:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${P.t1}</span>`,b+=`<span class="${P.t2>P.t1?m:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${P.t2}</span>`});for(let P=$.length;P<f;P++)w+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',b+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else{w='<span style="width: 8px;"></span>',b='<span style="width: 8px;"></span>';for(let L=0;L<f;L++)w+='<span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',b+='<span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>'}const x=this.admin.isAdmin||this.admin.isRef&&t.pitch===this.admin.refPitch;let S="";n?S=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <button class="btn btn-xs btn-outline btn-spectate-match flex items-center gap-1" data-match-id="${t.id}">
              🔍 <span>Spectate</span>
            </button>
            ${x?`
              <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${t.id}">
                Umpire <span>Join</span>
              </button>
            `:""}
          </div>
        `:s?S=this.admin.isAdmin?`
          <div class="flex justify-end mt-3 pt-2.5 border-t border-slate-800/80">
            <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${t.id}">
              ✏️ <span>Edit Score</span>
            </button>
          </div>
        `:"":S=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <div>
              <span class="text-5xs text-slate-500 font-bold uppercase tracking-wider">AWAITING</span>
            </div>
            <div class="flex gap-2">
              ${x?`
                <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${t.id}">
                  🏸 <span>Umpire</span>
                </button>
              `:""}
              ${this.admin.isAdmin?`
                <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${t.id}">
                  ✏️ <span>Direct</span>
                </button>
              `:""}
            </div>
          </div>
        `;const T=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${r} ${T}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${d}
              <span>${t.pitch} | ${t.time}</span>
            </div>
            ${o}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${s&&t.winner===t.team1||n&&v>y?m:"text-slate-200"} truncate" title="${t.team1}">
                  ${t.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${p||"TBD"}">${p||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: ${f*22+12}px; gap: 0.5rem; flex-shrink: 0;">
                ${w}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${s&&t.winner===t.team2||n&&y>v?m:"text-slate-200"} truncate" title="${t.team2}">
                  ${t.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${g||"TBD"}">${g||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: ${f*22+12}px; gap: 0.5rem; flex-shrink: 0;">
                ${b}
              </div>
            </div>
          </div>

          <!-- Action Footer -->
          ${S}
        </div>
      `}).join("")}renderBracket(e){const a=r=>{const o=r==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(l=>l.id===`SF1-${o}`),sf2:this.state.matches.find(l=>l.id===`SF2-${o}`),f:this.state.matches.find(l=>l.id===`F-${o}`),b:this.state.matches.find(l=>l.id===`B-${o}`)}},t=a("Men's Doubles"),i=a("Mixed's Doubles"),n=r=>{const o=this.state.calculateStandings(r),l=this.state.isGroupStageComplete(r);return o.map((d,c)=>{const h=c+1,p=h<=4,g=h===1?"gold":h===2?"silver":h===3?"bronze":"",m=h===1?"🥇 Seed 1":h===2?"🥈 Seed 2":h===3?"🥉 Seed 3":h===4?"🎫 Seed 4":"❌ Out",u=p?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;" data-team-name="${d.name}">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${d.name}">
              <span class="rank-circle font-bold ${g}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${h}</span>
              <span class="font-bold text-slate-200 truncate">${d.name}</span>
            </div>
            ${l?`<span class="font-extrabold ${u}" style="font-size: 0.55rem; flex-shrink: 0;">${m}</span>`:""}
          </div>
        `}).join("")},s=(r,o,l,d)=>{const c=this.getAwardResults(d),h=p=>{if(!p)return'<div class="bracket-node empty">N/A</div>';const g=p.status==="Completed",m=p.team1&&(p.team1.includes("Place")||p.team1.includes("Winner")||p.team1.includes("Loser"))||p.team2&&(p.team2.includes("Place")||p.team2.includes("Winner")||p.team2.includes("Loser")),u=this.admin.isAdmin?m?'<span title="Cannot edit score yet" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>':`<button class="btn-edit-node-score btn-edit-match" data-match-id="${p.id}">✏️</button>`:"",f=this.state.teams.find(M=>M.name===p.team1),$=this.state.teams.find(M=>M.name===p.team2),v=f?`${f.player1} & ${f.player2}`:"",y=$?`${$.player1} & ${$.player2}`:"",b=this.state.getScoreConfig(p.category,p.stage).setsToWin*2-1,x=l?"text-volt":"text-cyan";let S="",T="";if(g&&p.sets&&p.sets.length>0){const M=p.winner===p.team1?`<span class="${x}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',P=p.winner===p.team2?`<span class="${x}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';S+=M,T+=P,p.sets.forEach(C=>{S+=`<span class="${C.t1>C.t2?x:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${C.t1}</span>`,T+=`<span class="${C.t2>C.t1?x:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${C.t2}</span>`});for(let C=p.sets.length;C<b;C++)S+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',T+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else{S='<span style="width: 6px;"></span>',T='<span style="width: 8px;"></span>';for(let M=0;M<b;M++)S+='<span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',T+='<span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>'}const L=g?'<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ Finished</div>':`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${p.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${g?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${p.pitch} | ${p.stage}</span>
              ${u}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${g&&p.winner===p.team1?x:"text-slate-300"}" data-team-name="${p.team1}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${p.team1}">${p.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${v||"TBD"}">${v||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: ${b*16+10}px; gap: 0.35rem; flex-shrink: 0;">
                  ${S}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${g&&p.winner===p.team2?x:"text-slate-300"}" data-team-name="${p.team2}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${p.team2}">${p.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${y||"TBD"}">${y||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: ${b*16+10}px; gap: 0.35rem; flex-shrink: 0;">
                  ${T}
                </div>
              </div>
            </div>
            
            ${L}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${l?"text-volt":"text-cyan"}">${o} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 GROUP STANDINGS</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${n(d)}
              </div>
              <div class="text-4xs text-muted text-center mt-2.5 font-semibold leading-relaxed">
                💡 Top 4 teams advance to<br>playoff bracket stage
              </div>
            </div>

            <!-- Connectors Column 0 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork" style="height: 100%; border: none; display: flex; flex-direction: column; justify-content: space-around;">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
            </div>

            <!-- Semifinals Column -->
            <div class="bracket-col">
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 1</div>
                ${h(r.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${h(r.sf2)}
              </div>
            </div>

            <!-- Connectors Column 1 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork">
                <div class="connector-line horizontal"></div>
                <div class="connector-line vertical height-half"></div>
              </div>
              <div class="connector-fork mt-8">
                <div class="connector-line horizontal"></div>
                <div class="connector-line vertical height-half"></div>
              </div>
            </div>

            <!-- Finals Column -->
            <div class="bracket-col flex flex-col justify-around">
              <div class="bracket-group">
                <div class="node-label text-gold font-bold">🏆 GRAND CHAMPIONSHIP</div>
                ${h(r.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${h(r.b)}
              </div>
            </div>

            <!-- Connectors Column 2 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
              <div class="connector-fork mt-8">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
            </div>

            <!-- Bảng Vàng / Podium Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px; gap: 0.75rem;">
              <div class="node-label mb-2 text-center text-gold font-bold" style="letter-spacing: 0.05em;">🏆 FINAL RESULTS</div>
              
              <!-- Gold Node -->
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;" data-team-name="${c.goldTeam.name}">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>CHAMPION</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${c.goldTeam.name}">${c.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.goldTeam.players}">${c.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;" data-team-name="${c.silverTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>RUNNER-UP</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${c.silverTeam.name}">${c.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.silverTeam.players}">${c.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${c.bronzeTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>3RD PLACE</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${c.bronzeTeam.name}">${c.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.bronzeTeam.players}">${c.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${c.fourthTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>4TH PLACE</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${c.fourthTeam.name}">${c.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.fourthTeam.players}">${c.fourthTeam.players}</div>
              </div>
            </div>
          </div>
        </div>
      `};e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Playoff Tournament Tree</h2>
        <p class="view-subtitle">Automatic calculated tournament brackets and playoff trees</p>
      </div>

      ${s(t,"Men's Doubles",!0,"Men's Doubles")}
      ${s(i,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `,setTimeout(()=>this.setupBracketHighlights(),50)}setupBracketHighlights(){const e=document.querySelectorAll(".bracket-visualizer");e.length!==0&&e.forEach(a=>{a.addEventListener("mouseover",t=>{const i=t.target.closest("[data-team-name]");if(!i)return;const n=i.getAttribute("data-team-name");if(!n||n.includes("Winner")||n.includes("Loser")||n.includes("Place"))return;document.querySelectorAll(`[data-team-name="${CSS.escape(n)}"]`).forEach(r=>{r.classList.add("team-highlight-active");const o=r.closest(".bracket-node");o&&o.classList.add("node-highlight-active")})}),a.addEventListener("mouseout",t=>{const i=t.target.closest("[data-team-name]");if(!i||!i.getAttribute("data-team-name"))return;document.querySelectorAll("[data-team-name]").forEach(r=>{r.classList.remove("team-highlight-active");const o=r.closest(".bracket-node");o&&o.classList.remove("node-highlight-active")})})})}getAwardResults(e){const a=e==="Men's Doubles"?"MD":"XD",t=this.state.matches.find(d=>d.id===`F-${a}`),i=this.state.matches.find(d=>d.id===`B-${a}`);let n={name:"TBD",players:"Championship Winner",confirmed:!1},s={name:"TBD",players:"Championship Runner-up",confirmed:!1},r={name:"TBD",players:"Bronze Winner",confirmed:!1},o={name:"TBD",players:"Bronze Runner-up",confirmed:!1};const l=d=>{if(!d)return"";const c=this.state.teams.find(h=>h.name===d);return c?`${c.player1} & ${c.player2}`:""};if(t)if(t.status==="Completed"){const d=t.winner,c=t.winner===t.team1?t.team2:t.team1;n={name:d,players:l(d),confirmed:!0},s={name:c,players:l(c),confirmed:!0}}else t.team1.includes("Winner")||t.team2.includes("Winner")||(n={name:"Grand Finalists",players:`${t.team1} vs ${t.team2}`,confirmed:!1},s={name:"Chasing Runner-up",players:"Runner-up of Grand Final",confirmed:!1});if(i)if(i.status==="Completed"){const d=i.winner,c=i.winner===i.team1?i.team2:i.team1;r={name:d,players:l(d),confirmed:!0},o={name:c,players:l(c),confirmed:!0}}else i.team1.includes("Loser")||i.team2.includes("Loser")||(r={name:"Bronze Contenders",players:`${i.team1} vs ${i.team2}`,confirmed:!1});return{goldTeam:n,silverTeam:s,bronzeTeam:r,fourthTeam:o}}renderResults(e){const a=this.getAwardResults("Men's Doubles"),t=this.getAwardResults("Mixed's Doubles"),i=(s,r,o)=>{const l=s.goldTeam.confirmed||s.silverTeam.confirmed||s.bronzeTeam.confirmed,d=(x,S=48,T="")=>{let L="";if(T==="gold"?L=`
            <div class="podium-medal-badge gold" title="Gold Medal - Champion" style="font-size: 16px; line-height: 1;">
              🥇
            </div>
          `:T==="silver"?L=`
            <div class="podium-medal-badge silver" title="Silver Medal - Runner-up" style="font-size: 16px; line-height: 1;">
              🥈
            </div>
          `:T==="bronze"?L=`
            <div class="podium-medal-badge bronze" title="Bronze Medal - 3rd Place" style="font-size: 16px; line-height: 1;">
              🥉
            </div>
          `:T==="fourth"&&(L=`
            <div class="podium-medal-badge fourth" title="Honorable Mention - 4th Place" style="font-size: 16px; line-height: 1;">
              🎖️
            </div>
          `),!x||x.includes("TBD")||x.includes("Place")||x.includes("Winner")||x.includes("Loser")||x.includes("Chasing")||x.includes("Tranh")||x.includes("Chung"))return`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${S}px; height: ${S}px; font-size: ${S*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${L}
            </div>
          `;const M=this.state.teams.find(P=>P.name===x);return M?`
          <div class="podium-avatar-wrapper mx-auto" style="width: ${S}px; height: ${S}px; position: relative; flex-shrink: 0; border-radius: 50% !important;">
            <img src="/teams/${M.id}.jpg" 
                 onerror="this.onerror=null; this.src='/teams/${M.id}.png'; this.onerror=function(){this.style.display='none'; this.nextElementSibling.style.display='flex';};" 
                 class="podium-avatar object-cover" 
                 style="width: 100%; height: 100%; display: block; border-radius: 50% !important; box-shadow: 0 4px 10px rgba(0,0,0,0.4);" />
            <div class="team-fallback-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800" 
                 style="display:none; width: 100%; height: 100%; border-radius: 50% !important; font-size: ${S*.4}px;">👥</div>
            ${L}
          </div>
        `:`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${S}px; height: ${S}px; font-size: ${S*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${L}
            </div>
          `},c=this.state.teams.find(x=>x.name===s.silverTeam.name),h=c?c.id:"",p=h?"clickable-podium":"",g=this.state.teams.find(x=>x.name===s.goldTeam.name),m=g?g.id:"",u=m?"clickable-podium":"",f=this.state.teams.find(x=>x.name===s.bronzeTeam.name),$=f?f.id:"",v=$?"clickable-podium":"",y=this.state.teams.find(x=>x.name===s.fourthTeam.name),w=y?y.id:"",b=w?"clickable-podium":"";return`
        <div class="glass-card mb-8 text-center relative overflow-hidden" style="padding: 1.5rem 1rem;">
          <div class="absolute top-0 left-0 w-full h-[3px] ${o?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${o?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${r}</span>
          </h3>
          <p class="text-xs text-muted mb-4">
            ${l?"⚡ Official championship matches completed":"⏳ Waiting for championship finals to complete"}
          </p>
 
          <div class="podium-stage-container">
            <!-- Silver (#2) -->
            <div class="podium-column silver ${p}" data-team-id="${h}" data-category="${r}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${d(s.silverTeam.name,56,"silver")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-extrabold text-[11px] md:text-sm text-slate-100 break-words leading-snug" title="${s.silverTeam.name}">${s.silverTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${s.silverTeam.players}">${s.silverTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">2</span>
                <span class="podium-badge">Runner-up</span>
              </div>
            </div>

            <!-- Gold (#1) -->
            <div class="podium-column gold ${u}" data-team-id="${m}" data-category="${r}">
              <div class="crown-icon text-2xl md:text-3xl animate-bounce-slow mb-1 flex-shrink-0" style="filter: drop-shadow(0 0 8px rgba(245,158,11,0.6));">👑</div>
              <div class="podium-avatar-halo">
                ${d(s.goldTeam.name,68,"gold")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-black text-xs md:text-base text-slate-100 break-words leading-snug" title="${s.goldTeam.name}">${s.goldTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${s.goldTeam.players}">${s.goldTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">1</span>
                <span class="podium-badge">Champion</span>
              </div>
            </div>

            <!-- Bronze (#3) -->
            <div class="podium-column bronze ${v}" data-team-id="${$}" data-category="${r}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${d(s.bronzeTeam.name,56,"bronze")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-extrabold text-[11px] md:text-sm text-slate-100 break-words leading-snug" title="${s.bronzeTeam.name}">${s.bronzeTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${s.bronzeTeam.players}">${s.bronzeTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">3</span>
                <span class="podium-badge">3rd Place</span>
              </div>
            </div>
          </div>
 
          <!-- Fourth Place premium card -->
          <div class="podium-fourth-card ${b}" data-team-id="${w}" data-category="${r}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <div class="podium-fourth-rank">
                4
              </div>
              ${d(s.fourthTeam.name,36,"fourth")}
              <div class="min-w-0 flex-1 text-left">
                <div class="font-extrabold text-xs text-slate-200 truncate" title="${s.fourthTeam.name}">${s.fourthTeam.name}</div>
                <div class="text-[10px] text-slate-500 font-medium truncate mt-0.5" title="${s.fourthTeam.players}">${s.fourthTeam.players}</div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <span class="podium-fourth-badge">🎖️ Honorable Mention</span>
            </div>
          </div>
        </div>
      `};e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Championship Wall of Fame</h2>
        <p class="view-subtitle">Honoring the champions and premium standings of the season</p>
      </div>
 
      ${i(a,"Men's Doubles",!0)}
      ${i(t,"Mixed's Doubles",!1)}
    `,e.querySelectorAll(".clickable-podium").forEach(s=>{s.addEventListener("click",()=>{const r=s.getAttribute("data-team-id"),o=s.getAttribute("data-category");r&&o&&this.showTeamDetailsModal(r,o)})}),setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(e){const a=B.en,t=a.sections.map(i=>{const n=i.content.map(s=>{let r=s.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return r=r.replace(/\\rightarrow/g," ➔ "),r=r.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${r}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${i.title}</h3>
          <div>${n}</div>
        </div>
      `}).join("");e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">📘 Rules & Regulations</h2>
        <p class="view-subtitle">Official tournament handbook and dynamic doubles service simulator</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Interactive Simulator Widget (Grid span 5) -->
        <div class="lg:col-span-5" id="court-sim-container">
          <!-- Will be loaded dynamically via CourtSimulator -->
        </div>

        <!-- Rules Handbook (Grid span 7) -->
        <div class="lg:col-span-7 flex flex-col gap-2">
          <div class="glass-card flex-1">
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${a.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${a.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${t}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(e){const a=(s,r)=>{const o=r==="Men's Doubles",l=o?"text-volt":"text-cyan",d=s.map(c=>{const h=this.getTeamStats(c.name,r),p=this.getTeamRank(c.name,r),g=h.completedMatches.map(u=>{const f=u.winner===c.name,$=f?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",v=f?"W":"L",y=`${u.stage}: ${u.team1} vs ${u.team2} (${u.score1}-${u.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${$}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${y}">${v}</span>`}).join(""),m=g.length>0?g:'<span class="text-slate-500 text-5xs italic font-sans">No matches</span>';return`
          <div class="team-profile-card ${o?"team-card-md":"team-card-xd"} glass-panel border border-slate-700/50 rounded-lg hover-glowing flex flex-col justify-between overflow-hidden relative"
               style="background: radial-gradient(circle at top right, ${o?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%); cursor: pointer;"
               data-team-id="${c.id}" data-category="${r}">
            
            <!-- Team Color Banner -->
            <div class="team-card-banner w-full" style="height: 52px; background: linear-gradient(135deg, ${o?"rgba(163, 230, 53, 0.15)":"rgba(34, 211, 238, 0.15)"} 0%, rgba(15, 22, 42, 0.6) 100%); border-b: 1px solid rgba(255, 255, 255, 0.04);"></div>

            <!-- Team Image Circular Avatar overlapping banner -->
            <div class="team-card-avatar-wrapper">
              <div class="team-card-avatar-inner" style="box-shadow: 0 4px 10px rgba(0,0,0,0.5), 0 0 15px ${o?"rgba(163, 230, 53, 0.2)":"rgba(34, 211, 238, 0.2)"};">
                <img src="/teams/${c.id}.jpg" 
                     onerror="this.onerror=null; this.src='/teams/${c.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.team-avatar-placeholder').style.display='flex'; }" 
                     class="team-card-img" />
                <div class="team-avatar-placeholder" style="display: none;">
                  <span>👥</span>
                </div>
              </div>
            </div>

            <div class="team-card-body">
              <div>

                <div class="flex justify-between items-start gap-2 mb-3 border-b border-slate-800 pb-2">
                  <div class="flex flex-wrap break-words min-w-0 flex-1">
                    <span class="font-extrabold text-sm text-slate-100 break-words pr-1" title="${c.name}">${c.name}</span>
                  </div>
                  <div class="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                    <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${p}</span>
                    <span class="badge ${o?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
                  </div>
                </div>

                <!-- Members -->
                <div class="flex flex-col gap-1.5 mb-4 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${c.player1}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${c.player2}</span>
                  </div>
                  
                  <!-- Form guide -->
                  <div class="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                    <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">FORM:</span>
                    <div class="flex items-center gap-1">
                      ${m}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stats -->
              <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
                <!-- Summary row -->
                <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${h.played}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Pld</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${o?"text-volt":"text-cyan"}">${h.wins}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Won</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${h.losses>0?"text-rose-400":"text-slate-400"}">${h.losses}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Lost</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${h.winPercent}%</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Win%</div>
                  </div>
                </div>

                <!-- Telemetry detail list -->
                <div class="flex flex-col gap-1.5 font-mono">
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Standing Pts:</span>
                    <span class="font-extrabold text-slate-200">${h.pts}</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Sets W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${h.setsWon}-${h.setsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${h.netSets>0?"bg-emerald-500/10 text-emerald-400":h.netSets<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${h.netSets>0?"+":""}${h.netSets}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Points W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${h.pointsWon}-${h.pointsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${h.netPoints>0?"bg-emerald-500/10 text-emerald-400":h.netPoints<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${h.netPoints>0?"+":""}${h.netPoints}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `}).join("");return`
        <div class="glass-card mb-6">
          <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2">
            <span class="${l}">${o?"💎":"🔮"}</span>
            <span class="${l}">${r} (${s.length} Teams)</span>
          </h3>
          <div class="team-cards-grid">
            ${d}
          </div>
        </div>
      `},t=this.state.teams.filter(s=>s.category==="Men's Doubles").sort((s,r)=>{const o=this.getTeamRank(s.name,"Men's Doubles"),l=this.getTeamRank(r.name,"Men's Doubles");return(typeof o=="number"?o:99)-(typeof l=="number"?l:99)}),i=this.state.teams.filter(s=>s.category==="Mixed's Doubles").sort((s,r)=>{const o=this.getTeamRank(s.name,"Mixed's Doubles"),l=this.getTeamRank(r.name,"Mixed's Doubles");return(typeof o=="number"?o:99)-(typeof l=="number"?l:99)});e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Registered Teams & Members</h2>
        <p class="view-subtitle">Browse player profiles and team group statistics</p>
      </div>

      <!-- Teams lists -->
      ${a(t,"Men's Doubles")}
      ${a(i,"Mixed's Doubles")}
    `,e.querySelectorAll(".team-profile-card").forEach(s=>{s.addEventListener("click",()=>{const r=s.getAttribute("data-team-id"),o=s.getAttribute("data-category");this.showTeamDetailsModal(r,o)})})}showTeamDetailsModal(e,a){const t=this.state.teams.find(T=>T.id===e);if(!t)return;const i=a==="Men's Doubles",n=this.getTeamStats(t.name,a),s=this.getTeamRank(t.name,a),r=n.played,o=n.wins,l=n.losses,d=n.pts,c=n.setsWon,h=n.setsLost,p=n.netSets,g=n.pointsWon,m=n.pointsLost,u=n.netPoints,f=n.winPercent,$=n.completedMatches.map(T=>{const L=T.winner===t.name,M=L?"win":"loss",P=L?"W":"L",C=`${T.stage}: ${T.team1} vs ${T.team2} (${T.score1}-${T.score2})`;return`<span class="team-modal-form-pill ${M}" title="${C}">${P}</span>`}).join(""),v=$.length>0?$:'<span class="text-slate-500 text-5xs italic">No matches played</span>',y=document.createElement("div");y.className="team-modal-backdrop",y.id="team-profile-modal-backdrop";const w=s===1?'<div class="team-modal-rank-badge rank-1">🥇 Rank #1</div>':s===2?'<div class="team-modal-rank-badge rank-2">🥈 Rank #2</div>':s===3?'<div class="team-modal-rank-badge rank-3">🥉 Rank #3</div>':`<div class="team-modal-rank-badge rank-other">Rank #${s}</div>`,b=i?"volt":"cyan";y.innerHTML=`
      <div class="team-modal-card">
        <!-- Close Button -->
        <button class="team-modal-close-btn" id="modal-team-close-btn">
          &times;
        </button>

        <!-- Cover Photo with Integrated Header -->
        <div class="team-modal-cover">
          ${w}
          <img src="/teams/${t.id}.jpg" 
               onerror="this.onerror=null; this.src='/teams/${t.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.team-modal-cover-placeholder').style.display='flex'; }" />
          <div class="team-modal-cover-placeholder" style="display: none;">
            👥
          </div>
          
          <!-- Spotlight Gradient overlay for rich contrast -->
          <div class="team-modal-spotlight"></div>
          
          <!-- Team Header Content -->
          <div class="team-modal-header-content">
            <div class="flex items-center gap-1">
              <span class="team-modal-cat-tag ${b}">${a}</span>
              <span class="team-modal-id-tag">ID: ${t.id}</span>
            </div>
            <h3 class="team-modal-name">${t.name}</h3>
          </div>
        </div>

        <!-- Team Profile Body -->
        <div class="team-modal-body">
          
          <!-- Players Grid -->
          <div class="team-modal-players-grid">
            <div class="team-modal-player-card">
              <div class="team-modal-player-icon ${b}">🏸</div>
              <div class="team-modal-player-info">
                <div class="team-modal-player-role">Player 1</div>
                <div class="team-modal-player-name" title="${t.player1}">${t.player1}</div>
              </div>
            </div>
            <div class="team-modal-player-card">
              <div class="team-modal-player-icon ${b}">🏸</div>
              <div class="team-modal-player-info">
                <div class="team-modal-player-role">Player 2</div>
                <div class="team-modal-player-name" title="${t.player2}">${t.player2}</div>
              </div>
            </div>
          </div>

          <!-- Aligned capsule Match summary bar -->
          <div class="team-modal-summary-bar">
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label">Played</div>
              <div class="team-modal-summary-value">${r}</div>
            </div>
            <div class="team-modal-summary-divider"></div>
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label won">Won</div>
              <div class="team-modal-summary-value won">${o}</div>
            </div>
            <div class="team-modal-summary-divider"></div>
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label lost">Lost</div>
              <div class="team-modal-summary-value lost">${l}</div>
            </div>
          </div>

          <!-- Esports Telemetry Grid -->
          <div class="team-modal-telemetry-grid">
            <!-- Standing Points -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🏆</span>
                <span class="team-modal-telemetry-label">Standing Points</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value">${d}</span>
                <span class="team-modal-telemetry-unit">pts</span>
              </div>
            </div>
            
            <!-- Win Rate -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">📈</span>
                <span class="team-modal-telemetry-label">Win Rate</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value">${f}</span>
                <span class="team-modal-telemetry-unit">%</span>
              </div>
              <div class="team-modal-progress-track">
                <div class="team-modal-progress-bar ${b}" style="width: ${f}%;"></div>
              </div>
            </div>

            <!-- Sets Diff -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🎾</span>
                <span class="team-modal-telemetry-label">Sets Diff</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${c}-${h}</span>
                <span class="team-modal-diff-badge ${p>0?"positive":p<0?"negative":"neutral"}">
                  ${p>0?"+":""}${p}
                </span>
              </div>
            </div>

            <!-- Points Diff -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🎯</span>
                <span class="team-modal-telemetry-label">Points Diff</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${g}-${m}</span>
                <span class="team-modal-diff-badge ${u>0?"positive":u<0?"negative":"neutral"}">
                  ${u>0?"+":""}${u}
                </span>
              </div>
            </div>
          </div>

          <!-- Form guide -->
          <div class="team-modal-form-row">
            <div class="team-modal-form-header">
              <span class="team-modal-telemetry-icon">📊</span>
              <span class="team-modal-form-label">Form Guide</span>
            </div>
            <div class="team-modal-form-list">
              ${v}
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(y);const x=y.querySelector("#modal-team-close-btn"),S=()=>{y.classList.add("animate-fade-out"),setTimeout(()=>y.remove(),250)};x.addEventListener("click",S),y.addEventListener("click",T=>{T.target===y&&S()})}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const e=new Date("May 31, 2026 13:30:00").getTime(),a=()=>{const t=document.getElementById("cd-days"),i=document.getElementById("cd-hours"),n=document.getElementById("cd-minutes"),s=document.getElementById("cd-seconds");if(!t){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const r=new Date().getTime(),o=e-r;if(o<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),t.textContent="00",i.textContent="00",n.textContent="00",s.textContent="00";return}const l=Math.floor(o/(1e3*60*60*24)),d=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(o%(1e3*60*60)/(1e3*60)),h=Math.floor(o%(1e3*60)/1e3);t.textContent=l.toString().padStart(2,"0"),i.textContent=d.toString().padStart(2,"0"),n.textContent=c.toString().padStart(2,"0"),s.textContent=h.toString().padStart(2,"0")};a(),this.countdownTimer=setInterval(a,1e3)}handleSyncUpdate(e,a){if(this.renderActiveView(),this.activeSpectateMatchId&&a&&a.matchId===this.activeSpectateMatchId)if(e==="STATUS_UPDATE"&&!a.isLive){const t=this.state.matches.find(i=>i.id===a.matchId);if(t)this.showSpectatorMatchEndNotice(t);else{const i=document.getElementById("spectate-overlay-container");i&&(i.classList.add("hidden"),i.innerHTML=""),this.activeSpectateMatchId=null}}else this.renderSpectateOverlay(this.activeSpectateMatchId)}showSpectatorMatchEndNotice(e){const a=e.stage||"Group Stage";let t=e.team1;e.score2Sets>e.score1Sets&&(t=e.team2);let i="WIN THE MATCH!",n="MATCH COMPLETED",s=`🎉 Congratulations to **${t}** on winning this match! 🎉`,r="🏸",o="MATCH WINNER",l="#84cc16",d="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(i="CONGRATULATIONS ON WINNING!",n="QUALIFIED FOR THE FINALS",s=`⚡ Spectacular! **${t}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,r="🏅",o="SEMI-FINALS WINNER",l="#06b6d4",d="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(i="TOURNAMENT CHAMPIONS!",n="GEAR GAMES BADMINTON 2026 CUP",s=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${t}**! A historic and well-deserved victory! 🏆🥇`,r="🏆",o="TOURNAMENT CHAMPIONS",l="#fbbf24",d="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(i="BRONZE MEDALISTS!",n="BRONZE MEDAL SECURED",s=`🥉 Superb! **${t}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,r="🥉",o="BRONZE WINNER",l="#ea580c",d="rgba(234, 88, 12, 0.45)");const c=document.createElement("div");c.className="match-end-modal-backdrop relative",c.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${d}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${d}); line-height: 1;">
            ${r}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${l}; filter: drop-shadow(0 0 8px ${d});">${i}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${n}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${o}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${t}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${e.sets?e.sets.map((h,p)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${p+1}: <span class="text-volt">${h.t1}</span>-<span class="text-cyan">${h.t2}</span>
                </div>
              `).join(""):""}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${s}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="spec-end-btn-home" style="font-size: 0.85rem; background-color: ${l}; color: #000; box-shadow: 0 4px 14px ${d}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild(c),document.getElementById("spec-end-btn-home").onclick=()=>{c.classList.add("animate-fade-out"),setTimeout(()=>{c.remove();const h=document.getElementById("spectate-overlay-container");h&&(h.classList.add("hidden"),h.innerHTML=""),this.activeSpectateMatchId=null,this.switchTab("dashboard")},300)}}renderLivePitches(){const e=["Pitch 15","Pitch 16","Pitch 20","Pitch 21"],a=this.sync.getLiveMatches();return e.map(t=>{const i=Object.keys(a).find(r=>{const o=this.state.matches.find(l=>l.id===r);return o&&o.pitch===t});if(i){const r=a[i],o=this.state.matches.find(d=>d.id===i);o.category;const l=this.admin.isAdmin||this.admin.isRef&&o.pitch===this.admin.refPitch;return`
          <div class="live-pitch-card glass-panel border border-red-500/30 p-3 rounded-lg hover-glowing bg-red-950/5 flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-volt text-4xs">${t}</span>
              <span class="badge bg-danger pulse-dot flex items-center gap-1 font-bold text-5xs">
                <span class="live-dot"></span> LIVE
              </span>
            </div>
            
            <div class="text-center py-1">
              <div class="text-4xs font-bold text-slate-400 mb-0.5 truncate" title="${o.team1}">${o.team1}</div>
              <div class="text-xs font-mono font-black text-slate-100 flex items-center justify-center gap-2">
                <span class="${r.servingTeam==="A"?"text-glow-volt":""}">${r.score1}</span>
                <span class="text-slate-600 text-3xs">vs</span>
                <span class="${r.servingTeam==="B"?"text-glow-cyan":""}">${r.score2}</span>
              </div>
              <div class="text-4xs font-bold text-slate-400 mt-0.5 truncate" title="${o.team2}">${o.team2}</div>
            </div>
            
            <div class="text-5xs text-center text-slate-500 font-semibold mb-2">
              Set ${r.currentSet} | serve: ${r.servingTeam==="A"?"T1":"T2"}
            </div>

            <div class="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button class="btn btn-2xs btn-outline btn-spectate-match flex-1 font-bold" data-match-id="${o.id}">
                🔍 Spectate
              </button>
              ${l?`
                <button class="btn btn-2xs btn-outline btn-join-match font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${o.id}">
                  🏸 Ump
                </button>
              `:""}
            </div>
          </div>
        `}const n=this.state.matches.find(r=>r.pitch===t&&r.status==="Scheduled"),s=this.admin.isAdmin||this.admin.isRef&&t===this.admin.refPitch;return n?`
          <div class="live-pitch-card glass-panel border border-slate-800 p-3 rounded-lg flex flex-col justify-between" style="opacity: 0.8;">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-slate-400 text-4xs">${t}</span>
              <span class="badge bg-slate-800 text-slate-500 font-bold text-5xs">${n.time}</span>
            </div>
            
            <div class="text-center py-2">
              <div class="text-5xs text-muted truncate" title="${n.team1}">${n.team1}</div>
              <div class="text-4xs font-bold text-slate-400 py-0.5">SCHEDULED</div>
              <div class="text-5xs text-muted truncate" title="${n.team2}">${n.team2}</div>
            </div>

            <div class="pt-2 border-t border-slate-800/80">
              ${s?`
                <button class="btn btn-2xs btn-outline btn-join-match btn-block font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${n.id}">
                  🏸 Start Match
                </button>
              `:`
                <div class="text-center text-5xs text-slate-600 font-semibold py-1">💤 Awaiting start</div>
              `}
            </div>
          </div>
        `:`
        <div class="live-pitch-card glass-panel border border-slate-900 p-3 rounded-lg flex flex-col justify-center items-center" style="opacity: 0.55; min-height: 125px;">
          <span class="text-lg">💤</span>
          <span class="font-extrabold text-slate-400 text-4xs mt-1.5">${t}</span>
          <span class="text-5xs text-slate-600 font-semibold mt-0.5">Court Empty</span>
        </div>
      `}).join("")}openSpectateOverlay(e){if(document.getElementById("umpire-overlay-container")&&!document.getElementById("umpire-overlay-container").classList.contains("hidden")){alert("You are in the Umpire Control room. Please exit Umpire mode first!");return}if(this.activeSpectateMatchId=e,!document.getElementById("spectate-overlay-container")){const a=document.createElement("div");a.id="spectate-overlay-container",a.className="umpire-overlay-backdrop",document.body.appendChild(a)}this.renderSpectateOverlay(e),setTimeout(()=>{const a=document.querySelector(".spectate-court-svg .svg-shuttle");a&&(a.setAttribute("dur","0.7s"),a.innerHTML=`
          <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
            <mpath href="#spectate-shuttle-path" />
          </animateMotion>
        `)},100)}renderSpectateOverlay(e){const a=document.getElementById("spectate-overlay-container");if(!a)return;a.classList.remove("hidden");const t=this.state.matches.find(E=>E.id===e),n=this.sync.getLiveMatches()[e];if(!n||!t){a.classList.add("hidden"),this.activeSpectateMatchId=null;return}n.isEven,t.category;let s,r,o,l;const d=n.team1Right||t.team1.split(" ")[0]+" 1",c=n.team1Left||t.team1.split(" ")[0]+" 2",h=n.team2Right||t.team2.split(" ")[0]+" 1",p=n.team2Left||t.team2.split(" ")[0]+" 2";n.isCourtSwapped?(s=h,r=p,o=d,l=c):(s=d,r=c,o=h,l=p);const g=n.serverName,m=n.receiverName,u=E=>E===g?"S":E===m?"R":"P",f=E=>E===g?"volt":E===m?"cyan":"neutral",$=E=>E===g?"text-volt":E===m?"text-cyan":"text-slate-200",v=E=>E!==g?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let y,w,b,x;g===s?(y=210,w=355):g===r?(y=90,w=355):g===o?(y=90,w=145):(y=210,w=145),m===s?(b=210,x=355):m===r?(b=90,x=355):m===o?(b=90,x=145):(b=210,x=145);const S=(E,I)=>I===355?E===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":E===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",T=S(y,w),L=S(b,x),M=(y+b)/2+30,P=(w+x)/2-40,C=n.sets.map((E,I)=>`
      <div class="umpire-set-badge">
        <span>Set ${I+1}:</span>
        <strong>${E.t1} - ${E.t2}</strong>
      </div>
    `).join("");a.innerHTML=`
      <div class="umpire-card glass-card spectate-stadium">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE SPECTATING
            </span>
            <span class="text-xs font-bold text-slate-300">${t.pitch} | ${t.stage}</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">LIVE STADIUM SCREEN</h2>
          <button class="btn btn-xs btn-neutral" id="spectate-btn-close">✕ Exit</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Spectator Scoreboard Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets display -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${C}
              <div class="umpire-set-badge current">
                <span>Set ${n.currentSet}:</span>
                <strong class="text-volt">${n.score1} - ${n.score2}</strong>
              </div>
            </div>

            <!-- Big Glowing Score Pads (Read-only for Spectators) -->
            <div class="grid grid-cols-2 gap-6 text-center">
              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-volt mb-3" title="${t.team1}">
                  ${t.team1}
                </div>
                <div class="font-mono font-black text-6xl text-glow-volt py-4">${n.score1}</div>
                ${n.servingTeam==="A"?`
                  <span class="absolute top-3 right-3 text-volt animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>

              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-cyan mb-3" title="${t.team2}">
                  ${t.team2}
                </div>
                <div class="font-mono font-black text-6xl text-glow-cyan py-4">${n.score2}</div>
                ${n.servingTeam==="B"?`
                  <span class="absolute top-3 right-3 text-cyan animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>
            </div>

            <div class="bg-slate-900/40 p-4 rounded border border-slate-800 text-center text-4xs text-slate-500 font-semibold leading-relaxed">
              📣 Spectator display updates automatically in real-time as the referee enters scores on their device.
            </div>
          </div>

          <!-- Spectator Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">LIVE COURT VISUALIZER</h4>
            <div style="width: 100%; max-width: 250px; aspect-ratio: 3/5;">
              <svg class="court-svg spectate-court-svg" viewBox="0 0 300 500" width="100%" height="100%">
                <defs>
                  <filter id="spec-glow-volt" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="spec-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <!-- boundaries -->
                <rect x="20" y="40" width="260" height="420" class="court-line outer" />
                <line x1="40" y1="40" x2="40" y2="460" class="court-line singles-side" />
                <line x1="260" y1="40" x2="260" y2="460" class="court-line singles-side" />
                <line x1="150" y1="40" x2="150" y2="190" class="court-line center" />
                <line x1="150" y1="310" x2="150" y2="460" class="court-line center" />
                <line x1="20" y1="190" x2="280" y2="190" class="court-line service-short" />
                <line x1="20" y1="310" x2="280" y2="310" class="court-line service-short" />
                <line x1="20" y1="60" x2="280" y2="60" class="court-line service-long-doubles" />
                <line x1="20" y1="440" x2="280" y2="440" class="court-line service-long-doubles" />
                <line x1="10" y1="250" x2="290" y2="250" class="court-line net" />
                <circle cx="10" cy="250" r="4" class="net-post" />
                <circle cx="290" cy="250" r="4" class="net-post" />

                <!-- highlights -->
                <path d="${T}" class="svg-highlight-box serving" filter="url(#spec-glow-volt)" />
                <path d="${L}" class="svg-highlight-box receiving" filter="url(#spec-glow-cyan)" />

                <!-- shuttle flight -->
                <path id="spectate-shuttle-path" d="M ${y},${w} Q ${M},${P} ${b},${x}" class="svg-shuttle-path" />
                <circle r="5" class="svg-shuttle" filter="url(#spec-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#spectate-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${r===g?"server":r===m?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(r)}" />
                  <text x="0" y="4" class="avatar-text">${u(r)}</text>
                  ${v(r)}
                </g>
                <text x="90" y="383" class="svg-player-name ${$(r)} font-bold">${r.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${s===g?"server":s===m?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(s)}" />
                  <text x="0" y="4" class="avatar-text">${u(s)}</text>
                  ${v(s)}
                </g>
                <text x="210" y="383" class="svg-player-name ${$(s)} font-bold">${s.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${o===g?"server":o===m?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(o)}" />
                  <text x="0" y="4" class="avatar-text">${u(o)}</text>
                  ${v(o)}
                </g>
                <text x="90" y="123" class="svg-player-name ${$(o)} font-bold">${o.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${l===g?"server":l===m?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(l)}" />
                  <text x="0" y="4" class="avatar-text">${u(l)}</text>
                  ${v(l)}
                </g>
                <text x="210" y="123" class="svg-player-name ${$(l)} font-bold">${l.split(" ")[0]}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("spectate-btn-close").onclick=()=>{a.classList.add("hidden"),a.innerHTML="",this.activeSpectateMatchId=null}}}window.addEventListener("DOMContentLoaded",()=>{new G});
