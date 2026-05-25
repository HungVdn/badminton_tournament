(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const B=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],H=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],D=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],R={vi:{title:" GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Quy Định và Thông Tin Giải Đấu",sections:[{id:"categories",title:"I. Nội dung thi đấu",content:["• Đôi nam nữ","• Đôi nam nam","• Tổng cộng: 10 đội - 20 người chơi"]},{id:"schedule",title:"II. Thời gian & Địa điểm",content:["• Ngày thi đấu: 31 May 2026","• Địa điểm: Sân cầu lông Beta Era"]},{id:"prizes",title:"III. Giải thưởng",content:["🏆 Giải Nhất: 2,000,000 VND + Cúp Vô Địch","🥈 Giải Nhì: 1,500,000 VND","🥉 Giải Ba: 1,000,000 VND"]},{id:"regulations",title:"IV. Thể thức thi đấu",content:["• **Vòng loại**: Thi đấu vòng tròn tính điểm (Round-Robin). Top 4 đội của mỗi hạng mục bước vào bán kết.","• **Vòng bán kết**: Đấu loại trực tiếp để chọn ra Top 2 team vào chung kết.","• **Vòng chung kết**: Đấu loại trực tiếp để chọn ra Top 1 Vô Địch Mùa Giải.","• **Điểm số ván đấu**:","  - Vòng loại: BO3 - thi đấu đến 15 điểm mỗi hiệp.","  - Bán kết & Chung kết: BO3 - thi đấu đến 21 điểm mỗi hiệp.","  - Nếu tỷ số là 20 đều (hoặc 14 đều ở 15 điểm), bên nào ghi trước 2 điểm cách biệt sẽ thắng ván đó.","  - Nếu tỷ số đạt đến 29 đều (hoặc 20 đều ở 15 điểm), bên nào ghi điểm thứ 30 (hoặc 21) trước sẽ thắng ván đó.","• **Cách tính điểm xếp hạng vòng bảng**:","  - Thắng: +1 điểm xếp hạng. Thua: +0 điểm xếp hạng.","  - Thứ tự ưu tiên khi xếp hạng: (1) Điểm số xếp hạng $\\rightarrow$ (2) Hiệu số hiệp (Set) thắng - thua $\\rightarrow$ (3) Đối đầu trực tiếp (Head-to-head) $\\rightarrow$ (4) Hiệu số tổng điểm thắng - điểm thua $\\rightarrow$ (5) Bốc thăm."]},{id:"rules",title:"V. Luật thi đấu đánh đôi",content:["• Áp dụng Luật Cầu lông Quốc tế của BWF.","• **Giao cầu & Nhận cầu**:","  - Khi điểm bên giao phát cầu là **chẵn** (0, 2, 4, 6,...), người giao cầu sẽ đứng ở ô giao cầu bên **phải** của họ và giao chéo sang ô nhận bên phải đối phương.","  - Khi điểm bên giao phát cầu là **lẻ** (1, 3, 5, 7,...), người giao cầu sẽ đứng ở ô giao cầu bên **trái** của họ và giao chéo sang ô nhận bên trái đối phương.","  - VĐV của bên nhận cầu đứng chéo đối diện với VĐV phát cầu sẽ là người nhận cầu.","  - Chỉ có người nhận cầu được quyền đánh trả cầu phát. Nếu đồng đội của họ chạm vào cầu trước, bên phát cầu được cộng 1 điểm.","• **Vị trí đứng đổi chỗ**:","  - Hai VĐV chỉ đổi chỗ bên trái-phải cho nhau khi bên họ **giao cầu và giành được điểm**.","  - Nếu bên nhận cầu giành được điểm, vị trí đứng của cả hai đội giữ nguyên và quyền giao cầu chuyển sang cho họ mà không đổi chỗ."]},{id:"intervals",title:"VI. Thời gian nghỉ & Lỗi hành vi",content:["• Khi một bên ghi được 11 điểm (hoặc 8 điểm ở hiệp 15 điểm) trước, thời gian nghỉ giữa hiệp đấu không quá 60 giây.","• Thời gian nghỉ giữa các hiệp 1, 2 và 3 không quá 2 phút.","• Trận đấu phải diễn ra liên tục. Các lỗi hành vi, câu giờ có thể bị trọng tài nhắc nhở hoặc phạt điểm."]}]},en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Beta Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class G{constructor(){this.players=[],this.teams=[],this.matches=[],this.listeners=[],this.init()}init(){const s=localStorage.getItem("badminton_players"),t=localStorage.getItem("badminton_teams"),a=localStorage.getItem("badminton_matches");this.players=s?JSON.parse(s):[...B],this.teams=t?JSON.parse(t):[...H],this.matches=a?JSON.parse(a):[...D],this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),this.players=[...B],this.teams=[...H],this.matches=[...D],this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}addListener(s){this.listeners.push(s)}notifyListeners(){this.listeners.forEach(s=>s(this))}updateMatchScore(s,t,a,e,n){const i=this.matches.find(r=>r.id===s);return i?(i.sets=t,i.score1=a,i.score2=e,i.status=n,n==="Completed"?i.winner=a>e?i.team1:i.team2:i.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(s){const t=this.teams.filter(i=>i.category===s),a=this.matches.filter(i=>i.category===s&&i.stage==="Group Stage"),e={};t.forEach(i=>{e[i.name]={name:i.name,teamId:i.id,player1:i.player1,player2:i.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),a.forEach(i=>{if(i.status!=="Completed")return;const r=i.team1,l=i.team2;if(!e[r]||!e[l])return;e[r].played+=1,e[l].played+=1;const o=Number(i.score1)||0,h=Number(i.score2)||0;e[r].setsWon+=o,e[r].setsLost+=h,e[l].setsWon+=h,e[l].setsLost+=o,o>h?(e[r].won+=1,e[r].points+=1,e[l].lost+=1):(e[l].won+=1,e[l].points+=1,e[r].lost+=1),i.sets.forEach(u=>{const c=Number(u.t1)||0,g=Number(u.t2)||0;e[r].pointsWon+=c,e[r].pointsLost+=g,e[l].pointsWon+=g,e[l].pointsLost+=c})}),Object.values(e).forEach(i=>{i.netSets=i.setsWon-i.setsLost,i.netPoints=i.pointsWon-i.pointsLost});const n=Object.values(e);return n.sort((i,r)=>{if(r.points!==i.points)return r.points-i.points;if(r.netSets!==i.netSets)return r.netSets-i.netSets;if(n.filter(o=>o.points===i.points&&o.netSets===i.netSets).length===2){const o=a.find(h=>h.status==="Completed"&&(h.team1===i.name&&h.team2===r.name||h.team1===r.name&&h.team2===i.name));if(o){if(o.winner===i.name)return-1;if(o.winner===r.name)return 1}}return r.netPoints!==i.netPoints?r.netPoints-i.netPoints:i.name.localeCompare(r.name)}),n}isGroupStageComplete(s){const t=this.matches.filter(a=>a.category===s&&a.stage==="Group Stage");return t.length>0&&t.every(a=>a.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(t=>{const a=this.isGroupStageComplete(t),e=this.calculateStandings(t),n=a?e[0].name:`1st Place ${t==="Men's Doubles"?"MD":"XD"}`,i=a?e[1].name:`2nd Place ${t==="Men's Doubles"?"MD":"XD"}`,r=a?e[2].name:`3rd Place ${t==="Men's Doubles"?"MD":"XD"}`,l=a?e[3].name:`4th Place ${t==="Men's Doubles"?"MD":"XD"}`,o=t==="Men's Doubles"?"MD":"XD",h=`SF1-${o}`,u=`SF2-${o}`,c=`F-${o}`,g=`B-${o}`;let d=this.matches.find(x=>x.id===h),m=this.matches.find(x=>x.id===u),p=this.matches.find(x=>x.id===c),f=this.matches.find(x=>x.id===g);const y="4:30 - 5:10",$=t==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";d?(d.status!=="Completed"||d.team1&&d.team1.includes("Place")||d.team2&&d.team2.includes("Place"))&&(d.team1=n,d.team2=l):(d={id:h,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:y,team1:n,team2:l,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(d)),m?(m.status!=="Completed"||m.team1&&m.team1.includes("Place")||m.team2&&m.team2.includes("Place"))&&(m.team1=i,m.team2=r):(m={id:u,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:y,team1:i,team2:r,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(m));const T=d.status==="Completed"?d.winner:`Winner SF1 (${o})`,w=d.status==="Completed"?d.winner===d.team1?d.team2:d.team1:`Loser SF1 (${o})`,b=m.status==="Completed"?m.winner:`Winner SF2 (${o})`,v=m.status==="Completed"?m.winner===m.team1?m.team2:m.team1:`Loser SF2 (${o})`;f?(f.status!=="Completed"||f.team1&&f.team1.includes("Loser")||f.team2&&f.team2.includes("Loser"))&&(f.team1=w,f.team2=v):(f={id:g,category:t,stage:"Bronze Match",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:$,team1:w,team2:v,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(f)),p?(p.status!=="Completed"||p.team1&&p.team1.includes("Winner")||p.team2&&p.team2.includes("Winner"))&&(p.team1=T,p.team2=b):(p={id:c,category:t,stage:"Grand Final",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:$,team1:T,team2:b,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(p))})}}class V{constructor(s,t,a,e){if(this.state=s,this.sync=t,this.matchId=a,this.onFinish=e,this.lang=localStorage.getItem("badminton_lang")||"vi",this.match=this.state.matches.find(i=>i.id===a),!this.match)throw new Error(`Match not found: ${a}`);const n=this.match.stage==="Group Stage";this.targetPoints=n?15:21,this.maxPoints=n?21:30,this.team1Obj=this.state.teams.find(i=>i.name===this.match.team1),this.team2Obj=this.state.teams.find(i=>i.name===this.match.team2),this.team1Players=this.team1Obj?[this.team1Obj.player1,this.team1Obj.player2]:["Team A Player 1","Team A Player 2"],this.team2Players=this.team2Obj?[this.team2Obj.player1,this.team2Obj.player2]:["Team B Player 1","Team B Player 2"],this.score1=0,this.score2=0,this.sets=[],this.match.sets&&this.match.sets.length>0&&this.match.status==="Live"&&(this.sets=[...this.match.sets],this.score1=this.match.score1||0,this.score2=this.match.score2||0),this.currentSet=this.sets.length+1,this.servingTeam="A",this.history=[],this.isCourtSwapped=!1,this.set3SwapHappened=!1,this.team1Right=this.team1Players[0],this.team1Left=this.team1Players[1],this.team2Right=this.team2Players[0],this.team2Left=this.team2Players[1],this.init()}init(){this.createOverlayContainer(),this.render(),this.sync.broadcast("LIVE_MATCH_START",{matchId:this.matchId,matchState:this.serializeState()})}createOverlayContainer(){if(document.getElementById("umpire-overlay-container"))return;const s=document.createElement("div");s.id="umpire-overlay-container",s.className="umpire-overlay-backdrop",document.body.appendChild(s)}serializeState(){return{sets:[...this.sets,{t1:this.score1,t2:this.score2}],score1:this.score1,score2:this.score2,currentSet:this.currentSet,servingTeam:this.servingTeam,isEven:(this.servingTeam==="A"?this.score1:this.score2)%2===0,serverName:this.getServerName(),partnerName:this.getServerPartnerName(),receiverName:this.getReceiverName(),receiverPartnerName:this.getReceiverPartnerName(),isCourtSwapped:this.isCourtSwapped}}broadcastUpdate(){const s=this.serializeState();s.matchId=this.matchId,this.sync.broadcast("LIVE_SCORE_UPDATE",s)}getServerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team1Right:this.team1Left:s?this.team2Right:this.team2Left}getServerPartnerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team1Left:this.team1Right:s?this.team2Left:this.team2Right}getReceiverName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team2Right:this.team2Left:s?this.team1Right:this.team1Left}getReceiverPartnerName(){const s=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?s?this.team2Left:this.team2Right:s?this.team1Left:this.team1Right}saveToHistory(){this.history.push({score1:this.score1,score2:this.score2,sets:JSON.parse(JSON.stringify(this.sets)),currentSet:this.currentSet,servingTeam:this.servingTeam,team1Right:this.team1Right,team1Left:this.team1Left,team2Right:this.team2Right,team2Left:this.team2Left})}undo(){if(this.history.length===0)return;const s=this.history.pop();this.score1=s.score1,this.score2=s.score2,this.sets=s.sets,this.currentSet=s.currentSet,this.servingTeam=s.servingTeam,this.team1Right=s.team1Right,this.team1Left=s.team1Left,this.team2Right=s.team2Right,this.team2Left=s.team2Left,this.render(),this.broadcastUpdate()}addPoint(s){this.saveToHistory();const t=this.lang==="vi";if(s==="A"){if(this.servingTeam==="A"){const a=this.team1Right;this.team1Right=this.team1Left,this.team1Left=a}this.score1++,this.servingTeam="A"}else{if(this.servingTeam==="B"){const a=this.team2Right;this.team2Right=this.team2Left,this.team2Left=a}this.score2++,this.servingTeam="B"}if(this.currentSet===3&&!this.set3SwapHappened){const a=this.targetPoints===15?8:11;(this.score1===a||this.score2===a)&&(this.set3SwapHappened=!0,this.showSwapNotice(t?`⚡ Điểm số đạt mốc ${a}! Cả hai đội đổi bên sân.`:`⚡ Score reached ${a}! Both teams must swap sides.`),this.isCourtSwapped=!this.isCourtSwapped)}this.checkSetWinner(),this.render(),this.triggerServeAnimation(),this.broadcastUpdate()}triggerServeAnimation(){const s=document.querySelector(".umpire-court-svg .svg-shuttle");s&&(s.setAttribute("dur","0.7s"),s.innerHTML=`
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `)}checkSetWinner(){const s=this.score1,t=this.score2,a=Math.max(s,t),e=Math.min(s,t),n=a-e;let i=!1;if(a>=this.targetPoints&&(n>=2||a===this.maxPoints)&&(i=!0),i){this.currentSet-1,this.sets.push({t1:s,t2:t});let r=0,l=0;if(this.sets.forEach(o=>{o.t1>o.t2?r++:l++}),r===2||l===2)this.submitMatch(r,l);else{const o=s>t?this.match.team1:this.match.team2;this.showSwapNotice(this.lang==="vi"?`Set ${this.currentSet} kết thúc! Đội ${o} thắng set này. Chuẩn bị sang Set ${this.currentSet+1}. Cả hai đội đổi bên sân.`:`Set ${this.currentSet} completed! ${o} won this set. Prepare for Set ${this.currentSet+1}. Both teams must swap sides.`),this.score1=0,this.score2=0,this.currentSet++,this.servingTeam=s>t?"A":"B",this.isCourtSwapped=!this.isCourtSwapped}}}submitMatch(s,t){const a=s>t?this.match.team1:this.match.team2;this.state.updateMatchScore(this.matchId,this.sets,s,t,"Completed"),this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1),this.showMatchEndNotice(a)}close(){this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1);const s=document.getElementById("umpire-overlay-container");s&&(s.classList.add("hidden"),s.innerHTML=""),this.onFinish&&this.onFinish(),window.BadmintonAppInstance&&window.BadmintonAppInstance.switchTab("dashboard")}showSwapNotice(s){const t=this.lang==="vi",a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in">
        <div class="swap-icon-container mb-4 text-glow-volt animate-bounce" style="font-size: 3rem; filter: drop-shadow(0 0 12px rgba(132, 204, 22, 0.45));">
          🏸
        </div>
        <h3 class="text-sm font-black text-glow-volt mb-2" style="font-size: 1.2rem; letter-spacing: 0.05em;">${t?"ĐỔI BÊN SÂN!":"SWAP COURTS!"}</h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold" style="line-height: 1.5;">${s}</p>
        <button class="btn btn-sm btn-volt w-full py-2.5 font-bold uppercase tracking-wider" id="swap-notice-btn-ok">
          ${t?"Đã hiểu & Tiếp tục":"Got It & Continue"}
        </button>
      </div>
    `,document.body.appendChild(a),document.getElementById("swap-notice-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)},setTimeout(()=>{document.body.contains(a)&&(a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300))},5e3)}showMatchEndNotice(s){const t=this.lang==="vi",a=this.match.stage||"Group Stage";let e=t?"CHIẾN THẮNG TRẬN ĐẤU!":"WIN THE MATCH!",n=t?"TRẬN ĐẤU ĐÃ KẾT THÚC":"MATCH COMPLETED",i=t?`🎉 Chúc mừng đội **${s}** đã xuất sắc giành chiến thắng trong trận đấu này! 🎉`:`🎉 Congratulations to **${s}** on winning this match! 🎉`,r="🏸",l=t?"ĐỘI GIÀNH CHIẾN THẮNG":"MATCH WINNER",o="#84cc16",h="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(e=t?"CHÚC MỪNG CHIẾN THẮNG BÁN KẾT!":"CONGRATULATIONS ON WINNING!",n=t?"GIÀNH VÉ VÀO CHUNG KẾT":"QUALIFIED FOR THE FINALS",i=t?`⚡ Tuyệt vời! Đội **${s}** đã giành chiến thắng trận đấu Bán Kết và chính thức giành quyền bước vào trận Chung Kết tranh chức vô địch (Grand Final)! 🏆`:`⚡ Spectacular! **${s}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,r="🏅",l=t?"ĐỘI CHIẾN THẮNG BÁN KẾT":"SEMI-FINALS WINNER",o="#06b6d4",h="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(e=t?"NHÀ VÔ ĐỊCH GIẢI ĐẤU!":"TOURNAMENT CHAMPIONS!",n=t?"CÚP VÔ ĐỊCH GEAR GAMES 2026":"GEAR GAMES BADMINTON 2026 CUP",i=t?`👑 TÂN VƯƠNG GIẢI ĐẤU! Xin được nhiệt liệt vinh danh nhà vô địch Gear Games Badminton 2026: **${s}**! Chiến thắng lịch sử vô cùng xứng đáng! 🏆🥇`:`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${s}**! A historic and well-deserved victory! 🏆🥇`,r="🏆",l=t?"QUÁN QUÂN GIẢI ĐẤU":"TOURNAMENT CHAMPIONS",o="#fbbf24",h="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(e=t?"ĐOẠT HẠNG BA CHUNG CUỘC!":"BRONZE MEDALISTS!",n=t?"HUY CHƯƠNG ĐỒNG THUỘC VỀ":"BRONZE MEDAL SECURED",i=t?`🥉 Tuyệt vời! Đội **${s}** đã giành chiến thắng trận tranh Hạng Ba và xuất sắc mang về tấm **Huy Chương Đồng** danh giá! 🥉`:`🥉 Superb! **${s}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,r="🥉",l=t?"HẠNG BA CHUNG CUỘC":"BRONZE WINNER",o="#ea580c",h="rgba(234, 88, 12, 0.45)");const u=document.createElement("div");u.className="match-end-modal-backdrop relative",u.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${h}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${h}); line-height: 1;">
            ${r}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${o}; filter: drop-shadow(0 0 8px ${h});">${e}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${n}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${l}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${s}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${this.sets.map((c,g)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${g+1}: <span class="text-volt">${c.t1}</span>-<span class="text-cyan">${c.t2}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${i}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="match-end-btn-home" style="font-size: 0.85rem; background-color: ${o}; color: #000; box-shadow: 0 4px 14px ${h}; border: none;">
            🏠 ${t?"Quay về trang chủ":"Back to Homepage"}
          </button>
        </div>
      </div>
    `,document.body.appendChild(u),document.getElementById("match-end-btn-home").onclick=()=>{u.classList.add("animate-fade-out"),setTimeout(()=>{u.remove(),this.close()},300)}}toggleServe(){this.saveToHistory(),this.servingTeam=this.servingTeam==="B"?"A":"B",this.render(),this.broadcastUpdate()}swapPlayers(s){if(this.saveToHistory(),s==="1"){const t=this.team1Right;this.team1Right=this.team1Left,this.team1Left=t}else{const t=this.team2Right;this.team2Right=this.team2Left,this.team2Left=t}this.render(),this.broadcastUpdate()}render(){const s=document.getElementById("umpire-overlay-container");if(!s)return;s.classList.remove("hidden");const t=this.lang==="vi";(this.servingTeam==="A"?this.score1:this.score2)%2;let a,e,n,i;this.isCourtSwapped?(a=this.team2Right,e=this.team2Left,n=this.team1Right,i=this.team1Left):(a=this.team1Right,e=this.team1Left,n=this.team2Right,i=this.team2Left);const r=this.getServerName(),l=this.getReceiverName(),o=v=>v===r?"S":v===l?"R":"P",h=v=>v===r?"volt":v===l?"cyan":"neutral",u=v=>v===r?"text-volt":v===l?"text-cyan":"text-slate-200",c=v=>v!==r?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let g,d,m,p;r===a?(g=210,d=355):r===e?(g=90,d=355):r===n?(g=90,d=145):(g=210,d=145),l===a?(m=210,p=355):l===e?(m=90,p=355):l===n?(m=90,p=145):(m=210,p=145);const f=(v,x)=>x===355?v===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":v===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",y=f(g,d),$=f(m,p),T=(g+m)/2+30,w=(d+p)/2-40,b=this.sets.map((v,x)=>`
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
          <h2 class="text-sm font-black m-0 text-glow-volt">${t?"BÀN TRỌNG TÀI ĐIỀU PHỐI":"UMPIRE CONTROL PANEL"}</h2>
          <button class="btn btn-xs btn-neutral" id="umpire-btn-close">✕ ${t?"Thoát Sân":"Exit"}</button>
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
                <path d="${y}" class="svg-highlight-box serving" filter="url(#ump-glow-volt)" />
                <path d="${$}" class="svg-highlight-box receiving" filter="url(#ump-glow-cyan)" />

                <!-- Flight Arrow path -->
                <path id="umpire-shuttle-path" d="M ${g},${d} Q ${T},${w} ${m},${p}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${e===r?"server":e===l?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${h(e)}" />
                  <text x="0" y="4" class="avatar-text">${o(e)}</text>
                  ${c(e)}
                </g>
                <text x="90" y="383" class="svg-player-name ${u(e)} font-bold">${e.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${a===r?"server":a===l?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${h(a)}" />
                  <text x="0" y="4" class="avatar-text">${o(a)}</text>
                  ${c(a)}
                </g>
                <text x="210" y="383" class="svg-player-name ${u(a)} font-bold">${a.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${n===r?"server":n===l?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${h(n)}" />
                  <text x="0" y="4" class="avatar-text">${o(n)}</text>
                  ${c(n)}
                </g>
                <text x="90" y="123" class="svg-player-name ${u(n)} font-bold">${n.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${i===r?"server":i===l?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${h(i)}" />
                  <text x="0" y="4" class="avatar-text">${o(i)}</text>
                  ${c(i)}
                </g>
                <text x="210" y="123" class="svg-player-name ${u(i)} font-bold">${i.split(" ")[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (0,2,4) and **Left** on Odd (1,3,5). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("umpire-btn-close").onclick=()=>{confirm(t?"Bạn có muốn dừng điều phối trận này không? Trạng thái Live sẽ bị hủy.":"Do you want to exit the scoring room? The live status will be suspended.")&&this.close()},document.getElementById("umpire-add-a").onclick=()=>this.addPoint("A"),document.getElementById("umpire-add-b").onclick=()=>this.addPoint("B"),document.getElementById("umpire-btn-serve").onclick=()=>this.toggleServe(),document.getElementById("umpire-btn-undo").onclick=()=>this.undo(),document.getElementById("umpire-swap-players-1").onclick=()=>this.swapPlayers("1"),document.getElementById("umpire-swap-players-2").onclick=()=>this.swapPlayers("2")}}class O{constructor(s,t,a){this.state=s,this.onUpdate=t,this.sync=a,this.isAdmin=!1,this.isRef=!1,this.refPitch="",this.activeMatchId=null,this.lang="vi",this.passkeys={admin2026:{role:"admin",label:"Super Admin"},ref15:{role:"ref",pitch:"Pitch 15",label:"Pitch 15 Umpire"},ref16:{role:"ref",pitch:"Pitch 16",label:"Pitch 16 Umpire"},ref20:{role:"ref",pitch:"Pitch 20",label:"Pitch 20 Umpire"},ref21:{role:"ref",pitch:"Pitch 21",label:"Pitch 21 Umpire"}},this.init()}setLanguage(s){this.lang=s}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.isRef=sessionStorage.getItem("badminton_isRef")==="true",this.refPitch=sessionStorage.getItem("badminton_refPitch")||"",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const s=document.createElement("div");if(s.id="score-modal-container",s.className="modal-backdrop hidden",document.body.appendChild(s),document.getElementById("admin-modal-container"))return;const t=document.createElement("div");t.id="admin-modal-container",t.className="modal-backdrop hidden",document.body.appendChild(t)}setupAdminToggleListener(){document.body.addEventListener("click",s=>{s.target.closest("#btn-toggle-admin")&&(this.isAdmin||this.isRef?this.logout():this.showAdminLogin());const a=s.target.closest(".btn-edit-match");if(a){const n=a.getAttribute("data-match-id"),i=this.state.matches.find(l=>l.id===n);if(!i)return;const r=this.checkMatchReadyState(i);if(!r.ready){this.showUnreadyAlert(r.reason);return}this.isAdmin||this.isRef&&i.pitch===this.refPitch?this.openScoreModal(n):this.showToast(this.lang==="vi"?"Bạn không có quyền chỉnh sửa trận đấu ở sân này!":"You are not authorized to edit matches on this pitch!","info")}const e=s.target.closest(".btn-join-match");if(e){const n=e.getAttribute("data-match-id"),i=this.state.matches.find(l=>l.id===n);if(!i)return;const r=this.checkMatchReadyState(i);if(!r.ready){this.showUnreadyAlert(r.reason);return}this.isAdmin||this.isRef&&i.pitch===this.refPitch?this.openUmpireConsole(n):this.showToast(this.lang==="vi"?"Bạn không có quyền trọng tài ở sân này!":"You are not authorized to umpire on this pitch!","info")}})}checkMatchReadyState(s){const t=this.lang==="vi";if(s.team1&&s.team1.includes("Place")||s.team2&&s.team2.includes("Place"))return{ready:!1,reason:t?"Chưa thể tiến hành trận đấu này! Vui lòng đợi Vòng Bảng kết thúc để xác định các đội dẫn đầu tham gia thi đấu.":"This match cannot be played yet! Please wait for the Group Stage to complete to decide the playing teams."};const a=s.category==="Men's Doubles"?"MD":"XD",e=s.team1&&(s.team1.includes("SF1")||s.team1.includes("Winner SF1")||s.team1.includes("Loser SF1"))||s.team2&&(s.team2.includes("SF1")||s.team2.includes("Winner SF1")||s.team2.includes("Loser SF1")),n=s.team1&&(s.team1.includes("SF2")||s.team1.includes("Winner SF2")||s.team1.includes("Loser SF2"))||s.team2&&(s.team2.includes("SF2")||s.team2.includes("Winner SF2")||s.team2.includes("Loser SF2"));if(e){const i=`SF1-${a}`,r=this.state.matches.find(l=>l.id===i);if(r&&r.status!=="Completed"){const l=t?`Bán Kết 1 (${s.category})`:`Semi-final 1 (${s.category})`;return{ready:!1,reason:t?`Trận đấu này đang chờ kết quả của trận bán kết **${l}** hoàn thành để xác định cặp đấu.`:`This match is waiting for the result of semi-final match **${l}** to complete.`}}}if(n){const i=`SF2-${a}`,r=this.state.matches.find(l=>l.id===i);if(r&&r.status!=="Completed"){const l=t?`Bán Kết 2 (${s.category})`:`Semi-final 2 (${s.category})`;return{ready:!1,reason:t?`Trận đấu này đang chờ kết quả của trận bán kết **${l}** hoàn thành để xác định cặp đấu.`:`This match is waiting for the result of semi-final match **${l}** to complete.`}}}return{ready:!0}}showUnreadyAlert(s){const t=this.lang==="vi",a=document.createElement("div");a.className="swap-notice-modal-backdrop",a.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in" style="max-width: 400px; width: 90%; border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25);">
        <div class="mb-4 text-danger animate-pulse" style="font-size: 3rem;">
          ⚠️
        </div>
        <h3 class="text-sm font-black text-danger mb-2" style="font-size: 1.15rem; letter-spacing: 0.05em;">
          ${t?"TRẬN ĐẤU CHƯA SẴN SÀNG!":"MATCH NOT READY!"}
        </h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">
          ${s}
        </p>
        <button class="btn btn-sm btn-danger w-full py-2.5 font-bold uppercase tracking-wider" id="unready-alert-btn-ok">
          ${t?"Đã hiểu":"Got It"}
        </button>
      </div>
    `,document.body.appendChild(a),document.getElementById("unready-alert-btn-ok").onclick=()=>{a.classList.add("animate-fade-out"),setTimeout(()=>a.remove(),300)}}openUmpireConsole(s){this.sync&&new V(this.state,this.sync,s,()=>{this.onUpdate()})}logout(){this.isAdmin=!1,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.removeItem("badminton_authLabel"),this.onUpdate();const s=this.lang==="vi"?"Đã đăng xuất tài khoản!":"Logged out successfully!";this.showToast(s,"info")}showAdminLogin(){const s=document.getElementById("admin-modal-container");if(!s)return;const t=this.lang==="vi"?"Đăng Nhập Cổng Điều Hợp":"Portal Login",a=this.lang==="vi"?"Nhập mã truy cập Admin hoặc mã Trọng tài (e.g. ref15, ref16...):":"Enter Admin or Umpire passkey (e.g., ref15, ref16, admin2026):",e=this.lang==="vi"?"Mã bảo mật":"Passkey",n=this.lang==="vi"?"Đăng Nhập":"Login",i=this.lang==="vi"?"Hủy":"Cancel";s.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${t}</h3>
        <p class="modal-desc">${a}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${e}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${i}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${n}</button>
        </div>
      </div>
    `,s.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>s.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=r=>{r.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const s=document.getElementById("admin-passkey-input"),t=document.getElementById("admin-login-error");if(!s||!t)return;const a=s.value,e=this.passkeys[a];if(e){e.role==="admin"?(this.isAdmin=!0,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","true"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.setItem("badminton_authLabel",e.label)):(this.isRef=!0,this.isAdmin=!1,this.refPitch=e.pitch,sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","true"),sessionStorage.setItem("badminton_refPitch",e.pitch),sessionStorage.setItem("badminton_authLabel",e.label)),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const n=this.lang==="vi"?`Đăng nhập thành công! Quyền: ${e.label}.`:`Login success! Role: ${e.label}.`;this.showToast(n,"success")}else t.textContent=this.lang==="vi"?"Mã bảo mật không đúng. Hãy thử lại.":"Incorrect passkey. Please try again.",t.classList.remove("hidden"),s.classList.add("input-error"),s.focus()}openScoreModal(s){this.activeMatchId=s;const t=this.state.matches.find(N=>N.id===s);if(!t)return;const a=document.getElementById("score-modal-container");if(!a)return;const e=t.stage==="Group Stage",n=e?15:21,i=e?21:30,r=this.lang==="vi"?"Nhập Điểm Trận Đấu":"Match Score Editor",l=(this.lang==="vi","Set"),o=t.team1,h=t.team2,u=this.lang==="vi"?"Lưu Kết Quả":"Save Score",c=this.lang==="vi"?"Hủy":"Cancel",g=this.lang==="vi"?"Xóa Điểm":"Clear Score",d=t.sets[0]?t.sets[0].t1:"",m=t.sets[0]?t.sets[0].t2:"",p=t.sets[1]?t.sets[1].t1:"",f=t.sets[1]?t.sets[1].t2:"",y=t.sets[2]?t.sets[2].t1:"",$=t.sets[2]?t.sets[2].t2:"";a.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${r}</h3>
          <span class="badge ${e?"bg-indigo":"bg-purple"}">${t.stage} (${n} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">${this.lang==="vi"?"Đội 1":"Team 1"}</div>
          <div>VS</div>
          <div class="col-span-2 text-right">${this.lang==="vi"?"Đội 2":"Team 2"}</div>
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
              <input type="number" min="0" max="${i}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${d}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${m}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${p}" required />
            </div>
            <div class="text-center font-bold text-muted">${l} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${f}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${y}" />
            </div>
            <div class="text-center font-bold text-muted">${l} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${$}" />
            </div>
          </div>

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${g}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${c}</button>
              <button type="submit" class="btn btn-primary">${u}</button>
            </div>
          </div>
        </form>
      </div>
    `,a.classList.remove("hidden");const T=document.getElementById("s1-t1"),w=document.getElementById("s1-t2"),b=document.getElementById("s2-t1"),v=document.getElementById("s2-t2"),x=document.getElementById("s3-t1"),M=document.getElementById("s3-t2"),I=document.getElementById("s3-row"),C=()=>{const N=this.validateSetScore(Number(T.value),Number(w.value),n),S=this.validateSetScore(Number(b.value),Number(v.value),n);N.valid&&S.valid?N.winner===S.winner?(I.classList.add("opacity-40"),x.disabled=!0,M.disabled=!0,x.value="",M.value="",x.removeAttribute("required"),M.removeAttribute("required")):(I.classList.remove("opacity-40"),x.disabled=!1,M.disabled=!1,x.setAttribute("required","required"),M.setAttribute("required","required")):(I.classList.add("opacity-40"),x.disabled=!0,M.disabled=!0,x.value="",M.value="",x.removeAttribute("required"),M.removeAttribute("required"))};[T,w,b,v].forEach(N=>{N.addEventListener("input",C)}),C(),document.getElementById("btn-cancel-score").onclick=()=>a.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(s),document.getElementById("score-form").onsubmit=N=>{N.preventDefault(),this.handleSaveScore(t,n)}}validateSetScore(s,t,a){if(isNaN(s)||isNaN(t))return{valid:!1};if(s<0||t<0)return{valid:!1};const e=Math.max(s,t),n=Math.min(s,t),i=e-n,r=s>t?1:2;if(e<a)return{valid:!1};if(e===a&&i>=2)return{valid:!0,winner:r};const l=a===15?21:30;if(e>a){if(i===2&&e<l)return{valid:!0,winner:r};if(e===l&&i===1)return{valid:!0,winner:r}}return{valid:!1}}handleClearScore(s){confirm(this.lang==="vi"?"Bạn có chắc chắn muốn xóa điểm trận này không?":"Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(s,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã xóa điểm trận đấu.":"Match score cleared.","info"))}handleSaveScore(s,t){const a=Number(document.getElementById("s1-t1").value),e=Number(document.getElementById("s1-t2").value),n=Number(document.getElementById("s2-t1").value),i=Number(document.getElementById("s2-t2").value),r=document.getElementById("s3-t1"),l=document.getElementById("s3-t2"),o=document.getElementById("score-error-msg"),h=this.validateSetScore(a,e,t);if(!h.valid){this.showInputError(o,this.lang==="vi"?`Set 1 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm (hoặc chạm mốc giới hạn ${t===15?21:30} điểm).`:`Set 1 is invalid. Winner must reach ${t} and lead by 2, or reach cap limit of ${t===15?21:30} points.`);return}const u=this.validateSetScore(n,i,t);if(!u.valid){this.showInputError(o,this.lang==="vi"?`Set 2 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm.`:`Set 2 is invalid. Winner must reach at least ${t} and lead by 2.`);return}const c=[{t1:a,t2:e},{t1:n,t2:i}];let g=(h.winner===1?1:0)+(u.winner===1?1:0),d=(h.winner===2?1:0)+(u.winner===2?1:0);if(g===1&&d===1){const m=Number(r.value),p=Number(l.value),f=this.validateSetScore(m,p,t);if(!f.valid){this.showInputError(o,this.lang==="vi"?"Tỉ số Set 1 & 2 là hòa 1-1. Bạn phải nhập thông tin Set 3 hợp lệ.":"Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.");return}c.push({t1:m,t2:p}),f.winner===1?g++:d++}g>d?s.team1:s.team2,this.state.updateMatchScore(s.id,c,g,d,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã cập nhật kết quả thành công!":"Score updated successfully!","success")}showInputError(s,t){s.textContent=t,s.classList.remove("hidden")}showToast(s,t="success"){const a=document.createElement("div");a.className=`toast-alert toast-${t}`,a.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${t==="success"?"✓":t==="info"?"ℹ":"⚠"}</span>
        <span>${s}</span>
      </div>
    `,document.body.appendChild(a),setTimeout(()=>a.classList.add("show"),10),setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>a.remove(),300)},3e3)}}class F{constructor(s){this.container=document.getElementById(s),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="vi",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(s){this.lang=s,this.render()}setScoreParity(s){this.isEven=s,this.render()}setTeams(s,t){this.teamAPlayers=s,this.teamBPlayers=t,this.render()}init(){this.container&&this.render()}render(){var I,C,N,S;if(!this.container)return;const s=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],t=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],a=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],e=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],n=this.lang==="vi"?"Điểm Chẵn (0, 2, 4...)":"Even Score (0, 2, 4...)",i=this.lang==="vi"?"Điểm Lẻ (1, 3, 5...)":"Odd Score (1, 3, 5...)",r=this.lang==="vi"?"Mô Phỏng Luật Giao Cầu Đôi":"Doubles Service Simulator",l=this.lang==="vi"?`Đội giao cầu (Phía dưới) có điểm số **${this.isEven?"CHẴN":"LẺ"}**:`:`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,o=this.lang==="vi"?`<ul>
          <li><strong>Người giao cầu:</strong> <span class="highlight-volt">${s}</span> giao cầu từ ô bên <strong>${this.isEven?"PHẢI":"TRÁI"}</strong>.</li>
          <li><strong>Người nhận cầu:</strong> <span class="highlight-cyan">${a}</span> đứng ô đối diện nhận cầu.</li>
          <li><strong>Vùng cầu hợp lệ:</strong> Ô giao cầu đôi (rộng hơn nhưng ngắn hơn vùng giao đơn) được tô viền sáng.</li>
         </ul>`:`<ul>
          <li><strong>Server:</strong> <span class="highlight-volt">${s}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
          <li><strong>Receiver:</strong> <span class="highlight-cyan">${a}</span> stands in the diagonal court to receive.</li>
          <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
         </ul>`,h=this.isEven?210:90,u=400,c=this.isEven?90:210,g=400,d=this.isEven?90:210,m=100,p=this.isEven?210:90,f=100,y=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",$=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",T=h,w=u-10,b=d,v=m+10,x=(T+b)/2+30,M=(w+v)/2-40;this.container.innerHTML=`
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
              <path d="${y}" class="svg-highlight-box serving" filter="url(#neon-glow-volt)" />
              
              <!-- HIGHLIGHT TARGET RECEIVING BOX -->
              <path d="${$}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${T},${w} Q ${x},${M} ${b},${v}" class="svg-shuttle-path" />
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
                <circle cx="${h}" cy="${u}" r="14" class="avatar-bg volt" />
                <text x="${h}" y="${u+4}" class="avatar-text">S</text>
              </g>
              <text x="${h}" y="${u+28}" class="svg-player-name text-volt">${s.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${c}" cy="${g}" r="12" class="avatar-bg neutral" />
                <text x="${c}" y="${g+4}" class="avatar-text">P</text>
              </g>
              <text x="${c}" y="${g+28}" class="svg-player-name text-muted">${t.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${d}" cy="${m}" r="14" class="avatar-bg cyan" />
                <text x="${d}" y="${m+4}" class="avatar-text">R</text>
              </g>
              <text x="${d}" y="${m-22}" class="svg-player-name text-cyan">${a.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${p}" cy="${f}" r="12" class="avatar-bg neutral" />
                <text x="${p}" y="${f+4}" class="avatar-text">P</text>
              </g>
              <text x="${p}" y="${f-22}" class="svg-player-name text-muted">${e.split(" ")[0]}</text>
            </svg>
          </div>
          
          <div class="court-controls-wrapper flex flex-col justify-between">
            <div>
              <div class="selector-title">${this.lang==="vi"?"Trạng Thái Điểm Số":"Score Status"}</div>
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
              ${this.lang==="vi"?"💡 <strong>Gợi ý:</strong> Click trực tiếp vào ô sân dưới để giao chẵn/lẻ. Vị trí giao cầu đổi bên khi và chỉ khi đội giao cầu thắng pha cầu đó và ghi điểm chẵn/lẻ.":"💡 <strong>Tip:</strong> Click directly on the bottom court boxes to toggle even/odd service. Players only swap courts when their team wins a point on their own serve."}
            </div>
          </div>
        </div>
      </div>
    `,(I=document.getElementById("sim-btn-even"))==null||I.addEventListener("click",()=>this.setScoreParity(!0)),(C=document.getElementById("sim-btn-odd"))==null||C.addEventListener("click",()=>this.setScoreParity(!1)),(N=document.getElementById("svg-click-right"))==null||N.addEventListener("click",()=>this.setScoreParity(!0)),(S=document.getElementById("svg-click-left"))==null||S.addEventListener("click",()=>this.setScoreParity(!1))}}class U{constructor(s,t){this.state=s,this.onRemoteUpdate=t,this.channelName="badminton_live_sync",this.channel=null,this.init()}init(){try{this.channel=new BroadcastChannel(this.channelName),this.channel.onmessage=s=>this.handleMessage(s.data)}catch(s){console.warn("BroadcastChannel not supported in this browser. Falling back to storage event listeners.",s),window.addEventListener("storage",t=>{if(t.key==="badminton_live_sync_fallback")try{const a=JSON.parse(t.newValue);this.handleMessage(a)}catch(a){console.error("Failed to parse fallback storage sync message",a)}})}}getLiveMatches(){const s=localStorage.getItem("badminton_live_matches");return s?JSON.parse(s):{}}saveLiveMatches(s){localStorage.setItem("badminton_live_matches",JSON.stringify(s))}broadcast(s,t){const a={type:s,payload:t,timestamp:Date.now()};this.channel&&this.channel.postMessage(a),localStorage.setItem("badminton_live_sync_fallback",JSON.stringify(a))}handleMessage(s){if(!s||!s.type||!s.payload)return;const{type:t,payload:a}=s;switch(t){case"LIVE_SCORE_UPDATE":this.applyLiveUpdate(a);break;case"LIVE_MATCH_START":this.setMatchLiveStatus(a.matchId,!0,a.matchState);break;case"LIVE_MATCH_END":this.setMatchLiveStatus(a.matchId,!1);break;case"LIVE_MOCK_TOGGLE":a.enabled?localStorage.setItem("badminton_demo_mock_active","true"):localStorage.removeItem("badminton_demo_mock_active"),this.onRemoteUpdate&&this.onRemoteUpdate("MOCK_TOGGLE",a);break}}setMatchLiveStatus(s,t,a=null){const e=this.getLiveMatches();t?e[s]={matchId:s,isLive:!0,updatedAt:Date.now(),...a||{}}:delete e[s],this.saveLiveMatches(e),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:s,isLive:t})}applyLiveUpdate(s){const{matchId:t,sets:a,score1:e,score2:n,currentSet:i,servingTeam:r,isEven:l,serverName:o,partnerName:h,receiverName:u,receiverPartnerName:c,isCourtSwapped:g,team1Right:d,team1Left:m,team2Right:p,team2Left:f}=s,y=this.getLiveMatches();y[t]={matchId:t,isLive:!0,updatedAt:Date.now(),sets:a,score1:e,score2:n,currentSet:i,servingTeam:r,isEven:l,serverName:o,partnerName:h,receiverName:u,receiverPartnerName:c,isCourtSwapped:g,team1Right:d,team1Left:m,team2Right:p,team2Left:f},this.saveLiveMatches(y);const $=this.state.matches.find(T=>T.id===t);$&&($.sets=a,$.score1=e,$.score2=n,$.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",s)}}class _{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const s=()=>this.resize();window.addEventListener("resize",s),this.resizeHandler=s;for(let a=0;a<120;a++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const t=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let a=0;this.particles.forEach(e=>{e.tiltAngle+=e.tiltAngleIncremental,e.y+=e.speed,e.x+=Math.sin(e.tiltAngle)*.5,e.tilt=Math.sin(e.tiltAngle-e.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=e.r,this.ctx.strokeStyle=e.color,this.ctx.moveTo(e.x+e.tilt+e.r/2,e.y),this.ctx.lineTo(e.x+e.tilt,e.y+e.tilt+e.r/2),this.ctx.stroke(),e.y<=this.canvas.height&&a++}),a>0?this.animationFrame=requestAnimationFrame(t):this.stop()};t()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class j{constructor(){window.BadmintonAppInstance=this,this.state=new G,this.lang=localStorage.getItem("badminton_lang")||"vi",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new _,this.countdownTimer=null,this.activeSpectateMatchId=null,this.demoInterval=null,this.sync=new U(this.state,(s,t)=>this.handleSyncUpdate(s,t)),this.admin=new O(this.state,()=>this.handleStateChange(),this.sync),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),localStorage.getItem("badminton_demo_mock_active")==="true"&&this.startDemoSimulation(),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(e=>{e.addEventListener("click",n=>{const i=n.currentTarget.getAttribute("data-tab");i&&this.switchTab(i)})}),window.addEventListener("resize",()=>this.updateActivePill());const t=document.getElementById("btn-lang-toggle");t&&t.addEventListener("click",()=>{this.lang=this.lang==="vi"?"en":"vi",localStorage.setItem("badminton_lang",this.lang),this.admin.setLanguage(this.lang),this.courtSimulator&&this.courtSimulator.setLanguage(this.lang),this.translateStaticElements(),this.renderActiveView(),this.updateNavbar()});const a=document.getElementById("btn-reset-db");a&&a.addEventListener("click",()=>{this.admin.isAdmin&&confirm(this.lang==="vi"?"CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ dữ liệu giải đấu về trạng thái ban đầu. Bạn có muốn tiếp tục?":"WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast(this.lang==="vi"?"Đã thiết lập lại dữ liệu!":"Database reset to default!","success"))}),document.body.addEventListener("change",e=>{const n=e.target.closest("#demo-mock-switch");n&&this.toggleDemoSimulation(n.checked)}),document.body.addEventListener("click",e=>{const n=e.target.closest(".btn-spectate-match");if(n){const i=n.getAttribute("data-match-id");this.openSpectateOverlay(i)}})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(s){this.activeTab=s,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(a=>{a.getAttribute("data-tab")===s?a.classList.add("active"):a.classList.remove("active")}),this.renderActiveView(),s==="rules"&&setTimeout(()=>{this.courtSimulator=new F("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const a=this.state.teams.filter(n=>n.category==="Men's Doubles")[0],e=this.state.teams.filter(n=>n.category==="Mixed's Doubles")[0];a&&e&&this.courtSimulator.setTeams([a.player1,a.player2],[e.player1,e.player2])},50),this.updateActivePill()}updateActivePill(){const s=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),t=document.querySelector(".nav-tabs-wrapper");if(!t)return;let a=document.querySelector(".nav-active-pill");a||(a=document.createElement("div"),a.className="nav-active-pill",t.appendChild(a)),s&&(a.style.width=`${s.offsetWidth}px`,a.style.transform=`translateX(${s.offsetLeft}px)`)}translateStaticElements(){const s=this.lang==="vi",t={dashboard:s?"🏠 Bảng Tin":"🏠 Dashboard",standings:s?"📊 Xếp Hạng":"📊 Standings",fixtures:s?"📅 Lịch Thi Đấu":"📅 Fixtures",bracket:s?"🌳 Sơ Đồ Cây":"🌳 Bracket",results:s?"🏆 Bảng Vàng":"🏆 Final Results",rules:s?"📘 Luật Đánh Đôi":"📘 Doubles Rules",teams:s?"👥 Đội Chơi":"👥 Teams"};Object.keys(t).forEach(e=>{const n=document.querySelector(`.nav-tab[data-tab="${e}"] span`);n&&(n.textContent=t[e])});const a=document.querySelector("#btn-lang-toggle span");a&&(a.textContent=s?"ENGLISH":"TIẾNG VIỆT")}updateNavbar(){const s=this.lang==="vi",t=document.getElementById("btn-toggle-admin"),a=document.getElementById("btn-reset-db");if(t){let e=document.getElementById("navbar-welcome-user");if(this.admin.isAdmin||this.admin.isRef){const i=sessionStorage.getItem("badminton_authLabel")||(this.admin.isAdmin?"Super Admin":this.admin.refPitch+" Referee");e||(e=document.createElement("span"),e.id="navbar-welcome-user",e.className="text-5xs text-slate-300 font-extrabold tracking-wide uppercase mr-1 flex items-center gap-1.5",t.parentNode.insertBefore(e,t)),e.innerHTML=`<span class="w-1.5 h-1.5 rounded-full bg-volt pulse-dot"></span> ${s?"Xin chào,":"Welcome,"} <span class="text-volt font-black">${i}</span>`,e.classList.remove("hidden"),t.innerHTML=`✕ <span>${s?"Đăng Xuất":"Logout"}</span>`,t.className="btn btn-xs btn-danger font-bold flex items-center gap-1",a&&this.admin.isAdmin&&a.classList.remove("hidden")}else e&&(e.classList.add("hidden"),e.innerHTML=""),t.innerHTML=`🔐 <span>${s?"Đăng Nhập Admin":"Admin Login"}</span>`,t.className="btn btn-xs btn-outline flex items-center gap-1",a&&a.classList.add("hidden")}}renderActiveView(){const s=document.getElementById("main-view-container");if(!s)return;switch(s.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(s);break;case"standings":this.renderStandings(s);break;case"fixtures":this.renderFixtures(s);break;case"bracket":this.renderBracket(s);break;case"results":this.renderResults(s);break;case"rules":this.renderRules(s);break;case"teams":this.renderTeams(s);break}s.querySelectorAll(".glass-card, .dashboard-stat-card, .team-card, .match-card, .bracket-node, .standings-table tbody tr").forEach((a,e)=>{a.classList.add("animate-fade-slide-up"),a.style.animationDelay=`${e*.03}s`})}renderDashboard(s){var h,u;const t=this.lang==="vi",a=this.state.matches.length,e=this.state.matches.filter(c=>c.status==="Completed").length,n=a>0?Math.round(e/a*100):0;let i=0;this.state.matches.forEach(c=>{c.status==="Completed"&&c.sets.forEach(g=>{i+=g.t1+g.t2})});const r=t?"GIẢI VÔ ĐỊCH CẦU LÔNG GEAR GAMES 2026":"GEAR GAMES BADMINTON CHAMPIONSHIP 2026",l=t?"Hệ thống cập nhật xếp hạng, tỷ số & sơ đồ trực tiếp":"Live standings, schedule fixtures & bracket generator",o=t?"THỜI GIAN KHAI MẠC":"COUNTDOWN TO TOURNAMENT";s.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${r}</h1>
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
            <span class="stat-value">${e}/${a}</span>
            <span class="stat-label">${t?"Trận Đã Đấu":"Matches Completed"}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${n}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${n}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${i}</span>
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
    `,(h=document.getElementById("dash-goto-md"))==null||h.addEventListener("click",()=>this.switchTab("standings")),(u=document.getElementById("dash-goto-xd"))==null||u.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(s){const t=this.state.calculateStandings(s),a=this.lang==="vi";let e=t.slice(0,3).map((n,i)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${i===0?"🥇":i===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${n.name}</td>
          <td class="text-center font-semibold text-volt">${n.points}</td>
          <td class="text-center text-slate-300">${n.played}</td>
          <td class="text-center text-slate-300">${n.netSets>0?"+"+n.netSets:n.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${n.pointsWon}-${n.pointsLost}</td>
        </tr>
      `).join("");return t.length===0&&(e=`<tr><td colspan="6" class="text-center text-muted py-4">${a?"Không có dữ liệu":"No data available"}</td></tr>`),`
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(s){const t=this.lang==="vi",a=this.state.calculateStandings(s),e=s==="Men's Doubles",n=e?"text-volt":"text-cyan",i=a.map((r,l)=>{const o=l+1,h=o<=4;this.state.isGroupStageComplete(s);let u=`<span class="rank-circle font-bold ${o===1?"gold":o===2?"silver":o===3?"bronze":""}">${o}</span>`,c="";h?c=`<span class="advance-tag neon-green">${t?"BÁN KẾT":"SEMIS"}</span>`:c=`<span class="advance-tag text-muted">${t?"LOẠI":"OUT"}</span>`;const g=r.played===a.length-1,d=g?`<span class="finished-tag">${t?"Đủ 4 trận":"4 Matches"}</span>`:"";return`
        <tr class="${h?"row-top-4":"row-eliminated"} ${e?"md-row":"xd-row"}">
          <td class="text-center">${u}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${r.name}</span>
              ${c}
              ${d}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${r.player1} & ${r.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${r.points}</td>
          <td class="text-center font-bold ${g?"text-emerald-400":"text-slate-200"}">${r.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${r.won}</td>
          <td class="text-center font-semibold ${r.lost>0?"text-rose-400":"text-slate-400"}">${r.lost}</td>
          <td class="text-center text-slate-200 font-bold ${r.netSets>=0?"text-emerald-400":"text-rose-400"}">
            ${r.setsWon}-${r.setsLost} 
            <span class="text-xs font-normal">(${r.netSets>=0?"+"+r.netSets:r.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${r.pointsWon}-${r.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${r.netPoints>=0?"+"+r.netPoints:r.netPoints})</span>
          </td>
        </tr>
      `}).join("");return`
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${e?"💎":"🔮"}</span>
          <span class="${n}">${s}</span>
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
              ${i}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span>${t?"<strong>Quy tắc xếp hạng:</strong> Top 4 đội sẽ tự động giành vé vào Bán Kết. Ưu tiên xét: Thắng ván ➔ Hiệu số hiệp ➔ Đối kháng trực tiếp ➔ Hiệu số điểm.":"<strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points."}
        </div>
      </div>
    `}renderFixtures(s){const t=this.lang==="vi";let a="";this.activeCategoryFilter==="all"?a=`
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

      ${a}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const e=document.getElementById("fixture-search");e.oninput=i=>{this.fixtureSearchText=i.target.value,this.renderActiveView();const r=document.getElementById("fixture-search");r&&(r.focus(),r.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(i=>{i.onclick=()=>{this.fixtureStatusFilter=i.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(s,t,a){const e=this.state.teams.find(i=>i.name===s),n=this.state.teams.find(i=>i.name===t);return!!(e&&(e.player1.toLowerCase().includes(a)||e.player2.toLowerCase().includes(a))||n&&(n.player1.toLowerCase().includes(a)||n.player2.toLowerCase().includes(a)))}renderCategoryFixtures(s){const t=this.lang==="vi",a=s==="Men's Doubles",e=a?"Men's Doubles":"Mixed's Doubles";let n=this.state.matches.filter(m=>m.category===s);if(this.fixtureStatusFilter!=="all"&&(n=n.filter(m=>m.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const m=this.fixtureSearchText.toLowerCase().trim();n=n.filter(p=>p.team1.toLowerCase().includes(m)||p.team2.toLowerCase().includes(m)||p.stage&&p.stage.toLowerCase().includes(m)||p.pitch&&p.pitch.toLowerCase().includes(m)||this.checkPlayersIncludeSearch(p.team1,p.team2,m))}const i=n.filter(m=>m.stage==="Group Stage"),r=n.filter(m=>m.stage==="Semi-finals"),l=n.filter(m=>m.stage==="Grand Final"),o=n.filter(m=>m.stage==="Bronze Match"),h=t?"TRẬN CHUNG KẾT":"GRAND CHAMPIONSHIP",u=t?"TRANH HẠNG BA":"BRONZE FINALS",c=t?"VÒNG BÁN KẾT":"SEMIFINALS STAGE",g=t?"VÒNG BẢNG XOAY VÒNG":"GROUP STAGE QUALIFYING",d=(m,p)=>m.length===0?"":`
        <div class="fixtures-stage-card glass-card flex flex-col gap-3 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[3px]" style="background: ${a?"var(--volt)":"var(--cyan)"}; box-shadow: 0 1px 8px ${a?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${a?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${p}</span>
            <span class="text-slate-600 font-medium">${m.length} ${m.length===1?"Match":"Matches"}</span>
          </div>
          <div class="fixtures-grid">
            ${this.renderMatchCards(m)}
          </div>
        </div>
      `;return`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${a?"💎":"🔮"}</span>
          <span class="${a?"text-volt":"text-cyan"}">${e}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${d(l,h)}
          ${d(o,u)}
          ${d(r,c)}
          ${d(i,g)}
        </div>
      </div>
    `}renderMatchCards(s){const t=this.lang==="vi";if(s.length===0)return`<div class="col-span-2 text-center text-muted py-6">${t?"Không tìm thấy trận đấu nào":"No matches found"}</div>`;const a=this.sync.getLiveMatches();return s.map(e=>{const n=a[e.id],i=!!n,r=e.status==="Completed";e.team1&&(e.team1.includes("Place")||e.team1.includes("Winner")||e.team1.includes("Loser"))||e.team2&&(e.team2.includes("Place")||e.team2.includes("Winner")||e.team2.includes("Loser"));let l="",o="";i?(l="border-glow-volt bg-volt-gradient",o=`
          <span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--danger); color: #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);">
            <span class="live-dot-pulse"></span> ${t?"ĐANG ĐẤU":"LIVE"}
          </span>
        `):e.stage==="Grand Final"?(l="border-glow-gold bg-gold-gradient",o=r?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>${t?"CHUNG KẾT":"GRAND FINAL"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">${t?"CHUNG KẾT":"GRAND FINAL"}</span>`):e.stage==="Bronze Match"?(l="border-glow-bronze bg-bronze-gradient",o=r?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>${t?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">${t?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`):(l=r?"border-completed":"border-scheduled",o=r?`<span class="match-badge completed">${t?"KẾT THÚC":"FINAL"}</span>`:`<span class="match-badge scheduled">${t?"LỊCH HẸN":"SCHEDULED"}</span>`);const h=e.category==="Men's Doubles",u=h?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',c=this.state.teams.find(M=>M.name===e.team1),g=this.state.teams.find(M=>M.name===e.team2),d=c?`${c.player1} & ${c.player2}`:"",m=g?`${g.player1} & ${g.player2}`:"",p=h?"text-volt":"text-cyan";let f="",y="";const $=r?e.sets:i?n.sets:[],T=r?e.score1:i?n.score1:"-",w=r?e.score2:i?n.score2:"-";if((r||i)&&$&&$.length>0){const M=r&&e.winner===e.team1?`<span class="${p}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',I=r&&e.winner===e.team2?`<span class="${p}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';f+=M,y+=I,$.forEach(C=>{f+=`<span class="${C.t1>C.t2?p:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${C.t1}</span>`,y+=`<span class="${C.t2>C.t1?p:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${C.t2}</span>`});for(let C=$.length;C<3;C++)f+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',y+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else f='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',y='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';const b=this.admin.isAdmin||this.admin.isRef&&e.pitch===this.admin.refPitch;let v="";i?v=`
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
        `:r?v=this.admin.isAdmin?`
          <div class="flex justify-end mt-3 pt-2.5 border-t border-slate-800/80">
            <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${e.id}">
              ✏️ <span>${t?"Sửa Điểm":"Edit Score"}</span>
            </button>
          </div>
        `:"":v=`
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
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${h?"md-ticket":"xd-ticket"} ${l} ${x}">
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
                <span class="text-sm font-bold ${r&&e.winner===e.team1||i&&T>w?p:"text-slate-200"} truncate" title="${e.team1}">
                  ${e.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${d||(t?"Đang xác định":"TBD")}">${d||(t?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${f}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${r&&e.winner===e.team2||i&&w>T?p:"text-slate-200"} truncate" title="${e.team2}">
                  ${e.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${m||(t?"Đang xác định":"TBD")}">${m||(t?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${y}
              </div>
            </div>
          </div>

          <!-- Action Footer -->
          ${v}
        </div>
      `}).join("")}renderBracket(s){const t=this.lang==="vi",a=l=>{const o=l==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(h=>h.id===`SF1-${o}`),sf2:this.state.matches.find(h=>h.id===`SF2-${o}`),f:this.state.matches.find(h=>h.id===`F-${o}`),b:this.state.matches.find(h=>h.id===`B-${o}`)}},e=a("Men's Doubles"),n=a("Mixed's Doubles"),i=l=>this.state.calculateStandings(l).map((h,u)=>{const c=u+1,g=c<=4,d=c===1?"gold":c===2?"silver":c===3?"bronze":"",m=c===1?"🥇 Seed 1":c===2?"🥈 Seed 2":c===3?"🥉 Seed 3":c===4?"🎫 Seed 4":t?"❌ Loại":"❌ Out",p=g?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;" data-team-name="${h.name}">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${h.name}">
              <span class="rank-circle font-bold ${d}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${c}</span>
              <span class="font-bold text-slate-200 truncate">${h.name}</span>
            </div>
            <span class="font-extrabold ${p}" style="font-size: 0.55rem; flex-shrink: 0;">${m}</span>
          </div>
        `}).join(""),r=(l,o,h,u)=>{const c=this.getAwardResults(u),g=d=>{if(!d)return'<div class="bracket-node empty">N/A</div>';const m=d.status==="Completed",p=d.team1&&(d.team1.includes("Place")||d.team1.includes("Winner")||d.team1.includes("Loser"))||d.team2&&(d.team2.includes("Place")||d.team2.includes("Winner")||d.team2.includes("Loser")),f=this.admin.isAdmin?p?`<span title="${t?"Chưa thể nhập điểm":"Cannot edit score yet"}" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>`:`<button class="btn-edit-node-score btn-edit-match" data-match-id="${d.id}">✏️</button>`:"",y=this.state.teams.find(I=>I.name===d.team1),$=this.state.teams.find(I=>I.name===d.team2),T=y?`${y.player1} & ${y.player2}`:"",w=$?`${$.player1} & ${$.player2}`:"",b=h?"text-volt":"text-cyan";let v="",x="";if(m&&d.sets&&d.sets.length>0){const I=d.winner===d.team1?`<span class="${b}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',C=d.winner===d.team2?`<span class="${b}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';v+=I,x+=C,d.sets.forEach(N=>{v+=`<span class="${N.t1>N.t2?b:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${N.t1}</span>`,x+=`<span class="${N.t2>N.t1?b:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${N.t2}</span>`});for(let N=d.sets.length;N<3;N++)v+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',x+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else v='<span style="width: 6px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',x='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';const M=m?`<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ ${t?"Đã kết thúc":"Finished"}</div>`:`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${d.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${m?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${d.pitch} | ${d.stage}</span>
              ${f}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&d.winner===d.team1?b:"text-slate-300"}" data-team-name="${d.team1}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${d.team1}">${d.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${T||(t?"Đang xác định":"TBD")}">${T||(t?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${v}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&d.winner===d.team2?b:"text-slate-300"}" data-team-name="${d.team2}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${d.team2}">${d.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${w||(t?"Đang xác định":"TBD")}">${w||(t?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${x}
                </div>
              </div>
            </div>
            
            ${M}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${h?"text-volt":"text-cyan"}">${o} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 ${t?"BẢNG XẾP HẠNG":"GROUP STANDINGS"}</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${i(u)}
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
                ${g(l.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${g(l.sf2)}
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
                ${g(l.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${g(l.b)}
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
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;" data-team-name="${c.goldTeam.name}">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>${t?"VÔ ĐỊCH":"CHAMPION"}</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${c.goldTeam.name}">${c.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.goldTeam.players}">${c.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;" data-team-name="${c.silverTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>${t?"Á QUÂN":"RUNNER-UP"}</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${c.silverTeam.name}">${c.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.silverTeam.players}">${c.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${c.bronzeTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>${t?"HẠNG 3":"3RD PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${c.bronzeTeam.name}">${c.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${c.bronzeTeam.players}">${c.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${c.fourthTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>${t?"HẠNG 4":"4TH PLACE"}</span>
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
        <p class="view-subtitle">${t?"Tự động tính phân cặp & lộ trình thăng cấp trực quan":"Automatic calculated tournament brackets and playoff trees"}</p>
      </div>

      ${r(e,"Men's Doubles",!0,"Men's Doubles")}
      ${r(n,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `,setTimeout(()=>this.setupBracketHighlights(),50)}setupBracketHighlights(){const s=document.querySelector(".bracket-visualizer");s&&(s.addEventListener("mouseover",t=>{const a=t.target.closest("[data-team-name]");if(!a)return;const e=a.getAttribute("data-team-name");if(!e||e.includes("Winner")||e.includes("Loser")||e.includes("Place"))return;document.querySelectorAll(`[data-team-name="${CSS.escape(e)}"]`).forEach(i=>{i.classList.add("team-highlight-active");const r=i.closest(".bracket-node");r&&r.classList.add("node-highlight-active")})}),s.addEventListener("mouseout",t=>{const a=t.target.closest("[data-team-name]");if(!a||!a.getAttribute("data-team-name"))return;document.querySelectorAll("[data-team-name]").forEach(i=>{i.classList.remove("team-highlight-active");const r=i.closest(".bracket-node");r&&r.classList.remove("node-highlight-active")})}))}getAwardResults(s){const t=s==="Men's Doubles"?"MD":"XD",a=this.state.matches.find(u=>u.id===`F-${t}`),e=this.state.matches.find(u=>u.id===`B-${t}`),n=this.lang==="vi";let i={name:n?"Chưa xác định":"TBD",players:n?"Đội vô địch":"Championship Winner",confirmed:!1},r={name:n?"Chưa xác định":"TBD",players:n?"Đội hạng nhì":"Championship Runner-up",confirmed:!1},l={name:n?"Chưa xác định":"TBD",players:n?"Đội hạng ba":"Bronze Winner",confirmed:!1},o={name:n?"Chưa xác định":"TBD",players:n?"Đội hạng tư":"Bronze Runner-up",confirmed:!1};const h=u=>{if(!u)return"";const c=this.state.teams.find(g=>g.name===u);return c?`${c.player1} & ${c.player2}`:""};if(a)if(a.status==="Completed"){const u=a.winner,c=a.winner===a.team1?a.team2:a.team1;i={name:u,players:h(u),confirmed:!0},r={name:c,players:h(c),confirmed:!0}}else a.team1.includes("Winner")||a.team2.includes("Winner")||(i={name:n?"Chung Kết Đang Đấu":"Grand Finalists",players:`${a.team1} vs ${a.team2}`,confirmed:!1},r={name:n?"Đang Tranh Chức Á Quân":"Chasing Runner-up",players:n?"Đội thua trận Chung kết":"Runner-up of Grand Final",confirmed:!1});if(e)if(e.status==="Completed"){const u=e.winner,c=e.winner===e.team1?e.team2:e.team1;l={name:u,players:h(u),confirmed:!0},o={name:c,players:h(c),confirmed:!0}}else e.team1.includes("Loser")||e.team2.includes("Loser")||(l={name:n?"Tranh Hạng 3 Đang Đấu":"Bronze Contenders",players:`${e.team1} vs ${e.team2}`,confirmed:!1});return{goldTeam:i,silverTeam:r,bronzeTeam:l,fourthTeam:o}}renderResults(s){const t=this.lang==="vi",a=this.getAwardResults("Men's Doubles"),e=this.getAwardResults("Mixed's Doubles"),n=(i,r,l)=>{const o=i.goldTeam.confirmed||i.silverTeam.confirmed||i.bronzeTeam.confirmed;return`
        <div class="glass-card mb-8 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[3px] ${l?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${l?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${r}</span>
          </h3>
          <p class="text-xs text-muted mb-6">
            ${o?t?"⚡ Kết quả thi đấu chính thức đã được ghi nhận":"⚡ Official championship matches completed":t?"⏳ Đang chờ các trận chung kết & tranh hạng 3 diễn ra":"⏳ Waiting for championship finals to complete"}
          </p>

          <div class="podium-container">
            <!-- 2nd Place Step -->
            <div class="podium-step second-place">
              <span class="podium-medal">🥈</span>
              <div class="podium-team truncate max-w-full" title="${i.silverTeam.name}">${i.silverTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${i.silverTeam.players}">${i.silverTeam.players}</div>
              <span class="podium-label">${t?"Á Quân":"Runner-up"}</span>
            </div>

            <!-- 1st Place Step -->
            <div class="podium-step first-place">
              <span class="podium-medal">🥇</span>
              <div class="podium-team truncate max-w-full" title="${i.goldTeam.name}">${i.goldTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${i.goldTeam.players}">${i.goldTeam.players}</div>
              <span class="podium-label">${t?"Vô Địch":"Champion"}</span>
            </div>

            <!-- 3rd Place Step -->
            <div class="podium-step third-place">
              <span class="podium-medal">🥉</span>
              <div class="podium-team truncate max-w-full" title="${i.bronzeTeam.name}">${i.bronzeTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${i.bronzeTeam.players}">${i.bronzeTeam.players}</div>
              <span class="podium-label">${t?"Hạng 3":"3rd Place"}</span>
            </div>
          </div>

          <!-- Honorable 4th Place Card -->
          <div class="max-w-[280px] mx-auto mt-8 glass-panel border border-slate-700/30 p-2.5 rounded-lg flex items-center justify-center gap-2.5 hover-glowing">
            <span class="text-lg">🏅</span>
            <div class="text-left truncate">
              <div class="text-4xs text-muted font-bold uppercase tracking-wider">${t?"Hạng 4 Khuyến Khích":"Honorable 4th Place"}</div>
              <div class="text-2xs font-extrabold text-slate-300 truncate" title="${i.fourthTeam.name}">${i.fourthTeam.name}</div>
              <div class="text-4xs text-muted truncate" title="${i.fourthTeam.players}">${i.fourthTeam.players}</div>
            </div>
          </div>
        </div>
      `};s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Bảng Vàng Danh Vọng</h2>
        <p class="view-subtitle">${t?"Vinh danh nhà vô địch và các thứ hạng danh giá của mùa giải":"Honoring the champions and premium standings of the season"}</p>
      </div>

      ${n(a,"Men's Doubles",!0)}
      ${n(e,"Mixed's Doubles",!1)}
    `,setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(s){const t=this.lang==="vi",a=t?R.vi:R.en,e=a.sections.map(n=>{const i=n.content.map(r=>{let l=r.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return l=l.replace(/\\rightarrow/g," ➔ "),l=l.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${l}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${n.title}</h3>
          <div>${i}</div>
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
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${a.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${a.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${e}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(s){const t=this.lang==="vi",a=(i,r)=>{const l=r==="Men's Doubles",o=l?"text-volt":"text-cyan",h=this.state.calculateStandings(r),u=i.map(c=>{const g=this.state.matches.filter(S=>S.category===r&&S.status==="Completed"&&(S.team1===c.name||S.team2===c.name));let d=0,m=0,p=0,f=0,y=0,$=0;g.forEach(S=>{const P=S.team1===c.name;S.winner===c.name?d++:m++,P?(p+=Number(S.score1)||0,f+=Number(S.score2)||0):(p+=Number(S.score2)||0,f+=Number(S.score1)||0),S.sets&&Array.isArray(S.sets)&&S.sets.forEach(L=>{const E=Number(L.t1)||0,k=Number(L.t2)||0;P?(y+=E,$+=k):(y+=k,$+=E)})});const T=g.length,w=T>0?Math.round(d/T*100):0,b=p-f,v=y-$,x=d,M=h.findIndex(S=>S.name===c.name),I=M!==-1?M+1:"-",C=g.map(S=>{const P=S.winner===c.name,L=P?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",E=P?"W":"L",k=`${S.stage}: ${S.team1} vs ${S.team2} (${S.score1}-${S.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${L}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${k}">${E}</span>`}).join(""),N=C.length>0?C:`<span class="text-slate-500 text-5xs italic font-sans">${t?"Chưa đấu":"No matches"}</span>`;return`
          <div class="team-profile-card ${l?"team-card-md":"team-card-xd"} glass-panel border border-slate-700/50 rounded-lg hover-glowing flex flex-col justify-between overflow-hidden relative"
               style="background: radial-gradient(circle at top right, ${l?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%);">
            
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

                <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <div class="flex items-center gap-1.5 truncate max-w-[70%]">
                    <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${c.name}">${c.name}</span>
                  </div>
                  <div class="flex items-center gap-1.5 flex-shrink-0">
                    <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${I}</span>
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
                    <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">${t?"PHONG ĐỘ:":"FORM:"}</span>
                    <div class="flex items-center gap-1">
                      ${N}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stats -->
              <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
                <!-- Summary row -->
                <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${T}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Đã đấu":"Pld"}</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${l?"text-volt":"text-cyan"}">${d}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Thắng":"Won"}</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${m>0?"text-rose-400":"text-slate-400"}">${m}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Thua":"Lost"}</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${w}%</div>
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
                      <span class="text-slate-200">${p}-${f}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${b>0?"bg-emerald-500/10 text-emerald-400":b<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${b>0?"+":""}${b}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>${t?"Điểm Thắng/Bại:":"Points W/L:"}</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${y}-${$}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${v>0?"bg-emerald-500/10 text-emerald-400":v<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${v>0?"+":""}${v}
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
            ${u}
          </div>
        </div>
      `},e=this.state.teams.filter(i=>i.category==="Men's Doubles"),n=this.state.teams.filter(i=>i.category==="Mixed's Doubles");s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Thành Viên & Đội Đăng Ký</h2>
        <p class="view-subtitle">${t?"Hồ sơ thành viên và danh sách đội hình phân hạng":"Browse player preferences and team statistics"}</p>
      </div>

      <!-- Teams lists -->
      ${a(e,"Men's Doubles")}
      ${a(n,"Mixed's Doubles")}
    `}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const s=new Date("May 31, 2026 13:30:00").getTime(),t=()=>{const a=document.getElementById("cd-days"),e=document.getElementById("cd-hours"),n=document.getElementById("cd-minutes"),i=document.getElementById("cd-seconds");if(!a){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const r=new Date().getTime(),l=s-r;if(l<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),a.textContent="00",e.textContent="00",n.textContent="00",i.textContent="00";return}const o=Math.floor(l/(1e3*60*60*24)),h=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(l%(1e3*60*60)/(1e3*60)),c=Math.floor(l%(1e3*60)/1e3);a.textContent=o.toString().padStart(2,"0"),e.textContent=h.toString().padStart(2,"0"),n.textContent=u.toString().padStart(2,"0"),i.textContent=c.toString().padStart(2,"0")};t(),this.countdownTimer=setInterval(t,1e3)}handleSyncUpdate(s,t){if(this.renderActiveView(),s==="MOCK_TOGGLE"){const a=document.getElementById("demo-mock-switch");a&&(a.checked=t.enabled),t.enabled?this.startDemoSimulation(!0):this.stopDemoSimulation(!0)}if(this.activeSpectateMatchId&&t&&t.matchId===this.activeSpectateMatchId)if(s==="STATUS_UPDATE"&&!t.isLive){const a=this.state.matches.find(e=>e.id===t.matchId);if(a)this.showSpectatorMatchEndNotice(a);else{const e=document.getElementById("spectate-overlay-container");e&&(e.classList.add("hidden"),e.innerHTML=""),this.activeSpectateMatchId=null}}else this.renderSpectateOverlay(this.activeSpectateMatchId)}showSpectatorMatchEndNotice(s){const t=this.lang==="vi",a=s.stage||"Group Stage";let e=s.team1;s.score2Sets>s.score1Sets&&(e=s.team2);let n=t?"CHIẾN THẮNG TRẬN ĐẤU!":"WIN THE MATCH!",i=t?"TRẬN ĐẤU ĐÃ KẾT THÚC":"MATCH COMPLETED",r=t?`🎉 Chúc mừng đội **${e}** đã xuất sắc giành chiến thắng trong trận đấu này! 🎉`:`🎉 Congratulations to **${e}** on winning this match! 🎉`,l="🏸",o=t?"ĐỘI GIÀNH CHIẾN THẮNG":"MATCH WINNER",h="#84cc16",u="rgba(132, 204, 22, 0.45)";a==="Semi-finals"?(n=t?"CHÚC MỪNG CHIẾN THẮNG BÁN KẾT!":"CONGRATULATIONS ON WINNING!",i=t?"GIÀNH VÉ VÀO CHUNG KẾT":"QUALIFIED FOR THE FINALS",r=t?`⚡ Tuyệt vời! Đội **${e}** đã giành chiến thắng trận đấu Bán Kết và chính thức giành quyền bước vào trận Chung Kết tranh chức vô địch (Grand Final)! 🏆`:`⚡ Spectacular! **${e}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,l="🏅",o=t?"ĐỘI CHIẾN THẮNG BÁN KẾT":"SEMI-FINALS WINNER",h="#06b6d4",u="rgba(6, 182, 212, 0.45)"):a==="Grand Final"?(n=t?"NHÀ VÔ ĐỊCH GIẢI ĐẤU!":"TOURNAMENT CHAMPIONS!",i=t?"CÚP VÔ ĐỊCH GEAR GAMES 2026":"GEAR GAMES BADMINTON 2026 CUP",r=t?`👑 TÂN VƯƠNG GIẢI ĐẤU! Xin được nhiệt liệt vinh danh nhà vô địch Gear Games Badminton 2026: **${e}**! Chiến thắng lịch sử vô cùng xứng đáng! 🏆🥇`:`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${e}**! A historic and well-deserved victory! 🏆🥇`,l="🏆",o=t?"QUÁN QUÂN GIẢI ĐẤU":"TOURNAMENT CHAMPIONS",h="#fbbf24",u="rgba(251, 191, 36, 0.5)"):a==="Bronze Match"&&(n=t?"ĐOẠT HẠNG BA CHUNG CUỘC!":"BRONZE MEDALISTS!",i=t?"HUY CHƯƠNG ĐỒNG THUỘC VỀ":"BRONZE MEDAL SECURED",r=t?`🥉 Tuyệt vời! Đội **${e}** đã giành chiến thắng trận tranh Hạng Ba và xuất sắc mang về tấm **Huy Chương Đồng** danh giá! 🥉`:`🥉 Superb! **${e}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,l="🥉",o=t?"HẠNG BA CHUNG CUỘC":"BRONZE WINNER",h="#ea580c",u="rgba(234, 88, 12, 0.45)");const c=document.createElement("div");c.className="match-end-modal-backdrop relative",c.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${u}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${u}); line-height: 1;">
            ${l}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${h}; filter: drop-shadow(0 0 8px ${u});">${n}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${i}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${o}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${e}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${s.sets?s.sets.map((g,d)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${d+1}: <span class="text-volt">${g.t1}</span>-<span class="text-cyan">${g.t2}</span>
                </div>
              `).join(""):""}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${r}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="spec-end-btn-home" style="font-size: 0.85rem; background-color: ${h}; color: #000; box-shadow: 0 4px 14px ${u}; border: none;">
            🏠 ${t?"Quay về trang chủ":"Back to Homepage"}
          </button>
        </div>
      </div>
    `,document.body.appendChild(c),document.getElementById("spec-end-btn-home").onclick=()=>{c.classList.add("animate-fade-out"),setTimeout(()=>{c.remove();const g=document.getElementById("spectate-overlay-container");g&&(g.classList.add("hidden"),g.innerHTML=""),this.activeSpectateMatchId=null,this.switchTab("dashboard")},300)}}toggleDemoSimulation(s){s?(localStorage.setItem("badminton_demo_mock_active","true"),this.startDemoSimulation(),this.admin.showToast(this.lang==="vi"?"Đã kích hoạt chế độ Live Demo!":"Live Demo Simulation activated!","success")):(localStorage.removeItem("badminton_demo_mock_active"),this.stopDemoSimulation(),this.admin.showToast(this.lang==="vi"?"Đã tắt chế độ Live Demo!":"Live Demo Simulation stopped!","info")),this.sync.broadcast("LIVE_MOCK_TOGGLE",{enabled:s})}startDemoSimulation(s=!1){this.stopDemoSimulation(!0),this.demoInterval=setInterval(()=>{this.stepDemoSimulation()},4500)}stopDemoSimulation(s=!1){this.demoInterval&&(clearInterval(this.demoInterval),this.demoInterval=null);const t=this.sync.getLiveMatches();Object.keys(t).forEach(a=>{this.sync.setMatchLiveStatus(a,!1);const e=this.state.matches.find(n=>n.id===a);e&&e.status==="Live"&&(e.status="Scheduled")}),this.renderActiveView()}stepDemoSimulation(){const s=this.sync.getLiveMatches(),t=Object.keys(s);if(t.length>0){const a=t[Math.floor(Math.random()*t.length)],e=s[a],n=e.sets.length-1,i=e.sets[n]||{t1:0,t2:0},r=Math.random()>.48;let l=i.t1,o=i.t2;if(r){if(e.servingTeam==="A"){const b=e.serverName;e.serverName=e.partnerName,e.partnerName=b}l++,e.servingTeam="A"}else{if(e.servingTeam==="B"){const b=e.receiverName;e.receiverName=e.receiverPartnerName,e.receiverPartnerName=b}o++,e.servingTeam="B"}e.sets[n]={t1:l,t2:o},e.score1=l,e.score2=o;const h=e.servingTeam==="A"?l:o;e.isEven=h%2===0;const u=this.state.matches.find(b=>b.id===a),c=this.state.teams.find(b=>b.name===u.team1),g=this.state.teams.find(b=>b.name===u.team2),d=c?[c.player1,c.player2]:["T1 P1","T1 P2"],m=g?[g.player1,g.player2]:["T2 P1","T2 P2"];e.servingTeam==="A"?(e.receiverName=e.isEven?m[0]:m[1],e.receiverPartnerName=e.isEven?m[1]:m[0]):(e.receiverName=e.isEven?d[0]:d[1],e.receiverPartnerName=e.isEven?d[1]:d[0]);const p=a.includes("SF")||a.includes("F-")||a.includes("B-")?21:15,f=p===15?21:30,y=Math.max(l,o),$=Math.min(l,o),T=y-$;let w=!1;if(y>=p&&(T>=2||y===f)&&(w=!0),w){e.sets[n]={t1:l,t2:o};let b=0,v=0;if(e.sets.forEach(x=>{x.t1>x.t2?b++:v++}),b===2||v===2){this.sync.broadcast("LIVE_MATCH_END",{matchId:a}),this.sync.setMatchLiveStatus(a,!1),this.state.matches.find(M=>M.id===a)&&this.state.updateMatchScore(a,e.sets,b,v,"Completed");return}else e.sets.push({t1:0,t2:0}),e.score1=0,e.score2=0,e.currentSet++,e.servingTeam=l>o?"A":"B"}this.sync.broadcast("LIVE_SCORE_UPDATE",{matchId:a,sets:e.sets,score1:e.score1,score2:e.score2,currentSet:e.currentSet,servingTeam:e.servingTeam,isEven:e.isEven,serverName:e.serverName,partnerName:e.partnerName,receiverName:e.receiverName,receiverPartnerName:e.receiverPartnerName})}else{const a=this.state.matches.find(e=>e.status==="Scheduled"&&!e.team1.includes("Winner")&&!e.team2.includes("Winner")&&!e.team1.includes("Loser")&&!e.team2.includes("Loser"));if(a){const e=this.state.teams.find(o=>o.name===a.team1),n=this.state.teams.find(o=>o.name===a.team2),i=e?[e.player1,e.player2]:["T1 P1","T1 P2"],r=n?[n.player1,n.player2]:["T2 P1","T2 P2"],l={sets:[{t1:0,t2:0}],score1:0,score2:0,currentSet:1,servingTeam:"A",isEven:!0,serverName:i[0],partnerName:i[1],receiverName:r[0],receiverPartnerName:r[1]};this.sync.broadcast("LIVE_MATCH_START",{matchId:a.id,matchState:l}),this.sync.setMatchLiveStatus(a.id,!0,l)}}}renderLivePitches(){const s=this.lang==="vi",t=["Pitch 15","Pitch 16","Pitch 20","Pitch 21"],a=this.sync.getLiveMatches();return t.map(e=>{const n=Object.keys(a).find(l=>{const o=this.state.matches.find(h=>h.id===l);return o&&o.pitch===e});if(n){const l=a[n],o=this.state.matches.find(u=>u.id===n);o.category;const h=this.admin.isAdmin||this.admin.isRef&&o.pitch===this.admin.refPitch;return`
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
              ${h?`
                <button class="btn btn-2xs btn-outline btn-join-match font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${o.id}">
                  🏸 Ump
                </button>
              `:""}
            </div>
          </div>
        `}const i=this.state.matches.find(l=>l.pitch===e&&l.status==="Scheduled"),r=this.admin.isAdmin||this.admin.isRef&&e===this.admin.refPitch;return i?`
          <div class="live-pitch-card glass-panel border border-slate-800 p-3 rounded-lg flex flex-col justify-between" style="opacity: 0.8;">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-slate-400 text-4xs">${e}</span>
              <span class="badge bg-slate-800 text-slate-500 font-bold text-5xs">${i.time}</span>
            </div>
            
            <div class="text-center py-2">
              <div class="text-5xs text-muted truncate" title="${i.team1}">${i.team1}</div>
              <div class="text-4xs font-bold text-slate-400 py-0.5">${s?"ĐỢI TRẬN":"SCHEDULED"}</div>
              <div class="text-5xs text-muted truncate" title="${i.team2}">${i.team2}</div>
            </div>

            <div class="pt-2 border-t border-slate-800/80">
              ${r?`
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
          <span class="font-extrabold text-slate-400 text-4xs mt-1.5">${e}</span>
          <span class="text-5xs text-slate-600 font-semibold mt-0.5">${s?"Sân đang trống":"Court Empty"}</span>
        </div>
      `}).join("")}openSpectateOverlay(s){if(document.getElementById("umpire-overlay-container")&&!document.getElementById("umpire-overlay-container").classList.contains("hidden")){alert(this.lang==="vi"?"Bạn đang ở trong phòng Trọng tài. Hãy thoát phòng Trọng tài trước!":"You are in the Umpire Control room. Please exit Umpire mode first!");return}if(this.activeSpectateMatchId=s,!document.getElementById("spectate-overlay-container")){const t=document.createElement("div");t.id="spectate-overlay-container",t.className="umpire-overlay-backdrop",document.body.appendChild(t)}this.renderSpectateOverlay(s),setTimeout(()=>{const t=document.querySelector(".spectate-court-svg .svg-shuttle");t&&(t.setAttribute("dur","0.7s"),t.innerHTML=`
          <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
            <mpath href="#spectate-shuttle-path" />
          </animateMotion>
        `)},100)}renderSpectateOverlay(s){const t=document.getElementById("spectate-overlay-container");if(!t)return;t.classList.remove("hidden");const a=this.lang==="vi",e=this.state.matches.find(L=>L.id===s),i=this.sync.getLiveMatches()[s];if(!i||!e){t.classList.add("hidden"),this.activeSpectateMatchId=null;return}i.isEven,e.category;let r,l,o,h;const u=i.team1Right||e.team1.split(" ")[0]+" 1",c=i.team1Left||e.team1.split(" ")[0]+" 2",g=i.team2Right||e.team2.split(" ")[0]+" 1",d=i.team2Left||e.team2.split(" ")[0]+" 2";i.isCourtSwapped?(r=g,l=d,o=u,h=c):(r=u,l=c,o=g,h=d);const m=i.serverName,p=i.receiverName,f=L=>L===m?"S":L===p?"R":"P",y=L=>L===m?"volt":L===p?"cyan":"neutral",$=L=>L===m?"text-volt":L===p?"text-cyan":"text-slate-200",T=L=>L!==m?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let w,b,v,x;m===r?(w=210,b=355):m===l?(w=90,b=355):m===o?(w=90,b=145):(w=210,b=145),p===r?(v=210,x=355):p===l?(v=90,x=355):p===o?(v=90,x=145):(v=210,x=145);const M=(L,E)=>E===355?L===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":L===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",I=M(w,b),C=M(v,x),N=(w+v)/2+30,S=(b+x)/2-40,P=i.sets.map((L,E)=>`
      <div class="umpire-set-badge">
        <span>Set ${E+1}:</span>
        <strong>${L.t1} - ${L.t2}</strong>
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
          <h2 class="text-sm font-black m-0 text-glow-volt">${a?"SÂN VẬN ĐỘNG TRỰC TUYẾN":"LIVE STADIUM SCREEN"}</h2>
          <button class="btn btn-xs btn-neutral" id="spectate-btn-close">✕ ${a?"Thoát Xem":"Exit"}</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Spectator Scoreboard Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets display -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${P}
              <div class="umpire-set-badge current">
                <span>Set ${i.currentSet}:</span>
                <strong class="text-volt">${i.score1} - ${i.score2}</strong>
              </div>
            </div>

            <!-- Big Glowing Score Pads (Read-only for Spectators) -->
            <div class="grid grid-cols-2 gap-6 text-center">
              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-volt mb-3" title="${e.team1}">
                  ${e.team1}
                </div>
                <div class="font-mono font-black text-6xl text-glow-volt py-4">${i.score1}</div>
                ${i.servingTeam==="A"?`
                  <span class="absolute top-3 right-3 text-volt animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>

              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-cyan mb-3" title="${e.team2}">
                  ${e.team2}
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
                <path d="${I}" class="svg-highlight-box serving" filter="url(#spec-glow-volt)" />
                <path d="${C}" class="svg-highlight-box receiving" filter="url(#spec-glow-cyan)" />

                <!-- shuttle flight -->
                <path id="spectate-shuttle-path" d="M ${w},${b} Q ${N},${S} ${v},${x}" class="svg-shuttle-path" />
                <circle r="5" class="svg-shuttle" filter="url(#spec-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#spectate-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${l===m?"server":l===p?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(l)}" />
                  <text x="0" y="4" class="avatar-text">${f(l)}</text>
                  ${T(l)}
                </g>
                <text x="90" y="383" class="svg-player-name ${$(l)} font-bold">${l.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${r===m?"server":r===p?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(r)}" />
                  <text x="0" y="4" class="avatar-text">${f(r)}</text>
                  ${T(r)}
                </g>
                <text x="210" y="383" class="svg-player-name ${$(r)} font-bold">${r.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${o===m?"server":o===p?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(o)}" />
                  <text x="0" y="4" class="avatar-text">${f(o)}</text>
                  ${T(o)}
                </g>
                <text x="90" y="123" class="svg-player-name ${$(o)} font-bold">${o.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${h===m?"server":h===p?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(h)}" />
                  <text x="0" y="4" class="avatar-text">${f(h)}</text>
                  ${T(h)}
                </g>
                <text x="210" y="123" class="svg-player-name ${$(h)} font-bold">${h.split(" ")[0]}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("spectate-btn-close").onclick=()=>{t.classList.add("hidden"),t.innerHTML="",this.activeSpectateMatchId=null}}}window.addEventListener("DOMContentLoaded",()=>{new j});
