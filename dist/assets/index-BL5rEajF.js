(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const H=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],D=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],R=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],G={vi:{title:" GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Quy Định và Thông Tin Giải Đấu",sections:[{id:"categories",title:"I. Nội dung thi đấu",content:["• Đôi nam nữ","• Đôi nam nam","• Tổng cộng: 10 đội - 20 người chơi"]},{id:"schedule",title:"II. Thời gian & Địa điểm",content:["• Ngày thi đấu: 31 May 2026","• Địa điểm: Sân cầu lông Alpha Era"]},{id:"prizes",title:"III. Giải thưởng",content:["🏆 Giải Nhất: 2,000,000 VND + Cúp Vô Địch","🥈 Giải Nhì: 1,500,000 VND","🥉 Giải Ba: 1,000,000 VND"]},{id:"regulations",title:"IV. Thể thức thi đấu",content:["• **Vòng loại**: Thi đấu vòng tròn tính điểm (Round-Robin). Top 4 đội của mỗi hạng mục bước vào bán kết.","• **Vòng bán kết**: Đấu loại trực tiếp để chọn ra Top 2 team vào chung kết.","• **Vòng chung kết**: Đấu loại trực tiếp để chọn ra Top 1 Vô Địch Mùa Giải.","• **Điểm số ván đấu**:","  - Vòng loại: BO3 - thi đấu đến 15 điểm mỗi hiệp.","  - Bán kết & Chung kết: BO3 - thi đấu đến 21 điểm mỗi hiệp.","  - Nếu tỷ số là 20 đều (hoặc 14 đều ở 15 điểm), bên nào ghi trước 2 điểm cách biệt sẽ thắng ván đó.","  - Nếu tỷ số đạt đến 29 đều (hoặc 20 đều ở 15 điểm), bên nào ghi điểm thứ 30 (hoặc 21) trước sẽ thắng ván đó.","• **Cách tính điểm xếp hạng vòng bảng**:","  - Thắng: +1 điểm xếp hạng. Thua: +0 điểm xếp hạng.","  - Thứ tự ưu tiên khi xếp hạng: (1) Điểm số xếp hạng $\\rightarrow$ (2) Hiệu số hiệp (Set) thắng - thua $\\rightarrow$ (3) Đối đầu trực tiếp (Head-to-head) $\\rightarrow$ (4) Hiệu số tổng điểm thắng - điểm thua $\\rightarrow$ (5) Bốc thăm."]},{id:"rules",title:"V. Luật thi đấu đánh đôi",content:["• Áp dụng Luật Cầu lông Quốc tế của BWF.","• **Giao cầu & Nhận cầu**:","  - Khi điểm bên giao phát cầu là **chẵn** (0, 2, 4, 6,...), người giao cầu sẽ đứng ở ô giao cầu bên **phải** của họ và giao chéo sang ô nhận bên phải đối phương.","  - Khi điểm bên giao phát cầu là **lẻ** (1, 3, 5, 7,...), người giao cầu sẽ đứng ở ô giao cầu bên **trái** của họ và giao chéo sang ô nhận bên trái đối phương.","  - VĐV của bên nhận cầu đứng chéo đối diện với VĐV phát cầu sẽ là người nhận cầu.","  - Chỉ có người nhận cầu được quyền đánh trả cầu phát. Nếu đồng đội của họ chạm vào cầu trước, bên phát cầu được cộng 1 điểm.","• **Vị trí đứng đổi chỗ**:","  - Hai VĐV chỉ đổi chỗ bên trái-phải cho nhau khi bên họ **giao cầu và giành được điểm**.","  - Nếu bên nhận cầu giành được điểm, vị trí đứng của cả hai đội giữ nguyên và quyền giao cầu chuyển sang cho họ mà không đổi chỗ."]},{id:"intervals",title:"VI. Thời gian nghỉ & Lỗi hành vi",content:["• Khi một bên ghi được 11 điểm (hoặc 8 điểm ở hiệp 15 điểm) trước, thời gian nghỉ giữa hiệp đấu không quá 60 giây.","• Thời gian nghỉ giữa các hiệp 1, 2 và 3 không quá 2 phút.","• Trận đấu phải diễn ra liên tục. Các lỗi hành vi, câu giờ có thể bị trọng tài nhắc nhở hoặc phạt điểm."]}]},en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Alpha Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class O{constructor(){this.players=[],this.teams=[],this.matches=[],this.listeners=[],this.init()}init(){const s=localStorage.getItem("badminton_players"),e=localStorage.getItem("badminton_teams"),a=localStorage.getItem("badminton_matches");this.players=s?JSON.parse(s):[...H],this.teams=e?JSON.parse(e):[...D],this.matches=a?JSON.parse(a):[...R],this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),this.players=[...H],this.teams=[...D],this.matches=[...R],this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}addListener(s){this.listeners.push(s)}notifyListeners(){this.listeners.forEach(s=>s(this))}updateMatchScore(s,e,a,t,r){const i=this.matches.find(n=>n.id===s);return i?(i.sets=e,i.score1=a,i.score2=t,i.status=r,r==="Completed"?i.winner=a>t?i.team1:i.team2:i.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(s){const e=this.teams.filter(i=>i.category===s),a=this.matches.filter(i=>i.category===s&&i.stage==="Group Stage"),t={};e.forEach(i=>{t[i.name]={name:i.name,teamId:i.id,player1:i.player1,player2:i.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),a.forEach(i=>{if(i.status!=="Completed")return;const n=i.team1,l=i.team2;if(!t[n]||!t[l])return;t[n].played+=1,t[l].played+=1;const o=Number(i.score1)||0,d=Number(i.score2)||0;t[n].setsWon+=o,t[n].setsLost+=d,t[l].setsWon+=d,t[l].setsLost+=o,o>d?(t[n].won+=1,t[n].points+=1,t[l].lost+=1):(t[l].won+=1,t[l].points+=1,t[n].lost+=1),i.sets.forEach(p=>{const c=Number(p.t1)||0,u=Number(p.t2)||0;t[n].pointsWon+=c,t[n].pointsLost+=u,t[l].pointsWon+=u,t[l].pointsLost+=c})}),Object.values(t).forEach(i=>{i.netSets=i.setsWon-i.setsLost,i.netPoints=i.pointsWon-i.pointsLost});const r=Object.values(t);return r.sort((i,n)=>{if(n.points!==i.points)return n.points-i.points;if(n.netSets!==i.netSets)return n.netSets-i.netSets;if(r.filter(o=>o.points===i.points&&o.netSets===i.netSets).length===2){const o=a.find(d=>d.status==="Completed"&&(d.team1===i.name&&d.team2===n.name||d.team1===n.name&&d.team2===i.name));if(o){if(o.winner===i.name)return-1;if(o.winner===n.name)return 1}}return n.netPoints!==i.netPoints?n.netPoints-i.netPoints:i.name.localeCompare(n.name)}),r}isGroupStageComplete(s){const e=this.matches.filter(a=>a.category===s&&a.stage==="Group Stage");return e.length>0&&e.every(a=>a.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(e=>{const a=this.isGroupStageComplete(e),t=this.calculateStandings(e),r=a?t[0].name:`1st Place ${e==="Men's Doubles"?"MD":"XD"}`,i=a?t[1].name:`2nd Place ${e==="Men's Doubles"?"MD":"XD"}`,n=a?t[2].name:`3rd Place ${e==="Men's Doubles"?"MD":"XD"}`,l=a?t[3].name:`4th Place ${e==="Men's Doubles"?"MD":"XD"}`,o=e==="Men's Doubles"?"MD":"XD",d=`SF1-${o}`,p=`SF2-${o}`,c=`F-${o}`,u=`B-${o}`;let h=this.matches.find(x=>x.id===d),m=this.matches.find(x=>x.id===p),g=this.matches.find(x=>x.id===c),y=this.matches.find(x=>x.id===u);const $="4:30 - 5:10",S=e==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";h?(h.status!=="Completed"||h.team1&&h.team1.includes("Place")||h.team2&&h.team2.includes("Place"))&&(h.team1=r,h.team2=l):(h={id:d,category:e,stage:"Semi-finals",pitch:e==="Men's Doubles"?"Pitch 15":"Pitch 20",time:$,team1:r,team2:l,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(h)),m?(m.status!=="Completed"||m.team1&&m.team1.includes("Place")||m.team2&&m.team2.includes("Place"))&&(m.team1=i,m.team2=n):(m={id:p,category:e,stage:"Semi-finals",pitch:e==="Men's Doubles"?"Pitch 16":"Pitch 21",time:$,team1:i,team2:n,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(m));const T=h.status==="Completed"?h.winner:`Winner SF1 (${o})`,w=h.status==="Completed"?h.winner===h.team1?h.team2:h.team1:`Loser SF1 (${o})`,b=m.status==="Completed"?m.winner:`Winner SF2 (${o})`,v=m.status==="Completed"?m.winner===m.team1?m.team2:m.team1:`Loser SF2 (${o})`;y?(y.status!=="Completed"||y.team1&&y.team1.includes("Loser")||y.team2&&y.team2.includes("Loser"))&&(y.team1=w,y.team2=v):(y={id:u,category:e,stage:"Bronze Match",pitch:e==="Men's Doubles"?"Pitch 15":"Pitch 20",time:S,team1:w,team2:v,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(y)),g?(g.status!=="Completed"||g.team1&&g.team1.includes("Winner")||g.team2&&g.team2.includes("Winner"))&&(g.team1=T,g.team2=b):(g={id:c,category:e,stage:"Grand Final",pitch:e==="Men's Doubles"?"Pitch 16":"Pitch 21",time:S,team1:T,team2:b,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(g))})}}class V{constructor(s,e,a,t){if(this.state=s,this.sync=e,this.matchId=a,this.onFinish=t,this.lang="en",this.match=this.state.matches.find(i=>i.id===a),!this.match)throw new Error(`Match not found: ${a}`);const r=this.match.stage==="Group Stage";this.targetPoints=r?15:21,this.maxPoints=r?21:30,this.team1Obj=this.state.teams.find(i=>i.name===this.match.team1),this.team2Obj=this.state.teams.find(i=>i.name===this.match.team2),this.team1Players=this.team1Obj?[this.team1Obj.player1,this.team1Obj.player2]:["Team A Player 1","Team A Player 2"],this.team2Players=this.team2Obj?[this.team2Obj.player1,this.team2Obj.player2]:["Team B Player 1","Team B Player 2"],this.score1=0,this.score2=0,this.sets=[],this.match.sets&&this.match.sets.length>0&&this.match.status==="Live"&&(this.sets=[...this.match.sets],this.score1=this.match.score1||0,this.score2=this.match.score2||0),this.currentSet=this.sets.length+1,this.servingTeam="A",this.history=[],this.isCourtSwapped=!1,this.set3SwapHappened=!1,this.team1Right=this.team1Players[0],this.team1Left=this.team1Players[1],this.team2Right=this.team2Players[0],this.team2Left=this.team2Players[1],this.init()}init(){this.createOverlayContainer(),this.render(),this.sync.broadcast("LIVE_MATCH_START",{matchId:this.matchId,matchState:this.serializeState()})}createOverlayContainer(){if(document.getElementById("umpire-overlay-container"))return;const s=document.createElement("div");s.id="umpire-overlay-container",s.className="umpire-overlay-backdrop",document.body.appendChild(s)}serializeState(){return{sets:[...this.sets,{t1:this.score1,t2:this.score2}],score1:this.score1,score2:this.score2,currentSet:this.currentSet,servingTeam:this.servingTeam,isEven:(this.servingTeam==="A"?this.score1:this.score2)%2===0,serverName:this.getServerName(),partnerName:this.getServerPartnerName(),receiverName:this.getReceiverName(),receiverPartnerName:this.getReceiverPartnerName(),isCourtSwapped:this.isCourtSwapped}}broadcastUpdate(){const s=this.serializeState();s.matchId=this.matchId,this.sync.broadcast("LIVE_SCORE_UPDATE",s)}getServerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team1Right:this.team1Left:s?this.team2Right:this.team2Left}getServerPartnerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team1Left:this.team1Right:s?this.team2Left:this.team2Right}getReceiverName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team2Right:this.team2Left:s?this.team1Right:this.team1Left}getReceiverPartnerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team2Left:this.team2Right:s?this.team1Left:this.team1Right}saveToHistory(){this.history.push({score1:this.score1,score2:this.score2,sets:JSON.parse(JSON.stringify(this.sets)),currentSet:this.currentSet,servingTeam:this.servingTeam,team1Right:this.team1Right,team1Left:this.team1Left,team2Right:this.team2Right,team2Left:this.team2Left})}undo(){if(this.history.length===0)return;const s=this.history.pop();this.score1=s.score1,this.score2=s.score2,this.sets=s.sets,this.currentSet=s.currentSet,this.servingTeam=s.servingTeam,this.team1Right=s.team1Right,this.team1Left=s.team1Left,this.team2Right=s.team2Right,this.team2Left=s.team2Left,this.render(),this.broadcastUpdate()}addPoint(s){this.saveToHistory();const e=this.lang==="vi";if(s==="A"){if(this.servingTeam==="A"){const a=this.team1Right;this.team1Right=this.team1Left,this.team1Left=a}this.score1++,this.servingTeam="A"}else{if(this.servingTeam==="B"){const a=this.team2Right;this.team2Right=this.team2Left,this.team2Left=a}this.score2++,this.servingTeam="B"}if(this.currentSet===3&&!this.set3SwapHappened){const a=this.targetPoints===15?8:11;(this.score1===a||this.score2===a)&&(this.set3SwapHappened=!0,this.showSwapNotice(e?`⚡ Điểm số đạt mốc ${a}! Cả hai đội đổi bên sân.`:`⚡ Score reached ${a}! Both teams must swap sides.`),this.isCourtSwapped=!this.isCourtSwapped)}this.checkSetWinner(),this.render(),this.triggerServeAnimation(),this.broadcastUpdate()}triggerServeAnimation(){const s=document.querySelector(".umpire-court-svg .svg-shuttle");s&&(s.setAttribute("dur","0.7s"),s.innerHTML=`
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `)}checkSetWinner(){const s=this.score1,e=this.score2,a=Math.max(s,e),t=Math.min(s,e),r=a-t;let i=!1;if(a>=this.targetPoints&&(r>=2||a===this.maxPoints)&&(i=!0),i){this.currentSet-1,this.sets.push({t1:s,t2:e});let n=0,l=0;if(this.sets.forEach(o=>{o.t1>o.t2?n++:l++}),n===2||l===2)this.submitMatch(n,l);else{const o=s>e?this.match.team1:this.match.team2;this.showSwapNotice(this.lang==="vi"?`Set ${this.currentSet} kết thúc! Đội ${o} thắng set này. Chuẩn bị sang Set ${this.currentSet+1}. Cả hai đội đổi bên sân.`:`Set ${this.currentSet} completed! ${o} won this set. Prepare for Set ${this.currentSet+1}. Both teams must swap sides.`),this.score1=0,this.score2=0,this.currentSet++,this.servingTeam=s>e?"A":"B",this.isCourtSwapped=!this.isCourtSwapped}}}submitMatch(s,e){const a=s>e?this.match.team1:this.match.team2;this.state.updateMatchScore(this.matchId,this.sets,s,e,"Completed"),this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1),this.showMatchEndNotice(a)}close(){this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1);const s=document.getElementById("umpire-overlay-container");s&&(s.classList.add("hidden"),s.innerHTML=""),this.onFinish&&this.onFinish(),window.BadmintonAppInstance&&window.BadmintonAppInstance.switchTab("dashboard")}showSwapNotice(s){const e=this.lang==="vi",a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in">
        <div class="swap-icon-container mb-4 text-glow-volt animate-bounce" style="font-size: 3rem; filter: drop-shadow(0 0 12px rgba(132, 204, 22, 0.45));">
          🏸
        </div>
        <h3 class="text-sm font-black text-glow-volt mb-2" style="font-size: 1.2rem; letter-spacing: 0.05em;">${e?"ĐỔI BÊN SÂN!":"SWAP COURTS!"}</h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold" style="line-height: 1.5;">${s}</p>
        <button class="btn btn-sm btn-volt w-full py-2.5 font-bold uppercase tracking-wider" id="swap-notice-btn-ok">
          ${e?"Đã hiểu & Tiếp tục":"Got It & Continue"}
        </button>
      </div>
    `,document.body.appendChild(a),document.getElementById("swap-notice-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)},setTimeout(()=>{document.body.contains(a)&&(a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300))},5e3)}showMatchEndNotice(s){const e=this.lang==="vi",a=this.match.stage||"Group Stage";let t=e?"CHIẾN THẮNG TRẬN ĐẤU!":"WIN THE MATCH!",r=e?"TRẬN ĐẤU ĐÃ KẾT THÚC":"MATCH COMPLETED",i=e?`🎉 Chúc mừng đội **${s}** đã xuất sắc giành chiến thắng trong trận đấu này! 🎉`:`🎉 Congratulations to **${s}** on winning this match! 🎉`,n="🏸",l=e?"ĐỘI GIÀNH CHIẾN THẮNG":"MATCH WINNER",o="#84cc16",d="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(t=e?"CHÚC MỪNG CHIẾN THẮNG BÁN KẾT!":"CONGRATULATIONS ON WINNING!",r=e?"GIÀNH VÉ VÀO CHUNG KẾT":"QUALIFIED FOR THE FINALS",i=e?`⚡ Tuyệt vời! Đội **${s}** đã giành chiến thắng trận đấu Bán Kết và chính thức giành quyền bước vào trận Chung Kết tranh chức vô địch (Grand Final)! 🏆`:`⚡ Spectacular! **${s}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,n="🏅",l=e?"ĐỘI CHIẾN THẮNG BÁN KẾT":"SEMI-FINALS WINNER",o="#06b6d4",d="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(t=e?"NHÀ VÔ ĐỊCH GIẢI ĐẤU!":"TOURNAMENT CHAMPIONS!",r=e?"CÚP VÔ ĐỊCH GEAR GAMES 2026":"GEAR GAMES BADMINTON 2026 CUP",i=e?`👑 TÂN VƯƠNG GIẢI ĐẤU! Xin được nhiệt liệt vinh danh nhà vô địch Gear Games Badminton 2026: **${s}**! Chiến thắng lịch sử vô cùng xứng đáng! 🏆🥇`:`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${s}**! A historic and well-deserved victory! 🏆🥇`,n="🏆",l=e?"QUÁN QUÂN GIẢI ĐẤU":"TOURNAMENT CHAMPIONS",o="#fbbf24",d="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(t=e?"ĐOẠT HẠNG BA CHUNG CUỘC!":"BRONZE MEDALISTS!",r=e?"HUY CHƯƠNG ĐỒNG THUỘC VỀ":"BRONZE MEDAL SECURED",i=e?`🥉 Tuyệt vời! Đội **${s}** đã giành chiến thắng trận tranh Hạng Ba và xuất sắc mang về tấm **Huy Chương Đồng** danh giá! 🥉`:`🥉 Superb! **${s}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,n="🥉",l=e?"HẠNG BA CHUNG CUỘC":"BRONZE WINNER",o="#ea580c",d="rgba(234, 88, 12, 0.45)");const p=document.createElement("div");p.className="match-end-modal-backdrop relative",p.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${d}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${d}); line-height: 1;">
            ${n}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${o}; filter: drop-shadow(0 0 8px ${d});">${t}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${r}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${l}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${s}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${this.sets.map((c,u)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${u+1}: <span class="text-volt">${c.t1}</span>-<span class="text-cyan">${c.t2}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${i}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="match-end-btn-home" style="font-size: 0.85rem; background-color: ${o}; color: #000; box-shadow: 0 4px 14px ${d}; border: none;">
            🏠 ${e?"Quay về trang chủ":"Back to Homepage"}
          </button>
        </div>
      </div>
    `,document.body.appendChild(p),document.getElementById("match-end-btn-home").onclick=()=>{p.classList.add("animate-fade-out"),setTimeout(()=>{p.remove(),this.close()},300)}}toggleServe(){this.saveToHistory(),this.servingTeam=this.servingTeam==="B"?"A":"B",this.render(),this.broadcastUpdate()}swapPlayers(s){if(this.saveToHistory(),s==="1"){const e=this.team1Right;this.team1Right=this.team1Left,this.team1Left=e}else{const e=this.team2Right;this.team2Right=this.team2Left,this.team2Left=e}this.render(),this.broadcastUpdate()}render(){const s=document.getElementById("umpire-overlay-container");if(!s)return;s.classList.remove("hidden");const e=this.lang==="vi";(this.servingTeam==="A"?this.score1:this.score2)%2;let a,t,r,i;this.isCourtSwapped?(a=this.team2Right,t=this.team2Left,r=this.team1Right,i=this.team1Left):(a=this.team1Right,t=this.team1Left,r=this.team2Right,i=this.team2Left);const n=this.getServerName(),l=this.getReceiverName(),o=v=>v===n?"S":v===l?"R":"P",d=v=>v===n?"volt":v===l?"cyan":"neutral",p=v=>v===n?"text-volt":v===l?"text-cyan":"text-slate-200",c=v=>v!==n?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let u,h,m,g;n===a?(u=210,h=355):n===t?(u=90,h=355):n===r?(u=90,h=145):(u=210,h=145),l===a?(m=210,g=355):l===t?(m=90,g=355):l===r?(m=90,g=145):(m=210,g=145);const y=(v,x)=>x===355?v===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":v===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",$=y(u,h),S=y(m,g),T=(u+m)/2+30,w=(h+g)/2-40,b=this.sets.map((v,x)=>`
      <div class="umpire-set-badge">
        <span>Set ${x+1}:</span>
        <strong>${v.t1} - ${v.t2}</strong>
      </div>
    `).join("");s.innerHTML=`
      <div class="umpire-card glass-card">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE
            </span>
            <span class="text-xs font-bold text-slate-300">${this.match.pitch} | ${this.match.stage}</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">${e?"BÀN TRỌNG TÀI ĐIỀU PHỐI":"UMPIRE CONTROL PANEL"}</h2>
          <button class="btn btn-xs btn-neutral" id="umpire-btn-close">✕ ${e?"Thoát Sân":"Exit"}</button>
        </div>

        <!-- Scores and Set layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <!-- Umpire Controls Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets review -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${b}
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
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">${e?"CỘNG ĐIỂM ❶":"ADD POINT ❶"}</span>
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
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">${e?"CỘNG ĐIỂM ❷":"ADD POINT ❷"}</span>
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
                  ↩ ${e?"Hoàn Tác (Undo)":"Undo Action"}
                </button>
              </div>
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold flex items-center justify-center gap-1.5" id="umpire-btn-serve">
                  🏸 ${e?"Đổi Lượt Giao":"Toggle Serve"}
                </button>
              </div>
              <div class="text-center text-4xs text-slate-400 font-semibold flex flex-col items-center justify-center border-l border-slate-800">
                <div>${e?"Giao cầu thuộc về:":"Current Serve:"}</div>
                <div class="font-extrabold text-volt mt-1 text-2xs uppercase">${this.servingTeam==="A"?"Team 1":"Team 2"}</div>
              </div>
            </div>
          </div>

          <!-- Umpire Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">${e?"VỊ TRÍ ĐỨNG SÂN THỰC TẾ (BWF)":"ACTUAL PLAYER POSITIONS ON COURT"}</h4>
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
                <path d="${$}" class="svg-highlight-box serving" filter="url(#ump-glow-volt)" />
                <path d="${S}" class="svg-highlight-box receiving" filter="url(#ump-glow-cyan)" />

                <!-- Flight Arrow path -->
                <path id="umpire-shuttle-path" d="M ${u},${h} Q ${T},${w} ${m},${g}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${t===n?"server":t===l?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${d(t)}" />
                  <text x="0" y="4" class="avatar-text">${o(t)}</text>
                  ${c(t)}
                </g>
                <text x="90" y="383" class="svg-player-name ${p(t)} font-bold">${t.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${a===n?"server":a===l?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${d(a)}" />
                  <text x="0" y="4" class="avatar-text">${o(a)}</text>
                  ${c(a)}
                </g>
                <text x="210" y="383" class="svg-player-name ${p(a)} font-bold">${a.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${r===n?"server":r===l?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${d(r)}" />
                  <text x="0" y="4" class="avatar-text">${o(r)}</text>
                  ${c(r)}
                </g>
                <text x="90" y="123" class="svg-player-name ${p(r)} font-bold">${r.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${i===n?"server":i===l?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${d(i)}" />
                  <text x="0" y="4" class="avatar-text">${o(i)}</text>
                  ${c(i)}
                </g>
                <text x="210" y="123" class="svg-player-name ${p(i)} font-bold">${i.split(" ")[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (0,2,4) and **Left** on Odd (1,3,5). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("umpire-btn-close").onclick=()=>{confirm(e?"Bạn có muốn dừng điều phối trận này không? Trạng thái Live sẽ bị hủy.":"Do you want to exit the scoring room? The live status will be suspended.")&&this.close()},document.getElementById("umpire-add-a").onclick=()=>this.addPoint("A"),document.getElementById("umpire-add-b").onclick=()=>this.addPoint("B"),document.getElementById("umpire-btn-serve").onclick=()=>this.toggleServe(),document.getElementById("umpire-btn-undo").onclick=()=>this.undo(),document.getElementById("umpire-swap-players-1").onclick=()=>this.swapPlayers("1"),document.getElementById("umpire-swap-players-2").onclick=()=>this.swapPlayers("2")}}class F{constructor(s,e,a){this.state=s,this.onUpdate=e,this.sync=a,this.isAdmin=!1,this.isRef=!1,this.refPitch="",this.activeMatchId=null,this.lang="vi",this.passkeys={admin2026:{role:"admin",label:"Super Admin"},ref15:{role:"ref",pitch:"Pitch 15",label:"Pitch 15 Umpire"},ref16:{role:"ref",pitch:"Pitch 16",label:"Pitch 16 Umpire"},ref20:{role:"ref",pitch:"Pitch 20",label:"Pitch 20 Umpire"},ref21:{role:"ref",pitch:"Pitch 21",label:"Pitch 21 Umpire"}},this.init()}setLanguage(s){this.lang=s}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.isRef=sessionStorage.getItem("badminton_isRef")==="true",this.refPitch=sessionStorage.getItem("badminton_refPitch")||"",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const s=document.createElement("div");if(s.id="score-modal-container",s.className="modal-backdrop hidden",document.body.appendChild(s),document.getElementById("admin-modal-container"))return;const e=document.createElement("div");e.id="admin-modal-container",e.className="modal-backdrop hidden",document.body.appendChild(e)}setupAdminToggleListener(){document.body.addEventListener("click",s=>{s.target.closest("#btn-toggle-admin")&&(this.isAdmin||this.isRef?this.logout():this.showAdminLogin());const a=s.target.closest(".btn-edit-match");if(a){const r=a.getAttribute("data-match-id"),i=this.state.matches.find(l=>l.id===r);if(!i)return;const n=this.checkMatchReadyState(i);if(!n.ready){this.showUnreadyAlert(n.reason);return}this.isAdmin||this.isRef&&i.pitch===this.refPitch?this.openScoreModal(r):this.showToast(this.lang==="vi"?"Bạn không có quyền chỉnh sửa trận đấu ở sân này!":"You are not authorized to edit matches on this pitch!","info")}const t=s.target.closest(".btn-join-match");if(t){const r=t.getAttribute("data-match-id"),i=this.state.matches.find(l=>l.id===r);if(!i)return;const n=this.checkMatchReadyState(i);if(!n.ready){this.showUnreadyAlert(n.reason);return}this.isAdmin||this.isRef&&i.pitch===this.refPitch?this.openUmpireConsole(r):this.showToast(this.lang==="vi"?"Bạn không có quyền trọng tài ở sân này!":"You are not authorized to umpire on this pitch!","info")}})}checkMatchReadyState(s){const e=this.lang==="vi";if(s.team1&&s.team1.includes("Place")||s.team2&&s.team2.includes("Place"))return{ready:!1,reason:e?"Chưa thể tiến hành trận đấu này! Vui lòng đợi Vòng Bảng kết thúc để xác định các đội dẫn đầu tham gia thi đấu.":"This match cannot be played yet! Please wait for the Group Stage to complete to decide the playing teams."};const a=s.category==="Men's Doubles"?"MD":"XD",t=s.team1&&(s.team1.includes("SF1")||s.team1.includes("Winner SF1")||s.team1.includes("Loser SF1"))||s.team2&&(s.team2.includes("SF1")||s.team2.includes("Winner SF1")||s.team2.includes("Loser SF1")),r=s.team1&&(s.team1.includes("SF2")||s.team1.includes("Winner SF2")||s.team1.includes("Loser SF2"))||s.team2&&(s.team2.includes("SF2")||s.team2.includes("Winner SF2")||s.team2.includes("Loser SF2"));if(t){const i=`SF1-${a}`,n=this.state.matches.find(l=>l.id===i);if(n&&n.status!=="Completed"){const l=e?`Bán Kết 1 (${s.category})`:`Semi-final 1 (${s.category})`;return{ready:!1,reason:e?`Trận đấu này đang chờ kết quả của trận bán kết **${l}** hoàn thành để xác định cặp đấu.`:`This match is waiting for the result of semi-final match **${l}** to complete.`}}}if(r){const i=`SF2-${a}`,n=this.state.matches.find(l=>l.id===i);if(n&&n.status!=="Completed"){const l=e?`Bán Kết 2 (${s.category})`:`Semi-final 2 (${s.category})`;return{ready:!1,reason:e?`Trận đấu này đang chờ kết quả của trận bán kết **${l}** hoàn thành để xác định cặp đấu.`:`This match is waiting for the result of semi-final match **${l}** to complete.`}}}return{ready:!0}}showUnreadyAlert(s){const e=this.lang==="vi",a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in" style="max-width: 400px; width: 90%; border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25);">
        <div class="mb-4 text-danger animate-pulse" style="font-size: 3rem;">
          ⚠️
        </div>
        <h3 class="text-sm font-black text-danger mb-2" style="font-size: 1.15rem; letter-spacing: 0.05em;">
          ${e?"TRẬN ĐẤU CHƯA SẴN SÀNG!":"MATCH NOT READY!"}
        </h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">
          ${s}
        </p>
        <button class="btn btn-sm btn-danger w-full py-2.5 font-bold uppercase tracking-wider" id="unready-alert-btn-ok">
          ${e?"Đã hiểu":"Got It"}
        </button>
      </div>
    `,document.body.appendChild(a),document.getElementById("unready-alert-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)}}openUmpireConsole(s){this.sync&&new V(this.state,this.sync,s,()=>{this.onUpdate()})}logout(){this.isAdmin=!1,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.removeItem("badminton_authLabel"),this.onUpdate();const s=this.lang==="vi"?"Đã đăng xuất tài khoản!":"Logged out successfully!";this.showToast(s,"info")}showAdminLogin(){const s=document.getElementById("admin-modal-container");if(!s)return;const e=this.lang==="vi"?"Đăng Nhập Cổng Điều Hợp":"Portal Login",a=this.lang==="vi"?"Nhập mã truy cập Admin hoặc mã Trọng tài (e.g. ref15, ref16...):":"Enter Admin or Umpire passkey (e.g., ref15, ref16, admin2026):",t=this.lang==="vi"?"Mã bảo mật":"Passkey",r=this.lang==="vi"?"Đăng Nhập":"Login",i=this.lang==="vi"?"Hủy":"Cancel";s.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${e}</h3>
        <p class="modal-desc">${a}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${t}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${i}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${r}</button>
        </div>
      </div>
    `,s.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>s.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=n=>{n.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const s=document.getElementById("admin-passkey-input"),e=document.getElementById("admin-login-error");if(!s||!e)return;const a=s.value,t=this.passkeys[a];if(t){t.role==="admin"?(this.isAdmin=!0,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","true"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.setItem("badminton_authLabel",t.label)):(this.isRef=!0,this.isAdmin=!1,this.refPitch=t.pitch,sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","true"),sessionStorage.setItem("badminton_refPitch",t.pitch),sessionStorage.setItem("badminton_authLabel",t.label)),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const r=this.lang==="vi"?`Đăng nhập thành công! Quyền: ${t.label}.`:`Login success! Role: ${t.label}.`;this.showToast(r,"success")}else e.textContent=this.lang==="vi"?"Mã bảo mật không đúng. Hãy thử lại.":"Incorrect passkey. Please try again.",e.classList.remove("hidden"),s.classList.add("input-error"),s.focus()}openScoreModal(s){this.activeMatchId=s;const e=this.state.matches.find(M=>M.id===s);if(!e)return;const a=document.getElementById("score-modal-container");if(!a)return;const t=e.stage==="Group Stage",r=t?15:21,i=t?21:30,n=this.lang==="vi"?"Nhập Điểm Trận Đấu":"Match Score Editor",l=(this.lang==="vi","Set"),o=e.team1,d=e.team2,p=this.lang==="vi"?"Lưu Kết Quả":"Save Score",c=this.lang==="vi"?"Hủy":"Cancel",u=this.lang==="vi"?"Xóa Điểm":"Clear Score",h=e.sets[0]?e.sets[0].t1:"",m=e.sets[0]?e.sets[0].t2:"",g=e.sets[1]?e.sets[1].t1:"",y=e.sets[1]?e.sets[1].t2:"",$=e.sets[2]?e.sets[2].t1:"",S=e.sets[2]?e.sets[2].t2:"";a.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${n}</h3>
          <span class="badge ${t?"bg-indigo":"bg-purple"}">${e.stage} (${r} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">${this.lang==="vi"?"Đội 1":"Team 1"}</div>
          <div>VS</div>
          <div class="col-span-2 text-right">${this.lang==="vi"?"Đội 2":"Team 2"}</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${o}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${d}</div>
        </div>

        <form id="score-form" class="space-y-4">
          <!-- Set 1 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${h}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${m}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${g}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${y}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${$}" />
            </div>
            <div class="text-center font-bold text-muted">${l} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${S}" />
            </div>
          </div>

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${u}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${c}</button>
              <button type="submit" class="btn btn-primary">${p}</button>
            </div>
          </div>
        </form>
      </div>
    `,a.classList.remove("hidden");const T=document.getElementById("s1-t1"),w=document.getElementById("s1-t2"),b=document.getElementById("s2-t1"),v=document.getElementById("s2-t2"),x=document.getElementById("s3-t1"),f=document.getElementById("s3-t2"),N=document.getElementById("s3-row"),L=()=>{const M=this.validateSetScore(Number(T.value),Number(w.value),r),E=this.validateSetScore(Number(b.value),Number(v.value),r);M.valid&&E.valid?M.winner===E.winner?(N.classList.add("opacity-40"),x.disabled=!0,f.disabled=!0,x.value="",f.value="",x.removeAttribute("required"),f.removeAttribute("required")):(N.classList.remove("opacity-40"),x.disabled=!1,f.disabled=!1,x.setAttribute("required","required"),f.setAttribute("required","required")):(N.classList.add("opacity-40"),x.disabled=!0,f.disabled=!0,x.value="",f.value="",x.removeAttribute("required"),f.removeAttribute("required"))};[T,w,b,v].forEach(M=>{M.addEventListener("input",L)}),L(),document.getElementById("btn-cancel-score").onclick=()=>a.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(s),document.getElementById("score-form").onsubmit=M=>{M.preventDefault(),this.handleSaveScore(e,r)}}validateSetScore(s,e,a){if(isNaN(s)||isNaN(e))return{valid:!1};if(s<0||e<0)return{valid:!1};const t=Math.max(s,e),r=Math.min(s,e),i=t-r,n=s>e?1:2;if(t<a)return{valid:!1};if(t===a&&i>=2)return{valid:!0,winner:n};const l=a===15?21:30;if(t>a){if(i===2&&t<l)return{valid:!0,winner:n};if(t===l&&i===1)return{valid:!0,winner:n}}return{valid:!1}}handleClearScore(s){confirm(this.lang==="vi"?"Bạn có chắc chắn muốn xóa điểm trận này không?":"Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(s,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã xóa điểm trận đấu.":"Match score cleared.","info"))}handleSaveScore(s,e){const a=Number(document.getElementById("s1-t1").value),t=Number(document.getElementById("s1-t2").value),r=Number(document.getElementById("s2-t1").value),i=Number(document.getElementById("s2-t2").value),n=document.getElementById("s3-t1"),l=document.getElementById("s3-t2"),o=document.getElementById("score-error-msg"),d=this.validateSetScore(a,t,e);if(!d.valid){this.showInputError(o,this.lang==="vi"?`Set 1 chưa hợp lệ. Đội thắng phải đạt ít nhất ${e} điểm và hơn đối thủ 2 điểm (hoặc chạm mốc giới hạn ${e===15?21:30} điểm).`:`Set 1 is invalid. Winner must reach ${e} and lead by 2, or reach cap limit of ${e===15?21:30} points.`);return}const p=this.validateSetScore(r,i,e);if(!p.valid){this.showInputError(o,this.lang==="vi"?`Set 2 chưa hợp lệ. Đội thắng phải đạt ít nhất ${e} điểm và hơn đối thủ 2 điểm.`:`Set 2 is invalid. Winner must reach at least ${e} and lead by 2.`);return}const c=[{t1:a,t2:t},{t1:r,t2:i}];let u=(d.winner===1?1:0)+(p.winner===1?1:0),h=(d.winner===2?1:0)+(p.winner===2?1:0);if(u===1&&h===1){const m=Number(n.value),g=Number(l.value),y=this.validateSetScore(m,g,e);if(!y.valid){this.showInputError(o,this.lang==="vi"?"Tỉ số Set 1 & 2 là hòa 1-1. Bạn phải nhập thông tin Set 3 hợp lệ.":"Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.");return}c.push({t1:m,t2:g}),y.winner===1?u++:h++}u>h?s.team1:s.team2,this.state.updateMatchScore(s.id,c,u,h,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã cập nhật kết quả thành công!":"Score updated successfully!","success")}showInputError(s,e){s.textContent=e,s.classList.remove("hidden")}showToast(s,e="success"){const a=document.createElement("div");a.className=`toast-alert toast-${e}`,a.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${e==="success"?"✓":e==="info"?"ℹ":"⚠"}</span>
        <span>${s}</span>
      </div>
    `,document.body.appendChild(a),setTimeout(()=>a.classList.add("show"),10),setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>a.remove(),300)},3e3)}}class j{constructor(s){this.container=document.getElementById(s),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="vi",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(s){this.lang=s,this.render()}setScoreParity(s){this.isEven=s,this.render()}setTeams(s,e){this.teamAPlayers=s,this.teamBPlayers=e,this.render()}init(){this.container&&this.render()}render(){var N,L,M,E;if(!this.container)return;const s=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],e=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],a=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],t=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],r=this.lang==="vi"?"Điểm Chẵn (0, 2, 4...)":"Even Score (0, 2, 4...)",i=this.lang==="vi"?"Điểm Lẻ (1, 3, 5...)":"Odd Score (1, 3, 5...)",n=this.lang==="vi"?"Mô Phỏng Luật Giao Cầu Đôi":"Doubles Service Simulator",l=this.lang==="vi"?`Đội giao cầu (Phía dưới) có điểm số **${this.isEven?"CHẴN":"LẺ"}**:`:`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,o=this.lang==="vi"?`<ul>
          <li><strong>Người giao cầu:</strong> <span class="highlight-volt">${s}</span> giao cầu từ ô bên <strong>${this.isEven?"PHẢI":"TRÁI"}</strong>.</li>
          <li><strong>Người nhận cầu:</strong> <span class="highlight-cyan">${a}</span> đứng ô đối diện nhận cầu.</li>
          <li><strong>Vùng cầu hợp lệ:</strong> Ô giao cầu đôi (rộng hơn nhưng ngắn hơn vùng giao đơn) được tô viền sáng.</li>
         </ul>`:`<ul>
          <li><strong>Server:</strong> <span class="highlight-volt">${s}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
          <li><strong>Receiver:</strong> <span class="highlight-cyan">${a}</span> stands in the diagonal court to receive.</li>
          <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
         </ul>`,d=this.isEven?210:90,p=400,c=this.isEven?90:210,u=400,h=this.isEven?90:210,m=100,g=this.isEven?210:90,y=100,$=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",S=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",T=d,w=p-10,b=h,v=m+10,x=(T+b)/2+30,f=(w+v)/2-40;this.container.innerHTML=`
      <div class="court-sim-card glass-card">
        <h3 class="court-title flex items-center justify-between">
          <span>${n}</span>
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
              <path d="${S}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${T},${w} Q ${x},${f} ${b},${v}" class="svg-shuttle-path" />
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
                <circle cx="${d}" cy="${p}" r="14" class="avatar-bg volt" />
                <text x="${d}" y="${p+4}" class="avatar-text">S</text>
              </g>
              <text x="${d}" y="${p+28}" class="svg-player-name text-volt">${s.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${c}" cy="${u}" r="12" class="avatar-bg neutral" />
                <text x="${c}" y="${u+4}" class="avatar-text">P</text>
              </g>
              <text x="${c}" y="${u+28}" class="svg-player-name text-muted">${e.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${h}" cy="${m}" r="14" class="avatar-bg cyan" />
                <text x="${h}" y="${m+4}" class="avatar-text">R</text>
              </g>
              <text x="${h}" y="${m-22}" class="svg-player-name text-cyan">${a.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${g}" cy="${y}" r="12" class="avatar-bg neutral" />
                <text x="${g}" y="${y+4}" class="avatar-text">P</text>
              </g>
              <text x="${g}" y="${y-22}" class="svg-player-name text-muted">${t.split(" ")[0]}</text>
            </svg>
          </div>
          
          <div class="court-controls-wrapper flex flex-col justify-between">
            <div>
              <div class="selector-title">${this.lang==="vi"?"Trạng Thái Điểm Số":"Score Status"}</div>
              <div class="sim-toggle-buttons grid grid-cols-2 gap-2 mb-4">
                <button class="btn-toggle-sim ${this.isEven?"active glow-volt":""}" id="sim-btn-even">
                  ${r}
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
              ${this.lang==="vi"?"💡 <strong>Gợi ý:</strong> Click trực tiếp vào ô sân dưới để giao chẵn/lẻ. Vị trí giao cầu đổi bên khi và chỉ khi đội giao cầu thắng pha cầu đó và ghi điểm chẵn/lẻ.":"💡 <strong>Tip:</strong> Click directly on the bottom court boxes to toggle even/odd service. Players only swap courts when their team wins a point on their own serve."}
            </div>
          </div>
        </div>
      </div>
    `,(N=document.getElementById("sim-btn-even"))==null||N.addEventListener("click",()=>this.setScoreParity(!0)),(L=document.getElementById("sim-btn-odd"))==null||L.addEventListener("click",()=>this.setScoreParity(!1)),(M=document.getElementById("svg-click-right"))==null||M.addEventListener("click",()=>this.setScoreParity(!0)),(E=document.getElementById("svg-click-left"))==null||E.addEventListener("click",()=>this.setScoreParity(!1))}}class U{constructor(s,e){this.state=s,this.onRemoteUpdate=e,this.channelName="badminton_live_sync",this.channel=null,this.init()}init(){try{this.channel=new BroadcastChannel(this.channelName),this.channel.onmessage=s=>this.handleMessage(s.data)}catch(s){console.warn("BroadcastChannel not supported in this browser. Falling back to storage event listeners.",s),window.addEventListener("storage",e=>{if(e.key==="badminton_live_sync_fallback")try{const a=JSON.parse(e.newValue);this.handleMessage(a)}catch(a){console.error("Failed to parse fallback storage sync message",a)}})}}getLiveMatches(){const s=localStorage.getItem("badminton_live_matches");return s?JSON.parse(s):{}}saveLiveMatches(s){localStorage.setItem("badminton_live_matches",JSON.stringify(s))}broadcast(s,e){const a={type:s,payload:e,timestamp:Date.now()};this.channel&&this.channel.postMessage(a),localStorage.setItem("badminton_live_sync_fallback",JSON.stringify(a))}handleMessage(s){if(!s||!s.type||!s.payload)return;const{type:e,payload:a}=s;switch(e){case"LIVE_SCORE_UPDATE":this.applyLiveUpdate(a);break;case"LIVE_MATCH_START":this.setMatchLiveStatus(a.matchId,!0,a.matchState);break;case"LIVE_MATCH_END":this.setMatchLiveStatus(a.matchId,!1);break;case"LIVE_MOCK_TOGGLE":a.enabled?localStorage.setItem("badminton_demo_mock_active","true"):localStorage.removeItem("badminton_demo_mock_active"),this.onRemoteUpdate&&this.onRemoteUpdate("MOCK_TOGGLE",a);break}}setMatchLiveStatus(s,e,a=null){const t=this.getLiveMatches();e?t[s]={matchId:s,isLive:!0,updatedAt:Date.now(),...a||{}}:delete t[s],this.saveLiveMatches(t),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:s,isLive:e})}applyLiveUpdate(s){const{matchId:e,sets:a,score1:t,score2:r,currentSet:i,servingTeam:n,isEven:l,serverName:o,partnerName:d,receiverName:p,receiverPartnerName:c,isCourtSwapped:u,team1Right:h,team1Left:m,team2Right:g,team2Left:y}=s,$=this.getLiveMatches();$[e]={matchId:e,isLive:!0,updatedAt:Date.now(),sets:a,score1:t,score2:r,currentSet:i,servingTeam:n,isEven:l,serverName:o,partnerName:d,receiverName:p,receiverPartnerName:c,isCourtSwapped:u,team1Right:h,team1Left:m,team2Right:g,team2Left:y},this.saveLiveMatches($);const S=this.state.matches.find(T=>T.id===e);S&&(S.sets=a,S.score1=t,S.score2=r,S.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",s)}}class _{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const s=()=>this.resize();window.addEventListener("resize",s),this.resizeHandler=s;for(let a=0;a<120;a++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const e=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let a=0;this.particles.forEach(t=>{t.tiltAngle+=t.tiltAngleIncremental,t.y+=t.speed,t.x+=Math.sin(t.tiltAngle)*.5,t.tilt=Math.sin(t.tiltAngle-t.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=t.r,this.ctx.strokeStyle=t.color,this.ctx.moveTo(t.x+t.tilt+t.r/2,t.y),this.ctx.lineTo(t.x+t.tilt,t.y+t.tilt+t.r/2),this.ctx.stroke(),t.y<=this.canvas.height&&a++}),a>0?this.animationFrame=requestAnimationFrame(e):this.stop()};e()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class z{constructor(){window.BadmintonAppInstance=this,this.state=new O,this.lang="en",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new _,this.countdownTimer=null,this.activeSpectateMatchId=null,this.demoInterval=null,this.sync=new U(this.state,(s,e)=>this.handleSyncUpdate(s,e)),this.admin=new F(this.state,()=>this.handleStateChange(),this.sync),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),localStorage.getItem("badminton_demo_mock_active")==="true"&&this.startDemoSimulation(),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(t=>{t.addEventListener("click",r=>{const i=r.currentTarget.getAttribute("data-tab");i&&this.switchTab(i)})}),window.addEventListener("resize",()=>this.updateActivePill());const e=document.getElementById("btn-lang-toggle");e&&e.addEventListener("click",()=>{this.lang=this.lang==="vi"?"en":"vi",localStorage.setItem("badminton_lang",this.lang),this.admin.setLanguage(this.lang),this.courtSimulator&&this.courtSimulator.setLanguage(this.lang),this.translateStaticElements(),this.renderActiveView(),this.updateNavbar()});const a=document.getElementById("btn-reset-db");a&&a.addEventListener("click",()=>{this.admin.isAdmin&&confirm(this.lang==="vi"?"CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ dữ liệu giải đấu về trạng thái ban đầu. Bạn có muốn tiếp tục?":"WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast(this.lang==="vi"?"Đã thiết lập lại dữ liệu!":"Database reset to default!","success"))}),document.body.addEventListener("change",t=>{const r=t.target.closest("#demo-mock-switch");r&&this.toggleDemoSimulation(r.checked)}),document.body.addEventListener("click",t=>{const r=t.target.closest(".btn-spectate-match");if(r){const i=r.getAttribute("data-match-id");this.openSpectateOverlay(i)}})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(s){this.activeTab=s,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(a=>{a.getAttribute("data-tab")===s?a.classList.add("active"):a.classList.remove("active")}),this.renderActiveView(),s==="rules"&&setTimeout(()=>{this.courtSimulator=new j("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const a=this.state.teams.filter(r=>r.category==="Men's Doubles")[0],t=this.state.teams.filter(r=>r.category==="Mixed's Doubles")[0];a&&t&&this.courtSimulator.setTeams([a.player1,a.player2],[t.player1,t.player2])},50),this.updateActivePill()}updateActivePill(){const s=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),e=document.querySelector(".nav-tabs-wrapper");if(!e)return;let a=document.querySelector(".nav-active-pill");a||(a=document.createElement("div"),a.className="nav-active-pill",e.appendChild(a)),s&&(a.style.width=`${s.offsetWidth}px`,a.style.transform=`translateX(${s.offsetLeft}px)`)}translateStaticElements(){const s=this.lang==="vi",e={dashboard:s?"🏠 Bảng Tin":"🏠 Dashboard",standings:s?"📊 Xếp Hạng":"📊 Standings",fixtures:s?"📅 Lịch Thi Đấu":"📅 Fixtures",bracket:s?"🌳 Sơ Đồ Cây":"🌳 Bracket",results:s?"🏆 Bảng Vàng":"🏆 Final Results",rules:s?"📘 Luật Đánh Đôi":"📘 Doubles Rules",teams:s?"👥 Đội Chơi":"👥 Teams"};Object.keys(e).forEach(t=>{const r=document.querySelector(`.nav-tab[data-tab="${t}"] span`);r&&(r.textContent=e[t])});const a=document.querySelector("#btn-lang-toggle span");a&&(a.textContent=s?"ENGLISH":"TIẾNG VIỆT")}updateNavbar(){const s=this.lang==="vi",e=document.getElementById("btn-toggle-admin"),a=document.getElementById("btn-reset-db");if(e){let t=document.getElementById("navbar-welcome-user");if(this.admin.isAdmin||this.admin.isRef){const i=sessionStorage.getItem("badminton_authLabel")||(this.admin.isAdmin?"Super Admin":this.admin.refPitch+" Referee");t||(t=document.createElement("span"),t.id="navbar-welcome-user",t.className="text-5xs text-slate-300 font-extrabold tracking-wide uppercase mr-1 flex items-center gap-1.5",e.parentNode.insertBefore(t,e)),t.innerHTML=`<span class="w-1.5 h-1.5 rounded-full bg-volt pulse-dot"></span> ${s?"Xin chào,":"Welcome,"} <span class="text-volt font-black">${i}</span>`,t.classList.remove("hidden"),e.innerHTML=`✕ <span>${s?"Đăng Xuất":"Logout"}</span>`,e.className="btn btn-xs btn-danger font-bold flex items-center gap-1",a&&this.admin.isAdmin&&a.classList.remove("hidden")}else t&&(t.classList.add("hidden"),t.innerHTML=""),e.innerHTML=`🔐 <span>${s?"Đăng Nhập Admin":"Admin Login"}</span>`,e.className="btn btn-xs btn-outline flex items-center gap-1",a&&a.classList.add("hidden")}}renderActiveView(){const s=document.getElementById("main-view-container");if(!s)return;switch(s.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(s);break;case"standings":this.renderStandings(s);break;case"fixtures":this.renderFixtures(s);break;case"bracket":this.renderBracket(s);break;case"results":this.renderResults(s);break;case"rules":this.renderRules(s);break;case"teams":this.renderTeams(s);break}s.querySelectorAll(".glass-card, .dashboard-stat-card, .team-card, .match-card, .bracket-node, .standings-table tbody tr").forEach((a,t)=>{a.classList.add("animate-fade-slide-up"),a.style.animationDelay=`${t*.03}s`})}renderDashboard(s){var d,p;const e=this.lang==="vi",a=this.state.matches.length,t=this.state.matches.filter(c=>c.status==="Completed").length,r=a>0?Math.round(t/a*100):0;let i=0;this.state.matches.forEach(c=>{c.status==="Completed"&&c.sets.forEach(u=>{i+=u.t1+u.t2})});const n=e?"GIẢI VÔ ĐỊCH CẦU LÔNG GEAR GAMES 2026":"GEAR GAMES BADMINTON CHAMPIONSHIP 2026",l=e?"Hệ thống cập nhật xếp hạng, tỷ số & sơ đồ trực tiếp":"Live standings, schedule fixtures & bracket generator",o=e?"THỜI GIAN KHAI MẠC":"COUNTDOWN TO TOURNAMENT";s.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${n}</h1>
        <p class="hero-subtitle">${l}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${o}</div>
          <div class="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            <div class="countdown-box">
              <span id="cd-days" class="cd-num">00</span>
              <span class="cd-lbl">${e?"Ngày":"Days"}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-hours" class="cd-num">00</span>
              <span class="cd-lbl">${e?"Giờ":"Hrs"}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-minutes" class="cd-num">00</span>
              <span class="cd-lbl">${e?"Phút":"Mins"}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-seconds" class="cd-num">00</span>
              <span class="cd-lbl">${e?"Giây":"Secs"}</span>
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
            <span class="stat-label">${e?"Trận Đã Đấu":"Matches Completed"}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${r}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${r}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${i}</span>
            <span class="stat-label">${e?"Tổng Điểm Đã Ghi":"Total Points Scored"}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-cyan" style="width: 100%"></div>
          </div>
          <div class="text-right text-xs text-cyan font-bold mt-1">Live Statistics</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-purple">
          <div class="stat-icon text-purple">👥</div>
          <div class="stat-info">
            <span class="stat-value">10 Đội</span>
            <span class="stat-label">${e?"20 Vận Động Viên":"20 Registered Players"}</span>
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
              ${e?"🔴 TRUNG TÂM SÂN ĐẤU LIVE":"🔴 LIVE COURT TRACKER"}
            </span>
          </h3>
          
          <!-- Simulation switcher -->
          <div class="flex items-center gap-2.5 bg-slate-900/70 px-3 py-1.5 rounded border border-slate-800 text-4xs">
            <span class="font-bold text-slate-400">🤖 ${e?"MÔ PHỎNG LIVE DEMO":"LIVE DEMO MOCK"}</span>
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
            <button class="btn btn-xs btn-outline" id="dash-goto-md">${e?"Xem Chi Tiết":"View Full"}</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Men's Doubles")}
          </div>
        </div>

        <!-- Quick standings XD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-cyan font-bold">🔮 Mixed's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-xd">${e?"Xem Chi Tiết":"View Full"}</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Mixed's Doubles")}
          </div>
        </div>
      </div>
    `,(d=document.getElementById("dash-goto-md"))==null||d.addEventListener("click",()=>this.switchTab("standings")),(p=document.getElementById("dash-goto-xd"))==null||p.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(s){const e=this.state.calculateStandings(s),a=this.lang==="vi";let t=e.slice(0,3).map((r,i)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${i===0?"🥇":i===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${r.name}</td>
          <td class="text-center font-semibold text-volt">${r.points}</td>
          <td class="text-center text-slate-300">${r.played}</td>
          <td class="text-center text-slate-300">${r.netSets>0?"+"+r.netSets:r.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${r.pointsWon}-${r.pointsLost}</td>
        </tr>
      `).join("");return e.length===0&&(t=`<tr><td colspan="6" class="text-center text-muted py-4">${a?"Không có dữ liệu":"No data available"}</td></tr>`),`
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>${a?"Đội Chơi":"Team"}</th>
            <th class="text-center">${a?"Điểm Win":"Wins"}</th>
            <th class="text-center">${a?"Trận":"Pld"}</th>
            <th class="text-center">${a?"Hiệu Set":"Sets"}</th>
            <th class="text-center">${a?"Tổng Điểm":"Points"}</th>
          </tr>
        </thead>
        <tbody>
          ${t}
        </tbody>
      </table>
    `}renderStandings(s){const e=this.lang==="vi";s.innerHTML=`
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0">📊 ${e?"Bảng Xếp Hạng Giải Đấu":"Tournament Leaderboards"}</h2>
          <p class="view-subtitle">${e?"Cập nhật điểm và phân hạng trực tiếp":"Real-time calculated ranks and tie-breaker statistics"}</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-all">
            ${e?"Tất Cả":"All"}
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(s){const e=this.lang==="vi",a=this.state.calculateStandings(s),t=s==="Men's Doubles",r=t?"text-volt":"text-cyan",i=a.map((n,l)=>{const o=l+1,d=o<=4;this.state.isGroupStageComplete(s);let p=`<span class="rank-circle font-bold ${o===1?"gold":o===2?"silver":o===3?"bronze":""}">${o}</span>`,c="";d?c=`<span class="advance-tag neon-green">${e?"BÁN KẾT":"SEMIS"}</span>`:c=`<span class="advance-tag text-muted">${e?"LOẠI":"OUT"}</span>`;const u=n.played===a.length-1,h=u?`<span class="finished-tag">${e?"Đủ 4 trận":"4 Matches"}</span>`:"";return`
        <tr class="${d?"row-top-4":"row-eliminated"} ${t?"md-row":"xd-row"}">
          <td class="text-center">${p}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${n.name}</span>
              ${c}
              ${h}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${n.player1} & ${n.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${n.points}</td>
          <td class="text-center font-bold ${u?"text-emerald-400":"text-slate-200"}">${n.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${n.won}</td>
          <td class="text-center font-semibold ${n.lost>0?"text-rose-400":"text-slate-400"}">${n.lost}</td>
          <td class="text-center text-slate-200 font-bold ${n.netSets>=0?"text-emerald-400":"text-rose-400"}">
            ${n.setsWon}-${n.setsLost} 
            <span class="text-xs font-normal">(${n.netSets>=0?"+"+n.netSets:n.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${n.pointsWon}-${n.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${n.netPoints>=0?"+"+n.netPoints:n.netPoints})</span>
          </td>
        </tr>
      `}).join("");return`
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${t?"💎":"🔮"}</span>
          <span class="${r}">${s}</span>
          <span class="badge bg-slate-800 text-slate-400 text-xs font-normal ml-2">Qualifying Stage</span>
        </h3>
        
        <div class="overflow-x-auto">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="text-center" style="width: 60px;">#</th>
                <th>${e?"Đội Chơi / Thành Viên":"Team / Members"}</th>
                <th class="text-center">${e?"Tổng Điểm":"Pts"}</th>
                <th class="text-center">${e?"Trận":"Pld"}</th>
                <th class="text-center">${e?"Thắng":"Won"}</th>
                <th class="text-center">${e?"Thua":"Lost"}</th>
                <th class="text-center">${e?"Hiệu Số Ván":"Sets (Net)"}</th>
                <th class="text-center">${e?"Tổng Điểm Ghi":"Set Pts (Net)"}</th>
              </tr>
            </thead>
            <tbody>
              ${i}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span>${e?"<strong>Quy tắc xếp hạng:</strong> Top 4 đội sẽ tự động giành vé vào Bán Kết. Ưu tiên xét: Thắng ván ➔ Hiệu số hiệp ➔ Đối kháng trực tiếp ➔ Hiệu số điểm.":"<strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points."}
        </div>
      </div>
    `}renderFixtures(s){const e=this.lang==="vi";let a="";this.activeCategoryFilter==="all"?a=`
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
      `,s.innerHTML=`
      <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0"><svg class="nav-icon mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px; vertical-align: middle;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${e?"Lịch Thi Đấu & Kết Quả":"Match Schedule & Results"}</h2>
          <p class="view-subtitle">${e?"Theo dõi thời gian, sân thi đấu và tỉ số trực tiếp":"List of scheduled tournament fixtures and match scores"}</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-all">
            ${e?"Tất Cả":"All"}
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
                 placeholder="${e?"Tìm tên đội chơi hoặc vận động viên...":"Search team or player name..."}" 
                 value="${this.fixtureSearchText}">
        </div>

        <div class="filter-pills">
          <button class="filter-pill ${this.fixtureStatusFilter==="all"?"active":""}" data-status="all">
            ${e?"Tất cả trạng thái":"All"}
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Scheduled"?"active":""}" data-status="Scheduled">
            ${e?"Lịch thi đấu":"Scheduled"}
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Completed"?"active":""}" data-status="Completed">
            ${e?"Đã kết thúc":"Completed"}
          </button>
        </div>
      </div>

      ${a}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const t=document.getElementById("fixture-search");t.oninput=i=>{this.fixtureSearchText=i.target.value,this.renderActiveView();const n=document.getElementById("fixture-search");n&&(n.focus(),n.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(i=>{i.onclick=()=>{this.fixtureStatusFilter=i.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(s,e,a){const t=this.state.teams.find(i=>i.name===s),r=this.state.teams.find(i=>i.name===e);return!!(t&&(t.player1.toLowerCase().includes(a)||t.player2.toLowerCase().includes(a))||r&&(r.player1.toLowerCase().includes(a)||r.player2.toLowerCase().includes(a)))}renderCategoryFixtures(s){const e=this.lang==="vi",a=s==="Men's Doubles",t=a?"Men's Doubles":"Mixed's Doubles";let r=this.state.matches.filter(m=>m.category===s);if(this.fixtureStatusFilter!=="all"&&(r=r.filter(m=>m.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const m=this.fixtureSearchText.toLowerCase().trim();r=r.filter(g=>g.team1.toLowerCase().includes(m)||g.team2.toLowerCase().includes(m)||g.stage&&g.stage.toLowerCase().includes(m)||g.pitch&&g.pitch.toLowerCase().includes(m)||this.checkPlayersIncludeSearch(g.team1,g.team2,m))}const i=r.filter(m=>m.stage==="Group Stage"),n=r.filter(m=>m.stage==="Semi-finals"),l=r.filter(m=>m.stage==="Grand Final"),o=r.filter(m=>m.stage==="Bronze Match"),d=e?"TRẬN CHUNG KẾT":"GRAND CHAMPIONSHIP",p=e?"TRANH HẠNG BA":"BRONZE FINALS",c=e?"VÒNG BÁN KẾT":"SEMIFINALS STAGE",u=e?"VÒNG BẢNG XOAY VÒNG":"GROUP STAGE QUALIFYING",h=(m,g)=>m.length===0?"":`
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${a?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${a?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${g}</span>
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
          ${h(l,d)}
          ${h(o,p)}
          ${h(n,c)}
          ${h(i,u)}
        </div>
      </div>
    `}renderMatchCards(s){const e=this.lang==="vi";if(s.length===0)return`<div class="col-span-2 text-center text-muted py-6">${e?"Không tìm thấy trận đấu nào":"No matches found"}</div>`;const a=this.sync.getLiveMatches();return s.map(t=>{const r=a[t.id],i=!!r,n=t.status==="Completed";t.team1&&(t.team1.includes("Place")||t.team1.includes("Winner")||t.team1.includes("Loser"))||t.team2&&(t.team2.includes("Place")||t.team2.includes("Winner")||t.team2.includes("Loser"));let l="",o="";i?(l="border-glow-volt bg-volt-gradient",o=`
          <span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--danger); color: #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);">
            <span class="live-dot-pulse"></span> ${e?"ĐANG ĐẤU":"LIVE"}
          </span>
        `):t.stage==="Grand Final"?(l="border-glow-gold bg-gold-gradient",o=n?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>${e?"CHUNG KẾT":"GRAND FINAL"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">${e?"CHUNG KẾT":"GRAND FINAL"}</span>`):t.stage==="Bronze Match"?(l="border-glow-bronze bg-bronze-gradient",o=n?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>${e?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">${e?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`):(l=n?"border-completed":"border-scheduled",o=n?`<span class="match-badge completed">${e?"KẾT THÚC":"FINAL"}</span>`:`<span class="match-badge scheduled">${e?"LỊCH HẸN":"SCHEDULED"}</span>`);const d=t.category==="Men's Doubles",p=d?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',c=this.state.teams.find(f=>f.name===t.team1),u=this.state.teams.find(f=>f.name===t.team2),h=c?`${c.player1} & ${c.player2}`:"",m=u?`${u.player1} & ${u.player2}`:"",g=d?"text-volt":"text-cyan";let y="",$="";const S=n?t.sets:i?r.sets:[],T=n?t.score1:i?r.score1:"-",w=n?t.score2:i?r.score2:"-";if((n||i)&&S&&S.length>0){const f=n&&t.winner===t.team1?`<span class="${g}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',N=n&&t.winner===t.team2?`<span class="${g}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';y+=f,$+=N,S.forEach(L=>{y+=`<span class="${L.t1>L.t2?g:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${L.t1}</span>`,$+=`<span class="${L.t2>L.t1?g:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${L.t2}</span>`});for(let L=S.length;L<3;L++)y+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',$+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else y='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',$='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';const b=this.admin.isAdmin||this.admin.isRef&&t.pitch===this.admin.refPitch;let v="";i?v=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <button class="btn btn-xs btn-outline btn-spectate-match flex items-center gap-1" data-match-id="${t.id}">
              🔍 <span>${e?"Xem Live":"Spectate"}</span>
            </button>
            ${b?`
              <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${t.id}">
                Umpire <span>${e?"Vào Sân":"Join"}</span>
              </button>
            `:""}
          </div>
        `:n?v=this.admin.isAdmin?`
          <div class="flex justify-end mt-3 pt-2.5 border-t border-slate-800/80">
            <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${t.id}">
              ✏️ <span>${e?"Sửa Điểm":"Edit Score"}</span>
            </button>
          </div>
        `:"":v=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <div>
              <span class="text-5xs text-slate-500 font-bold uppercase tracking-wider">${e?"CHỜ ĐẤU":"AWAITING"}</span>
            </div>
            <div class="flex gap-2">
              ${b?`
                <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${t.id}">
                  🏸 <span>${e?"Khai Mạc":"Umpire"}</span>
                </button>
              `:""}
              ${this.admin.isAdmin?`
                <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${t.id}">
                  ✏️ <span>${e?"Nhập Điểm":"Direct"}</span>
                </button>
              `:""}
            </div>
          </div>
        `;const x=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${l} ${x}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${p}
              <span>${t.pitch} | ${t.time}</span>
            </div>
            ${o}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${n&&t.winner===t.team1||i&&T>w?g:"text-slate-200"} truncate" title="${t.team1}">
                  ${t.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${h||(e?"Đang xác định":"TBD")}">${h||(e?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${y}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${n&&t.winner===t.team2||i&&w>T?g:"text-slate-200"} truncate" title="${t.team2}">
                  ${t.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${m||(e?"Đang xác định":"TBD")}">${m||(e?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${$}
              </div>
            </div>
          </div>

          <!-- Action Footer -->
          ${v}
        </div>
      `}).join("")}renderBracket(s){const e=this.lang==="vi",a=l=>{const o=l==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(d=>d.id===`SF1-${o}`),sf2:this.state.matches.find(d=>d.id===`SF2-${o}`),f:this.state.matches.find(d=>d.id===`F-${o}`),b:this.state.matches.find(d=>d.id===`B-${o}`)}},t=a("Men's Doubles"),r=a("Mixed's Doubles"),i=l=>this.state.calculateStandings(l).map((d,p)=>{const c=p+1,u=c<=4,h=c===1?"gold":c===2?"silver":c===3?"bronze":"",m=c===1?"🥇 Seed 1":c===2?"🥈 Seed 2":c===3?"🥉 Seed 3":c===4?"🎫 Seed 4":e?"❌ Loại":"❌ Out",g=u?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;" data-team-name="${d.name}">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${d.name}">
              <span class="rank-circle font-bold ${h}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${c}</span>
              <span class="font-bold text-slate-200 truncate">${d.name}</span>
            </div>
            <span class="font-extrabold ${g}" style="font-size: 0.55rem; flex-shrink: 0;">${m}</span>
          </div>
        `}).join(""),n=(l,o,d,p)=>{const c=this.getAwardResults(p),u=h=>{if(!h)return'<div class="bracket-node empty">N/A</div>';const m=h.status==="Completed",g=h.team1&&(h.team1.includes("Place")||h.team1.includes("Winner")||h.team1.includes("Loser"))||h.team2&&(h.team2.includes("Place")||h.team2.includes("Winner")||h.team2.includes("Loser")),y=this.admin.isAdmin?g?`<span title="${e?"Chưa thể nhập điểm":"Cannot edit score yet"}" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>`:`<button class="btn-edit-node-score btn-edit-match" data-match-id="${h.id}">✏️</button>`:"",$=this.state.teams.find(N=>N.name===h.team1),S=this.state.teams.find(N=>N.name===h.team2),T=$?`${$.player1} & ${$.player2}`:"",w=S?`${S.player1} & ${S.player2}`:"",b=d?"text-volt":"text-cyan";let v="",x="";if(m&&h.sets&&h.sets.length>0){const N=h.winner===h.team1?`<span class="${b}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',L=h.winner===h.team2?`<span class="${b}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';v+=N,x+=L,h.sets.forEach(M=>{v+=`<span class="${M.t1>M.t2?b:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${M.t1}</span>`,x+=`<span class="${M.t2>M.t1?b:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${M.t2}</span>`});for(let M=h.sets.length;M<3;M++)v+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',x+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else v='<span style="width: 6px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',x='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';const f=m?`<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ ${e?"Đã kết thúc":"Finished"}</div>`:`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${h.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${m?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${h.pitch} | ${h.stage}</span>
              ${y}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&h.winner===h.team1?b:"text-slate-300"}" data-team-name="${h.team1}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${h.team1}">${h.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${T||(e?"Đang xác định":"TBD")}">${T||(e?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${v}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&h.winner===h.team2?b:"text-slate-300"}" data-team-name="${h.team2}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${h.team2}">${h.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${w||(e?"Đang xác định":"TBD")}">${w||(e?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${x}
                </div>
              </div>
            </div>
            
            ${f}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${d?"text-volt":"text-cyan"}">${o} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 ${e?"BẢNG XẾP HẠNG":"GROUP STANDINGS"}</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${i(p)}
              </div>
              <div class="text-4xs text-muted text-center mt-2.5 font-semibold leading-relaxed">
                💡 ${e?"Top 4 đội tiến vào<br>vòng đấu loại trực tiếp":"Top 4 teams advance to<br>playoff bracket stage"}
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
                ${u(l.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${u(l.sf2)}
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
                ${u(l.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${u(l.b)}
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
              <div class="node-label mb-2 text-center text-gold font-bold" style="letter-spacing: 0.05em;">🏆 ${e?"BẢNG VÀNG":"FINAL RESULTS"}</div>
              
              <!-- Gold Node -->
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;" data-team-name="${c.goldTeam.name}">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>${e?"VÔ ĐỊCH":"CHAMPION"}</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${c.goldTeam.name}">${c.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.goldTeam.players}">${c.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;" data-team-name="${c.silverTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>${e?"Á QUÂN":"RUNNER-UP"}</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${c.silverTeam.name}">${c.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.silverTeam.players}">${c.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${c.bronzeTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>${e?"HẠNG 3":"3RD PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${c.bronzeTeam.name}">${c.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.bronzeTeam.players}">${c.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${c.fourthTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>${e?"HẠNG 4":"4TH PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${c.fourthTeam.name}">${c.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.fourthTeam.players}">${c.fourthTeam.players}</div>
              </div>
            </div>
          </div>
        </div>
      `};s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Sơ Đồ Cây Vòng Đoạt Cúp</h2>
        <p class="view-subtitle">${e?"Tự động tính phân cặp & lộ trình thăng cấp trực quan":"Automatic calculated tournament brackets and playoff trees"}</p>
      </div>

      ${n(t,"Men's Doubles",!0,"Men's Doubles")}
      ${n(r,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `,setTimeout(()=>this.setupBracketHighlights(),50)}setupBracketHighlights(){const s=document.querySelectorAll(".bracket-visualizer");s.length!==0&&s.forEach(e=>{e.addEventListener("mouseover",a=>{const t=a.target.closest("[data-team-name]");if(!t)return;const r=t.getAttribute("data-team-name");if(!r||r.includes("Winner")||r.includes("Loser")||r.includes("Place"))return;document.querySelectorAll(`[data-team-name="${CSS.escape(r)}"]`).forEach(n=>{n.classList.add("team-highlight-active");const l=n.closest(".bracket-node");l&&l.classList.add("node-highlight-active")})}),e.addEventListener("mouseout",a=>{const t=a.target.closest("[data-team-name]");if(!t||!t.getAttribute("data-team-name"))return;document.querySelectorAll("[data-team-name]").forEach(n=>{n.classList.remove("team-highlight-active");const l=n.closest(".bracket-node");l&&l.classList.remove("node-highlight-active")})})})}getAwardResults(s){const e=s==="Men's Doubles"?"MD":"XD",a=this.state.matches.find(p=>p.id===`F-${e}`),t=this.state.matches.find(p=>p.id===`B-${e}`),r=this.lang==="vi";let i={name:r?"Chưa xác định":"TBD",players:r?"Đội vô địch":"Championship Winner",confirmed:!1},n={name:r?"Chưa xác định":"TBD",players:r?"Đội hạng nhì":"Championship Runner-up",confirmed:!1},l={name:r?"Chưa xác định":"TBD",players:r?"Đội hạng ba":"Bronze Winner",confirmed:!1},o={name:r?"Chưa xác định":"TBD",players:r?"Đội hạng tư":"Bronze Runner-up",confirmed:!1};const d=p=>{if(!p)return"";const c=this.state.teams.find(u=>u.name===p);return c?`${c.player1} & ${c.player2}`:""};if(a)if(a.status==="Completed"){const p=a.winner,c=a.winner===a.team1?a.team2:a.team1;i={name:p,players:d(p),confirmed:!0},n={name:c,players:d(c),confirmed:!0}}else a.team1.includes("Winner")||a.team2.includes("Winner")||(i={name:r?"Chung Kết Đang Đấu":"Grand Finalists",players:`${a.team1} vs ${a.team2}`,confirmed:!1},n={name:r?"Đang Tranh Chức Á Quân":"Chasing Runner-up",players:r?"Đội thua trận Chung kết":"Runner-up of Grand Final",confirmed:!1});if(t)if(t.status==="Completed"){const p=t.winner,c=t.winner===t.team1?t.team2:t.team1;l={name:p,players:d(p),confirmed:!0},o={name:c,players:d(c),confirmed:!0}}else t.team1.includes("Loser")||t.team2.includes("Loser")||(l={name:r?"Tranh Hạng 3 Đang Đấu":"Bronze Contenders",players:`${t.team1} vs ${t.team2}`,confirmed:!1});return{goldTeam:i,silverTeam:n,bronzeTeam:l,fourthTeam:o}}renderResults(s){const e=this.lang==="vi",a=this.getAwardResults("Men's Doubles"),t=this.getAwardResults("Mixed's Doubles"),r=(i,n,l)=>{const o=i.goldTeam.confirmed||i.silverTeam.confirmed||i.bronzeTeam.confirmed,d=(p,c=48)=>{if(!p||p.includes("TBD")||p.includes("Place")||p.includes("Winner")||p.includes("Loser")||p.includes("Chasing")||p.includes("Tranh")||p.includes("Chung"))return`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/80 rounded-full border border-slate-700 mx-auto mb-2" style="width: ${c}px; height: ${c}px; font-size: ${c*.25}rem; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
              👥
            </div>
          `;const u=this.state.teams.find(h=>h.name===p);return u?`
          <div class="podium-avatar-wrapper mx-auto mb-2" style="width: ${c}px; height: ${c}px; position: relative; flex-shrink: 0;">
            <img src="/teams/${u.id}.jpg" 
                 onerror="this.onerror=null; this.src='/teams/${u.id}.png'; this.onerror=function(){this.style.display='none'; this.nextElementSibling.style.display='flex';};" 
                 class="podium-avatar rounded-full object-cover border-2 border-slate-950" 
                 style="width: 100%; height: 100%; display: block; box-shadow: 0 4px 10px rgba(0,0,0,0.4);" />
            <div class="team-fallback-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800 rounded-full border-2 border-slate-950" 
                 style="display:none; width: 100%; height: 100%; font-size: ${c*.25}rem;">👥</div>
          </div>
        `:`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/80 rounded-full border border-slate-700 mx-auto mb-2" style="width: ${c}px; height: ${c}px; font-size: ${c*.25}rem; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
              👥
            </div>
          `};return`
        <div class="glass-card mb-8 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[3px] ${l?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${l?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${n}</span>
          </h3>
          <p class="text-xs text-muted mb-6">
            ${o?e?"⚡ Official championship results recorded":"⚡ Official championship matches completed":e?"⏳ Waiting for championship finals":"⏳ Waiting for championship finals to complete"}
          </p>

          <div class="podium-container">
            <!-- 2nd Place Step -->
            <div class="podium-step second-place">
              <span class="podium-medal">🥈</span>
              ${d(i.silverTeam.name,44)}
              <div class="podium-team truncate max-w-full" title="${i.silverTeam.name}">${i.silverTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${i.silverTeam.players}">${i.silverTeam.players}</div>
              <span class="podium-label">Runner-up</span>
            </div>

            <!-- 1st Place Step -->
            <div class="podium-step first-place">
              <span class="podium-medal">🥇</span>
              ${d(i.goldTeam.name,56)}
              <div class="podium-team truncate max-w-full" title="${i.goldTeam.name}">${i.goldTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${i.goldTeam.players}">${i.goldTeam.players}</div>
              <span class="podium-label">Champion</span>
            </div>

            <!-- 3rd Place Step -->
            <div class="podium-step third-place">
              <span class="podium-medal">🥉</span>
              ${d(i.bronzeTeam.name,44)}
              <div class="podium-team truncate max-w-full" title="${i.bronzeTeam.name}">${i.bronzeTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${i.bronzeTeam.players}">${i.bronzeTeam.players}</div>
              <span class="podium-label">3rd Place</span>
            </div>
          </div>

          <!-- Honorable 4th Place Card -->
          <div class="max-w-[320px] mx-auto mt-8 glass-panel border border-slate-700/30 p-3 rounded-lg flex items-center justify-center gap-3.5 hover-glowing">
            <span class="text-lg">🏅</span>
            ${d(i.fourthTeam.name,38)}
            <div class="text-left truncate">
              <div class="text-4xs text-muted font-bold uppercase tracking-wider">Honorable 4th Place</div>
              <div class="text-2xs font-extrabold text-slate-300 truncate" title="${i.fourthTeam.name}">${i.fourthTeam.name}</div>
              <div class="text-4xs text-muted truncate" title="${i.fourthTeam.players}">${i.fourthTeam.players}</div>
            </div>
          </div>
        </div>
      `};s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Bảng Vàng Danh Vọng</h2>
        <p class="view-subtitle">${e?"Vinh danh nhà vô địch và các thứ hạng danh giá của mùa giải":"Honoring the champions and premium standings of the season"}</p>
      </div>

      ${r(a,"Men's Doubles",!0)}
      ${r(t,"Mixed's Doubles",!1)}
    `,setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(s){const e=this.lang==="vi",a=e?G.vi:G.en,t=a.sections.map(r=>{const i=r.content.map(n=>{let l=n.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return l=l.replace(/\\rightarrow/g," ➔ "),l=l.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${l}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${r.title}</h3>
          <div>${i}</div>
        </div>
      `}).join("");s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">📘 Quy Định & Luật Thi Đấu</h2>
        <p class="view-subtitle">${e?"Tra cứu điều lệ chính thức & giả lập sân giao cầu trực tuyến":"Official tournament handbook and dynamic doubles service simulator"}</p>
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
    `}renderTeams(s){const e=this.lang==="vi",a=(n,l)=>{const o=l==="Men's Doubles",d=o?"text-volt":"text-cyan",p=this.state.calculateStandings(l),c=n.map(u=>{const h=this.state.matches.filter(C=>C.category===l&&C.status==="Completed"&&(C.team1===u.name||C.team2===u.name));let m=0,g=0,y=0,$=0,S=0,T=0;h.forEach(C=>{const I=C.team1===u.name;C.winner===u.name?m++:g++,I?(y+=Number(C.score1)||0,$+=Number(C.score2)||0):(y+=Number(C.score2)||0,$+=Number(C.score1)||0),C.sets&&Array.isArray(C.sets)&&C.sets.forEach(k=>{const P=Number(k.t1)||0,B=Number(k.t2)||0;I?(S+=P,T+=B):(S+=B,T+=P)})});const w=h.length,b=w>0?Math.round(m/w*100):0,v=y-$,x=S-T,f=m,N=p.findIndex(C=>C.name===u.name),L=N!==-1?N+1:"-",M=h.map(C=>{const I=C.winner===u.name,k=I?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",P=I?"W":"L",B=`${C.stage}: ${C.team1} vs ${C.team2} (${C.score1}-${C.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${k}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${B}">${P}</span>`}).join(""),E=M.length>0?M:`<span class="text-slate-500 text-5xs italic font-sans">${e?"Chưa đấu":"No matches"}</span>`;return`
          <div class="team-profile-card ${o?"team-card-md":"team-card-xd"} glass-panel border border-slate-700/50 rounded-lg hover-glowing flex flex-col justify-between overflow-hidden relative"
               style="background: radial-gradient(circle at top right, ${o?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%); cursor: pointer;"
               data-team-id="${u.id}" data-category="${l}">
            
            <!-- Team Color Banner -->
            <div class="team-card-banner w-full" style="height: 52px; background: linear-gradient(135deg, ${o?"rgba(163, 230, 53, 0.15)":"rgba(34, 211, 238, 0.15)"} 0%, rgba(15, 22, 42, 0.6) 100%); border-b: 1px solid rgba(255, 255, 255, 0.04);"></div>

            <!-- Team Image Circular Avatar overlapping banner -->
            <div class="team-card-avatar-wrapper">
              <div class="team-card-avatar-inner" style="box-shadow: 0 4px 10px rgba(0,0,0,0.5), 0 0 15px ${o?"rgba(163, 230, 53, 0.2)":"rgba(34, 211, 238, 0.2)"};">
                <img src="/teams/${u.id}.jpg" 
                     onerror="this.onerror=null; this.src='/teams/${u.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.team-avatar-placeholder').style.display='flex'; }" 
                     class="team-card-img" />
                <div class="team-avatar-placeholder" style="display: none;">
                  <span>👥</span>
                </div>
              </div>
            </div>

            <div class="team-card-body">
              <div>

                <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <div class="flex items-center gap-1.5 truncate max-w-[70%]">
                    <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${u.name}">${u.name}</span>
                  </div>
                  <div class="flex items-center gap-1.5 flex-shrink-0">
                    <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${L}</span>
                    <span class="badge ${o?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
                  </div>
                </div>

                <!-- Members -->
                <div class="flex flex-col gap-1.5 mb-4 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${u.player1}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${u.player2}</span>
                  </div>
                  
                  <!-- Form guide -->
                  <div class="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                    <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">${e?"PHONG ĐỘ:":"FORM:"}</span>
                    <div class="flex items-center gap-1">
                      ${E}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stats -->
              <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
                <!-- Summary row -->
                <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${w}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Đã đấu":"Pld"}</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${o?"text-volt":"text-cyan"}">${m}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Thắng":"Won"}</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${g>0?"text-rose-400":"text-slate-400"}">${g}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Thua":"Lost"}</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${b}%</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Tỉ Lệ":"Win%"}</div>
                  </div>
                </div>

                <!-- Telemetry detail list -->
                <div class="flex flex-col gap-1.5 font-mono">
                  <div class="flex items-center justify-between text-slate-400">
                    <span>${e?"Điểm tích lũy:":"Standing Pts:"}</span>
                    <span class="font-extrabold text-slate-200">${f}</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>${e?"Set Thắng/Bại:":"Sets W/L:"}</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${y}-${$}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${v>0?"bg-emerald-500/10 text-emerald-400":v<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${v>0?"+":""}${v}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>${e?"Điểm Thắng/Bại:":"Points W/L:"}</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${S}-${T}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${x>0?"bg-emerald-500/10 text-emerald-400":x<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${x>0?"+":""}${x}
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
            <span class="${d}">${o?"💎":"🔮"}</span>
            <span class="${d}">${l} (${n.length} Teams)</span>
          </h3>
          <div class="team-cards-grid">
            ${c}
          </div>
        </div>
      `},t=this.state.teams.filter(n=>n.category==="Men's Doubles"),r=this.state.teams.filter(n=>n.category==="Mixed's Doubles");s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Registered Teams & Members</h2>
        <p class="view-subtitle">Browse player profiles and team group statistics</p>
      </div>

      <!-- Teams lists -->
      ${a(t,"Men's Doubles")}
      ${a(r,"Mixed's Doubles")}
    `,s.querySelectorAll(".team-profile-card").forEach(n=>{n.addEventListener("click",()=>{const l=n.getAttribute("data-team-id"),o=n.getAttribute("data-category");this.showTeamDetailsModal(l,o)})})}showTeamDetailsModal(s,e){const a=this.state.teams.find(f=>f.id===s);if(!a)return;const t=e==="Men's Doubles",r=this.state.calculateStandings(e),i=this.state.matches.filter(f=>f.category===e&&f.status==="Completed"&&(f.team1===a.name||f.team2===a.name));let n=0,l=0,o=0,d=0,p=0,c=0;i.forEach(f=>{const N=f.team1===a.name;f.winner===a.name?n++:l++,N?(o+=Number(f.score1)||0,d+=Number(f.score2)||0):(o+=Number(f.score2)||0,d+=Number(f.score1)||0),f.sets&&Array.isArray(f.sets)&&f.sets.forEach(L=>{const M=Number(L.t1)||0,E=Number(L.t2)||0;N?(p+=M,c+=E):(p+=E,c+=M)})});const u=i.length,h=u>0?Math.round(n/u*100):0,m=o-d,g=p-c,y=n,$=r.findIndex(f=>f.name===a.name),S=$!==-1?$+1:"-",T=i.map(f=>{const N=f.winner===a.name,L=N?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",M=N?"W":"L",E=`${f.stage}: ${f.team1} vs ${f.team2} (${f.score1}-${f.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${L}" style="width: 16px; height: 16px; font-size: 0.5rem;" title="${E}">${M}</span>`}).join(""),w=T.length>0?T:'<span class="text-slate-500 text-5xs italic">No matches played</span>',b=document.createElement("div");b.className="modal-backdrop",b.id="team-profile-modal-backdrop",b.innerHTML=`
      <div class="modal-card glass-card relative overflow-hidden" style="max-width: 480px; padding: 0; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
        <!-- Close Button -->
        <button class="absolute top-4 right-4 z-50 flex items-center justify-center rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white" id="modal-team-close-btn" style="width: 30px; height: 30px; font-size: 1.1rem; cursor: pointer; transition: all 0.2s; border: none;">
          &times;
        </button>

        <!-- Cover Photo (Inspire by FB cover) -->
        <div class="relative w-full overflow-hidden bg-slate-900 border-b border-slate-800" style="height: 180px;">
          <img src="/teams/${a.id}.jpg" 
               onerror="this.onerror=null; this.src='/teams/${a.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.cover-placeholder').style.display='flex'; }"
               style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.65) contrast(1.1);" />
          <div class="cover-placeholder flex items-center justify-center font-bold text-slate-600 bg-slate-900" style="display: none; width: 100%; height: 100%; font-size: 4rem;">
            👥
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        <!-- Overlapping Circular Team Avatar -->
        <div class="absolute" style="top: 130px; left: 24px; width: 84px; height: 84px; border-radius: 50%; padding: 4px; background: #060914; box-shadow: 0 6px 15px rgba(0,0,0,0.6); z-index: 10;">
          <div class="w-full h-full rounded-full overflow-hidden relative border border-slate-800" style="box-shadow: 0 0 15px ${t?"rgba(163, 230, 53, 0.4)":"rgba(34, 211, 238, 0.4)"};">
            <img src="/teams/${a.id}.jpg" 
                 onerror="this.onerror=null; this.src='/teams/${a.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.avatar-placeholder').style.display='flex'; }"
                 style="width: 100%; height: 100%; object-fit: cover;" />
            <div class="avatar-placeholder flex items-center justify-center font-bold text-slate-400 bg-slate-800" style="display: none; width: 100%; height: 100%; font-size: 2rem;">
              👥
            </div>
          </div>
        </div>

        <!-- Team Profile Body -->
        <div class="p-6 pt-10" style="background: linear-gradient(180deg, rgba(15, 22, 42, 0.98) 0%, rgba(8, 12, 26, 0.99) 100%);">
          <div class="flex items-start justify-between mb-4 flex-wrap gap-2">
            <div>
              <h3 class="text-lg font-black text-slate-100 flex items-center gap-2 m-0" style="font-family: var(--font-heading);">${a.name}</h3>
              <div class="text-xs text-muted font-semibold mt-1 flex items-center gap-2">
                <span class="${t?"text-volt":"text-cyan"} font-bold">${e}</span>
                <span class="text-slate-600">•</span>
                <span>Team ID: ${a.id}</span>
              </div>
            </div>
            <div class="badge bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-300 font-black text-xs" style="height: fit-content; line-height: 1;">
              Rank #${S}
            </div>
          </div>

          <!-- Players Section -->
          <div class="glass-panel border border-slate-800/80 p-4 rounded-xl mb-5 flex flex-col gap-3" style="box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);">
            <div class="text-5xs font-bold uppercase tracking-wider text-slate-500">🏆 Players partnership</div>
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center font-bold text-slate-950 ${t?"bg-volt":"bg-cyan"} rounded-full" style="width: 26px; height: 26px; font-size: 0.7rem; flex-shrink: 0;">🏸</div>
              <div class="text-left">
                <div class="text-sm font-extrabold text-slate-200">${a.player1}</div>
                <div class="text-5xs text-muted uppercase tracking-wider">Player 1</div>
              </div>
            </div>
            <div class="flex items-center gap-3 border-t border-slate-900/60 pt-2.5">
              <div class="flex items-center justify-center font-bold text-slate-950 ${t?"bg-volt":"bg-cyan"} rounded-full" style="width: 26px; height: 26px; font-size: 0.7rem; flex-shrink: 0;">🏸</div>
              <div class="text-left">
                <div class="text-sm font-extrabold text-slate-200">${a.player2}</div>
                <div class="text-5xs text-muted uppercase tracking-wider">Player 2</div>
              </div>
            </div>
          </div>

          <!-- Dynamic Telemetry Grid -->
          <div class="grid grid-cols-3 gap-3 mb-5">
            <div class="bg-slate-950/80 border border-slate-900 p-3 rounded-xl text-center">
              <div class="text-base font-black text-slate-100 font-mono">${u}</div>
              <div class="text-5xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Played</div>
            </div>
            <div class="bg-slate-950/80 border border-slate-900 p-3 rounded-xl text-center">
              <div class="text-base font-black ${t?"text-volt":"text-cyan"} font-mono">${n}</div>
              <div class="text-5xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Won</div>
            </div>
            <div class="bg-slate-950/80 border border-slate-900 p-3 rounded-xl text-center">
              <div class="text-base font-black ${l>0?"text-rose-400":"text-slate-400"} font-mono">${l}</div>
              <div class="text-5xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Lost</div>
            </div>
          </div>

          <!-- Extended Telemetry detail list -->
          <div class="bg-slate-950/80 border border-slate-900 p-4 rounded-xl text-2xs font-mono mb-5 flex flex-col gap-2.5">
            <div class="flex items-center justify-between text-slate-400">
              <span>Standing Points:</span>
              <span class="font-extrabold text-slate-100">${y} Points</span>
            </div>
            <div class="flex items-center justify-between text-slate-400 border-t border-slate-900/60 pt-2">
              <span>Sets Won / Lost:</span>
              <div class="flex items-center gap-2">
                <span class="text-slate-200">${o}-${d}</span>
                <span class="text-5xs font-bold px-1.5 py-0.5 rounded ${m>0?"bg-emerald-500/10 text-emerald-400":m<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                  ${m>0?"+":""}${m} Net
                </span>
              </div>
            </div>
            <div class="flex items-center justify-between text-slate-400 border-t border-slate-900/60 pt-2">
              <span>Points Won / Lost:</span>
              <div class="flex items-center gap-2">
                <span class="text-slate-200">${p}-${c}</span>
                <span class="text-5xs font-bold px-1.5 py-0.5 rounded ${g>0?"bg-emerald-500/10 text-emerald-400":g<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                  ${g>0?"+":""}${g} Net
                </span>
              </div>
            </div>
            <div class="flex items-center justify-between text-slate-400 border-t border-slate-900/60 pt-2">
              <span>Win Ratio Percentage:</span>
              <span class="font-extrabold text-slate-100">${h}% rate</span>
            </div>
          </div>

          <!-- Form guide -->
          <div class="flex items-center justify-between bg-slate-950/80 border border-slate-900 p-3 rounded-xl text-2xs">
            <span class="font-extrabold uppercase tracking-wider text-slate-500" style="font-size: 0.55rem;">Form Guide</span>
            <div class="flex items-center gap-1.5">
              ${w}
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(b);const v=b.querySelector("#modal-team-close-btn"),x=()=>{b.classList.add("animate-fade-out"),setTimeout(()=>b.remove(),250)};v.addEventListener("click",x),b.addEventListener("click",f=>{f.target===b&&x()})}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const s=new Date("May 31, 2026 13:30:00").getTime(),e=()=>{const a=document.getElementById("cd-days"),t=document.getElementById("cd-hours"),r=document.getElementById("cd-minutes"),i=document.getElementById("cd-seconds");if(!a){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const n=new Date().getTime(),l=s-n;if(l<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),a.textContent="00",t.textContent="00",r.textContent="00",i.textContent="00";return}const o=Math.floor(l/(1e3*60*60*24)),d=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(l%(1e3*60*60)/(1e3*60)),c=Math.floor(l%(1e3*60)/1e3);a.textContent=o.toString().padStart(2,"0"),t.textContent=d.toString().padStart(2,"0"),r.textContent=p.toString().padStart(2,"0"),i.textContent=c.toString().padStart(2,"0")};e(),this.countdownTimer=setInterval(e,1e3)}handleSyncUpdate(s,e){if(this.renderActiveView(),s==="MOCK_TOGGLE"){const a=document.getElementById("demo-mock-switch");a&&(a.checked=e.enabled),e.enabled?this.startDemoSimulation(!0):this.stopDemoSimulation(!0)}if(this.activeSpectateMatchId&&e&&e.matchId===this.activeSpectateMatchId)if(s==="STATUS_UPDATE"&&!e.isLive){const a=this.state.matches.find(t=>t.id===e.matchId);if(a)this.showSpectatorMatchEndNotice(a);else{const t=document.getElementById("spectate-overlay-container");t&&(t.classList.add("hidden"),t.innerHTML=""),this.activeSpectateMatchId=null}}else this.renderSpectateOverlay(this.activeSpectateMatchId)}showSpectatorMatchEndNotice(s){const e=this.lang==="vi",a=s.stage||"Group Stage";let t=s.team1;s.score2Sets>s.score1Sets&&(t=s.team2);let r=e?"CHIẾN THẮNG TRẬN ĐẤU!":"WIN THE MATCH!",i=e?"TRẬN ĐẤU ĐÃ KẾT THÚC":"MATCH COMPLETED",n=e?`🎉 Chúc mừng đội **${t}** đã xuất sắc giành chiến thắng trong trận đấu này! 🎉`:`🎉 Congratulations to **${t}** on winning this match! 🎉`,l="🏸",o=e?"ĐỘI GIÀNH CHIẾN THẮNG":"MATCH WINNER",d="#84cc16",p="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(r=e?"CHÚC MỪNG CHIẾN THẮNG BÁN KẾT!":"CONGRATULATIONS ON WINNING!",i=e?"GIÀNH VÉ VÀO CHUNG KẾT":"QUALIFIED FOR THE FINALS",n=e?`⚡ Tuyệt vời! Đội **${t}** đã giành chiến thắng trận đấu Bán Kết và chính thức giành quyền bước vào trận Chung Kết tranh chức vô địch (Grand Final)! 🏆`:`⚡ Spectacular! **${t}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,l="🏅",o=e?"ĐỘI CHIẾN THẮNG BÁN KẾT":"SEMI-FINALS WINNER",d="#06b6d4",p="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(r=e?"NHÀ VÔ ĐỊCH GIẢI ĐẤU!":"TOURNAMENT CHAMPIONS!",i=e?"CÚP VÔ ĐỊCH GEAR GAMES 2026":"GEAR GAMES BADMINTON 2026 CUP",n=e?`👑 TÂN VƯƠNG GIẢI ĐẤU! Xin được nhiệt liệt vinh danh nhà vô địch Gear Games Badminton 2026: **${t}**! Chiến thắng lịch sử vô cùng xứng đáng! 🏆🥇`:`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${t}**! A historic and well-deserved victory! 🏆🥇`,l="🏆",o=e?"QUÁN QUÂN GIẢI ĐẤU":"TOURNAMENT CHAMPIONS",d="#fbbf24",p="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(r=e?"ĐOẠT HẠNG BA CHUNG CUỘC!":"BRONZE MEDALISTS!",i=e?"HUY CHƯƠNG ĐỒNG THUỘC VỀ":"BRONZE MEDAL SECURED",n=e?`🥉 Tuyệt vời! Đội **${t}** đã giành chiến thắng trận tranh Hạng Ba và xuất sắc mang về tấm **Huy Chương Đồng** danh giá! 🥉`:`🥉 Superb! **${t}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,l="🥉",o=e?"HẠNG BA CHUNG CUỘC":"BRONZE WINNER",d="#ea580c",p="rgba(234, 88, 12, 0.45)");const c=document.createElement("div");c.className="match-end-modal-backdrop relative",c.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${p}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${p}); line-height: 1;">
            ${l}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${d}; filter: drop-shadow(0 0 8px ${p});">${r}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${i}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${o}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${t}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${s.sets?s.sets.map((u,h)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${h+1}: <span class="text-volt">${u.t1}</span>-<span class="text-cyan">${u.t2}</span>
                </div>
              `).join(""):""}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${n}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="spec-end-btn-home" style="font-size: 0.85rem; background-color: ${d}; color: #000; box-shadow: 0 4px 14px ${p}; border: none;">
            🏠 ${e?"Quay về trang chủ":"Back to Homepage"}
          </button>
        </div>
      </div>
    `,document.body.appendChild(c),document.getElementById("spec-end-btn-home").onclick=()=>{c.classList.add("animate-fade-out"),setTimeout(()=>{c.remove();const u=document.getElementById("spectate-overlay-container");u&&(u.classList.add("hidden"),u.innerHTML=""),this.activeSpectateMatchId=null,this.switchTab("dashboard")},300)}}toggleDemoSimulation(s){s?(localStorage.setItem("badminton_demo_mock_active","true"),this.startDemoSimulation(),this.admin.showToast(this.lang==="vi"?"Đã kích hoạt chế độ Live Demo!":"Live Demo Simulation activated!","success")):(localStorage.removeItem("badminton_demo_mock_active"),this.stopDemoSimulation(),this.admin.showToast(this.lang==="vi"?"Đã tắt chế độ Live Demo!":"Live Demo Simulation stopped!","info")),this.sync.broadcast("LIVE_MOCK_TOGGLE",{enabled:s})}startDemoSimulation(s=!1){this.stopDemoSimulation(!0),this.demoInterval=setInterval(()=>{this.stepDemoSimulation()},4500)}stopDemoSimulation(s=!1){this.demoInterval&&(clearInterval(this.demoInterval),this.demoInterval=null);const e=this.sync.getLiveMatches();Object.keys(e).forEach(a=>{this.sync.setMatchLiveStatus(a,!1);const t=this.state.matches.find(r=>r.id===a);t&&t.status==="Live"&&(t.status="Scheduled")}),this.renderActiveView()}stepDemoSimulation(){const s=this.sync.getLiveMatches(),e=Object.keys(s);if(e.length>0){const a=e[Math.floor(Math.random()*e.length)],t=s[a],r=t.sets.length-1,i=t.sets[r]||{t1:0,t2:0},n=Math.random()>.48;let l=i.t1,o=i.t2;if(n){if(t.servingTeam==="A"){const b=t.serverName;t.serverName=t.partnerName,t.partnerName=b}l++,t.servingTeam="A"}else{if(t.servingTeam==="B"){const b=t.receiverName;t.receiverName=t.receiverPartnerName,t.receiverPartnerName=b}o++,t.servingTeam="B"}t.sets[r]={t1:l,t2:o},t.score1=l,t.score2=o;const d=t.servingTeam==="A"?l:o;t.isEven=d%2===0;const p=this.state.matches.find(b=>b.id===a),c=this.state.teams.find(b=>b.name===p.team1),u=this.state.teams.find(b=>b.name===p.team2),h=c?[c.player1,c.player2]:["T1 P1","T1 P2"],m=u?[u.player1,u.player2]:["T2 P1","T2 P2"];t.servingTeam==="A"?(t.receiverName=t.isEven?m[0]:m[1],t.receiverPartnerName=t.isEven?m[1]:m[0]):(t.receiverName=t.isEven?h[0]:h[1],t.receiverPartnerName=t.isEven?h[1]:h[0]);const g=a.includes("SF")||a.includes("F-")||a.includes("B-")?21:15,y=g===15?21:30,$=Math.max(l,o),S=Math.min(l,o),T=$-S;let w=!1;if($>=g&&(T>=2||$===y)&&(w=!0),w){t.sets[r]={t1:l,t2:o};let b=0,v=0;if(t.sets.forEach(x=>{x.t1>x.t2?b++:v++}),b===2||v===2){this.sync.broadcast("LIVE_MATCH_END",{matchId:a}),this.sync.setMatchLiveStatus(a,!1),this.state.matches.find(f=>f.id===a)&&this.state.updateMatchScore(a,t.sets,b,v,"Completed");return}else t.sets.push({t1:0,t2:0}),t.score1=0,t.score2=0,t.currentSet++,t.servingTeam=l>o?"A":"B"}this.sync.broadcast("LIVE_SCORE_UPDATE",{matchId:a,sets:t.sets,score1:t.score1,score2:t.score2,currentSet:t.currentSet,servingTeam:t.servingTeam,isEven:t.isEven,serverName:t.serverName,partnerName:t.partnerName,receiverName:t.receiverName,receiverPartnerName:t.receiverPartnerName})}else{const a=this.state.matches.find(t=>t.status==="Scheduled"&&!t.team1.includes("Winner")&&!t.team2.includes("Winner")&&!t.team1.includes("Loser")&&!t.team2.includes("Loser"));if(a){const t=this.state.teams.find(o=>o.name===a.team1),r=this.state.teams.find(o=>o.name===a.team2),i=t?[t.player1,t.player2]:["T1 P1","T1 P2"],n=r?[r.player1,r.player2]:["T2 P1","T2 P2"],l={sets:[{t1:0,t2:0}],score1:0,score2:0,currentSet:1,servingTeam:"A",isEven:!0,serverName:i[0],partnerName:i[1],receiverName:n[0],receiverPartnerName:n[1]};this.sync.broadcast("LIVE_MATCH_START",{matchId:a.id,matchState:l}),this.sync.setMatchLiveStatus(a.id,!0,l)}}}renderLivePitches(){const s=this.lang==="vi",e=["Pitch 15","Pitch 16","Pitch 20","Pitch 21"],a=this.sync.getLiveMatches();return e.map(t=>{const r=Object.keys(a).find(l=>{const o=this.state.matches.find(d=>d.id===l);return o&&o.pitch===t});if(r){const l=a[r],o=this.state.matches.find(p=>p.id===r);o.category;const d=this.admin.isAdmin||this.admin.isRef&&o.pitch===this.admin.refPitch;return`
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
                <span class="${l.servingTeam==="A"?"text-glow-volt":""}">${l.score1}</span>
                <span class="text-slate-600 text-3xs">vs</span>
                <span class="${l.servingTeam==="B"?"text-glow-cyan":""}">${l.score2}</span>
              </div>
              <div class="text-4xs font-bold text-slate-400 mt-0.5 truncate" title="${o.team2}">${o.team2}</div>
            </div>
            
            <div class="text-5xs text-center text-slate-500 font-semibold mb-2">
              Set ${l.currentSet} | serve: ${l.servingTeam==="A"?"T1":"T2"}
            </div>

            <div class="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button class="btn btn-2xs btn-outline btn-spectate-match flex-1 font-bold" data-match-id="${o.id}">
                🔍 ${s?"Xem Live":"Spectate"}
              </button>
              ${d?`
                <button class="btn btn-2xs btn-outline btn-join-match font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${o.id}">
                  🏸 Ump
                </button>
              `:""}
            </div>
          </div>
        `}const i=this.state.matches.find(l=>l.pitch===t&&l.status==="Scheduled"),n=this.admin.isAdmin||this.admin.isRef&&t===this.admin.refPitch;return i?`
          <div class="live-pitch-card glass-panel border border-slate-800 p-3 rounded-lg flex flex-col justify-between" style="opacity: 0.8;">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-slate-400 text-4xs">${t}</span>
              <span class="badge bg-slate-800 text-slate-500 font-bold text-5xs">${i.time}</span>
            </div>
            
            <div class="text-center py-2">
              <div class="text-5xs text-muted truncate" title="${i.team1}">${i.team1}</div>
              <div class="text-4xs font-bold text-slate-400 py-0.5">${s?"ĐỢI TRẬN":"SCHEDULED"}</div>
              <div class="text-5xs text-muted truncate" title="${i.team2}">${i.team2}</div>
            </div>

            <div class="pt-2 border-t border-slate-800/80">
              ${n?`
                <button class="btn btn-2xs btn-outline btn-join-match btn-block font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${i.id}">
                  🏸 ${s?"Khai Mạc Trận":"Start Match"}
                </button>
              `:`
                <div class="text-center text-5xs text-slate-600 font-semibold py-1">💤 ${s?"Chờ thi đấu":"Awaiting start"}</div>
              `}
            </div>
          </div>
        `:`
        <div class="live-pitch-card glass-panel border border-slate-900 p-3 rounded-lg flex flex-col justify-center items-center" style="opacity: 0.55; min-height: 125px;">
          <span class="text-lg">💤</span>
          <span class="font-extrabold text-slate-400 text-4xs mt-1.5">${t}</span>
          <span class="text-5xs text-slate-600 font-semibold mt-0.5">${s?"Sân đang trống":"Court Empty"}</span>
        </div>
      `}).join("")}openSpectateOverlay(s){if(document.getElementById("umpire-overlay-container")&&!document.getElementById("umpire-overlay-container").classList.contains("hidden")){alert(this.lang==="vi"?"Bạn đang ở trong phòng Trọng tài. Hãy thoát phòng Trọng tài trước!":"You are in the Umpire Control room. Please exit Umpire mode first!");return}if(this.activeSpectateMatchId=s,!document.getElementById("spectate-overlay-container")){const e=document.createElement("div");e.id="spectate-overlay-container",e.className="umpire-overlay-backdrop",document.body.appendChild(e)}this.renderSpectateOverlay(s),setTimeout(()=>{const e=document.querySelector(".spectate-court-svg .svg-shuttle");e&&(e.setAttribute("dur","0.7s"),e.innerHTML=`
          <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
            <mpath href="#spectate-shuttle-path" />
          </animateMotion>
        `)},100)}renderSpectateOverlay(s){const e=document.getElementById("spectate-overlay-container");if(!e)return;e.classList.remove("hidden");const a=this.lang==="vi",t=this.state.matches.find(I=>I.id===s),i=this.sync.getLiveMatches()[s];if(!i||!t){e.classList.add("hidden"),this.activeSpectateMatchId=null;return}i.isEven,t.category;let n,l,o,d;const p=i.team1Right||t.team1.split(" ")[0]+" 1",c=i.team1Left||t.team1.split(" ")[0]+" 2",u=i.team2Right||t.team2.split(" ")[0]+" 1",h=i.team2Left||t.team2.split(" ")[0]+" 2";i.isCourtSwapped?(n=u,l=h,o=p,d=c):(n=p,l=c,o=u,d=h);const m=i.serverName,g=i.receiverName,y=I=>I===m?"S":I===g?"R":"P",$=I=>I===m?"volt":I===g?"cyan":"neutral",S=I=>I===m?"text-volt":I===g?"text-cyan":"text-slate-200",T=I=>I!==m?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let w,b,v,x;m===n?(w=210,b=355):m===l?(w=90,b=355):m===o?(w=90,b=145):(w=210,b=145),g===n?(v=210,x=355):g===l?(v=90,x=355):g===o?(v=90,x=145):(v=210,x=145);const f=(I,k)=>k===355?I===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":I===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",N=f(w,b),L=f(v,x),M=(w+v)/2+30,E=(b+x)/2-40,C=i.sets.map((I,k)=>`
      <div class="umpire-set-badge">
        <span>Set ${k+1}:</span>
        <strong>${I.t1} - ${I.t2}</strong>
      </div>
    `).join("");e.innerHTML=`
      <div class="umpire-card glass-card spectate-stadium">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE SPECTATING
            </span>
            <span class="text-xs font-bold text-slate-300">${t.pitch} | ${t.stage}</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">${a?"SÂN VẬN ĐỘNG TRỰC TUYẾN":"LIVE STADIUM SCREEN"}</h2>
          <button class="btn btn-xs btn-neutral" id="spectate-btn-close">✕ ${a?"Thoát Xem":"Exit"}</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Spectator Scoreboard Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets display -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${C}
              <div class="umpire-set-badge current">
                <span>Set ${i.currentSet}:</span>
                <strong class="text-volt">${i.score1} - ${i.score2}</strong>
              </div>
            </div>

            <!-- Big Glowing Score Pads (Read-only for Spectators) -->
            <div class="grid grid-cols-2 gap-6 text-center">
              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-volt mb-3" title="${t.team1}">
                  ${t.team1}
                </div>
                <div class="font-mono font-black text-6xl text-glow-volt py-4">${i.score1}</div>
                ${i.servingTeam==="A"?`
                  <span class="absolute top-3 right-3 text-volt animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>

              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-cyan mb-3" title="${t.team2}">
                  ${t.team2}
                </div>
                <div class="font-mono font-black text-6xl text-glow-cyan py-4">${i.score2}</div>
                ${i.servingTeam==="B"?`
                  <span class="absolute top-3 right-3 text-cyan animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>
            </div>

            <div class="bg-slate-900/40 p-4 rounded border border-slate-800 text-center text-4xs text-slate-500 font-semibold leading-relaxed">
              📣 ${a?"Màn hình trực tiếp tự động đồng bộ kết quả từ Bàn Trọng Tài thông qua kênh liên lạc BroadcastChannel độ trễ bằng không.":"Spectator display updates automatically in real-time as the referee enters scores on their device."}
            </div>
          </div>

          <!-- Spectator Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">${a?"MÔ PHỎNG VỊ TRÍ VẬN ĐỘNG VIÊN":"LIVE COURT VISUALIZER"}</h4>
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
                <path d="${N}" class="svg-highlight-box serving" filter="url(#spec-glow-volt)" />
                <path d="${L}" class="svg-highlight-box receiving" filter="url(#spec-glow-cyan)" />

                <!-- shuttle flight -->
                <path id="spectate-shuttle-path" d="M ${w},${b} Q ${M},${E} ${v},${x}" class="svg-shuttle-path" />
                <circle r="5" class="svg-shuttle" filter="url(#spec-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#spectate-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${l===m?"server":l===g?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${$(l)}" />
                  <text x="0" y="4" class="avatar-text">${y(l)}</text>
                  ${T(l)}
                </g>
                <text x="90" y="383" class="svg-player-name ${S(l)} font-bold">${l.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${n===m?"server":n===g?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${$(n)}" />
                  <text x="0" y="4" class="avatar-text">${y(n)}</text>
                  ${T(n)}
                </g>
                <text x="210" y="383" class="svg-player-name ${S(n)} font-bold">${n.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${o===m?"server":o===g?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${$(o)}" />
                  <text x="0" y="4" class="avatar-text">${y(o)}</text>
                  ${T(o)}
                </g>
                <text x="90" y="123" class="svg-player-name ${S(o)} font-bold">${o.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${d===m?"server":d===g?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${$(d)}" />
                  <text x="0" y="4" class="avatar-text">${y(d)}</text>
                  ${T(d)}
                </g>
                <text x="210" y="123" class="svg-player-name ${S(d)} font-bold">${d.split(" ")[0]}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("spectate-btn-close").onclick=()=>{e.classList.add("hidden"),e.innerHTML="",this.activeSpectateMatchId=null}}}window.addEventListener("DOMContentLoaded",()=>{new z});
