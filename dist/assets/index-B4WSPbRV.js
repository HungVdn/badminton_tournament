(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const D=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],B=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],H=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],R={vi:{title:" GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Quy Định và Thông Tin Giải Đấu",sections:[{id:"categories",title:"I. Nội dung thi đấu",content:["• Đôi nam nữ","• Đôi nam nam","• Tổng cộng: 10 đội - 20 người chơi"]},{id:"schedule",title:"II. Thời gian & Địa điểm",content:["• Ngày thi đấu: 31 May 2026","• Địa điểm: Sân cầu lông Beta Era"]},{id:"prizes",title:"III. Giải thưởng",content:["🏆 Giải Nhất: 2,000,000 VND + Cúp Vô Địch","🥈 Giải Nhì: 1,500,000 VND","🥉 Giải Ba: 1,000,000 VND"]},{id:"regulations",title:"IV. Thể thức thi đấu",content:["• **Vòng loại**: Thi đấu vòng tròn tính điểm (Round-Robin). Top 4 đội của mỗi hạng mục bước vào bán kết.","• **Vòng bán kết**: Đấu loại trực tiếp để chọn ra Top 2 team vào chung kết.","• **Vòng chung kết**: Đấu loại trực tiếp để chọn ra Top 1 Vô Địch Mùa Giải.","• **Điểm số ván đấu**:","  - Vòng loại: BO3 - thi đấu đến 15 điểm mỗi hiệp.","  - Bán kết & Chung kết: BO3 - thi đấu đến 21 điểm mỗi hiệp.","  - Nếu tỷ số là 20 đều (hoặc 14 đều ở 15 điểm), bên nào ghi trước 2 điểm cách biệt sẽ thắng ván đó.","  - Nếu tỷ số đạt đến 29 đều (hoặc 20 đều ở 15 điểm), bên nào ghi điểm thứ 30 (hoặc 21) trước sẽ thắng ván đó.","• **Cách tính điểm xếp hạng vòng bảng**:","  - Thắng: +1 điểm xếp hạng. Thua: +0 điểm xếp hạng.","  - Thứ tự ưu tiên khi xếp hạng: (1) Điểm số xếp hạng $\\rightarrow$ (2) Hiệu số hiệp (Set) thắng - thua $\\rightarrow$ (3) Đối đầu trực tiếp (Head-to-head) $\\rightarrow$ (4) Hiệu số tổng điểm thắng - điểm thua $\\rightarrow$ (5) Bốc thăm."]},{id:"rules",title:"V. Luật thi đấu đánh đôi",content:["• Áp dụng Luật Cầu lông Quốc tế của BWF.","• **Giao cầu & Nhận cầu**:","  - Khi điểm bên giao phát cầu là **chẵn** (0, 2, 4, 6,...), người giao cầu sẽ đứng ở ô giao cầu bên **phải** của họ và giao chéo sang ô nhận bên phải đối phương.","  - Khi điểm bên giao phát cầu là **lẻ** (1, 3, 5, 7,...), người giao cầu sẽ đứng ở ô giao cầu bên **trái** của họ và giao chéo sang ô nhận bên trái đối phương.","  - VĐV của bên nhận cầu đứng chéo đối diện với VĐV phát cầu sẽ là người nhận cầu.","  - Chỉ có người nhận cầu được quyền đánh trả cầu phát. Nếu đồng đội của họ chạm vào cầu trước, bên phát cầu được cộng 1 điểm.","• **Vị trí đứng đổi chỗ**:","  - Hai VĐV chỉ đổi chỗ bên trái-phải cho nhau khi bên họ **giao cầu và giành được điểm**.","  - Nếu bên nhận cầu giành được điểm, vị trí đứng của cả hai đội giữ nguyên và quyền giao cầu chuyển sang cho họ mà không đổi chỗ."]},{id:"intervals",title:"VI. Thời gian nghỉ & Lỗi hành vi",content:["• Khi một bên ghi được 11 điểm (hoặc 8 điểm ở hiệp 15 điểm) trước, thời gian nghỉ giữa hiệp đấu không quá 60 giây.","• Thời gian nghỉ giữa các hiệp 1, 2 và 3 không quá 2 phút.","• Trận đấu phải diễn ra liên tục. Các lỗi hành vi, câu giờ có thể bị trọng tài nhắc nhở hoặc phạt điểm."]}]},en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Beta Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class G{constructor(){this.players=[],this.teams=[],this.matches=[],this.listeners=[],this.init()}init(){const s=localStorage.getItem("badminton_players"),t=localStorage.getItem("badminton_teams"),i=localStorage.getItem("badminton_matches");this.players=s?JSON.parse(s):[...D],this.teams=t?JSON.parse(t):[...B],this.matches=i?JSON.parse(i):[...H],this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),this.players=[...D],this.teams=[...B],this.matches=[...H],this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}addListener(s){this.listeners.push(s)}notifyListeners(){this.listeners.forEach(s=>s(this))}updateMatchScore(s,t,i,e,r){const a=this.matches.find(n=>n.id===s);return a?(a.sets=t,a.score1=i,a.score2=e,a.status=r,r==="Completed"?a.winner=i>e?a.team1:a.team2:a.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(s){const t=this.teams.filter(a=>a.category===s),i=this.matches.filter(a=>a.category===s&&a.stage==="Group Stage"),e={};t.forEach(a=>{e[a.name]={name:a.name,teamId:a.id,player1:a.player1,player2:a.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),i.forEach(a=>{if(a.status!=="Completed")return;const n=a.team1,l=a.team2;if(!e[n]||!e[l])return;e[n].played+=1,e[l].played+=1;const o=Number(a.score1)||0,m=Number(a.score2)||0;e[n].setsWon+=o,e[n].setsLost+=m,e[l].setsWon+=m,e[l].setsLost+=o,o>m?(e[n].won+=1,e[n].points+=1,e[l].lost+=1):(e[l].won+=1,e[l].points+=1,e[n].lost+=1),a.sets.forEach(u=>{const d=Number(u.t1)||0,p=Number(u.t2)||0;e[n].pointsWon+=d,e[n].pointsLost+=p,e[l].pointsWon+=p,e[l].pointsLost+=d})}),Object.values(e).forEach(a=>{a.netSets=a.setsWon-a.setsLost,a.netPoints=a.pointsWon-a.pointsLost});const r=Object.values(e);return r.sort((a,n)=>{if(n.points!==a.points)return n.points-a.points;if(n.netSets!==a.netSets)return n.netSets-a.netSets;if(r.filter(o=>o.points===a.points&&o.netSets===a.netSets).length===2){const o=i.find(m=>m.status==="Completed"&&(m.team1===a.name&&m.team2===n.name||m.team1===n.name&&m.team2===a.name));if(o){if(o.winner===a.name)return-1;if(o.winner===n.name)return 1}}return n.netPoints!==a.netPoints?n.netPoints-a.netPoints:a.name.localeCompare(n.name)}),r}isGroupStageComplete(s){const t=this.matches.filter(i=>i.category===s&&i.stage==="Group Stage");return t.length>0&&t.every(i=>i.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(t=>{const i=this.isGroupStageComplete(t),e=this.calculateStandings(t),r=i?e[0].name:`1st Place ${t==="Men's Doubles"?"MD":"XD"}`,a=i?e[1].name:`2nd Place ${t==="Men's Doubles"?"MD":"XD"}`,n=i?e[2].name:`3rd Place ${t==="Men's Doubles"?"MD":"XD"}`,l=i?e[3].name:`4th Place ${t==="Men's Doubles"?"MD":"XD"}`,o=t==="Men's Doubles"?"MD":"XD",m=`SF1-${o}`,u=`SF2-${o}`,d=`F-${o}`,p=`B-${o}`;let c=this.matches.find(x=>x.id===m),h=this.matches.find(x=>x.id===u),g=this.matches.find(x=>x.id===d),v=this.matches.find(x=>x.id===p);const $="4:30 - 5:10",w=t==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";c?(c.status!=="Completed"||c.team1&&c.team1.includes("Place")||c.team2&&c.team2.includes("Place"))&&(c.team1=r,c.team2=l):(c={id:m,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:$,team1:r,team2:l,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(c)),h?(h.status!=="Completed"||h.team1&&h.team1.includes("Place")||h.team2&&h.team2.includes("Place"))&&(h.team1=a,h.team2=n):(h={id:u,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:$,team1:a,team2:n,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(h));const M=c.status==="Completed"?c.winner:`Winner SF1 (${o})`,C=c.status==="Completed"?c.winner===c.team1?c.team2:c.team1:`Loser SF1 (${o})`,b=h.status==="Completed"?h.winner:`Winner SF2 (${o})`,y=h.status==="Completed"?h.winner===h.team1?h.team2:h.team1:`Loser SF2 (${o})`;v?(v.status!=="Completed"||v.team1&&v.team1.includes("Loser")||v.team2&&v.team2.includes("Loser"))&&(v.team1=C,v.team2=y):(v={id:p,category:t,stage:"Bronze Match",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:w,team1:C,team2:y,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(v)),g?(g.status!=="Completed"||g.team1&&g.team1.includes("Winner")||g.team2&&g.team2.includes("Winner"))&&(g.team1=M,g.team2=b):(g={id:d,category:t,stage:"Grand Final",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:w,team1:M,team2:b,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(g))})}}class V{constructor(s,t,i,e){if(this.state=s,this.sync=t,this.matchId=i,this.onFinish=e,this.lang=localStorage.getItem("badminton_lang")||"vi",this.match=this.state.matches.find(a=>a.id===i),!this.match)throw new Error(`Match not found: ${i}`);const r=this.match.stage==="Group Stage";this.targetPoints=r?15:21,this.maxPoints=r?21:30,this.team1Obj=this.state.teams.find(a=>a.name===this.match.team1),this.team2Obj=this.state.teams.find(a=>a.name===this.match.team2),this.team1Players=this.team1Obj?[this.team1Obj.player1,this.team1Obj.player2]:["Team A Player 1","Team A Player 2"],this.team2Players=this.team2Obj?[this.team2Obj.player1,this.team2Obj.player2]:["Team B Player 1","Team B Player 2"],this.score1=0,this.score2=0,this.sets=[],this.match.sets&&this.match.sets.length>0&&this.match.status==="Live"&&(this.sets=[...this.match.sets],this.score1=this.match.score1||0,this.score2=this.match.score2||0),this.currentSet=this.sets.length+1,this.servingTeam="A",this.history=[],this.team1Right=this.team1Players[0],this.team1Left=this.team1Players[1],this.team2Right=this.team2Players[0],this.team2Left=this.team2Players[1],this.init()}init(){this.createOverlayContainer(),this.render(),this.sync.broadcast("LIVE_MATCH_START",{matchId:this.matchId,matchState:this.serializeState()})}createOverlayContainer(){if(document.getElementById("umpire-overlay-container"))return;const s=document.createElement("div");s.id="umpire-overlay-container",s.className="umpire-overlay-backdrop",document.body.appendChild(s)}serializeState(){return{sets:[...this.sets,{t1:this.score1,t2:this.score2}],score1:this.score1,score2:this.score2,currentSet:this.currentSet,servingTeam:this.servingTeam,isEven:(this.servingTeam==="A"?this.score1:this.score2)%2===0,serverName:this.getServerName(),partnerName:this.getServerPartnerName(),receiverName:this.getReceiverName(),receiverPartnerName:this.getReceiverPartnerName()}}broadcastUpdate(){const s=this.serializeState();s.matchId=this.matchId,this.sync.broadcast("LIVE_SCORE_UPDATE",s)}getServerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team1Right:this.team1Left:s?this.team2Right:this.team2Left}getServerPartnerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team1Left:this.team1Right:s?this.team2Left:this.team2Right}getReceiverName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team2Right:this.team2Left:s?this.team1Right:this.team1Left}getReceiverPartnerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team2Left:this.team2Right:s?this.team1Left:this.team1Right}saveToHistory(){this.history.push({score1:this.score1,score2:this.score2,sets:JSON.parse(JSON.stringify(this.sets)),currentSet:this.currentSet,servingTeam:this.servingTeam,team1Right:this.team1Right,team1Left:this.team1Left,team2Right:this.team2Right,team2Left:this.team2Left})}undo(){if(this.history.length===0)return;const s=this.history.pop();this.score1=s.score1,this.score2=s.score2,this.sets=s.sets,this.currentSet=s.currentSet,this.servingTeam=s.servingTeam,this.team1Right=s.team1Right,this.team1Left=s.team1Left,this.team2Right=s.team2Right,this.team2Left=s.team2Left,this.render(),this.broadcastUpdate()}addPoint(s){if(this.saveToHistory(),s==="A"){if(this.servingTeam==="A"){const t=this.team1Right;this.team1Right=this.team1Left,this.team1Left=t}this.score1++,this.servingTeam="A"}else{if(this.servingTeam==="B"){const t=this.team2Right;this.team2Right=this.team2Left,this.team2Left=t}this.score2++,this.servingTeam="B"}this.checkSetWinner(),this.render(),this.triggerServeAnimation(),this.broadcastUpdate()}triggerServeAnimation(){const s=document.querySelector(".umpire-court-svg .svg-shuttle");s&&(s.setAttribute("dur","0.7s"),s.innerHTML=`
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `)}checkSetWinner(){const s=this.score1,t=this.score2,i=Math.max(s,t),e=Math.min(s,t),r=i-e;let a=!1;if(i>=this.targetPoints&&(r>=2||i===this.maxPoints)&&(a=!0),a){this.currentSet-1,this.sets.push({t1:s,t2:t});let n=0,l=0;if(this.sets.forEach(o=>{o.t1>o.t2?n++:l++}),n===2||l===2)this.submitMatch(n,l);else{const o=s>t?this.match.team1:this.match.team2;alert(this.lang==="vi"?`Set ${this.currentSet} kết thúc! Đội ${o} thắng set này. Chuẩn bị sang Set ${this.currentSet+1}.`:`Set ${this.currentSet} completed! ${o} won this set. Prepare for Set ${this.currentSet+1}.`),this.score1=0,this.score2=0,this.currentSet++,this.servingTeam=s>t?"A":"B";const m=this.team1Right,u=this.team1Left;this.team1Right=this.team2Right,this.team1Left=this.team2Left,this.team2Right=m,this.team2Left=u;const d=this.team1Players;this.team1Players=this.team2Players,this.team2Players=d}}}submitMatch(s,t){const i=s>t?this.match.team1:this.match.team2;this.state.updateMatchScore(this.matchId,this.sets,s,t,"Completed"),this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1),alert(this.lang==="vi"?`Trận đấu KẾT THÚC! Đội ${i} giành chiến thắng chung cuộc!`:`Match COMPLETED! ${i} won the match!`),this.close()}close(){this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1);const s=document.getElementById("umpire-overlay-container");s&&(s.classList.add("hidden"),s.innerHTML=""),this.onFinish&&this.onFinish()}toggleServe(){this.saveToHistory(),this.servingTeam=this.servingTeam==="A"?"B":"A",this.render(),this.broadcastUpdate()}swapPlayers(s){if(this.saveToHistory(),s==="1"){const t=this.team1Right;this.team1Right=this.team1Left,this.team1Left=t}else{const t=this.team2Right;this.team2Right=this.team2Left,this.team2Left=t}this.render(),this.broadcastUpdate()}render(){const s=document.getElementById("umpire-overlay-container");if(!s)return;s.classList.remove("hidden");const t=this.lang==="vi";this.getServerName(),this.getReceiverName();const i=(this.servingTeam==="A"?this.score1:this.score2)%2===0,e=this.servingTeam==="A"?i?210:90:i?90:210,r=this.servingTeam==="A"?385:115;this.servingTeam,this.servingTeam;const a=this.servingTeam==="A"?i?90:210:i?210:90,n=this.servingTeam==="A"?115:385;this.servingTeam,this.servingTeam;const l=this.servingTeam==="A"?i?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":i?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",o=this.servingTeam==="A"?i?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z":i?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",m=(e+a)/2+30,u=(r+n)/2-40,d=this.sets.map((p,c)=>`
      <div class="umpire-set-badge">
        <span>Set ${c+1}:</span>
        <strong>${p.t1} - ${p.t2}</strong>
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
          <h2 class="text-sm font-black m-0 text-glow-volt">${t?"BÀN TRỌNG TÀI ĐIỀU PHỐI":"UMPIRE CONTROL PANEL"}</h2>
          <button class="btn btn-xs btn-neutral" id="umpire-btn-close">✕ ${t?"Thoát Sân":"Exit"}</button>
        </div>

        <!-- Scores and Set layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <!-- Umpire Controls Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets review -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${d}
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
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">${t?"CỘNG ĐIỂM ❶":"ADD POINT ❶"}</span>
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
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">${t?"CỘNG ĐIỂM ❷":"ADD POINT ❷"}</span>
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
                  ↩ ${t?"Hoàn Tác (Undo)":"Undo Action"}
                </button>
              </div>
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold flex items-center justify-center gap-1.5" id="umpire-btn-serve">
                  🏸 ${t?"Đổi Lượt Giao":"Toggle Serve"}
                </button>
              </div>
              <div class="text-center text-4xs text-slate-400 font-semibold flex flex-col items-center justify-center border-l border-slate-800">
                <div>${t?"Giao cầu thuộc về:":"Current Serve:"}</div>
                <div class="font-extrabold text-volt mt-1 text-2xs uppercase">${this.servingTeam==="A"?"Team 1":"Team 2"}</div>
              </div>
            </div>
          </div>

          <!-- Umpire Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">${t?"VỊ TRÍ ĐỨNG SÂN THỰC TẾ (BWF)":"ACTUAL PLAYER POSITIONS ON COURT"}</h4>
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
                <path d="${l}" class="svg-highlight-box serving" filter="url(#ump-glow-volt)" />
                <path d="${o}" class="svg-highlight-box receiving" filter="url(#ump-glow-cyan)" />

                <!-- Flight Arrow path -->
                <path id="umpire-shuttle-path" d="M ${e},${r} Q ${m},${u} ${a},${n}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Rendering Player Avatars depending on active sides -->
                <!-- Bottom side (Team A) -->
                <g class="player-avatar ${this.servingTeam==="A"?"server":"partner"}">
                  <circle cx="${this.servingTeam==="A"?i?210:90:i?90:210}" 
                          cy="385" r="13" class="avatar-bg ${this.servingTeam==="A"?"volt":"neutral"}" />
                  <text x="${this.servingTeam==="A"?i?210:90:i?90:210}" 
                        y="389" class="avatar-text">${this.servingTeam==="A"?"S":"P"}</text>
                </g>
                <text x="${i?210:90}" y="415" class="svg-player-name text-slate-200 font-bold">${(i?this.team1Right:this.team1Left).split(" ")[0]}</text>

                <g class="player-avatar ${this.servingTeam==="A"?"partner":"server"}">
                  <circle cx="${this.servingTeam==="A"?i?90:210:i?210:90}" 
                          cy="440" r="11" class="avatar-bg neutral" />
                  <text x="${this.servingTeam==="A"?i?90:210:i?210:90}" 
                        y="444" class="avatar-text">P</text>
                </g>
                <text x="${i?90:210}" y="468" class="svg-player-name text-muted">${(i?this.team1Left:this.team1Right).split(" ")[0]}</text>

                <!-- Top side (Team B) -->
                <g class="player-avatar ${this.servingTeam==="B"?"server":"receiver"}">
                  <circle cx="${this.servingTeam==="B",i?90:210}" 
                          cy="115" r="13" class="avatar-bg ${this.servingTeam==="B"?"volt":"cyan"}" />
                  <text x="${this.servingTeam==="B",i?90:210}" 
                        y="119" class="avatar-text">${this.servingTeam==="B"?"S":"R"}</text>
                </g>
                <text x="${i?90:210}" y="95" class="svg-player-name text-slate-200 font-bold">${(i?this.team2Right:this.team2Left).split(" ")[0]}</text>

                <g class="player-avatar ${this.servingTeam==="B","partner"}">
                  <circle cx="${this.servingTeam==="B",i?210:90}" 
                          cy="60" r="11" class="avatar-bg neutral" />
                  <text x="${this.servingTeam==="B",i?210:90}" 
                        y="64" class="avatar-text">P</text>
                </g>
                <text x="${i?210:90}" y="42" class="svg-player-name text-muted">${(i?this.team2Left:this.team2Right).split(" ")[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (0,2,4) and **Left** on Odd (1,3,5). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("umpire-btn-close").onclick=()=>{confirm(t?"Bạn có muốn dừng điều phối trận này không? Trạng thái Live sẽ bị hủy.":"Do you want to exit the scoring room? The live status will be suspended.")&&this.close()},document.getElementById("umpire-add-a").onclick=()=>this.addPoint("A"),document.getElementById("umpire-add-b").onclick=()=>this.addPoint("B"),document.getElementById("umpire-btn-serve").onclick=()=>this.toggleServe(),document.getElementById("umpire-btn-undo").onclick=()=>this.undo(),document.getElementById("umpire-swap-players-1").onclick=()=>this.swapPlayers("1"),document.getElementById("umpire-swap-players-2").onclick=()=>this.swapPlayers("2")}}class O{constructor(s,t,i){this.state=s,this.onUpdate=t,this.sync=i,this.isAdmin=!1,this.isRef=!1,this.refPitch="",this.activeMatchId=null,this.lang="vi",this.passkeys={admin2026:{role:"admin",label:"Super Admin"},ref15:{role:"ref",pitch:"Pitch 15",label:"Pitch 15 Umpire"},ref16:{role:"ref",pitch:"Pitch 16",label:"Pitch 16 Umpire"},ref20:{role:"ref",pitch:"Pitch 20",label:"Pitch 20 Umpire"},ref21:{role:"ref",pitch:"Pitch 21",label:"Pitch 21 Umpire"}},this.init()}setLanguage(s){this.lang=s}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.isRef=sessionStorage.getItem("badminton_isRef")==="true",this.refPitch=sessionStorage.getItem("badminton_refPitch")||"",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const s=document.createElement("div");if(s.id="score-modal-container",s.className="modal-backdrop hidden",document.body.appendChild(s),document.getElementById("admin-modal-container"))return;const t=document.createElement("div");t.id="admin-modal-container",t.className="modal-backdrop hidden",document.body.appendChild(t)}setupAdminToggleListener(){document.body.addEventListener("click",s=>{s.target.closest("#btn-toggle-admin")&&(this.isAdmin||this.isRef?this.logout():this.showAdminLogin());const i=s.target.closest(".btn-edit-match");if(i){const r=i.getAttribute("data-match-id"),a=this.state.matches.find(n=>n.id===r);if(!a)return;this.isAdmin||this.isRef&&a.pitch===this.refPitch?this.openScoreModal(r):this.showToast(this.lang==="vi"?"Bạn không có quyền chỉnh sửa trận đấu ở sân này!":"You are not authorized to edit matches on this pitch!","info")}const e=s.target.closest(".btn-join-match");if(e){const r=e.getAttribute("data-match-id"),a=this.state.matches.find(n=>n.id===r);if(!a)return;this.isAdmin||this.isRef&&a.pitch===this.refPitch?this.openUmpireConsole(r):this.showToast(this.lang==="vi"?"Bạn không có quyền trọng tài ở sân này!":"You are not authorized to umpire on this pitch!","info")}})}openUmpireConsole(s){this.sync&&new V(this.state,this.sync,s,()=>{this.onUpdate()})}logout(){this.isAdmin=!1,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),this.onUpdate();const s=this.lang==="vi"?"Đã đăng xuất tài khoản!":"Logged out successfully!";this.showToast(s,"info")}showAdminLogin(){const s=document.getElementById("admin-modal-container");if(!s)return;const t=this.lang==="vi"?"Đăng Nhập Cổng Điều Hợp":"Portal Login",i=this.lang==="vi"?"Nhập mã truy cập Admin hoặc mã Trọng tài (e.g. ref15, ref16...):":"Enter Admin or Umpire passkey (e.g., ref15, ref16, admin2026):",e=this.lang==="vi"?"Mã bảo mật":"Passkey",r=this.lang==="vi"?"Đăng Nhập":"Login",a=this.lang==="vi"?"Hủy":"Cancel";s.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${t}</h3>
        <p class="modal-desc">${i}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${e}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${a}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${r}</button>
        </div>
      </div>
    `,s.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>s.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=n=>{n.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const s=document.getElementById("admin-passkey-input"),t=document.getElementById("admin-login-error");if(!s||!t)return;const i=s.value,e=this.passkeys[i];if(e){e.role==="admin"?(this.isAdmin=!0,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","true"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch")):(this.isRef=!0,this.isAdmin=!1,this.refPitch=e.pitch,sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","true"),sessionStorage.setItem("badminton_refPitch",e.pitch)),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const r=this.lang==="vi"?`Đăng nhập thành công! Quyền: ${e.label}.`:`Login success! Role: ${e.label}.`;this.showToast(r,"success")}else t.textContent=this.lang==="vi"?"Mã bảo mật không đúng. Hãy thử lại.":"Incorrect passkey. Please try again.",t.classList.remove("hidden"),s.classList.add("input-error"),s.focus()}openScoreModal(s){this.activeMatchId=s;const t=this.state.matches.find(S=>S.id===s);if(!t)return;const i=document.getElementById("score-modal-container");if(!i)return;const e=t.stage==="Group Stage",r=e?15:21,a=e?21:30,n=this.lang==="vi"?"Nhập Điểm Trận Đấu":"Match Score Editor",l=(this.lang==="vi","Set"),o=t.team1,m=t.team2,u=this.lang==="vi"?"Lưu Kết Quả":"Save Score",d=this.lang==="vi"?"Hủy":"Cancel",p=this.lang==="vi"?"Xóa Điểm":"Clear Score",c=t.sets[0]?t.sets[0].t1:"",h=t.sets[0]?t.sets[0].t2:"",g=t.sets[1]?t.sets[1].t1:"",v=t.sets[1]?t.sets[1].t2:"",$=t.sets[2]?t.sets[2].t1:"",w=t.sets[2]?t.sets[2].t2:"";i.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${n}</h3>
          <span class="badge ${e?"bg-indigo":"bg-purple"}">${t.stage} (${r} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">${this.lang==="vi"?"Đội 1":"Team 1"}</div>
          <div>VS</div>
          <div class="col-span-2 text-right">${this.lang==="vi"?"Đội 2":"Team 2"}</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${o}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${m}</div>
        </div>

        <form id="score-form" class="space-y-4">
          <!-- Set 1 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${a}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${c}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${a}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${h}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${a}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${g}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${a}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${v}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${a}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${$}" />
            </div>
            <div class="text-center font-bold text-muted">${l} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${a}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${w}" />
            </div>
          </div>

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${p}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${d}</button>
              <button type="submit" class="btn btn-primary">${u}</button>
            </div>
          </div>
        </form>
      </div>
    `,i.classList.remove("hidden");const M=document.getElementById("s1-t1"),C=document.getElementById("s1-t2"),b=document.getElementById("s2-t1"),y=document.getElementById("s2-t2"),x=document.getElementById("s3-t1"),T=document.getElementById("s3-t2"),P=document.getElementById("s3-row"),L=()=>{const S=this.validateSetScore(Number(M.value),Number(C.value),r),f=this.validateSetScore(Number(b.value),Number(y.value),r);S.valid&&f.valid?S.winner===f.winner?(P.classList.add("opacity-40"),x.disabled=!0,T.disabled=!0,x.value="",T.value="",x.removeAttribute("required"),T.removeAttribute("required")):(P.classList.remove("opacity-40"),x.disabled=!1,T.disabled=!1,x.setAttribute("required","required"),T.setAttribute("required","required")):(P.classList.add("opacity-40"),x.disabled=!0,T.disabled=!0,x.value="",T.value="",x.removeAttribute("required"),T.removeAttribute("required"))};[M,C,b,y].forEach(S=>{S.addEventListener("input",L)}),L(),document.getElementById("btn-cancel-score").onclick=()=>i.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(s),document.getElementById("score-form").onsubmit=S=>{S.preventDefault(),this.handleSaveScore(t,r)}}validateSetScore(s,t,i){if(isNaN(s)||isNaN(t))return{valid:!1};if(s<0||t<0)return{valid:!1};const e=Math.max(s,t),r=Math.min(s,t),a=e-r,n=s>t?1:2;if(e<i)return{valid:!1};if(e===i&&a>=2)return{valid:!0,winner:n};const l=i===15?21:30;if(e>i){if(a===2&&e<l)return{valid:!0,winner:n};if(e===l&&a===1)return{valid:!0,winner:n}}return{valid:!1}}handleClearScore(s){confirm(this.lang==="vi"?"Bạn có chắc chắn muốn xóa điểm trận này không?":"Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(s,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã xóa điểm trận đấu.":"Match score cleared.","info"))}handleSaveScore(s,t){const i=Number(document.getElementById("s1-t1").value),e=Number(document.getElementById("s1-t2").value),r=Number(document.getElementById("s2-t1").value),a=Number(document.getElementById("s2-t2").value),n=document.getElementById("s3-t1"),l=document.getElementById("s3-t2"),o=document.getElementById("score-error-msg"),m=this.validateSetScore(i,e,t);if(!m.valid){this.showInputError(o,this.lang==="vi"?`Set 1 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm (hoặc chạm mốc giới hạn ${t===15?21:30} điểm).`:`Set 1 is invalid. Winner must reach ${t} and lead by 2, or reach cap limit of ${t===15?21:30} points.`);return}const u=this.validateSetScore(r,a,t);if(!u.valid){this.showInputError(o,this.lang==="vi"?`Set 2 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm.`:`Set 2 is invalid. Winner must reach at least ${t} and lead by 2.`);return}const d=[{t1:i,t2:e},{t1:r,t2:a}];let p=(m.winner===1?1:0)+(u.winner===1?1:0),c=(m.winner===2?1:0)+(u.winner===2?1:0);if(p===1&&c===1){const h=Number(n.value),g=Number(l.value),v=this.validateSetScore(h,g,t);if(!v.valid){this.showInputError(o,this.lang==="vi"?"Tỉ số Set 1 & 2 là hòa 1-1. Bạn phải nhập thông tin Set 3 hợp lệ.":"Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.");return}d.push({t1:h,t2:g}),v.winner===1?p++:c++}p>c?s.team1:s.team2,this.state.updateMatchScore(s.id,d,p,c,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã cập nhật kết quả thành công!":"Score updated successfully!","success")}showInputError(s,t){s.textContent=t,s.classList.remove("hidden")}showToast(s,t="success"){const i=document.createElement("div");i.className=`toast-alert toast-${t}`,i.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${t==="success"?"✓":t==="info"?"ℹ":"⚠"}</span>
        <span>${s}</span>
      </div>
    `,document.body.appendChild(i),setTimeout(()=>i.classList.add("show"),10),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),300)},3e3)}}class _{constructor(s){this.container=document.getElementById(s),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="vi",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(s){this.lang=s,this.render()}setScoreParity(s){this.isEven=s,this.render()}setTeams(s,t){this.teamAPlayers=s,this.teamBPlayers=t,this.render()}init(){this.container&&this.render()}render(){var P,L,S,f;if(!this.container)return;const s=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],t=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],i=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],e=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],r=this.lang==="vi"?"Điểm Chẵn (0, 2, 4...)":"Even Score (0, 2, 4...)",a=this.lang==="vi"?"Điểm Lẻ (1, 3, 5...)":"Odd Score (1, 3, 5...)",n=this.lang==="vi"?"Mô Phỏng Luật Giao Cầu Đôi":"Doubles Service Simulator",l=this.lang==="vi"?`Đội giao cầu (Phía dưới) có điểm số **${this.isEven?"CHẴN":"LẺ"}**:`:`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,o=this.lang==="vi"?`<ul>
          <li><strong>Người giao cầu:</strong> <span class="highlight-volt">${s}</span> giao cầu từ ô bên <strong>${this.isEven?"PHẢI":"TRÁI"}</strong>.</li>
          <li><strong>Người nhận cầu:</strong> <span class="highlight-cyan">${i}</span> đứng ô đối diện nhận cầu.</li>
          <li><strong>Vùng cầu hợp lệ:</strong> Ô giao cầu đôi (rộng hơn nhưng ngắn hơn vùng giao đơn) được tô viền sáng.</li>
         </ul>`:`<ul>
          <li><strong>Server:</strong> <span class="highlight-volt">${s}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
          <li><strong>Receiver:</strong> <span class="highlight-cyan">${i}</span> stands in the diagonal court to receive.</li>
          <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
         </ul>`,m=this.isEven?210:90,u=385,d=this.isEven?90:210,p=440,c=this.isEven?90:210,h=115,g=this.isEven?210:90,v=60,$=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",w=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",M=m,C=u-10,b=c,y=h+10,x=(M+b)/2+30,T=(C+y)/2-40;this.container.innerHTML=`
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
              <path d="${w}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${M},${C} Q ${x},${T} ${b},${y}" class="svg-shuttle-path" />
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
                <circle cx="${m}" cy="${u}" r="14" class="avatar-bg volt" />
                <text x="${m}" y="${u+4}" class="avatar-text">S</text>
              </g>
              <text x="${m}" y="${u+28}" class="svg-player-name text-volt">${s.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${d}" cy="${p}" r="12" class="avatar-bg neutral" />
                <text x="${d}" y="${p+4}" class="avatar-text">P</text>
              </g>
              <text x="${d}" y="${p+26}" class="svg-player-name text-muted">${t.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${c}" cy="${h}" r="14" class="avatar-bg cyan" />
                <text x="${c}" y="${h+4}" class="avatar-text">R</text>
              </g>
              <text x="${c}" y="${h-20}" class="svg-player-name text-cyan">${i.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${g}" cy="${v}" r="12" class="avatar-bg neutral" />
                <text x="${g}" y="${v+4}" class="avatar-text">P</text>
              </g>
              <text x="${g}" y="${v-18}" class="svg-player-name text-muted">${e.split(" ")[0]}</text>
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
                  ${a}
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
    `,(P=document.getElementById("sim-btn-even"))==null||P.addEventListener("click",()=>this.setScoreParity(!0)),(L=document.getElementById("sim-btn-odd"))==null||L.addEventListener("click",()=>this.setScoreParity(!1)),(S=document.getElementById("svg-click-right"))==null||S.addEventListener("click",()=>this.setScoreParity(!0)),(f=document.getElementById("svg-click-left"))==null||f.addEventListener("click",()=>this.setScoreParity(!1))}}class F{constructor(s,t){this.state=s,this.onRemoteUpdate=t,this.channelName="badminton_live_sync",this.channel=null,this.init()}init(){try{this.channel=new BroadcastChannel(this.channelName),this.channel.onmessage=s=>this.handleMessage(s.data)}catch(s){console.warn("BroadcastChannel not supported in this browser. Falling back to storage event listeners.",s),window.addEventListener("storage",t=>{if(t.key==="badminton_live_sync_fallback")try{const i=JSON.parse(t.newValue);this.handleMessage(i)}catch(i){console.error("Failed to parse fallback storage sync message",i)}})}}getLiveMatches(){const s=localStorage.getItem("badminton_live_matches");return s?JSON.parse(s):{}}saveLiveMatches(s){localStorage.setItem("badminton_live_matches",JSON.stringify(s))}broadcast(s,t){const i={type:s,payload:t,timestamp:Date.now()};this.channel&&this.channel.postMessage(i),localStorage.setItem("badminton_live_sync_fallback",JSON.stringify(i))}handleMessage(s){if(!s||!s.type||!s.payload)return;const{type:t,payload:i}=s;switch(t){case"LIVE_SCORE_UPDATE":this.applyLiveUpdate(i);break;case"LIVE_MATCH_START":this.setMatchLiveStatus(i.matchId,!0,i.matchState);break;case"LIVE_MATCH_END":this.setMatchLiveStatus(i.matchId,!1);break;case"LIVE_MOCK_TOGGLE":i.enabled?localStorage.setItem("badminton_demo_mock_active","true"):localStorage.removeItem("badminton_demo_mock_active"),this.onRemoteUpdate&&this.onRemoteUpdate("MOCK_TOGGLE",i);break}}setMatchLiveStatus(s,t,i=null){const e=this.getLiveMatches();t?e[s]={matchId:s,isLive:!0,updatedAt:Date.now(),...i||{}}:delete e[s],this.saveLiveMatches(e),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:s,isLive:t})}applyLiveUpdate(s){const{matchId:t,sets:i,score1:e,score2:r,currentSet:a,servingTeam:n,isEven:l,serverName:o,partnerName:m,receiverName:u,receiverPartnerName:d}=s,p=this.getLiveMatches();p[t]={matchId:t,isLive:!0,updatedAt:Date.now(),sets:i,score1:e,score2:r,currentSet:a,servingTeam:n,isEven:l,serverName:o,partnerName:m,receiverName:u,receiverPartnerName:d},this.saveLiveMatches(p);const c=this.state.matches.find(h=>h.id===t);c&&(c.sets=i,c.score1=e,c.score2=r,c.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",s)}}class j{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const s=()=>this.resize();window.addEventListener("resize",s),this.resizeHandler=s;for(let i=0;i<120;i++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const t=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let i=0;this.particles.forEach(e=>{e.tiltAngle+=e.tiltAngleIncremental,e.y+=e.speed,e.x+=Math.sin(e.tiltAngle)*.5,e.tilt=Math.sin(e.tiltAngle-e.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=e.r,this.ctx.strokeStyle=e.color,this.ctx.moveTo(e.x+e.tilt+e.r/2,e.y),this.ctx.lineTo(e.x+e.tilt,e.y+e.tilt+e.r/2),this.ctx.stroke(),e.y<=this.canvas.height&&i++}),i>0?this.animationFrame=requestAnimationFrame(t):this.stop()};t()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class U{constructor(){this.state=new G,this.lang=localStorage.getItem("badminton_lang")||"vi",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new j,this.countdownTimer=null,this.activeSpectateMatchId=null,this.demoInterval=null,this.sync=new F(this.state,(s,t)=>this.handleSyncUpdate(s,t)),this.admin=new O(this.state,()=>this.handleStateChange(),this.sync),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),localStorage.getItem("badminton_demo_mock_active")==="true"&&this.startDemoSimulation(),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(e=>{e.addEventListener("click",r=>{const a=r.currentTarget.getAttribute("data-tab");a&&this.switchTab(a)})}),window.addEventListener("resize",()=>this.updateActivePill());const t=document.getElementById("btn-lang-toggle");t&&t.addEventListener("click",()=>{this.lang=this.lang==="vi"?"en":"vi",localStorage.setItem("badminton_lang",this.lang),this.admin.setLanguage(this.lang),this.courtSimulator&&this.courtSimulator.setLanguage(this.lang),this.translateStaticElements(),this.renderActiveView(),this.updateNavbar()});const i=document.getElementById("btn-reset-db");i&&i.addEventListener("click",()=>{this.admin.isAdmin&&confirm(this.lang==="vi"?"CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ dữ liệu giải đấu về trạng thái ban đầu. Bạn có muốn tiếp tục?":"WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast(this.lang==="vi"?"Đã thiết lập lại dữ liệu!":"Database reset to default!","success"))}),document.body.addEventListener("change",e=>{const r=e.target.closest("#demo-mock-switch");r&&this.toggleDemoSimulation(r.checked)}),document.body.addEventListener("click",e=>{const r=e.target.closest(".btn-spectate-match");if(r){const a=r.getAttribute("data-match-id");this.openSpectateOverlay(a)}})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(s){this.activeTab=s,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(i=>{i.getAttribute("data-tab")===s?i.classList.add("active"):i.classList.remove("active")}),this.renderActiveView(),s==="rules"&&setTimeout(()=>{this.courtSimulator=new _("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const i=this.state.teams.filter(r=>r.category==="Men's Doubles")[0],e=this.state.teams.filter(r=>r.category==="Mixed's Doubles")[0];i&&e&&this.courtSimulator.setTeams([i.player1,i.player2],[e.player1,e.player2])},50),this.updateActivePill()}updateActivePill(){const s=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),t=document.querySelector(".nav-tabs-wrapper");if(!t)return;let i=document.querySelector(".nav-active-pill");i||(i=document.createElement("div"),i.className="nav-active-pill",t.appendChild(i)),s&&(i.style.width=`${s.offsetWidth}px`,i.style.transform=`translateX(${s.offsetLeft}px)`)}translateStaticElements(){const s=this.lang==="vi",t={dashboard:s?"🏠 Bảng Tin":"🏠 Dashboard",standings:s?"📊 Xếp Hạng":"📊 Standings",fixtures:s?"📅 Lịch Thi Đấu":"📅 Fixtures",bracket:s?"🌳 Sơ Đồ Cây":"🌳 Bracket",results:s?"🏆 Bảng Vàng":"🏆 Final Results",rules:s?"📘 Luật Đánh Đôi":"📘 Doubles Rules",teams:s?"👥 Đội Chơi":"👥 Teams"};Object.keys(t).forEach(e=>{const r=document.querySelector(`.nav-tab[data-tab="${e}"] span`);r&&(r.textContent=t[e])});const i=document.querySelector("#btn-lang-toggle span");i&&(i.textContent=s?"ENGLISH":"TIẾNG VIỆT")}updateNavbar(){const s=this.lang==="vi",t=document.getElementById("btn-toggle-admin"),i=document.getElementById("btn-reset-db");t&&(this.admin.isAdmin?(t.innerHTML=`🛡️ ${s?"Thoát Admin":"Exit Admin"}`,t.classList.remove("btn-outline"),t.classList.add("btn-danger"),i&&i.classList.remove("hidden")):(t.innerHTML=`🔐 ${s?"Đăng Nhập Admin":"Admin Login"}`,t.classList.remove("btn-danger"),t.classList.add("btn-outline"),i&&i.classList.add("hidden")))}renderActiveView(){const s=document.getElementById("main-view-container");if(s)switch(s.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(s);break;case"standings":this.renderStandings(s);break;case"fixtures":this.renderFixtures(s);break;case"bracket":this.renderBracket(s);break;case"results":this.renderResults(s);break;case"rules":this.renderRules(s);break;case"teams":this.renderTeams(s);break}}renderDashboard(s){var m,u;const t=this.lang==="vi",i=this.state.matches.length,e=this.state.matches.filter(d=>d.status==="Completed").length,r=i>0?Math.round(e/i*100):0;let a=0;this.state.matches.forEach(d=>{d.status==="Completed"&&d.sets.forEach(p=>{a+=p.t1+p.t2})});const n=t?"GIẢI VÔ ĐỊCH CẦU LÔNG GEAR GAMES 2026":"GEAR GAMES BADMINTON CHAMPIONSHIP 2026",l=t?"Hệ thống cập nhật xếp hạng, tỷ số & sơ đồ trực tiếp":"Live standings, schedule fixtures & bracket generator",o=t?"THỜI GIAN KHAI MẠC":"COUNTDOWN TO TOURNAMENT";s.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${n}</h1>
        <p class="hero-subtitle">${l}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${o}</div>
          <div class="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            <div class="countdown-box">
              <span id="cd-days" class="cd-num">00</span>
              <span class="cd-lbl">${t?"Ngày":"Days"}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-hours" class="cd-num">00</span>
              <span class="cd-lbl">${t?"Giờ":"Hrs"}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-minutes" class="cd-num">00</span>
              <span class="cd-lbl">${t?"Phút":"Mins"}</span>
            </div>
            <div class="countdown-box">
              <span id="cd-seconds" class="cd-num">00</span>
              <span class="cd-lbl">${t?"Giây":"Secs"}</span>
            </div>
          </div>
          <div class="text-xs text-muted mt-3">⚡ 31 May 2026 @ 13:30 | Beta Era court ⚡</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="dashboard-stat-card glass-card border-glow-volt">
          <div class="stat-icon text-volt">🏆</div>
          <div class="stat-info">
            <span class="stat-value">${e}/${i}</span>
            <span class="stat-label">${t?"Trận Đã Đấu":"Matches Completed"}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${r}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${r}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${a}</span>
            <span class="stat-label">${t?"Tổng Điểm Đã Ghi":"Total Points Scored"}</span>
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
            <span class="stat-label">${t?"20 Vận Động Viên":"20 Registered Players"}</span>
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
              ${t?"🔴 TRUNG TÂM SÂN ĐẤU LIVE":"🔴 LIVE COURT TRACKER"}
            </span>
          </h3>
          
          <!-- Simulation switcher -->
          <div class="flex items-center gap-2.5 bg-slate-900/70 px-3 py-1.5 rounded border border-slate-800 text-4xs">
            <span class="font-bold text-slate-400">🤖 ${t?"MÔ PHỎNG LIVE DEMO":"LIVE DEMO MOCK"}</span>
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
            <button class="btn btn-xs btn-outline" id="dash-goto-md">${t?"Xem Chi Tiết":"View Full"}</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Men's Doubles")}
          </div>
        </div>

        <!-- Quick standings XD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-cyan font-bold">🔮 Mixed's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-xd">${t?"Xem Chi Tiết":"View Full"}</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Mixed's Doubles")}
          </div>
        </div>
      </div>
    `,(m=document.getElementById("dash-goto-md"))==null||m.addEventListener("click",()=>this.switchTab("standings")),(u=document.getElementById("dash-goto-xd"))==null||u.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(s){const t=this.state.calculateStandings(s),i=this.lang==="vi";let e=t.slice(0,3).map((r,a)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${a===0?"🥇":a===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${r.name}</td>
          <td class="text-center font-semibold text-volt">${r.points}</td>
          <td class="text-center text-slate-300">${r.played}</td>
          <td class="text-center text-slate-300">${r.netSets>0?"+"+r.netSets:r.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${r.pointsWon}-${r.pointsLost}</td>
        </tr>
      `).join("");return t.length===0&&(e=`<tr><td colspan="6" class="text-center text-muted py-4">${i?"Không có dữ liệu":"No data available"}</td></tr>`),`
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>${i?"Đội Chơi":"Team"}</th>
            <th class="text-center">${i?"Điểm Win":"Wins"}</th>
            <th class="text-center">${i?"Trận":"Pld"}</th>
            <th class="text-center">${i?"Hiệu Set":"Sets"}</th>
            <th class="text-center">${i?"Tổng Điểm":"Points"}</th>
          </tr>
        </thead>
        <tbody>
          ${e}
        </tbody>
      </table>
    `}renderStandings(s){const t=this.lang==="vi";s.innerHTML=`
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0">📊 ${t?"Bảng Xếp Hạng Giải Đấu":"Tournament Leaderboards"}</h2>
          <p class="view-subtitle">${t?"Cập nhật điểm và phân hạng trực tiếp":"Real-time calculated ranks and tie-breaker statistics"}</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-all">
            ${t?"Tất Cả":"All"}
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(s){const t=this.lang==="vi",i=this.state.calculateStandings(s),e=s==="Men's Doubles",r=e?"text-volt":"text-cyan",a=i.map((n,l)=>{const o=l+1,m=o<=4;this.state.isGroupStageComplete(s);let u=`<span class="rank-circle font-bold ${o===1?"gold":o===2?"silver":o===3?"bronze":""}">${o}</span>`,d="";m?d=`<span class="advance-tag neon-green">${t?"BÁN KẾT":"SEMIS"}</span>`:d=`<span class="advance-tag text-muted">${t?"LOẠI":"OUT"}</span>`;const p=n.played===i.length-1,c=p?`<span class="finished-tag">${t?"Đủ 4 trận":"4 Matches"}</span>`:"";return`
        <tr class="${m?"row-top-4":"row-eliminated"} ${e?"md-row":"xd-row"}">
          <td class="text-center">${u}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${n.name}</span>
              ${d}
              ${c}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${n.player1} & ${n.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${n.points}</td>
          <td class="text-center font-bold ${p?"text-emerald-400":"text-slate-200"}">${n.played}</td>
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
          <span>${e?"💎":"🔮"}</span>
          <span class="${r}">${s}</span>
          <span class="badge bg-slate-800 text-slate-400 text-xs font-normal ml-2">Qualifying Stage</span>
        </h3>
        
        <div class="overflow-x-auto">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="text-center" style="width: 60px;">#</th>
                <th>${t?"Đội Chơi / Thành Viên":"Team / Members"}</th>
                <th class="text-center">${t?"Tổng Điểm":"Pts"}</th>
                <th class="text-center">${t?"Trận":"Pld"}</th>
                <th class="text-center">${t?"Thắng":"Won"}</th>
                <th class="text-center">${t?"Thua":"Lost"}</th>
                <th class="text-center">${t?"Hiệu Số Ván":"Sets (Net)"}</th>
                <th class="text-center">${t?"Tổng Điểm Ghi":"Set Pts (Net)"}</th>
              </tr>
            </thead>
            <tbody>
              ${a}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span>${t?"<strong>Quy tắc xếp hạng:</strong> Top 4 đội sẽ tự động giành vé vào Bán Kết. Ưu tiên xét: Thắng ván ➔ Hiệu số hiệp ➔ Đối kháng trực tiếp ➔ Hiệu số điểm.":"<strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points."}
        </div>
      </div>
    `}renderFixtures(s){const t=this.lang==="vi";let i="";this.activeCategoryFilter==="all"?i=`
        <div class="fixtures-grid gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `:this.activeCategoryFilter==="md"?i=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
        </div>
      `:i=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `,s.innerHTML=`
      <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0"><svg class="nav-icon mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px; vertical-align: middle;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${t?"Lịch Thi Đấu & Kết Quả":"Match Schedule & Results"}</h2>
          <p class="view-subtitle">${t?"Theo dõi thời gian, sân thi đấu và tỉ số trực tiếp":"List of scheduled tournament fixtures and match scores"}</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-all">
            ${t?"Tất Cả":"All"}
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
                 placeholder="${t?"Tìm tên đội chơi hoặc vận động viên...":"Search team or player name..."}" 
                 value="${this.fixtureSearchText}">
        </div>

        <div class="filter-pills">
          <button class="filter-pill ${this.fixtureStatusFilter==="all"?"active":""}" data-status="all">
            ${t?"Tất cả trạng thái":"All"}
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Scheduled"?"active":""}" data-status="Scheduled">
            ${t?"Lịch thi đấu":"Scheduled"}
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Completed"?"active":""}" data-status="Completed">
            ${t?"Đã kết thúc":"Completed"}
          </button>
        </div>
      </div>

      ${i}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const e=document.getElementById("fixture-search");e.oninput=a=>{this.fixtureSearchText=a.target.value,this.renderActiveView();const n=document.getElementById("fixture-search");n&&(n.focus(),n.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(a=>{a.onclick=()=>{this.fixtureStatusFilter=a.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(s,t,i){const e=this.state.teams.find(a=>a.name===s),r=this.state.teams.find(a=>a.name===t);return!!(e&&(e.player1.toLowerCase().includes(i)||e.player2.toLowerCase().includes(i))||r&&(r.player1.toLowerCase().includes(i)||r.player2.toLowerCase().includes(i)))}renderCategoryFixtures(s){const t=this.lang==="vi",i=s==="Men's Doubles",e=i?"Men's Doubles":"Mixed's Doubles";let r=this.state.matches.filter(h=>h.category===s);if(this.fixtureStatusFilter!=="all"&&(r=r.filter(h=>h.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const h=this.fixtureSearchText.toLowerCase().trim();r=r.filter(g=>g.team1.toLowerCase().includes(h)||g.team2.toLowerCase().includes(h)||g.stage&&g.stage.toLowerCase().includes(h)||g.pitch&&g.pitch.toLowerCase().includes(h)||this.checkPlayersIncludeSearch(g.team1,g.team2,h))}const a=r.filter(h=>h.stage==="Group Stage"),n=r.filter(h=>h.stage==="Semi-finals"),l=r.filter(h=>h.stage==="Grand Final"),o=r.filter(h=>h.stage==="Bronze Match"),m=t?"TRẬN CHUNG KẾT":"GRAND CHAMPIONSHIP",u=t?"TRANH HẠNG BA":"BRONZE FINALS",d=t?"VÒNG BÁN KẾT":"SEMIFINALS STAGE",p=t?"VÒNG BẢNG XOAY VÒNG":"GROUP STAGE QUALIFYING",c=(h,g)=>h.length===0?"":`
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${i?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${i?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${g}</span>
            <span class="text-slate-600 font-medium">${h.length} ${h.length===1?"Match":"Matches"}</span>
          </div>
          <div class="flex flex-col gap-3">
            ${this.renderMatchCards(h)}
          </div>
        </div>
      `;return`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${i?"💎":"🔮"}</span>
          <span class="${i?"text-volt":"text-cyan"}">${e}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${c(l,m)}
          ${c(o,u)}
          ${c(n,d)}
          ${c(a,p)}
        </div>
      </div>
    `}renderMatchCards(s){const t=this.lang==="vi";if(s.length===0)return`<div class="col-span-2 text-center text-muted py-6">${t?"Không tìm thấy trận đấu nào":"No matches found"}</div>`;const i=this.sync.getLiveMatches();return s.map(e=>{const r=i[e.id],a=!!r,n=e.status==="Completed";e.team1&&(e.team1.includes("Place")||e.team1.includes("Winner")||e.team1.includes("Loser"))||e.team2&&(e.team2.includes("Place")||e.team2.includes("Winner")||e.team2.includes("Loser"));let l="",o="";a?(l="border-glow-volt bg-volt-gradient",o=`
          <span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--danger); color: #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);">
            <span class="live-dot-pulse"></span> ${t?"ĐANG ĐẤU":"LIVE"}
          </span>
        `):e.stage==="Grand Final"?(l="border-glow-gold bg-gold-gradient",o=n?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>${t?"CHUNG KẾT":"GRAND FINAL"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">${t?"CHUNG KẾT":"GRAND FINAL"}</span>`):e.stage==="Bronze Match"?(l="border-glow-bronze bg-bronze-gradient",o=n?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>${t?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">${t?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`):(l=n?"border-completed":"border-scheduled",o=n?`<span class="match-badge completed">${t?"KẾT THÚC":"FINAL"}</span>`:`<span class="match-badge scheduled">${t?"LỊCH HẸN":"SCHEDULED"}</span>`);const m=e.category==="Men's Doubles",u=m?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',d=this.state.teams.find(T=>T.name===e.team1),p=this.state.teams.find(T=>T.name===e.team2),c=d?`${d.player1} & ${d.player2}`:"",h=p?`${p.player1} & ${p.player2}`:"",g=m?"text-volt":"text-cyan";let v="",$="";const w=n?e.sets:a?r.sets:[],M=n?e.score1:a?r.score1:"-",C=n?e.score2:a?r.score2:"-";if((n||a)&&w&&w.length>0){const T=n&&e.winner===e.team1?`<span class="${g}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',P=n&&e.winner===e.team2?`<span class="${g}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';v+=T,$+=P,w.forEach(L=>{v+=`<span class="${L.t1>L.t2?g:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${L.t1}</span>`,$+=`<span class="${L.t2>L.t1?g:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${L.t2}</span>`});for(let L=w.length;L<3;L++)v+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',$+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else v='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',$='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';const b=this.admin.isAdmin||this.admin.isRef&&e.pitch===this.admin.refPitch;let y="";a?y=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <button class="btn btn-xs btn-outline btn-spectate-match flex items-center gap-1" data-match-id="${e.id}">
              🔍 <span>${t?"Xem Live":"Spectate"}</span>
            </button>
            ${b?`
              <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${e.id}">
                Umpire <span>${t?"Vào Sân":"Join"}</span>
              </button>
            `:""}
          </div>
        `:n?y=this.admin.isAdmin?`
          <div class="flex justify-end mt-3 pt-2.5 border-t border-slate-800/80">
            <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${e.id}">
              ✏️ <span>${t?"Sửa Điểm":"Edit Score"}</span>
            </button>
          </div>
        `:"":y=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <div>
              <span class="text-5xs text-slate-500 font-bold uppercase tracking-wider">${t?"CHỜ ĐẤU":"AWAITING"}</span>
            </div>
            <div class="flex gap-2">
              ${b?`
                <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${e.id}">
                  🏸 <span>${t?"Khai Mạc":"Umpire"}</span>
                </button>
              `:""}
              ${this.admin.isAdmin?`
                <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${e.id}">
                  ✏️ <span>${t?"Nhập Điểm":"Direct"}</span>
                </button>
              `:""}
            </div>
          </div>
        `;const x=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${l} ${x}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${u}
              <span>${e.pitch} | ${e.time}</span>
            </div>
            ${o}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${n&&e.winner===e.team1||a&&M>C?g:"text-slate-200"} truncate" title="${e.team1}">
                  ${e.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${c||(t?"Đang xác định":"TBD")}">${c||(t?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${v}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${n&&e.winner===e.team2||a&&C>M?g:"text-slate-200"} truncate" title="${e.team2}">
                  ${e.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${h||(t?"Đang xác định":"TBD")}">${h||(t?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${$}
              </div>
            </div>
          </div>

          <!-- Action Footer -->
          ${y}
        </div>
      `}).join("")}renderBracket(s){const t=this.lang==="vi",i=l=>{const o=l==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(m=>m.id===`SF1-${o}`),sf2:this.state.matches.find(m=>m.id===`SF2-${o}`),f:this.state.matches.find(m=>m.id===`F-${o}`),b:this.state.matches.find(m=>m.id===`B-${o}`)}},e=i("Men's Doubles"),r=i("Mixed's Doubles"),a=l=>this.state.calculateStandings(l).map((m,u)=>{const d=u+1,p=d<=4,c=d===1?"gold":d===2?"silver":d===3?"bronze":"",h=d===1?"🥇 Seed 1":d===2?"🥈 Seed 2":d===3?"🥉 Seed 3":d===4?"🎫 Seed 4":t?"❌ Loại":"❌ Out",g=p?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${m.name}">
              <span class="rank-circle font-bold ${c}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${d}</span>
              <span class="font-bold text-slate-200 truncate">${m.name}</span>
            </div>
            <span class="font-extrabold ${g}" style="font-size: 0.55rem; flex-shrink: 0;">${h}</span>
          </div>
        `}).join(""),n=(l,o,m,u)=>{const d=this.getAwardResults(u),p=c=>{if(!c)return'<div class="bracket-node empty">N/A</div>';const h=c.status==="Completed",g=c.team1&&(c.team1.includes("Place")||c.team1.includes("Winner")||c.team1.includes("Loser"))||c.team2&&(c.team2.includes("Place")||c.team2.includes("Winner")||c.team2.includes("Loser")),v=this.admin.isAdmin?g?`<span title="${t?"Chưa thể nhập điểm":"Cannot edit score yet"}" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>`:`<button class="btn-edit-node-score btn-edit-match" data-match-id="${c.id}">✏️</button>`:"",$=this.state.teams.find(P=>P.name===c.team1),w=this.state.teams.find(P=>P.name===c.team2),M=$?`${$.player1} & ${$.player2}`:"",C=w?`${w.player1} & ${w.player2}`:"",b=m?"text-volt":"text-cyan";let y="",x="";if(h&&c.sets&&c.sets.length>0){const P=c.winner===c.team1?`<span class="${b}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',L=c.winner===c.team2?`<span class="${b}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';y+=P,x+=L,c.sets.forEach(S=>{y+=`<span class="${S.t1>S.t2?b:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${S.t1}</span>`,x+=`<span class="${S.t2>S.t1?b:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${S.t2}</span>`});for(let S=c.sets.length;S<3;S++)y+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',x+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else y='<span style="width: 6px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',x='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';const T=h?`<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ ${t?"Đã kết thúc":"Finished"}</div>`:`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${c.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${h?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${c.pitch} | ${c.stage}</span>
              ${v}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${h&&c.winner===c.team1?b:"text-slate-300"}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${c.team1}">${c.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${M||(t?"Đang xác định":"TBD")}">${M||(t?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${y}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${h&&c.winner===c.team2?b:"text-slate-300"}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${c.team2}">${c.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${C||(t?"Đang xác định":"TBD")}">${C||(t?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${x}
                </div>
              </div>
            </div>
            
            ${T}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${m?"text-volt":"text-cyan"}">${o} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 ${t?"BẢNG XẾP HẠNG":"GROUP STANDINGS"}</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${a(u)}
              </div>
              <div class="text-4xs text-muted text-center mt-2.5 font-semibold leading-relaxed">
                💡 ${t?"Top 4 đội tiến vào<br>vòng đấu loại trực tiếp":"Top 4 teams advance to<br>playoff bracket stage"}
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
                ${p(l.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${p(l.sf2)}
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
                ${p(l.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${p(l.b)}
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
              <div class="node-label mb-2 text-center text-gold font-bold" style="letter-spacing: 0.05em;">🏆 ${t?"BẢNG VÀNG":"FINAL RESULTS"}</div>
              
              <!-- Gold Node -->
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>${t?"VÔ ĐỊCH":"CHAMPION"}</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${d.goldTeam.name}">${d.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.goldTeam.players}">${d.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>${t?"Á QUÂN":"RUNNER-UP"}</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${d.silverTeam.name}">${d.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.silverTeam.players}">${d.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>${t?"HẠNG 3":"3RD PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${d.bronzeTeam.name}">${d.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.bronzeTeam.players}">${d.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>${t?"HẠNG 4":"4TH PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${d.fourthTeam.name}">${d.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.fourthTeam.players}">${d.fourthTeam.players}</div>
              </div>
            </div>
          </div>
        </div>
      `};s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Sơ Đồ Cây Vòng Đoạt Cúp</h2>
        <p class="view-subtitle">${t?"Tự động tính phân cặp & lộ trình thăng cấp trực quan":"Automatic calculated tournament brackets and playoff trees"}</p>
      </div>

      ${n(e,"Men's Doubles",!0,"Men's Doubles")}
      ${n(r,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `}getAwardResults(s){const t=s==="Men's Doubles"?"MD":"XD",i=this.state.matches.find(u=>u.id===`F-${t}`),e=this.state.matches.find(u=>u.id===`B-${t}`),r=this.lang==="vi";let a={name:r?"Chưa xác định":"TBD",players:r?"Đội vô địch":"Championship Winner",confirmed:!1},n={name:r?"Chưa xác định":"TBD",players:r?"Đội hạng nhì":"Championship Runner-up",confirmed:!1},l={name:r?"Chưa xác định":"TBD",players:r?"Đội hạng ba":"Bronze Winner",confirmed:!1},o={name:r?"Chưa xác định":"TBD",players:r?"Đội hạng tư":"Bronze Runner-up",confirmed:!1};const m=u=>{if(!u)return"";const d=this.state.teams.find(p=>p.name===u);return d?`${d.player1} & ${d.player2}`:""};if(i)if(i.status==="Completed"){const u=i.winner,d=i.winner===i.team1?i.team2:i.team1;a={name:u,players:m(u),confirmed:!0},n={name:d,players:m(d),confirmed:!0}}else i.team1.includes("Winner")||i.team2.includes("Winner")||(a={name:r?"Chung Kết Đang Đấu":"Grand Finalists",players:`${i.team1} vs ${i.team2}`,confirmed:!1},n={name:r?"Đang Tranh Chức Á Quân":"Chasing Runner-up",players:r?"Đội thua trận Chung kết":"Runner-up of Grand Final",confirmed:!1});if(e)if(e.status==="Completed"){const u=e.winner,d=e.winner===e.team1?e.team2:e.team1;l={name:u,players:m(u),confirmed:!0},o={name:d,players:m(d),confirmed:!0}}else e.team1.includes("Loser")||e.team2.includes("Loser")||(l={name:r?"Tranh Hạng 3 Đang Đấu":"Bronze Contenders",players:`${e.team1} vs ${e.team2}`,confirmed:!1});return{goldTeam:a,silverTeam:n,bronzeTeam:l,fourthTeam:o}}renderResults(s){const t=this.lang==="vi",i=this.getAwardResults("Men's Doubles"),e=this.getAwardResults("Mixed's Doubles"),r=(a,n,l)=>{const o=a.goldTeam.confirmed||a.silverTeam.confirmed||a.bronzeTeam.confirmed;return`
        <div class="glass-card mb-8 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[3px] ${l?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${l?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${n}</span>
          </h3>
          <p class="text-xs text-muted mb-6">
            ${o?t?"⚡ Kết quả thi đấu chính thức đã được ghi nhận":"⚡ Official championship matches completed":t?"⏳ Đang chờ các trận chung kết & tranh hạng 3 diễn ra":"⏳ Waiting for championship finals to complete"}
          </p>

          <div class="podium-container">
            <!-- 2nd Place Step -->
            <div class="podium-step second-place">
              <span class="podium-medal">🥈</span>
              <div class="podium-team truncate max-w-full" title="${a.silverTeam.name}">${a.silverTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${a.silverTeam.players}">${a.silverTeam.players}</div>
              <span class="podium-label">${t?"Á Quân":"Runner-up"}</span>
            </div>

            <!-- 1st Place Step -->
            <div class="podium-step first-place">
              <span class="podium-medal">🥇</span>
              <div class="podium-team truncate max-w-full" title="${a.goldTeam.name}">${a.goldTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${a.goldTeam.players}">${a.goldTeam.players}</div>
              <span class="podium-label">${t?"Vô Địch":"Champion"}</span>
            </div>

            <!-- 3rd Place Step -->
            <div class="podium-step third-place">
              <span class="podium-medal">🥉</span>
              <div class="podium-team truncate max-w-full" title="${a.bronzeTeam.name}">${a.bronzeTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${a.bronzeTeam.players}">${a.bronzeTeam.players}</div>
              <span class="podium-label">${t?"Hạng 3":"3rd Place"}</span>
            </div>
          </div>

          <!-- Honorable 4th Place Card -->
          <div class="max-w-[280px] mx-auto mt-8 glass-panel border border-slate-700/30 p-2.5 rounded-lg flex items-center justify-center gap-2.5 hover-glowing">
            <span class="text-lg">🏅</span>
            <div class="text-left truncate">
              <div class="text-4xs text-muted font-bold uppercase tracking-wider">${t?"Hạng 4 Khuyến Khích":"Honorable 4th Place"}</div>
              <div class="text-2xs font-extrabold text-slate-300 truncate" title="${a.fourthTeam.name}">${a.fourthTeam.name}</div>
              <div class="text-4xs text-muted truncate" title="${a.fourthTeam.players}">${a.fourthTeam.players}</div>
            </div>
          </div>
        </div>
      `};s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Bảng Vàng Danh Vọng</h2>
        <p class="view-subtitle">${t?"Vinh danh nhà vô địch và các thứ hạng danh giá của mùa giải":"Honoring the champions and premium standings of the season"}</p>
      </div>

      ${r(i,"Men's Doubles",!0)}
      ${r(e,"Mixed's Doubles",!1)}
    `,setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(s){const t=this.lang==="vi",i=t?R.vi:R.en,e=i.sections.map(r=>{const a=r.content.map(n=>{let l=n.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return l=l.replace(/\\rightarrow/g," ➔ "),l=l.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${l}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${r.title}</h3>
          <div>${a}</div>
        </div>
      `}).join("");s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">📘 Quy Định & Luật Thi Đấu</h2>
        <p class="view-subtitle">${t?"Tra cứu điều lệ chính thức & giả lập sân giao cầu trực tuyến":"Official tournament handbook and dynamic doubles service simulator"}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Interactive Simulator Widget (Grid span 5) -->
        <div class="lg:col-span-5" id="court-sim-container">
          <!-- Will be loaded dynamically via CourtSimulator -->
        </div>

        <!-- Rules Handbook (Grid span 7) -->
        <div class="lg:col-span-7 flex flex-col gap-2">
          <div class="glass-card flex-1">
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${i.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${i.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${e}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(s){const t=this.lang==="vi",i=(a,n)=>{const l=n==="Men's Doubles",o=l?"text-volt":"text-cyan",m=this.state.calculateStandings(n),u=a.map(d=>{const p=this.state.matches.filter(f=>f.category===n&&f.status==="Completed"&&(f.team1===d.name||f.team2===d.name));let c=0,h=0,g=0,v=0,$=0,w=0;p.forEach(f=>{const I=f.team1===d.name;f.winner===d.name?c++:h++,I?(g+=Number(f.score1)||0,v+=Number(f.score2)||0):(g+=Number(f.score2)||0,v+=Number(f.score1)||0),f.sets&&Array.isArray(f.sets)&&f.sets.forEach(N=>{const E=Number(N.t1)||0,k=Number(N.t2)||0;I?($+=E,w+=k):($+=k,w+=E)})});const M=p.length,C=M>0?Math.round(c/M*100):0,b=g-v,y=$-w,x=c,T=m.findIndex(f=>f.name===d.name),P=T!==-1?T+1:"-",L=p.map(f=>{const I=f.winner===d.name,N=I?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",E=I?"W":"L",k=`${f.stage}: ${f.team1} vs ${f.team2} (${f.score1}-${f.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${N}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${k}">${E}</span>`}).join(""),S=L.length>0?L:`<span class="text-slate-500 text-5xs italic font-sans">${t?"Chưa đấu":"No matches"}</span>`;return`
          <div class="team-profile-card glass-panel border border-slate-700/50 p-4 rounded-lg hover-glowing flex flex-col justify-between"
               style="background: radial-gradient(circle at top right, ${l?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%);">
            <div>
              <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <div class="flex items-center gap-1.5 truncate max-w-[70%]">
                  <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${d.name}">${d.name}</span>
                </div>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                  <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${P}</span>
                  <span class="badge ${l?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
                </div>
              </div>

              <!-- Members -->
              <div class="flex flex-col gap-1.5 mb-4 text-xs">
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${d.player1}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${d.player2}</span>
                </div>
                
                <!-- Form guide -->
                <div class="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                  <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">${t?"PHONG ĐỘ:":"FORM:"}</span>
                  <div class="flex items-center gap-1">
                    ${S}
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
              <!-- Summary row -->
              <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${M}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Đã đấu":"Pld"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold ${l?"text-volt":"text-cyan"}">${c}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Thắng":"Won"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold ${h>0?"text-rose-400":"text-slate-400"}">${h}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Thua":"Lost"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${C}%</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Tỉ Lệ":"Win%"}</div>
                </div>
              </div>

              <!-- Telemetry detail list -->
              <div class="flex flex-col gap-1.5 font-mono">
                <div class="flex items-center justify-between text-slate-400">
                  <span>${t?"Điểm tích lũy:":"Standing Pts:"}</span>
                  <span class="font-extrabold text-slate-200">${x}</span>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${t?"Set Thắng/Bại:":"Sets W/L:"}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${g}-${v}</span>
                    <span class="text-5xs font-bold px-1 py-0.5 rounded ${b>0?"bg-emerald-500/10 text-emerald-400":b<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                      ${b>0?"+":""}${b}
                    </span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${t?"Điểm Thắng/Bại:":"Points W/L:"}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${$}-${w}</span>
                    <span class="text-5xs font-bold px-1 py-0.5 rounded ${y>0?"bg-emerald-500/10 text-emerald-400":y<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                      ${y>0?"+":""}${y}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `}).join("");return`
        <div class="glass-card mb-6">
          <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2">
            <span class="${o}">${l?"💎":"🔮"}</span>
            <span class="${o}">${n} (${a.length} Teams)</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            ${u}
          </div>
        </div>
      `},e=this.state.teams.filter(a=>a.category==="Men's Doubles"),r=this.state.teams.filter(a=>a.category==="Mixed's Doubles");s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Thành Viên & Đội Đăng Ký</h2>
        <p class="view-subtitle">${t?"Hồ sơ thành viên và danh sách đội hình phân hạng":"Browse player preferences and team statistics"}</p>
      </div>

      <!-- Teams lists -->
      ${i(e,"Men's Doubles")}
      ${i(r,"Mixed's Doubles")}
    `}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const s=new Date("May 31, 2026 13:30:00").getTime(),t=()=>{const i=document.getElementById("cd-days"),e=document.getElementById("cd-hours"),r=document.getElementById("cd-minutes"),a=document.getElementById("cd-seconds");if(!i){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const n=new Date().getTime(),l=s-n;if(l<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),i.textContent="00",e.textContent="00",r.textContent="00",a.textContent="00";return}const o=Math.floor(l/(1e3*60*60*24)),m=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(l%(1e3*60*60)/(1e3*60)),d=Math.floor(l%(1e3*60)/1e3);i.textContent=o.toString().padStart(2,"0"),e.textContent=m.toString().padStart(2,"0"),r.textContent=u.toString().padStart(2,"0"),a.textContent=d.toString().padStart(2,"0")};t(),this.countdownTimer=setInterval(t,1e3)}handleSyncUpdate(s,t){if(this.renderActiveView(),s==="MOCK_TOGGLE"){const i=document.getElementById("demo-mock-switch");i&&(i.checked=t.enabled),t.enabled?this.startDemoSimulation(!0):this.stopDemoSimulation(!0)}if(this.activeSpectateMatchId&&t&&t.matchId===this.activeSpectateMatchId)if(s==="STATUS_UPDATE"&&!t.isLive){alert(this.lang==="vi"?"Trận đấu đang xem đã kết thúc!":"The match you are spectating has concluded!");const i=document.getElementById("spectate-overlay-container");i&&(i.classList.add("hidden"),i.innerHTML=""),this.activeSpectateMatchId=null}else this.renderSpectateOverlay(this.activeSpectateMatchId)}toggleDemoSimulation(s){s?(localStorage.setItem("badminton_demo_mock_active","true"),this.startDemoSimulation(),this.admin.showToast(this.lang==="vi"?"Đã kích hoạt chế độ Live Demo!":"Live Demo Simulation activated!","success")):(localStorage.removeItem("badminton_demo_mock_active"),this.stopDemoSimulation(),this.admin.showToast(this.lang==="vi"?"Đã tắt chế độ Live Demo!":"Live Demo Simulation stopped!","info")),this.sync.broadcast("LIVE_MOCK_TOGGLE",{enabled:s})}startDemoSimulation(s=!1){this.stopDemoSimulation(!0),this.demoInterval=setInterval(()=>{this.stepDemoSimulation()},4500)}stopDemoSimulation(s=!1){this.demoInterval&&(clearInterval(this.demoInterval),this.demoInterval=null);const t=this.sync.getLiveMatches();Object.keys(t).forEach(i=>{this.sync.setMatchLiveStatus(i,!1);const e=this.state.matches.find(r=>r.id===i);e&&e.status==="Live"&&(e.status="Scheduled")}),this.renderActiveView()}stepDemoSimulation(){const s=this.sync.getLiveMatches(),t=Object.keys(s);if(t.length>0){const i=t[Math.floor(Math.random()*t.length)],e=s[i],r=e.sets.length-1,a=e.sets[r]||{t1:0,t2:0},n=Math.random()>.48;let l=a.t1,o=a.t2;if(n){if(e.servingTeam==="A"){const b=e.serverName;e.serverName=e.partnerName,e.partnerName=b}l++,e.servingTeam="A"}else{if(e.servingTeam==="B"){const b=e.receiverName;e.receiverName=e.receiverPartnerName,e.receiverPartnerName=b}o++,e.servingTeam="B"}e.sets[r]={t1:l,t2:o},e.score1=l,e.score2=o;const m=e.servingTeam==="A"?l:o;e.isEven=m%2===0;const u=this.state.matches.find(b=>b.id===i),d=this.state.teams.find(b=>b.name===u.team1),p=this.state.teams.find(b=>b.name===u.team2),c=d?[d.player1,d.player2]:["T1 P1","T1 P2"],h=p?[p.player1,p.player2]:["T2 P1","T2 P2"];e.servingTeam==="A"?(e.receiverName=e.isEven?h[0]:h[1],e.receiverPartnerName=e.isEven?h[1]:h[0]):(e.receiverName=e.isEven?c[0]:c[1],e.receiverPartnerName=e.isEven?c[1]:c[0]);const g=i.includes("SF")||i.includes("F-")||i.includes("B-")?21:15,v=g===15?21:30,$=Math.max(l,o),w=Math.min(l,o),M=$-w;let C=!1;if($>=g&&(M>=2||$===v)&&(C=!0),C){e.sets[r]={t1:l,t2:o};let b=0,y=0;if(e.sets.forEach(x=>{x.t1>x.t2?b++:y++}),b===2||y===2){this.sync.broadcast("LIVE_MATCH_END",{matchId:i}),this.sync.setMatchLiveStatus(i,!1),this.state.matches.find(T=>T.id===i)&&this.state.updateMatchScore(i,e.sets,b,y,"Completed");return}else e.sets.push({t1:0,t2:0}),e.score1=0,e.score2=0,e.currentSet++,e.servingTeam=l>o?"A":"B"}this.sync.broadcast("LIVE_SCORE_UPDATE",{matchId:i,sets:e.sets,score1:e.score1,score2:e.score2,currentSet:e.currentSet,servingTeam:e.servingTeam,isEven:e.isEven,serverName:e.serverName,partnerName:e.partnerName,receiverName:e.receiverName,receiverPartnerName:e.receiverPartnerName})}else{const i=this.state.matches.find(e=>e.status==="Scheduled"&&!e.team1.includes("Winner")&&!e.team2.includes("Winner")&&!e.team1.includes("Loser")&&!e.team2.includes("Loser"));if(i){const e=this.state.teams.find(o=>o.name===i.team1),r=this.state.teams.find(o=>o.name===i.team2),a=e?[e.player1,e.player2]:["T1 P1","T1 P2"],n=r?[r.player1,r.player2]:["T2 P1","T2 P2"],l={sets:[{t1:0,t2:0}],score1:0,score2:0,currentSet:1,servingTeam:"A",isEven:!0,serverName:a[0],partnerName:a[1],receiverName:n[0],receiverPartnerName:n[1]};this.sync.broadcast("LIVE_MATCH_START",{matchId:i.id,matchState:l}),this.sync.setMatchLiveStatus(i.id,!0,l)}}}renderLivePitches(){const s=this.lang==="vi",t=["Pitch 15","Pitch 16","Pitch 20","Pitch 21"],i=this.sync.getLiveMatches();return t.map(e=>{const r=Object.keys(i).find(l=>{const o=this.state.matches.find(m=>m.id===l);return o&&o.pitch===e});if(r){const l=i[r],o=this.state.matches.find(u=>u.id===r);o.category;const m=this.admin.isAdmin||this.admin.isRef&&o.pitch===this.admin.refPitch;return`
          <div class="live-pitch-card glass-panel border border-red-500/30 p-3 rounded-lg hover-glowing bg-red-950/5 flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-volt text-4xs">${e}</span>
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
              ${m?`
                <button class="btn btn-2xs btn-outline btn-join-match font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${o.id}">
                  🏸 Ump
                </button>
              `:""}
            </div>
          </div>
        `}const a=this.state.matches.find(l=>l.pitch===e&&l.status==="Scheduled"&&!l.team1.includes("Winner")&&!l.team2.includes("Winner")),n=this.admin.isAdmin||this.admin.isRef&&e===this.admin.refPitch;return a?`
          <div class="live-pitch-card glass-panel border border-slate-800 p-3 rounded-lg flex flex-col justify-between" style="opacity: 0.8;">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-slate-400 text-4xs">${e}</span>
              <span class="badge bg-slate-800 text-slate-500 font-bold text-5xs">${a.time}</span>
            </div>
            
            <div class="text-center py-2">
              <div class="text-5xs text-muted truncate" title="${a.team1}">${a.team1}</div>
              <div class="text-4xs font-bold text-slate-400 py-0.5">${s?"ĐỢI TRẬN":"SCHEDULED"}</div>
              <div class="text-5xs text-muted truncate" title="${a.team2}">${a.team2}</div>
            </div>

            <div class="pt-2 border-t border-slate-800/80">
              ${n?`
                <button class="btn btn-2xs btn-outline btn-join-match btn-block font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${a.id}">
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
          <span class="font-extrabold text-slate-400 text-4xs mt-1.5">${e}</span>
          <span class="text-5xs text-slate-600 font-semibold mt-0.5">${s?"Sân đang trống":"Court Empty"}</span>
        </div>
      `}).join("")}openSpectateOverlay(s){if(document.getElementById("umpire-overlay-container")&&!document.getElementById("umpire-overlay-container").classList.contains("hidden")){alert(this.lang==="vi"?"Bạn đang ở trong phòng Trọng tài. Hãy thoát phòng Trọng tài trước!":"You are in the Umpire Control room. Please exit Umpire mode first!");return}if(this.activeSpectateMatchId=s,!document.getElementById("spectate-overlay-container")){const t=document.createElement("div");t.id="spectate-overlay-container",t.className="umpire-overlay-backdrop",document.body.appendChild(t)}this.renderSpectateOverlay(s),setTimeout(()=>{const t=document.querySelector(".spectate-court-svg .svg-shuttle");t&&(t.setAttribute("dur","0.7s"),t.innerHTML=`
          <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
            <mpath href="#spectate-shuttle-path" />
          </animateMotion>
        `)},100)}renderSpectateOverlay(s){const t=document.getElementById("spectate-overlay-container");if(!t)return;t.classList.remove("hidden");const i=this.lang==="vi",e=this.state.matches.find(v=>v.id===s),a=this.sync.getLiveMatches()[s];if(!a||!e){t.classList.add("hidden"),this.activeSpectateMatchId=null;return}const n=a.isEven;e.category;const l=a.servingTeam==="A"?n?210:90:n?90:210,o=a.servingTeam==="A"?385:115;a.servingTeam,a.servingTeam;const m=a.servingTeam==="A"?n?90:210:n?210:90,u=a.servingTeam==="A"?115:385;a.servingTeam,a.servingTeam;const d=a.servingTeam==="A"?n?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":n?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",p=a.servingTeam==="A"?n?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z":n?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",c=(l+m)/2+30,h=(o+u)/2-40,g=a.sets.map((v,$)=>`
      <div class="umpire-set-badge">
        <span>Set ${$+1}:</span>
        <strong>${v.t1} - ${v.t2}</strong>
      </div>
    `).join("");t.innerHTML=`
      <div class="umpire-card glass-card spectate-stadium">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE SPECTATING
            </span>
            <span class="text-xs font-bold text-slate-300">${e.pitch} | ${e.stage}</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">${i?"SÂN VẬN ĐỘNG TRỰC TUYẾN":"LIVE STADIUM SCREEN"}</h2>
          <button class="btn btn-xs btn-neutral" id="spectate-btn-close">✕ ${i?"Thoát Xem":"Exit"}</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Spectator Scoreboard Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets display -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${g}
              <div class="umpire-set-badge current">
                <span>Set ${a.currentSet}:</span>
                <strong class="text-volt">${a.score1} - ${a.score2}</strong>
              </div>
            </div>

            <!-- Big Glowing Score Pads (Read-only for Spectators) -->
            <div class="grid grid-cols-2 gap-6 text-center">
              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-volt mb-3" title="${e.team1}">
                  ${e.team1}
                </div>
                <div class="font-mono font-black text-6xl text-glow-volt py-4">${a.score1}</div>
                ${a.servingTeam==="A"?`
                  <span class="absolute top-3 right-3 text-volt animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>

              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-cyan mb-3" title="${e.team2}">
                  ${e.team2}
                </div>
                <div class="font-mono font-black text-6xl text-glow-cyan py-4">${a.score2}</div>
                ${a.servingTeam==="B"?`
                  <span class="absolute top-3 right-3 text-cyan animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>
            </div>

            <div class="bg-slate-900/40 p-4 rounded border border-slate-800 text-center text-4xs text-slate-500 font-semibold leading-relaxed">
              📣 ${i?"Màn hình trực tiếp tự động đồng bộ kết quả từ Bàn Trọng Tài thông qua kênh liên lạc BroadcastChannel độ trễ bằng không.":"Spectator display updates automatically in real-time as the referee enters scores on their device."}
            </div>
          </div>

          <!-- Spectator Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">${i?"MÔ PHỎNG VỊ TRÍ VẬN ĐỘNG VIÊN":"LIVE COURT VISUALIZER"}</h4>
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
                <path d="${d}" class="svg-highlight-box serving" filter="url(#spec-glow-volt)" />
                <path d="${p}" class="svg-highlight-box receiving" filter="url(#spec-glow-cyan)" />

                <!-- shuttle flight -->
                <path id="spectate-shuttle-path" d="M ${l},${o} Q ${c},${h} ${m},${u}" class="svg-shuttle-path" />
                <circle r="5" class="svg-shuttle" filter="url(#spec-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#spectate-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- bottom side (Team A) -->
                <g class="player-avatar ${a.servingTeam==="A"?"server":"partner"}">
                  <circle cx="${a.servingTeam==="A"?n?210:90:n?90:210}" 
                          cy="385" r="13" class="avatar-bg ${a.servingTeam==="A"?"volt":"neutral"}" />
                  <text x="${a.servingTeam==="A"?n?210:90:n?90:210}" 
                        y="389" class="avatar-text">${a.servingTeam==="A"?"S":"P"}</text>
                </g>
                <text x="${n?210:90}" y="415" class="svg-player-name text-slate-200 font-bold">${a.serverName.split(" ")[0]}</text>

                <g class="player-avatar ${a.servingTeam==="A"?"partner":"server"}">
                  <circle cx="${a.servingTeam==="A"?n?90:210:n?210:90}" 
                          cy="440" r="11" class="avatar-bg neutral" />
                  <text x="${a.servingTeam==="A"?n?90:210:n?210:90}" 
                        y="444" class="avatar-text">P</text>
                </g>
                <text x="${n?90:210}" y="468" class="svg-player-name text-muted">${a.partnerName.split(" ")[0]}</text>

                <!-- top side (Team B) -->
                <g class="player-avatar ${a.servingTeam==="B"?"server":"receiver"}">
                  <circle cx="${a.servingTeam==="B",n?90:210}" 
                          cy="115" r="13" class="avatar-bg ${a.servingTeam==="B"?"volt":"cyan"}" />
                  <text x="${a.servingTeam==="B",n?90:210}" 
                        y="119" class="avatar-text">${a.servingTeam==="B"?"S":"R"}</text>
                </g>
                <text x="${n?90:210}" y="95" class="svg-player-name text-slate-200 font-bold">${a.receiverName.split(" ")[0]}</text>

                <g class="player-avatar ${a.servingTeam==="B","partner"}">
                  <circle cx="${a.servingTeam==="B",n?210:90}" 
                          cy="60" r="11" class="avatar-bg neutral" />
                  <text x="${a.servingTeam==="B",n?210:90}" 
                        y="64" class="avatar-text">P</text>
                </g>
                <text x="${n?210:90}" y="42" class="svg-player-name text-muted">${a.receiverPartnerName.split(" ")[0]}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("spectate-btn-close").onclick=()=>{t.classList.add("hidden"),t.innerHTML="",this.activeSpectateMatchId=null}}}window.addEventListener("DOMContentLoaded",()=>{new U});
