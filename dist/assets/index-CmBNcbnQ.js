(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const A=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],N=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],D=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],B={en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Alpha Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class R{constructor(){this.players=[],this.teams=[],this.matches=[],this.listeners=[],this.init()}init(){const e=localStorage.getItem("badminton_players"),a=localStorage.getItem("badminton_teams"),t=localStorage.getItem("badminton_matches");this.players=e?JSON.parse(e):[...A],this.teams=a?JSON.parse(a):[...N],this.matches=t?JSON.parse(t):[...D],this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),this.players=[...A],this.teams=[...N],this.matches=[...D],this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}addListener(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e(this))}updateMatchScore(e,a,t,s,n){const i=this.matches.find(r=>r.id===e);return i?(i.sets=a,i.score1=t,i.score2=s,i.status=n,n==="Completed"?i.winner=t>s?i.team1:i.team2:i.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(e){const a=this.teams.filter(i=>i.category===e),t=this.matches.filter(i=>i.category===e&&i.stage==="Group Stage"),s={};a.forEach(i=>{s[i.name]={name:i.name,teamId:i.id,player1:i.player1,player2:i.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),t.forEach(i=>{if(i.status!=="Completed")return;const r=i.team1,l=i.team2;if(!s[r]||!s[l])return;s[r].played+=1,s[l].played+=1;const o=Number(i.score1)||0,h=Number(i.score2)||0;s[r].setsWon+=o,s[r].setsLost+=h,s[l].setsWon+=h,s[l].setsLost+=o,o>h?(s[r].won+=1,s[r].points+=1,s[l].lost+=1):(s[l].won+=1,s[l].points+=1,s[r].lost+=1),i.sets.forEach(c=>{const d=Number(c.t1)||0,p=Number(c.t2)||0;s[r].pointsWon+=d,s[r].pointsLost+=p,s[l].pointsWon+=p,s[l].pointsLost+=d})}),Object.values(s).forEach(i=>{i.netSets=i.setsWon-i.setsLost,i.netPoints=i.pointsWon-i.pointsLost});const n=Object.values(s);return n.sort((i,r)=>{if(r.points!==i.points)return r.points-i.points;if(r.netSets!==i.netSets)return r.netSets-i.netSets;if(n.filter(o=>o.points===i.points&&o.netSets===i.netSets).length===2){const o=t.find(h=>h.status==="Completed"&&(h.team1===i.name&&h.team2===r.name||h.team1===r.name&&h.team2===i.name));if(o){if(o.winner===i.name)return-1;if(o.winner===r.name)return 1}}return r.netPoints!==i.netPoints?r.netPoints-i.netPoints:i.name.localeCompare(r.name)}),n}isGroupStageComplete(e){const a=this.matches.filter(t=>t.category===e&&t.stage==="Group Stage");return a.length>0&&a.every(t=>t.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(a=>{const t=this.isGroupStageComplete(a),s=this.calculateStandings(a),n=t?s[0].name:`1st Place ${a==="Men's Doubles"?"MD":"XD"}`,i=t?s[1].name:`2nd Place ${a==="Men's Doubles"?"MD":"XD"}`,r=t?s[2].name:`3rd Place ${a==="Men's Doubles"?"MD":"XD"}`,l=t?s[3].name:`4th Place ${a==="Men's Doubles"?"MD":"XD"}`,o=a==="Men's Doubles"?"MD":"XD",h=`SF1-${o}`,c=`SF2-${o}`,d=`F-${o}`,p=`B-${o}`;let m=this.matches.find(y=>y.id===h),u=this.matches.find(y=>y.id===c),v=this.matches.find(y=>y.id===d),f=this.matches.find(y=>y.id===p);const $="4:30 - 5:10",T=a==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";m?(m.status!=="Completed"||m.team1&&m.team1.includes("Place")||m.team2&&m.team2.includes("Place"))&&(m.team1=n,m.team2=l):(m={id:h,category:a,stage:"Semi-finals",pitch:a==="Men's Doubles"?"Pitch 15":"Pitch 20",time:$,team1:n,team2:l,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(m)),u?(u.status!=="Completed"||u.team1&&u.team1.includes("Place")||u.team2&&u.team2.includes("Place"))&&(u.team1=i,u.team2=r):(u={id:c,category:a,stage:"Semi-finals",pitch:a==="Men's Doubles"?"Pitch 16":"Pitch 21",time:$,team1:i,team2:r,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(u));const x=m.status==="Completed"?m.winner:`Winner SF1 (${o})`,S=m.status==="Completed"?m.winner===m.team1?m.team2:m.team1:`Loser SF1 (${o})`,g=u.status==="Completed"?u.winner:`Winner SF2 (${o})`,b=u.status==="Completed"?u.winner===u.team1?u.team2:u.team1:`Loser SF2 (${o})`;f?(f.status!=="Completed"||f.team1&&f.team1.includes("Loser")||f.team2&&f.team2.includes("Loser"))&&(f.team1=S,f.team2=b):(f={id:p,category:a,stage:"Bronze Match",pitch:a==="Men's Doubles"?"Pitch 15":"Pitch 20",time:T,team1:S,team2:b,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(f)),v?(v.status!=="Completed"||v.team1&&v.team1.includes("Winner")||v.team2&&v.team2.includes("Winner"))&&(v.team1=x,v.team2=g):(v={id:d,category:a,stage:"Grand Final",pitch:a==="Men's Doubles"?"Pitch 16":"Pitch 21",time:T,team1:x,team2:g,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(v))})}}class H{constructor(e,a,t,s){if(this.state=e,this.sync=a,this.matchId=t,this.onFinish=s,this.lang="en",this.match=this.state.matches.find(i=>i.id===t),!this.match)throw new Error(`Match not found: ${t}`);const n=this.match.stage==="Group Stage";this.targetPoints=n?15:21,this.maxPoints=n?21:30,this.team1Obj=this.state.teams.find(i=>i.name===this.match.team1),this.team2Obj=this.state.teams.find(i=>i.name===this.match.team2),this.team1Players=this.team1Obj?[this.team1Obj.player1,this.team1Obj.player2]:["Team A Player 1","Team A Player 2"],this.team2Players=this.team2Obj?[this.team2Obj.player1,this.team2Obj.player2]:["Team B Player 1","Team B Player 2"],this.score1=0,this.score2=0,this.sets=[],this.match.sets&&this.match.sets.length>0&&this.match.status==="Live"&&(this.sets=[...this.match.sets],this.score1=this.match.score1||0,this.score2=this.match.score2||0),this.currentSet=this.sets.length+1,this.servingTeam="A",this.history=[],this.isCourtSwapped=!1,this.set3SwapHappened=!1,this.team1Right=this.team1Players[0],this.team1Left=this.team1Players[1],this.team2Right=this.team2Players[0],this.team2Left=this.team2Players[1],this.init()}init(){this.createOverlayContainer(),this.render(),this.sync.broadcast("LIVE_MATCH_START",{matchId:this.matchId,matchState:this.serializeState()})}createOverlayContainer(){if(document.getElementById("umpire-overlay-container"))return;const e=document.createElement("div");e.id="umpire-overlay-container",e.className="umpire-overlay-backdrop",document.body.appendChild(e)}serializeState(){return{sets:[...this.sets,{t1:this.score1,t2:this.score2}],score1:this.score1,score2:this.score2,currentSet:this.currentSet,servingTeam:this.servingTeam,isEven:(this.servingTeam==="A"?this.score1:this.score2)%2===0,serverName:this.getServerName(),partnerName:this.getServerPartnerName(),receiverName:this.getReceiverName(),receiverPartnerName:this.getReceiverPartnerName(),isCourtSwapped:this.isCourtSwapped}}broadcastUpdate(){const e=this.serializeState();e.matchId=this.matchId,this.sync.broadcast("LIVE_SCORE_UPDATE",e)}getServerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Right:this.team1Left:e?this.team2Right:this.team2Left}getServerPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Left:this.team1Right:e?this.team2Left:this.team2Right}getReceiverName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Right:this.team2Left:e?this.team1Right:this.team1Left}getReceiverPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Left:this.team2Right:e?this.team1Left:this.team1Right}saveToHistory(){this.history.push({score1:this.score1,score2:this.score2,sets:JSON.parse(JSON.stringify(this.sets)),currentSet:this.currentSet,servingTeam:this.servingTeam,team1Right:this.team1Right,team1Left:this.team1Left,team2Right:this.team2Right,team2Left:this.team2Left})}undo(){if(this.history.length===0)return;const e=this.history.pop();this.score1=e.score1,this.score2=e.score2,this.sets=e.sets,this.currentSet=e.currentSet,this.servingTeam=e.servingTeam,this.team1Right=e.team1Right,this.team1Left=e.team1Left,this.team2Right=e.team2Right,this.team2Left=e.team2Left,this.render(),this.broadcastUpdate()}addPoint(e){if(this.saveToHistory(),e==="A"){if(this.servingTeam==="A"){const a=this.team1Right;this.team1Right=this.team1Left,this.team1Left=a}this.score1++,this.servingTeam="A"}else{if(this.servingTeam==="B"){const a=this.team2Right;this.team2Right=this.team2Left,this.team2Left=a}this.score2++,this.servingTeam="B"}if(this.currentSet===3&&!this.set3SwapHappened){const a=this.targetPoints===15?8:11;(this.score1===a||this.score2===a)&&(this.set3SwapHappened=!0,this.showSwapNotice(`⚡ Score reached ${a}! Both teams must swap sides.`),this.isCourtSwapped=!this.isCourtSwapped)}this.checkSetWinner(),this.render(),this.triggerServeAnimation(),this.broadcastUpdate()}triggerServeAnimation(){const e=document.querySelector(".umpire-court-svg .svg-shuttle");e&&(e.setAttribute("dur","0.7s"),e.innerHTML=`
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `)}checkSetWinner(){const e=this.score1,a=this.score2,t=Math.max(e,a),s=Math.min(e,a),n=t-s;let i=!1;if(t>=this.targetPoints&&(n>=2||t===this.maxPoints)&&(i=!0),i){this.currentSet-1,this.sets.push({t1:e,t2:a});let r=0,l=0;if(this.sets.forEach(o=>{o.t1>o.t2?r++:l++}),r===2||l===2)this.submitMatch(r,l);else{const o=e>a?this.match.team1:this.match.team2;this.showSwapNotice(`Set ${this.currentSet} completed! ${o} won this set. Prepare for Set ${this.currentSet+1}. Both teams must swap sides.`),this.score1=0,this.score2=0,this.currentSet++,this.servingTeam=e>a?"A":"B",this.isCourtSwapped=!this.isCourtSwapped}}}submitMatch(e,a){const t=e>a?this.match.team1:this.match.team2;this.state.updateMatchScore(this.matchId,this.sets,e,a,"Completed"),this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1),this.showMatchEndNotice(t)}close(){this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1);const e=document.getElementById("umpire-overlay-container");e&&(e.classList.add("hidden"),e.innerHTML=""),this.onFinish&&this.onFinish(),window.BadmintonAppInstance&&window.BadmintonAppInstance.switchTab("dashboard")}showSwapNotice(e){const a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
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
    `,document.body.appendChild(a),document.getElementById("swap-notice-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)},setTimeout(()=>{document.body.contains(a)&&(a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300))},5e3)}showMatchEndNotice(e){const a=this.match.stage||"Group Stage";let t="WIN THE MATCH!",s="MATCH COMPLETED",n=`🎉 Congratulations to **${e}** on winning this match! 🎉`,i="🏸",r="MATCH WINNER",l="#84cc16",o="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(t="CONGRATULATIONS ON WINNING!",s="QUALIFIED FOR THE FINALS",n=`⚡ Spectacular! **${e}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,i="🏅",r="SEMI-FINALS WINNER",l="#06b6d4",o="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(t="TOURNAMENT CHAMPIONS!",s="GEAR GAMES BADMINTON 2026 CUP",n=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${e}**! A historic and well-deserved victory! 🏆🥇`,i="🏆",r="TOURNAMENT CHAMPIONS",l="#fbbf24",o="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(t="BRONZE MEDALISTS!",s="BRONZE MEDAL SECURED",n=`🥉 Superb! **${e}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,i="🥉",r="BRONZE WINNER",l="#ea580c",o="rgba(234, 88, 12, 0.45)");const h=document.createElement("div");h.className="match-end-modal-backdrop relative",h.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${o}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${o}); line-height: 1;">
            ${i}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${l}; filter: drop-shadow(0 0 8px ${o});">${t}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${s}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${r}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${e}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${this.sets.map((c,d)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${d+1}: <span class="text-volt">${c.t1}</span>-<span class="text-cyan">${c.t2}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${n}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="match-end-btn-home" style="font-size: 0.85rem; background-color: ${l}; color: #000; box-shadow: 0 4px 14px ${o}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild(h),document.getElementById("match-end-btn-home").onclick=()=>{h.classList.add("animate-fade-out"),setTimeout(()=>{h.remove(),this.close()},300)}}toggleServe(){this.saveToHistory(),this.servingTeam=this.servingTeam==="B"?"A":"B",this.render(),this.broadcastUpdate()}swapPlayers(e){if(this.saveToHistory(),e==="1"){const a=this.team1Right;this.team1Right=this.team1Left,this.team1Left=a}else{const a=this.team2Right;this.team2Right=this.team2Left,this.team2Left=a}this.render(),this.broadcastUpdate()}render(){const e=document.getElementById("umpire-overlay-container");if(!e)return;e.classList.remove("hidden"),(this.servingTeam==="A"?this.score1:this.score2)%2;let a,t,s,n;this.isCourtSwapped?(a=this.team2Right,t=this.team2Left,s=this.team1Right,n=this.team1Left):(a=this.team1Right,t=this.team1Left,s=this.team2Right,n=this.team2Left);const i=this.getServerName(),r=this.getReceiverName(),l=g=>g===i?"S":g===r?"R":"P",o=g=>g===i?"volt":g===r?"cyan":"neutral",h=g=>g===i?"text-volt":g===r?"text-cyan":"text-slate-200",c=g=>g!==i?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let d,p,m,u;i===a?(d=210,p=355):i===t?(d=90,p=355):i===s?(d=90,p=145):(d=210,p=145),r===a?(m=210,u=355):r===t?(m=90,u=355):r===s?(m=90,u=145):(m=210,u=145);const v=(g,b)=>b===355?g===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":g===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",f=v(d,p),$=v(m,u),T=(d+m)/2+30,x=(p+u)/2-40,S=this.sets.map((g,b)=>`
      <div class="umpire-set-badge">
        <span>Set ${b+1}:</span>
        <strong>${g.t1} - ${g.t2}</strong>
      </div>
    `).join("");e.innerHTML=`
      <div class="umpire-card glass-card">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE
            </span>
            <span class="text-xs font-bold text-slate-300">${this.match.pitch} | ${this.match.stage}</span>
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
              ${S}
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
                <path id="umpire-shuttle-path" d="M ${d},${p} Q ${T},${x} ${m},${u}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${t===i?"server":t===r?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${o(t)}" />
                  <text x="0" y="4" class="avatar-text">${l(t)}</text>
                  ${c(t)}
                </g>
                <text x="90" y="383" class="svg-player-name ${h(t)} font-bold">${t.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${a===i?"server":a===r?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${o(a)}" />
                  <text x="0" y="4" class="avatar-text">${l(a)}</text>
                  ${c(a)}
                </g>
                <text x="210" y="383" class="svg-player-name ${h(a)} font-bold">${a.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${s===i?"server":s===r?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${o(s)}" />
                  <text x="0" y="4" class="avatar-text">${l(s)}</text>
                  ${c(s)}
                </g>
                <text x="90" y="123" class="svg-player-name ${h(s)} font-bold">${s.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${n===i?"server":n===r?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${o(n)}" />
                  <text x="0" y="4" class="avatar-text">${l(n)}</text>
                  ${c(n)}
                </g>
                <text x="210" y="123" class="svg-player-name ${h(n)} font-bold">${n.split(" ")[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (0,2,4) and **Left** on Odd (1,3,5). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("umpire-btn-close").onclick=()=>{confirm("Do you want to exit the scoring room? The live status will be suspended.")&&this.close()},document.getElementById("umpire-add-a").onclick=()=>this.addPoint("A"),document.getElementById("umpire-add-b").onclick=()=>this.addPoint("B"),document.getElementById("umpire-btn-serve").onclick=()=>this.toggleServe(),document.getElementById("umpire-btn-undo").onclick=()=>this.undo(),document.getElementById("umpire-swap-players-1").onclick=()=>this.swapPlayers("1"),document.getElementById("umpire-swap-players-2").onclick=()=>this.swapPlayers("2")}}class O{constructor(e,a,t){this.state=e,this.onUpdate=a,this.sync=t,this.isAdmin=!1,this.isRef=!1,this.refPitch="",this.activeMatchId=null,this.lang="en",this.passkeys={goodmintongg2026:{role:"admin",label:"Super Admin"},ref15:{role:"ref",pitch:"Pitch 15",label:"Pitch 15 Umpire"},ref16:{role:"ref",pitch:"Pitch 16",label:"Pitch 16 Umpire"},ref20:{role:"ref",pitch:"Pitch 20",label:"Pitch 20 Umpire"},ref21:{role:"ref",pitch:"Pitch 21",label:"Pitch 21 Umpire"}},this.init()}setLanguage(e){this.lang="en"}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.isRef=sessionStorage.getItem("badminton_isRef")==="true",this.refPitch=sessionStorage.getItem("badminton_refPitch")||"",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const e=document.createElement("div");if(e.id="score-modal-container",e.className="modal-backdrop hidden",document.body.appendChild(e),document.getElementById("admin-modal-container"))return;const a=document.createElement("div");a.id="admin-modal-container",a.className="modal-backdrop hidden",document.body.appendChild(a)}setupAdminToggleListener(){document.body.addEventListener("click",e=>{e.target.closest("#btn-toggle-admin")&&(this.isAdmin||this.isRef?this.logout():this.showAdminLogin());const t=e.target.closest(".btn-edit-match");if(t){const n=t.getAttribute("data-match-id"),i=this.state.matches.find(l=>l.id===n);if(!i)return;const r=this.checkMatchReadyState(i);if(!r.ready){this.showUnreadyAlert(r.reason);return}this.isAdmin||this.isRef&&i.pitch===this.refPitch?this.openScoreModal(n):this.showToast("You are not authorized to edit matches on this pitch!","info")}const s=e.target.closest(".btn-join-match");if(s){const n=s.getAttribute("data-match-id"),i=this.state.matches.find(l=>l.id===n);if(!i)return;const r=this.checkMatchReadyState(i);if(!r.ready){this.showUnreadyAlert(r.reason);return}this.isAdmin||this.isRef&&i.pitch===this.refPitch?this.openUmpireConsole(n):this.showToast("You are not authorized to umpire on this pitch!","info")}})}checkMatchReadyState(e){if(e.team1&&e.team1.includes("Place")||e.team2&&e.team2.includes("Place"))return{ready:!1,reason:"This match cannot be played yet! Please wait for the Group Stage to complete to decide the playing teams."};const a=e.category==="Men's Doubles"?"MD":"XD",t=e.team1&&(e.team1.includes("SF1")||e.team1.includes("Winner SF1")||e.team1.includes("Loser SF1"))||e.team2&&(e.team2.includes("SF1")||e.team2.includes("Winner SF1")||e.team2.includes("Loser SF1")),s=e.team1&&(e.team1.includes("SF2")||e.team1.includes("Winner SF2")||e.team1.includes("Loser SF2"))||e.team2&&(e.team2.includes("SF2")||e.team2.includes("Winner SF2")||e.team2.includes("Loser SF2"));if(t){const n=`SF1-${a}`,i=this.state.matches.find(r=>r.id===n);if(i&&i.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 1 (${e.category})`}** to complete.`}}if(s){const n=`SF2-${a}`,i=this.state.matches.find(r=>r.id===n);if(i&&i.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 2 (${e.category})`}** to complete.`}}return{ready:!0}}showUnreadyAlert(e){const a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
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
    `,document.body.appendChild(a),document.getElementById("unready-alert-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)}}openUmpireConsole(e){this.sync&&new H(this.state,this.sync,e,()=>{this.onUpdate()})}logout(){this.isAdmin=!1,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.removeItem("badminton_authLabel"),this.onUpdate(),this.showToast("Logged out successfully!","info")}showAdminLogin(){const e=document.getElementById("admin-modal-container");if(!e)return;const a="Portal Login",t="Enter Admin or Umpire passkey:",s="Passkey",n="Login",i="Cancel";e.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${a}</h3>
        <p class="modal-desc">${t}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${s}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${i}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${n}</button>
        </div>
      </div>
    `,e.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>e.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=r=>{r.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const e=document.getElementById("admin-passkey-input"),a=document.getElementById("admin-login-error");if(!e||!a)return;const t=e.value,s=this.passkeys[t];if(s){s.role==="admin"?(this.isAdmin=!0,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","true"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.setItem("badminton_authLabel",s.label)):(this.isRef=!0,this.isAdmin=!1,this.refPitch=s.pitch,sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","true"),sessionStorage.setItem("badminton_refPitch",s.pitch),sessionStorage.setItem("badminton_authLabel",s.label)),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const n=`Login success! Role: ${s.label}.`;this.showToast(n,"success")}else a.textContent="Incorrect passkey. Please try again.",a.classList.remove("hidden"),e.classList.add("input-error"),e.focus()}openScoreModal(e){this.activeMatchId=e;const a=this.state.matches.find(k=>k.id===e);if(!a)return;const t=document.getElementById("score-modal-container");if(!t)return;const s=a.stage==="Group Stage",n=s?15:21,i=s?21:30,r="Match Score Editor",l="Set",o=a.team1,h=a.team2,c="Save Score",d="Cancel",p="Clear Score",m=a.sets[0]?a.sets[0].t1:"",u=a.sets[0]?a.sets[0].t2:"",v=a.sets[1]?a.sets[1].t1:"",f=a.sets[1]?a.sets[1].t2:"",$=a.sets[2]?a.sets[2].t1:"",T=a.sets[2]?a.sets[2].t2:"";t.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${r}</h3>
          <span class="badge ${s?"bg-indigo":"bg-purple"}">${a.stage} (${n} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">Team 1</div>
          <div>VS</div>
          <div class="col-span-2 text-right">Team 2</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${o}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${h}</div>
        </div>

        <form id="score-form" class="space-y-4">
          <!-- Set 1 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${m}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${u}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${v}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${f}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${$}" />
            </div>
            <div class="text-center font-bold text-muted">${l} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${T}" />
            </div>
          </div>

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${p}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${d}</button>
              <button type="submit" class="btn btn-primary">${c}</button>
            </div>
          </div>
        </form>
      </div>
    `,t.classList.remove("hidden");const x=document.getElementById("s1-t1"),S=document.getElementById("s1-t2"),g=document.getElementById("s2-t1"),b=document.getElementById("s2-t2"),y=document.getElementById("s3-t1"),w=document.getElementById("s3-t2"),M=document.getElementById("s3-row"),L=()=>{const k=this.validateSetScore(Number(x.value),Number(S.value),n),P=this.validateSetScore(Number(g.value),Number(b.value),n);k.valid&&P.valid?k.winner===P.winner?(M.classList.add("opacity-40"),y.disabled=!0,w.disabled=!0,y.value="",w.value="",y.removeAttribute("required"),w.removeAttribute("required")):(M.classList.remove("opacity-40"),y.disabled=!1,w.disabled=!1,y.setAttribute("required","required"),w.setAttribute("required","required")):(M.classList.add("opacity-40"),y.disabled=!0,w.disabled=!0,y.value="",w.value="",y.removeAttribute("required"),w.removeAttribute("required"))};[x,S,g,b].forEach(k=>{k.addEventListener("input",L)}),L(),document.getElementById("btn-cancel-score").onclick=()=>t.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(e),document.getElementById("score-form").onsubmit=k=>{k.preventDefault(),this.handleSaveScore(a,n)}}validateSetScore(e,a,t){if(isNaN(e)||isNaN(a))return{valid:!1};if(e<0||a<0)return{valid:!1};const s=Math.max(e,a),n=Math.min(e,a),i=s-n,r=e>a?1:2;if(s<t)return{valid:!1};if(s===t&&i>=2)return{valid:!0,winner:r};const l=t===15?21:30;if(s>t){if(i===2&&s<l)return{valid:!0,winner:r};if(s===l&&i===1)return{valid:!0,winner:r}}return{valid:!1}}handleClearScore(e){confirm("Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(e,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Match score cleared.","info"))}handleSaveScore(e,a){const t=Number(document.getElementById("s1-t1").value),s=Number(document.getElementById("s1-t2").value),n=Number(document.getElementById("s2-t1").value),i=Number(document.getElementById("s2-t2").value),r=document.getElementById("s3-t1"),l=document.getElementById("s3-t2"),o=document.getElementById("score-error-msg"),h=this.validateSetScore(t,s,a);if(!h.valid){this.showInputError(o,`Set 1 is invalid. Winner must reach ${a} and lead by 2, or reach cap limit of ${a===15?21:30} points.`);return}const c=this.validateSetScore(n,i,a);if(!c.valid){this.showInputError(o,`Set 2 is invalid. Winner must reach at least ${a} and lead by 2.`);return}const d=[{t1:t,t2:s},{t1:n,t2:i}];let p=(h.winner===1?1:0)+(c.winner===1?1:0),m=(h.winner===2?1:0)+(c.winner===2?1:0);if(p===1&&m===1){const u=Number(r.value),v=Number(l.value),f=this.validateSetScore(u,v,a);if(!f.valid){this.showInputError(o,"Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.");return}d.push({t1:u,t2:v}),f.winner===1?p++:m++}p>m?e.team1:e.team2,this.state.updateMatchScore(e.id,d,p,m,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Score updated successfully!","success")}showInputError(e,a){e.textContent=a,e.classList.remove("hidden")}showToast(e,a="success"){const t=document.createElement("div");t.className=`toast-alert toast-${a}`,t.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${a==="success"?"✓":a==="info"?"ℹ":"⚠"}</span>
        <span>${e}</span>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3e3)}}class F{constructor(e){this.container=document.getElementById(e),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="en",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(e){this.lang="en",this.render()}setScoreParity(e){this.isEven=e,this.render()}setTeams(e,a){this.teamAPlayers=e,this.teamBPlayers=a,this.render()}init(){this.container&&this.render()}render(){var M,L,k,P;if(!this.container)return;const e=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],a=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],t=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],s=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],n="Even Score (0, 2, 4...)",i="Odd Score (1, 3, 5...)",r="Doubles Service Simulator",l=`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,o=`<ul>
        <li><strong>Server:</strong> <span class="highlight-volt">${e}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
        <li><strong>Receiver:</strong> <span class="highlight-cyan">${t}</span> stands in the diagonal court to receive.</li>
        <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
       </ul>`,h=this.isEven?210:90,c=400,d=this.isEven?90:210,p=400,m=this.isEven?90:210,u=100,v=this.isEven?210:90,f=100,$=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",T=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",x=h,S=c-10,g=m,b=u+10,y=(x+g)/2+30,w=(S+b)/2-40;this.container.innerHTML=`
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
              <path d="${T}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${x},${S} Q ${y},${w} ${g},${b}" class="svg-shuttle-path" />
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
                <circle cx="${h}" cy="${c}" r="14" class="avatar-bg volt" />
                <text x="${h}" y="${c+4}" class="avatar-text">S</text>
              </g>
              <text x="${h}" y="${c+28}" class="svg-player-name text-volt">${e.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${d}" cy="${p}" r="12" class="avatar-bg neutral" />
                <text x="${d}" y="${p+4}" class="avatar-text">P</text>
              </g>
              <text x="${d}" y="${p+28}" class="svg-player-name text-muted">${a.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${m}" cy="${u}" r="14" class="avatar-bg cyan" />
                <text x="${m}" y="${u+4}" class="avatar-text">R</text>
              </g>
              <text x="${m}" y="${u-22}" class="svg-player-name text-cyan">${t.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${v}" cy="${f}" r="12" class="avatar-bg neutral" />
                <text x="${v}" y="${f+4}" class="avatar-text">P</text>
              </g>
              <text x="${v}" y="${f-22}" class="svg-player-name text-muted">${s.split(" ")[0]}</text>
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
                  ${i}
                </button>
              </div>
              
              <div class="sim-explanation">
                <div class="exp-header flex items-center gap-2 mb-2">
                  <span class="indicator-dot pulse-${this.isEven?"volt":"cyan"}"></span>
                  <span>${l}</span>
                </div>
                <div class="exp-details">${o}</div>
              </div>
            </div>
            
            <div class="court-sim-footer mt-4 p-3 glass-panel rounded-lg text-xs text-muted">
              💡 <strong>Tip:</strong> Click directly on the bottom court boxes to toggle even/odd service. Players only swap courts when their team wins a point on their own serve.
            </div>
          </div>
        </div>
      </div>
    `,(M=document.getElementById("sim-btn-even"))==null||M.addEventListener("click",()=>this.setScoreParity(!0)),(L=document.getElementById("sim-btn-odd"))==null||L.addEventListener("click",()=>this.setScoreParity(!1)),(k=document.getElementById("svg-click-right"))==null||k.addEventListener("click",()=>this.setScoreParity(!0)),(P=document.getElementById("svg-click-left"))==null||P.addEventListener("click",()=>this.setScoreParity(!1))}}class G{constructor(e,a){this.state=e,this.onRemoteUpdate=a,this.channelName="badminton_live_sync",this.channel=null,this.init()}init(){try{this.channel=new BroadcastChannel(this.channelName),this.channel.onmessage=e=>this.handleMessage(e.data)}catch(e){console.warn("BroadcastChannel not supported in this browser. Falling back to storage event listeners.",e),window.addEventListener("storage",a=>{if(a.key==="badminton_live_sync_fallback")try{const t=JSON.parse(a.newValue);this.handleMessage(t)}catch(t){console.error("Failed to parse fallback storage sync message",t)}})}}getLiveMatches(){const e=localStorage.getItem("badminton_live_matches");return e?JSON.parse(e):{}}saveLiveMatches(e){localStorage.setItem("badminton_live_matches",JSON.stringify(e))}broadcast(e,a){const t={type:e,payload:a,timestamp:Date.now()};this.channel&&this.channel.postMessage(t),localStorage.setItem("badminton_live_sync_fallback",JSON.stringify(t))}handleMessage(e){if(!e||!e.type||!e.payload)return;const{type:a,payload:t}=e;switch(a){case"LIVE_SCORE_UPDATE":this.applyLiveUpdate(t);break;case"LIVE_MATCH_START":this.setMatchLiveStatus(t.matchId,!0,t.matchState);break;case"LIVE_MATCH_END":this.setMatchLiveStatus(t.matchId,!1);break;case"LIVE_MOCK_TOGGLE":t.enabled?localStorage.setItem("badminton_demo_mock_active","true"):localStorage.removeItem("badminton_demo_mock_active"),this.onRemoteUpdate&&this.onRemoteUpdate("MOCK_TOGGLE",t);break}}setMatchLiveStatus(e,a,t=null){const s=this.getLiveMatches();a?s[e]={matchId:e,isLive:!0,updatedAt:Date.now(),...t||{}}:delete s[e],this.saveLiveMatches(s),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:e,isLive:a})}applyLiveUpdate(e){const{matchId:a,sets:t,score1:s,score2:n,currentSet:i,servingTeam:r,isEven:l,serverName:o,partnerName:h,receiverName:c,receiverPartnerName:d,isCourtSwapped:p,team1Right:m,team1Left:u,team2Right:v,team2Left:f}=e,$=this.getLiveMatches();$[a]={matchId:a,isLive:!0,updatedAt:Date.now(),sets:t,score1:s,score2:n,currentSet:i,servingTeam:r,isEven:l,serverName:o,partnerName:h,receiverName:c,receiverPartnerName:d,isCourtSwapped:p,team1Right:m,team1Left:u,team2Right:v,team2Left:f},this.saveLiveMatches($);const T=this.state.matches.find(x=>x.id===a);T&&(T.sets=t,T.score1=s,T.score2=n,T.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",e)}}class _{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const e=()=>this.resize();window.addEventListener("resize",e),this.resizeHandler=e;for(let t=0;t<120;t++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const a=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let t=0;this.particles.forEach(s=>{s.tiltAngle+=s.tiltAngleIncremental,s.y+=s.speed,s.x+=Math.sin(s.tiltAngle)*.5,s.tilt=Math.sin(s.tiltAngle-s.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=s.r,this.ctx.strokeStyle=s.color,this.ctx.moveTo(s.x+s.tilt+s.r/2,s.y),this.ctx.lineTo(s.x+s.tilt,s.y+s.tilt+s.r/2),this.ctx.stroke(),s.y<=this.canvas.height&&t++}),t>0?this.animationFrame=requestAnimationFrame(a):this.stop()};a()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class j{constructor(){window.BadmintonAppInstance=this,this.state=new R,this.lang="en",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new _,this.countdownTimer=null,this.activeSpectateMatchId=null,this.demoInterval=null,this.sync=new G(this.state,(e,a)=>this.handleSyncUpdate(e,a)),this.admin=new O(this.state,()=>this.handleStateChange(),this.sync),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),localStorage.getItem("badminton_demo_mock_active")==="true"&&this.startDemoSimulation(),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}getTeamRank(e,a){const t=this.state.calculateStandings(a),s=a==="Men's Doubles"?"MD":"XD",n=this.state.matches.find(l=>l.id===`F-${s}`),i=this.state.matches.find(l=>l.id===`B-${s}`);if(n&&n.status==="Completed"){if(n.winner===e)return 1;if(n.team1===e||n.team2===e)return 2}if(i&&i.status==="Completed"){if(i.winner===e)return 3;if(i.team1===e||i.team2===e)return 4}const r=t.findIndex(l=>l.name===e);return r!==-1?r+1:"-"}getTeamStats(e,a){const s=this.state.calculateStandings(a).find(v=>v.name===e)||{points:0},n=this.state.matches.filter(v=>v.category===a&&v.status==="Completed"&&(v.team1===e||v.team2===e)),i=n.length,r=n.filter(v=>v.winner===e).length,l=i-r,o=i>0?Math.round(r/i*100):0;let h=0,c=0,d=0,p=0;n.forEach(v=>{const f=v.team1===e,$=Number(v.score1)||0,T=Number(v.score2)||0;f?(h+=$,c+=T):(h+=T,c+=$),v.sets&&v.sets.forEach(x=>{const S=Number(x.t1)||0,g=Number(x.t2)||0;f?(d+=S,p+=g):(d+=g,p+=S)})});const m=h-c,u=d-p;return{played:i,wins:r,losses:l,pts:s.points,setsWon:h,setsLost:c,netSets:m,pointsWon:d,pointsLost:p,netPoints:u,winPercent:o,completedMatches:n}}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(t=>{t.addEventListener("click",s=>{const n=s.currentTarget.getAttribute("data-tab");n&&this.switchTab(n)})}),window.addEventListener("resize",()=>this.updateActivePill());const a=document.getElementById("btn-reset-db");a&&a.addEventListener("click",()=>{this.admin.isAdmin&&confirm("WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast("Database reset to default!","success"))}),document.body.addEventListener("change",t=>{const s=t.target.closest("#demo-mock-switch");s&&this.toggleDemoSimulation(s.checked)}),document.body.addEventListener("click",t=>{const s=t.target.closest(".btn-spectate-match");if(s){const n=s.getAttribute("data-match-id");this.openSpectateOverlay(n)}})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(e){this.activeTab=e,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(t=>{t.getAttribute("data-tab")===e?t.classList.add("active"):t.classList.remove("active")}),this.renderActiveView(),e==="rules"&&setTimeout(()=>{this.courtSimulator=new F("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const t=this.state.teams.filter(n=>n.category==="Men's Doubles")[0],s=this.state.teams.filter(n=>n.category==="Mixed's Doubles")[0];t&&s&&this.courtSimulator.setTeams([t.player1,t.player2],[s.player1,s.player2])},50),this.updateActivePill()}updateActivePill(){const e=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),a=document.querySelector(".nav-tabs-wrapper");if(!a)return;let t=document.querySelector(".nav-active-pill");t||(t=document.createElement("div"),t.className="nav-active-pill",a.appendChild(t)),e&&(t.style.width=`${e.offsetWidth}px`,t.style.transform=`translateX(${e.offsetLeft}px)`)}translateStaticElements(){}updateNavbar(){const e=document.getElementById("btn-toggle-admin"),a=document.getElementById("btn-reset-db");if(e){let t=document.getElementById("navbar-welcome-user");if(this.admin.isAdmin||this.admin.isRef){const n=sessionStorage.getItem("badminton_authLabel")||(this.admin.isAdmin?"Super Admin":this.admin.refPitch+" Umpire");t||(t=document.createElement("span"),t.id="navbar-welcome-user",t.className="text-5xs text-slate-300 font-extrabold tracking-wide uppercase mr-1 flex items-center gap-1.5",e.parentNode.insertBefore(t,e)),t.innerHTML=`<span class="w-1.5 h-1.5 rounded-full bg-volt pulse-dot"></span> Welcome, <span class="text-volt font-black">${n}</span>`,t.classList.remove("hidden"),e.innerHTML="✕ <span>Logout</span>",e.className="btn btn-xs btn-danger font-bold flex items-center gap-1",a&&this.admin.isAdmin&&a.classList.remove("hidden")}else t&&(t.classList.add("hidden"),t.innerHTML=""),e.innerHTML="🔐 <span>Admin Login</span>",e.className="btn btn-xs btn-outline flex items-center gap-1",a&&a.classList.add("hidden")}}renderActiveView(){const e=document.getElementById("main-view-container");if(!e)return;switch(e.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(e);break;case"standings":this.renderStandings(e);break;case"fixtures":this.renderFixtures(e);break;case"bracket":this.renderBracket(e);break;case"results":this.renderResults(e);break;case"rules":this.renderRules(e);break;case"teams":this.renderTeams(e);break}e.querySelectorAll(".glass-card, .dashboard-stat-card, .team-card, .match-card, .bracket-node, .standings-table tbody tr").forEach((t,s)=>{t.classList.add("animate-fade-slide-up"),t.style.animationDelay=`${s*.03}s`})}renderDashboard(e){var o,h;const a=this.state.matches.length,t=this.state.matches.filter(c=>c.status==="Completed").length,s=a>0?Math.round(t/a*100):0;let n=0;this.state.matches.forEach(c=>{c.status==="Completed"&&c.sets.forEach(d=>{n+=d.t1+d.t2})});const i="GEAR GAMES BADMINTON CHAMPIONSHIP 2026",r="Live standings, schedule fixtures & bracket generator",l="COUNTDOWN TO TOURNAMENT";e.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${i}</h1>
        <p class="hero-subtitle">${r}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${l}</div>
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
            <div class="progress-fill glow-volt" style="width: ${s}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${s}% Complete</div>
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
          
          <!-- Simulation switcher -->
          <div class="flex items-center gap-2.5 bg-slate-900/70 px-3 py-1.5 rounded border border-slate-800 text-4xs">
            <span class="font-bold text-slate-400">🤖 LIVE DEMO MOCK</span>
            <label class="demo-switch-toggle" style="position: relative; display: inline-block; width: 34px; height: 18px;">
              <input type="checkbox" id="demo-mock-switch" style="opacity: 0; width: 0; height: 0;" ${localStorage.getItem("badminton_demo_mock_active")==="true"?"checked":""}>
              <span class="demo-switch-slider" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.1); transition: .3s; border-radius: 34px; border: 1px solid rgba(255,255,255,0.05);"></span>
            </label>
          </div>
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
    `,(o=document.getElementById("dash-goto-md"))==null||o.addEventListener("click",()=>this.switchTab("standings")),(h=document.getElementById("dash-goto-xd"))==null||h.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(e){const a=this.state.calculateStandings(e);let t=a.slice(0,3).map((s,n)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${n===0?"🥇":n===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${s.name}</td>
          <td class="text-center font-semibold text-volt">${s.points}</td>
          <td class="text-center text-slate-300">${s.played}</td>
          <td class="text-center text-slate-300">${s.netSets>0?"+"+s.netSets:s.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${s.pointsWon}-${s.pointsLost}</td>
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(e){const a=this.state.calculateStandings(e),t=e==="Men's Doubles",s=t?"text-volt":"text-cyan",n=a.map((i,r)=>{const l=r+1,o=l<=4,h=this.state.isGroupStageComplete(e);let c=`<span class="rank-circle font-bold ${l===1?"gold":l===2?"silver":l===3?"bronze":""}">${l}</span>`,d="";h&&(o?d='<span class="advance-tag neon-green">SEMIS</span>':d='<span class="advance-tag neon-red">OUT</span>');const p=i.played===a.length-1,m=p?'<span class="finished-tag">4 Matches</span>':"";return`
        <tr class="${o?"row-top-4":"row-eliminated"} ${t?"md-row":"xd-row"}">
          <td class="text-center">${c}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${i.name}</span>
              ${d}
              ${m}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${i.player1} & ${i.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${i.points}</td>
          <td class="text-center font-bold ${p?"text-emerald-400":"text-slate-200"}">${i.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${i.won}</td>
          <td class="text-center font-semibold ${i.lost>0?"text-rose-400":"text-slate-400"}">${i.lost}</td>
          <td class="text-center text-slate-200 font-bold ${i.netSets>=0?"text-emerald-400":"text-rose-400"}">
            ${i.setsWon}-${i.setsLost} 
            <span class="text-xs font-normal">(${i.netSets>=0?"+"+i.netSets:i.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${i.pointsWon}-${i.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${i.netPoints>=0?"+"+i.netPoints:i.netPoints})</span>
          </td>
        </tr>
      `}).join("");return`
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${t?"💎":"🔮"}</span>
          <span class="${s}">${e}</span>
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
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const t=document.getElementById("fixture-search");t.oninput=n=>{this.fixtureSearchText=n.target.value,this.renderActiveView();const i=document.getElementById("fixture-search");i&&(i.focus(),i.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(n=>{n.onclick=()=>{this.fixtureStatusFilter=n.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(e,a,t){const s=this.state.teams.find(i=>i.name===e),n=this.state.teams.find(i=>i.name===a);return!!(s&&(s.player1.toLowerCase().includes(t)||s.player2.toLowerCase().includes(t))||n&&(n.player1.toLowerCase().includes(t)||n.player2.toLowerCase().includes(t)))}renderCategoryFixtures(e){const a=e==="Men's Doubles",t=a?"Men's Doubles":"Mixed's Doubles";let s=this.state.matches.filter(m=>m.category===e);if(this.fixtureStatusFilter!=="all"&&(s=s.filter(m=>m.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const m=this.fixtureSearchText.toLowerCase().trim();s=s.filter(u=>u.team1.toLowerCase().includes(m)||u.team2.toLowerCase().includes(m)||u.stage&&u.stage.toLowerCase().includes(m)||u.pitch&&u.pitch.toLowerCase().includes(m)||this.checkPlayersIncludeSearch(u.team1,u.team2,m))}const n=s.filter(m=>m.stage==="Group Stage"),i=s.filter(m=>m.stage==="Semi-finals"),r=s.filter(m=>m.stage==="Grand Final"),l=s.filter(m=>m.stage==="Bronze Match"),o="GRAND CHAMPIONSHIP",h="BRONZE FINALS",c="SEMIFINALS STAGE",d="GROUP STAGE QUALIFYING",p=(m,u)=>m.length===0?"":`
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
      `;return`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${a?"💎":"🔮"}</span>
          <span class="${a?"text-volt":"text-cyan"}">${t}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${s.length===0?`
            <div class="glass-card text-center py-8 px-4 flex flex-col items-center justify-center gap-2 border border-dashed border-slate-800/60" style="background: rgba(15, 23, 42, 0.15); border-radius: 12px;">
              <span class="text-xl">📅</span>
              <span class="text-slate-400 font-semibold text-xs">No match scheduled/completed</span>
            </div>
          `:`
            ${p(r,o)}
            ${p(l,h)}
            ${p(i,c)}
            ${p(n,d)}
          `}
        </div>
      </div>
    `}renderMatchCards(e){if(e.length===0)return'<div class="col-span-2 text-center text-muted py-6">No matches found</div>';const a=this.sync.getLiveMatches();return e.map(t=>{const s=a[t.id],n=!!s,i=t.status==="Completed";t.team1&&(t.team1.includes("Place")||t.team1.includes("Winner")||t.team1.includes("Loser"))||t.team2&&(t.team2.includes("Place")||t.team2.includes("Winner")||t.team2.includes("Loser"));let r="",l="";n?(r="border-glow-volt bg-volt-gradient",l=`
          <span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--danger); color: #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);">
            <span class="live-dot-pulse"></span> LIVE
          </span>
        `):t.stage==="Grand Final"?(r="border-glow-gold bg-gold-gradient",l=i?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>GRAND FINAL</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">GRAND FINAL</span>'):t.stage==="Bronze Match"?(r="border-glow-bronze bg-bronze-gradient",l=i?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>BRONZE MATCH</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">BRONZE MATCH</span>'):(r=i?"border-completed":"border-scheduled",l=i?'<span class="match-badge completed">FINAL</span>':'<span class="match-badge scheduled">SCHEDULED</span>');const o=t.category==="Men's Doubles",h=o?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',c=this.state.teams.find(y=>y.name===t.team1),d=this.state.teams.find(y=>y.name===t.team2),p=c?`${c.player1} & ${c.player2}`:"",m=d?`${d.player1} & ${d.player2}`:"",u=o?"text-volt":"text-cyan";let v="",f="";const $=i?t.sets:n?s.sets:[],T=i?t.score1:n?s.score1:"-",x=i?t.score2:n?s.score2:"-";if((i||n)&&$&&$.length>0){const y=i&&t.winner===t.team1?`<span class="${u}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',w=i&&t.winner===t.team2?`<span class="${u}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';v+=y,f+=w,$.forEach(M=>{v+=`<span class="${M.t1>M.t2?u:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${M.t1}</span>`,f+=`<span class="${M.t2>M.t1?u:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${M.t2}</span>`});for(let M=$.length;M<3;M++)v+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',f+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else v='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',f='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';const S=this.admin.isAdmin||this.admin.isRef&&t.pitch===this.admin.refPitch;let g="";n?g=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <button class="btn btn-xs btn-outline btn-spectate-match flex items-center gap-1" data-match-id="${t.id}">
              🔍 <span>Spectate</span>
            </button>
            ${S?`
              <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${t.id}">
                Umpire <span>Join</span>
              </button>
            `:""}
          </div>
        `:i?g=this.admin.isAdmin?`
          <div class="flex justify-end mt-3 pt-2.5 border-t border-slate-800/80">
            <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${t.id}">
              ✏️ <span>Edit Score</span>
            </button>
          </div>
        `:"":g=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <div>
              <span class="text-5xs text-slate-500 font-bold uppercase tracking-wider">AWAITING</span>
            </div>
            <div class="flex gap-2">
              ${S?`
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
        `;const b=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${r} ${b}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${h}
              <span>${t.pitch} | ${t.time}</span>
            </div>
            ${l}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${i&&t.winner===t.team1||n&&T>x?u:"text-slate-200"} truncate" title="${t.team1}">
                  ${t.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${p||"TBD"}">${p||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${v}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${i&&t.winner===t.team2||n&&x>T?u:"text-slate-200"} truncate" title="${t.team2}">
                  ${t.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${m||"TBD"}">${m||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${f}
              </div>
            </div>
          </div>

          <!-- Action Footer -->
          ${g}
        </div>
      `}).join("")}renderBracket(e){const a=r=>{const l=r==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(o=>o.id===`SF1-${l}`),sf2:this.state.matches.find(o=>o.id===`SF2-${l}`),f:this.state.matches.find(o=>o.id===`F-${l}`),b:this.state.matches.find(o=>o.id===`B-${l}`)}},t=a("Men's Doubles"),s=a("Mixed's Doubles"),n=r=>{const l=this.state.calculateStandings(r),o=this.state.isGroupStageComplete(r);return l.map((h,c)=>{const d=c+1,p=d<=4,m=d===1?"gold":d===2?"silver":d===3?"bronze":"",u=d===1?"🥇 Seed 1":d===2?"🥈 Seed 2":d===3?"🥉 Seed 3":d===4?"🎫 Seed 4":"❌ Out",v=p?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;" data-team-name="${h.name}">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${h.name}">
              <span class="rank-circle font-bold ${m}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${d}</span>
              <span class="font-bold text-slate-200 truncate">${h.name}</span>
            </div>
            ${o?`<span class="font-extrabold ${v}" style="font-size: 0.55rem; flex-shrink: 0;">${u}</span>`:""}
          </div>
        `}).join("")},i=(r,l,o,h)=>{const c=this.getAwardResults(h),d=p=>{if(!p)return'<div class="bracket-node empty">N/A</div>';const m=p.status==="Completed",u=p.team1&&(p.team1.includes("Place")||p.team1.includes("Winner")||p.team1.includes("Loser"))||p.team2&&(p.team2.includes("Place")||p.team2.includes("Winner")||p.team2.includes("Loser")),v=this.admin.isAdmin?u?'<span title="Cannot edit score yet" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>':`<button class="btn-edit-node-score btn-edit-match" data-match-id="${p.id}">✏️</button>`:"",f=this.state.teams.find(w=>w.name===p.team1),$=this.state.teams.find(w=>w.name===p.team2),T=f?`${f.player1} & ${f.player2}`:"",x=$?`${$.player1} & ${$.player2}`:"",S=o?"text-volt":"text-cyan";let g="",b="";if(m&&p.sets&&p.sets.length>0){const w=p.winner===p.team1?`<span class="${S}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',M=p.winner===p.team2?`<span class="${S}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';g+=w,b+=M,p.sets.forEach(L=>{g+=`<span class="${L.t1>L.t2?S:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${L.t1}</span>`,b+=`<span class="${L.t2>L.t1?S:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${L.t2}</span>`});for(let L=p.sets.length;L<3;L++)g+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',b+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else g='<span style="width: 6px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',b='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';const y=m?'<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ Finished</div>':`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${p.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${m?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${p.pitch} | ${p.stage}</span>
              ${v}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&p.winner===p.team1?S:"text-slate-300"}" data-team-name="${p.team1}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${p.team1}">${p.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${T||"TBD"}">${T||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${g}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&p.winner===p.team2?S:"text-slate-300"}" data-team-name="${p.team2}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${p.team2}">${p.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${x||"TBD"}">${x||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${b}
                </div>
              </div>
            </div>
            
            ${y}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${o?"text-volt":"text-cyan"}">${l} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 GROUP STANDINGS</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${n(h)}
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
                ${d(r.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${d(r.sf2)}
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
                ${d(r.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${d(r.b)}
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

      ${i(t,"Men's Doubles",!0,"Men's Doubles")}
      ${i(s,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `,setTimeout(()=>this.setupBracketHighlights(),50)}setupBracketHighlights(){const e=document.querySelectorAll(".bracket-visualizer");e.length!==0&&e.forEach(a=>{a.addEventListener("mouseover",t=>{const s=t.target.closest("[data-team-name]");if(!s)return;const n=s.getAttribute("data-team-name");if(!n||n.includes("Winner")||n.includes("Loser")||n.includes("Place"))return;document.querySelectorAll(`[data-team-name="${CSS.escape(n)}"]`).forEach(r=>{r.classList.add("team-highlight-active");const l=r.closest(".bracket-node");l&&l.classList.add("node-highlight-active")})}),a.addEventListener("mouseout",t=>{const s=t.target.closest("[data-team-name]");if(!s||!s.getAttribute("data-team-name"))return;document.querySelectorAll("[data-team-name]").forEach(r=>{r.classList.remove("team-highlight-active");const l=r.closest(".bracket-node");l&&l.classList.remove("node-highlight-active")})})})}getAwardResults(e){const a=e==="Men's Doubles"?"MD":"XD",t=this.state.matches.find(h=>h.id===`F-${a}`),s=this.state.matches.find(h=>h.id===`B-${a}`);let n={name:"TBD",players:"Championship Winner",confirmed:!1},i={name:"TBD",players:"Championship Runner-up",confirmed:!1},r={name:"TBD",players:"Bronze Winner",confirmed:!1},l={name:"TBD",players:"Bronze Runner-up",confirmed:!1};const o=h=>{if(!h)return"";const c=this.state.teams.find(d=>d.name===h);return c?`${c.player1} & ${c.player2}`:""};if(t)if(t.status==="Completed"){const h=t.winner,c=t.winner===t.team1?t.team2:t.team1;n={name:h,players:o(h),confirmed:!0},i={name:c,players:o(c),confirmed:!0}}else t.team1.includes("Winner")||t.team2.includes("Winner")||(n={name:"Grand Finalists",players:`${t.team1} vs ${t.team2}`,confirmed:!1},i={name:"Chasing Runner-up",players:"Runner-up of Grand Final",confirmed:!1});if(s)if(s.status==="Completed"){const h=s.winner,c=s.winner===s.team1?s.team2:s.team1;r={name:h,players:o(h),confirmed:!0},l={name:c,players:o(c),confirmed:!0}}else s.team1.includes("Loser")||s.team2.includes("Loser")||(r={name:"Bronze Contenders",players:`${s.team1} vs ${s.team2}`,confirmed:!1});return{goldTeam:n,silverTeam:i,bronzeTeam:r,fourthTeam:l}}renderResults(e){const a=this.getAwardResults("Men's Doubles"),t=this.getAwardResults("Mixed's Doubles"),s=(i,r,l)=>{const o=i.goldTeam.confirmed||i.silverTeam.confirmed||i.bronzeTeam.confirmed,h=(b,y=48,w="")=>{let M="";if(w==="gold"?M=`
            <div class="podium-medal-badge gold" title="Gold Medal - Champion" style="font-size: 16px; line-height: 1;">
              🥇
            </div>
          `:w==="silver"?M=`
            <div class="podium-medal-badge silver" title="Silver Medal - Runner-up" style="font-size: 16px; line-height: 1;">
              🥈
            </div>
          `:w==="bronze"?M=`
            <div class="podium-medal-badge bronze" title="Bronze Medal - 3rd Place" style="font-size: 16px; line-height: 1;">
              🥉
            </div>
          `:w==="fourth"&&(M=`
            <div class="podium-medal-badge fourth" title="Honorable Mention - 4th Place" style="font-size: 16px; line-height: 1;">
              🎖️
            </div>
          `),!b||b.includes("TBD")||b.includes("Place")||b.includes("Winner")||b.includes("Loser")||b.includes("Chasing")||b.includes("Tranh")||b.includes("Chung"))return`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${y}px; height: ${y}px; font-size: ${y*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${M}
            </div>
          `;const L=this.state.teams.find(k=>k.name===b);return L?`
          <div class="podium-avatar-wrapper mx-auto" style="width: ${y}px; height: ${y}px; position: relative; flex-shrink: 0; border-radius: 50% !important;">
            <img src="/teams/${L.id}.jpg" 
                 onerror="this.onerror=null; this.src='/teams/${L.id}.png'; this.onerror=function(){this.style.display='none'; this.nextElementSibling.style.display='flex';};" 
                 class="podium-avatar object-cover" 
                 style="width: 100%; height: 100%; display: block; border-radius: 50% !important; box-shadow: 0 4px 10px rgba(0,0,0,0.4);" />
            <div class="team-fallback-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800" 
                 style="display:none; width: 100%; height: 100%; border-radius: 50% !important; font-size: ${y*.4}px;">👥</div>
            ${M}
          </div>
        `:`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${y}px; height: ${y}px; font-size: ${y*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${M}
            </div>
          `},c=this.state.teams.find(b=>b.name===i.silverTeam.name),d=c?c.id:"",p=d?"clickable-podium":"",m=this.state.teams.find(b=>b.name===i.goldTeam.name),u=m?m.id:"",v=u?"clickable-podium":"",f=this.state.teams.find(b=>b.name===i.bronzeTeam.name),$=f?f.id:"",T=$?"clickable-podium":"",x=this.state.teams.find(b=>b.name===i.fourthTeam.name),S=x?x.id:"",g=S?"clickable-podium":"";return`
        <div class="glass-card mb-8 text-center relative overflow-hidden" style="padding: 1.5rem 1rem;">
          <div class="absolute top-0 left-0 w-full h-[3px] ${l?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${l?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${r}</span>
          </h3>
          <p class="text-xs text-muted mb-4">
            ${o?"⚡ Official championship matches completed":"⏳ Waiting for championship finals to complete"}
          </p>
 
          <div class="podium-stage-container">
            <!-- Silver (#2) -->
            <div class="podium-column silver ${p}" data-team-id="${d}" data-category="${r}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${h(i.silverTeam.name,56,"silver")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-extrabold text-[11px] md:text-sm text-slate-100 break-words leading-snug" title="${i.silverTeam.name}">${i.silverTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${i.silverTeam.players}">${i.silverTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">2</span>
                <span class="podium-badge">Runner-up</span>
              </div>
            </div>

            <!-- Gold (#1) -->
            <div class="podium-column gold ${v}" data-team-id="${u}" data-category="${r}">
              <div class="crown-icon text-2xl md:text-3xl animate-bounce-slow mb-1 flex-shrink-0" style="filter: drop-shadow(0 0 8px rgba(245,158,11,0.6));">👑</div>
              <div class="podium-avatar-halo">
                ${h(i.goldTeam.name,68,"gold")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-black text-xs md:text-base text-slate-100 break-words leading-snug" title="${i.goldTeam.name}">${i.goldTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${i.goldTeam.players}">${i.goldTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">1</span>
                <span class="podium-badge">Champion</span>
              </div>
            </div>

            <!-- Bronze (#3) -->
            <div class="podium-column bronze ${T}" data-team-id="${$}" data-category="${r}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${h(i.bronzeTeam.name,56,"bronze")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-extrabold text-[11px] md:text-sm text-slate-100 break-words leading-snug" title="${i.bronzeTeam.name}">${i.bronzeTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${i.bronzeTeam.players}">${i.bronzeTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">3</span>
                <span class="podium-badge">3rd Place</span>
              </div>
            </div>
          </div>
 
          <!-- Fourth Place premium card -->
          <div class="podium-fourth-card ${g}" data-team-id="${S}" data-category="${r}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <div class="podium-fourth-rank">
                4
              </div>
              ${h(i.fourthTeam.name,36,"fourth")}
              <div class="min-w-0 flex-1 text-left">
                <div class="font-extrabold text-xs text-slate-200 truncate" title="${i.fourthTeam.name}">${i.fourthTeam.name}</div>
                <div class="text-[10px] text-slate-500 font-medium truncate mt-0.5" title="${i.fourthTeam.players}">${i.fourthTeam.players}</div>
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
 
      ${s(a,"Men's Doubles",!0)}
      ${s(t,"Mixed's Doubles",!1)}
    `,e.querySelectorAll(".clickable-podium").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-team-id"),l=i.getAttribute("data-category");r&&l&&this.showTeamDetailsModal(r,l)})}),setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(e){const a=B.en,t=a.sections.map(s=>{const n=s.content.map(i=>{let r=i.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return r=r.replace(/\\rightarrow/g," ➔ "),r=r.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${r}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${s.title}</h3>
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
    `}renderTeams(e){const a=(i,r)=>{const l=r==="Men's Doubles",o=l?"text-volt":"text-cyan",h=i.map(c=>{const d=this.getTeamStats(c.name,r),p=this.getTeamRank(c.name,r),m=d.completedMatches.map(v=>{const f=v.winner===c.name,$=f?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",T=f?"W":"L",x=`${v.stage}: ${v.team1} vs ${v.team2} (${v.score1}-${v.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${$}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${x}">${T}</span>`}).join(""),u=m.length>0?m:'<span class="text-slate-500 text-5xs italic font-sans">No matches</span>';return`
          <div class="team-profile-card ${l?"team-card-md":"team-card-xd"} glass-panel border border-slate-700/50 rounded-lg hover-glowing flex flex-col justify-between overflow-hidden relative"
               style="background: radial-gradient(circle at top right, ${l?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%); cursor: pointer;"
               data-team-id="${c.id}" data-category="${r}">
            
            <!-- Team Color Banner -->
            <div class="team-card-banner w-full" style="height: 52px; background: linear-gradient(135deg, ${l?"rgba(163, 230, 53, 0.15)":"rgba(34, 211, 238, 0.15)"} 0%, rgba(15, 22, 42, 0.6) 100%); border-b: 1px solid rgba(255, 255, 255, 0.04);"></div>

            <!-- Team Image Circular Avatar overlapping banner -->
            <div class="team-card-avatar-wrapper">
              <div class="team-card-avatar-inner" style="box-shadow: 0 4px 10px rgba(0,0,0,0.5), 0 0 15px ${l?"rgba(163, 230, 53, 0.2)":"rgba(34, 211, 238, 0.2)"};">
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
                    <span class="badge ${l?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
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
                      ${u}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stats -->
              <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
                <!-- Summary row -->
                <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${d.played}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Pld</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${l?"text-volt":"text-cyan"}">${d.wins}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Won</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${d.losses>0?"text-rose-400":"text-slate-400"}">${d.losses}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Lost</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${d.winPercent}%</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Win%</div>
                  </div>
                </div>

                <!-- Telemetry detail list -->
                <div class="flex flex-col gap-1.5 font-mono">
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Standing Pts:</span>
                    <span class="font-extrabold text-slate-200">${d.pts}</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Sets W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${d.setsWon}-${d.setsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${d.netSets>0?"bg-emerald-500/10 text-emerald-400":d.netSets<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${d.netSets>0?"+":""}${d.netSets}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Points W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${d.pointsWon}-${d.pointsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${d.netPoints>0?"bg-emerald-500/10 text-emerald-400":d.netPoints<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${d.netPoints>0?"+":""}${d.netPoints}
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
            <span class="${o}">${l?"💎":"🔮"}</span>
            <span class="${o}">${r} (${i.length} Teams)</span>
          </h3>
          <div class="team-cards-grid">
            ${h}
          </div>
        </div>
      `},t=this.state.teams.filter(i=>i.category==="Men's Doubles").sort((i,r)=>{const l=this.getTeamRank(i.name,"Men's Doubles"),o=this.getTeamRank(r.name,"Men's Doubles");return(typeof l=="number"?l:99)-(typeof o=="number"?o:99)}),s=this.state.teams.filter(i=>i.category==="Mixed's Doubles").sort((i,r)=>{const l=this.getTeamRank(i.name,"Mixed's Doubles"),o=this.getTeamRank(r.name,"Mixed's Doubles");return(typeof l=="number"?l:99)-(typeof o=="number"?o:99)});e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Registered Teams & Members</h2>
        <p class="view-subtitle">Browse player profiles and team group statistics</p>
      </div>

      <!-- Teams lists -->
      ${a(t,"Men's Doubles")}
      ${a(s,"Mixed's Doubles")}
    `,e.querySelectorAll(".team-profile-card").forEach(i=>{i.addEventListener("click",()=>{const r=i.getAttribute("data-team-id"),l=i.getAttribute("data-category");this.showTeamDetailsModal(r,l)})})}showTeamDetailsModal(e,a){const t=this.state.teams.find(w=>w.id===e);if(!t)return;const s=a==="Men's Doubles",n=this.getTeamStats(t.name,a),i=this.getTeamRank(t.name,a),r=n.played,l=n.wins,o=n.losses,h=n.pts,c=n.setsWon,d=n.setsLost,p=n.netSets,m=n.pointsWon,u=n.pointsLost,v=n.netPoints,f=n.winPercent,$=n.completedMatches.map(w=>{const M=w.winner===t.name,L=M?"win":"loss",k=M?"W":"L",P=`${w.stage}: ${w.team1} vs ${w.team2} (${w.score1}-${w.score2})`;return`<span class="team-modal-form-pill ${L}" title="${P}">${k}</span>`}).join(""),T=$.length>0?$:'<span class="text-slate-500 text-5xs italic">No matches played</span>',x=document.createElement("div");x.className="team-modal-backdrop",x.id="team-profile-modal-backdrop";const S=i===1?'<div class="team-modal-rank-badge rank-1">🥇 Rank #1</div>':i===2?'<div class="team-modal-rank-badge rank-2">🥈 Rank #2</div>':i===3?'<div class="team-modal-rank-badge rank-3">🥉 Rank #3</div>':`<div class="team-modal-rank-badge rank-other">Rank #${i}</div>`,g=s?"volt":"cyan";x.innerHTML=`
      <div class="team-modal-card">
        <!-- Close Button -->
        <button class="team-modal-close-btn" id="modal-team-close-btn">
          &times;
        </button>

        <!-- Cover Photo with Integrated Header -->
        <div class="team-modal-cover">
          ${S}
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
              <span class="team-modal-cat-tag ${g}">${a}</span>
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
              <div class="team-modal-player-icon ${g}">🏸</div>
              <div class="team-modal-player-info">
                <div class="team-modal-player-role">Player 1</div>
                <div class="team-modal-player-name" title="${t.player1}">${t.player1}</div>
              </div>
            </div>
            <div class="team-modal-player-card">
              <div class="team-modal-player-icon ${g}">🏸</div>
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
              <div class="team-modal-summary-value won">${l}</div>
            </div>
            <div class="team-modal-summary-divider"></div>
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label lost">Lost</div>
              <div class="team-modal-summary-value lost">${o}</div>
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
                <span class="team-modal-telemetry-value">${h}</span>
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
                <div class="team-modal-progress-bar ${g}" style="width: ${f}%;"></div>
              </div>
            </div>

            <!-- Sets Diff -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🎾</span>
                <span class="team-modal-telemetry-label">Sets Diff</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${c}-${d}</span>
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
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${m}-${u}</span>
                <span class="team-modal-diff-badge ${v>0?"positive":v<0?"negative":"neutral"}">
                  ${v>0?"+":""}${v}
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
              ${T}
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(x);const b=x.querySelector("#modal-team-close-btn"),y=()=>{x.classList.add("animate-fade-out"),setTimeout(()=>x.remove(),250)};b.addEventListener("click",y),x.addEventListener("click",w=>{w.target===x&&y()})}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const e=new Date("May 31, 2026 13:30:00").getTime(),a=()=>{const t=document.getElementById("cd-days"),s=document.getElementById("cd-hours"),n=document.getElementById("cd-minutes"),i=document.getElementById("cd-seconds");if(!t){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const r=new Date().getTime(),l=e-r;if(l<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),t.textContent="00",s.textContent="00",n.textContent="00",i.textContent="00";return}const o=Math.floor(l/(1e3*60*60*24)),h=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(l%(1e3*60*60)/(1e3*60)),d=Math.floor(l%(1e3*60)/1e3);t.textContent=o.toString().padStart(2,"0"),s.textContent=h.toString().padStart(2,"0"),n.textContent=c.toString().padStart(2,"0"),i.textContent=d.toString().padStart(2,"0")};a(),this.countdownTimer=setInterval(a,1e3)}handleSyncUpdate(e,a){if(this.renderActiveView(),e==="MOCK_TOGGLE"){const t=document.getElementById("demo-mock-switch");t&&(t.checked=a.enabled),a.enabled?this.startDemoSimulation(!0):this.stopDemoSimulation(!0)}if(this.activeSpectateMatchId&&a&&a.matchId===this.activeSpectateMatchId)if(e==="STATUS_UPDATE"&&!a.isLive){const t=this.state.matches.find(s=>s.id===a.matchId);if(t)this.showSpectatorMatchEndNotice(t);else{const s=document.getElementById("spectate-overlay-container");s&&(s.classList.add("hidden"),s.innerHTML=""),this.activeSpectateMatchId=null}}else this.renderSpectateOverlay(this.activeSpectateMatchId)}showSpectatorMatchEndNotice(e){const a=e.stage||"Group Stage";let t=e.team1;e.score2Sets>e.score1Sets&&(t=e.team2);let s="WIN THE MATCH!",n="MATCH COMPLETED",i=`🎉 Congratulations to **${t}** on winning this match! 🎉`,r="🏸",l="MATCH WINNER",o="#84cc16",h="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(s="CONGRATULATIONS ON WINNING!",n="QUALIFIED FOR THE FINALS",i=`⚡ Spectacular! **${t}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,r="🏅",l="SEMI-FINALS WINNER",o="#06b6d4",h="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(s="TOURNAMENT CHAMPIONS!",n="GEAR GAMES BADMINTON 2026 CUP",i=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${t}**! A historic and well-deserved victory! 🏆🥇`,r="🏆",l="TOURNAMENT CHAMPIONS",o="#fbbf24",h="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(s="BRONZE MEDALISTS!",n="BRONZE MEDAL SECURED",i=`🥉 Superb! **${t}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,r="🥉",l="BRONZE WINNER",o="#ea580c",h="rgba(234, 88, 12, 0.45)");const c=document.createElement("div");c.className="match-end-modal-backdrop relative",c.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${h}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${h}); line-height: 1;">
            ${r}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${o}; filter: drop-shadow(0 0 8px ${h});">${s}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${n}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${l}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${t}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${e.sets?e.sets.map((d,p)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${p+1}: <span class="text-volt">${d.t1}</span>-<span class="text-cyan">${d.t2}</span>
                </div>
              `).join(""):""}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${i}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="spec-end-btn-home" style="font-size: 0.85rem; background-color: ${o}; color: #000; box-shadow: 0 4px 14px ${h}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild(c),document.getElementById("spec-end-btn-home").onclick=()=>{c.classList.add("animate-fade-out"),setTimeout(()=>{c.remove();const d=document.getElementById("spectate-overlay-container");d&&(d.classList.add("hidden"),d.innerHTML=""),this.activeSpectateMatchId=null,this.switchTab("dashboard")},300)}}toggleDemoSimulation(e){e?(localStorage.setItem("badminton_demo_mock_active","true"),this.startDemoSimulation(),this.admin.showToast("Live Demo Simulation activated!","success")):(localStorage.removeItem("badminton_demo_mock_active"),this.stopDemoSimulation(),this.admin.showToast("Live Demo Simulation stopped!","info")),this.sync.broadcast("LIVE_MOCK_TOGGLE",{enabled:e})}startDemoSimulation(e=!1){this.stopDemoSimulation(!0),this.demoInterval=setInterval(()=>{this.stepDemoSimulation()},4500)}stopDemoSimulation(e=!1){this.demoInterval&&(clearInterval(this.demoInterval),this.demoInterval=null);const a=this.sync.getLiveMatches();Object.keys(a).forEach(t=>{this.sync.setMatchLiveStatus(t,!1);const s=this.state.matches.find(n=>n.id===t);s&&s.status==="Live"&&(s.status="Scheduled")}),this.renderActiveView()}stepDemoSimulation(){const e=this.sync.getLiveMatches(),a=Object.keys(e);if(a.length>0){const t=a[Math.floor(Math.random()*a.length)],s=e[t],n=s.sets.length-1,i=s.sets[n]||{t1:0,t2:0},r=Math.random()>.48;let l=i.t1,o=i.t2;if(r){if(s.servingTeam==="A"){const g=s.serverName;s.serverName=s.partnerName,s.partnerName=g}l++,s.servingTeam="A"}else{if(s.servingTeam==="B"){const g=s.receiverName;s.receiverName=s.receiverPartnerName,s.receiverPartnerName=g}o++,s.servingTeam="B"}s.sets[n]={t1:l,t2:o},s.score1=l,s.score2=o;const h=s.servingTeam==="A"?l:o;s.isEven=h%2===0;const c=this.state.matches.find(g=>g.id===t),d=this.state.teams.find(g=>g.name===c.team1),p=this.state.teams.find(g=>g.name===c.team2),m=d?[d.player1,d.player2]:["T1 P1","T1 P2"],u=p?[p.player1,p.player2]:["T2 P1","T2 P2"];s.servingTeam==="A"?(s.receiverName=s.isEven?u[0]:u[1],s.receiverPartnerName=s.isEven?u[1]:u[0]):(s.receiverName=s.isEven?m[0]:m[1],s.receiverPartnerName=s.isEven?m[1]:m[0]);const v=t.includes("SF")||t.includes("F-")||t.includes("B-")?21:15,f=v===15?21:30,$=Math.max(l,o),T=Math.min(l,o),x=$-T;let S=!1;if($>=v&&(x>=2||$===f)&&(S=!0),S){s.sets[n]={t1:l,t2:o};let g=0,b=0;if(s.sets.forEach(y=>{y.t1>y.t2?g++:b++}),g===2||b===2){this.sync.broadcast("LIVE_MATCH_END",{matchId:t}),this.sync.setMatchLiveStatus(t,!1),this.state.matches.find(w=>w.id===t)&&this.state.updateMatchScore(t,s.sets,g,b,"Completed");return}else s.sets.push({t1:0,t2:0}),s.score1=0,s.score2=0,s.currentSet++,s.servingTeam=l>o?"A":"B"}this.sync.broadcast("LIVE_SCORE_UPDATE",{matchId:t,sets:s.sets,score1:s.score1,score2:s.score2,currentSet:s.currentSet,servingTeam:s.servingTeam,isEven:s.isEven,serverName:s.serverName,partnerName:s.partnerName,receiverName:s.receiverName,receiverPartnerName:s.receiverPartnerName})}else{const t=this.state.matches.find(s=>s.status==="Scheduled"&&!s.team1.includes("Winner")&&!s.team2.includes("Winner")&&!s.team1.includes("Loser")&&!s.team2.includes("Loser"));if(t){const s=this.state.teams.find(o=>o.name===t.team1),n=this.state.teams.find(o=>o.name===t.team2),i=s?[s.player1,s.player2]:["T1 P1","T1 P2"],r=n?[n.player1,n.player2]:["T2 P1","T2 P2"],l={sets:[{t1:0,t2:0}],score1:0,score2:0,currentSet:1,servingTeam:"A",isEven:!0,serverName:i[0],partnerName:i[1],receiverName:r[0],receiverPartnerName:r[1]};this.sync.broadcast("LIVE_MATCH_START",{matchId:t.id,matchState:l}),this.sync.setMatchLiveStatus(t.id,!0,l)}}}renderLivePitches(){const e=["Pitch 15","Pitch 16","Pitch 20","Pitch 21"],a=this.sync.getLiveMatches();return e.map(t=>{const s=Object.keys(a).find(r=>{const l=this.state.matches.find(o=>o.id===r);return l&&l.pitch===t});if(s){const r=a[s],l=this.state.matches.find(h=>h.id===s);l.category;const o=this.admin.isAdmin||this.admin.isRef&&l.pitch===this.admin.refPitch;return`
          <div class="live-pitch-card glass-panel border border-red-500/30 p-3 rounded-lg hover-glowing bg-red-950/5 flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-volt text-4xs">${t}</span>
              <span class="badge bg-danger pulse-dot flex items-center gap-1 font-bold text-5xs">
                <span class="live-dot"></span> LIVE
              </span>
            </div>
            
            <div class="text-center py-1">
              <div class="text-4xs font-bold text-slate-400 mb-0.5 truncate" title="${l.team1}">${l.team1}</div>
              <div class="text-xs font-mono font-black text-slate-100 flex items-center justify-center gap-2">
                <span class="${r.servingTeam==="A"?"text-glow-volt":""}">${r.score1}</span>
                <span class="text-slate-600 text-3xs">vs</span>
                <span class="${r.servingTeam==="B"?"text-glow-cyan":""}">${r.score2}</span>
              </div>
              <div class="text-4xs font-bold text-slate-400 mt-0.5 truncate" title="${l.team2}">${l.team2}</div>
            </div>
            
            <div class="text-5xs text-center text-slate-500 font-semibold mb-2">
              Set ${r.currentSet} | serve: ${r.servingTeam==="A"?"T1":"T2"}
            </div>

            <div class="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button class="btn btn-2xs btn-outline btn-spectate-match flex-1 font-bold" data-match-id="${l.id}">
                🔍 Spectate
              </button>
              ${o?`
                <button class="btn btn-2xs btn-outline btn-join-match font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${l.id}">
                  🏸 Ump
                </button>
              `:""}
            </div>
          </div>
        `}const n=this.state.matches.find(r=>r.pitch===t&&r.status==="Scheduled"),i=this.admin.isAdmin||this.admin.isRef&&t===this.admin.refPitch;return n?`
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
              ${i?`
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
        `)},100)}renderSpectateOverlay(e){const a=document.getElementById("spectate-overlay-container");if(!a)return;a.classList.remove("hidden");const t=this.state.matches.find(E=>E.id===e),n=this.sync.getLiveMatches()[e];if(!n||!t){a.classList.add("hidden"),this.activeSpectateMatchId=null;return}n.isEven,t.category;let i,r,l,o;const h=n.team1Right||t.team1.split(" ")[0]+" 1",c=n.team1Left||t.team1.split(" ")[0]+" 2",d=n.team2Right||t.team2.split(" ")[0]+" 1",p=n.team2Left||t.team2.split(" ")[0]+" 2";n.isCourtSwapped?(i=d,r=p,l=h,o=c):(i=h,r=c,l=d,o=p);const m=n.serverName,u=n.receiverName,v=E=>E===m?"S":E===u?"R":"P",f=E=>E===m?"volt":E===u?"cyan":"neutral",$=E=>E===m?"text-volt":E===u?"text-cyan":"text-slate-200",T=E=>E!==m?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let x,S,g,b;m===i?(x=210,S=355):m===r?(x=90,S=355):m===l?(x=90,S=145):(x=210,S=145),u===i?(g=210,b=355):u===r?(g=90,b=355):u===l?(g=90,b=145):(g=210,b=145);const y=(E,I)=>I===355?E===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":E===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",w=y(x,S),M=y(g,b),L=(x+g)/2+30,k=(S+b)/2-40,P=n.sets.map((E,I)=>`
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
              ${P}
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
                <path d="${w}" class="svg-highlight-box serving" filter="url(#spec-glow-volt)" />
                <path d="${M}" class="svg-highlight-box receiving" filter="url(#spec-glow-cyan)" />

                <!-- shuttle flight -->
                <path id="spectate-shuttle-path" d="M ${x},${S} Q ${L},${k} ${g},${b}" class="svg-shuttle-path" />
                <circle r="5" class="svg-shuttle" filter="url(#spec-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#spectate-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${r===m?"server":r===u?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(r)}" />
                  <text x="0" y="4" class="avatar-text">${v(r)}</text>
                  ${T(r)}
                </g>
                <text x="90" y="383" class="svg-player-name ${$(r)} font-bold">${r.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${i===m?"server":i===u?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(i)}" />
                  <text x="0" y="4" class="avatar-text">${v(i)}</text>
                  ${T(i)}
                </g>
                <text x="210" y="383" class="svg-player-name ${$(i)} font-bold">${i.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${l===m?"server":l===u?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(l)}" />
                  <text x="0" y="4" class="avatar-text">${v(l)}</text>
                  ${T(l)}
                </g>
                <text x="90" y="123" class="svg-player-name ${$(l)} font-bold">${l.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${o===m?"server":o===u?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${f(o)}" />
                  <text x="0" y="4" class="avatar-text">${v(o)}</text>
                  ${T(o)}
                </g>
                <text x="210" y="123" class="svg-player-name ${$(o)} font-bold">${o.split(" ")[0]}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("spectate-btn-close").onclick=()=>{a.classList.add("hidden"),a.innerHTML="",this.activeSpectateMatchId=null}}}window.addEventListener("DOMContentLoaded",()=>{new j});
