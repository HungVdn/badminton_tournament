(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const A=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],B=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],H=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],G={vi:{title:" GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Quy Định và Thông Tin Giải Đấu",sections:[{id:"categories",title:"I. Nội dung thi đấu",content:["• Đôi nam nữ","• Đôi nam nam","• Tổng cộng: 10 đội - 20 người chơi"]},{id:"schedule",title:"II. Thời gian & Địa điểm",content:["• Ngày thi đấu: 31 May 2026","• Địa điểm: Sân cầu lông Beta Era"]},{id:"prizes",title:"III. Giải thưởng",content:["🏆 Giải Nhất: 2,000,000 VND + Cúp Vô Địch","🥈 Giải Nhì: 1,500,000 VND","🥉 Giải Ba: 1,000,000 VND"]},{id:"regulations",title:"IV. Thể thức thi đấu",content:["• **Vòng loại**: Thi đấu vòng tròn tính điểm (Round-Robin). Top 4 đội của mỗi hạng mục bước vào bán kết.","• **Vòng bán kết**: Đấu loại trực tiếp để chọn ra Top 2 team vào chung kết.","• **Vòng chung kết**: Đấu loại trực tiếp để chọn ra Top 1 Vô Địch Mùa Giải.","• **Điểm số ván đấu**:","  - Vòng loại: BO3 - thi đấu đến 15 điểm mỗi hiệp.","  - Bán kết & Chung kết: BO3 - thi đấu đến 21 điểm mỗi hiệp.","  - Nếu tỷ số là 20 đều (hoặc 14 đều ở 15 điểm), bên nào ghi trước 2 điểm cách biệt sẽ thắng ván đó.","  - Nếu tỷ số đạt đến 29 đều (hoặc 20 đều ở 15 điểm), bên nào ghi điểm thứ 30 (hoặc 21) trước sẽ thắng ván đó.","• **Cách tính điểm xếp hạng vòng bảng**:","  - Thắng: +1 điểm xếp hạng. Thua: +0 điểm xếp hạng.","  - Thứ tự ưu tiên khi xếp hạng: (1) Điểm số xếp hạng $\\rightarrow$ (2) Hiệu số hiệp (Set) thắng - thua $\\rightarrow$ (3) Đối đầu trực tiếp (Head-to-head) $\\rightarrow$ (4) Hiệu số tổng điểm thắng - điểm thua $\\rightarrow$ (5) Bốc thăm."]},{id:"rules",title:"V. Luật thi đấu đánh đôi",content:["• Áp dụng Luật Cầu lông Quốc tế của BWF.","• **Giao cầu & Nhận cầu**:","  - Khi điểm bên giao phát cầu là **chẵn** (0, 2, 4, 6,...), người giao cầu sẽ đứng ở ô giao cầu bên **phải** của họ và giao chéo sang ô nhận bên phải đối phương.","  - Khi điểm bên giao phát cầu là **lẻ** (1, 3, 5, 7,...), người giao cầu sẽ đứng ở ô giao cầu bên **trái** của họ và giao chéo sang ô nhận bên trái đối phương.","  - VĐV của bên nhận cầu đứng chéo đối diện với VĐV phát cầu sẽ là người nhận cầu.","  - Chỉ có người nhận cầu được quyền đánh trả cầu phát. Nếu đồng đội của họ chạm vào cầu trước, bên phát cầu được cộng 1 điểm.","• **Vị trí đứng đổi chỗ**:","  - Hai VĐV chỉ đổi chỗ bên trái-phải cho nhau khi bên họ **giao cầu và giành được điểm**.","  - Nếu bên nhận cầu giành được điểm, vị trí đứng của cả hai đội giữ nguyên và quyền giao cầu chuyển sang cho họ mà không đổi chỗ."]},{id:"intervals",title:"VI. Thời gian nghỉ & Lỗi hành vi",content:["• Khi một bên ghi được 11 điểm (hoặc 8 điểm ở hiệp 15 điểm) trước, thời gian nghỉ giữa hiệp đấu không quá 60 giây.","• Thời gian nghỉ giữa các hiệp 1, 2 và 3 không quá 2 phút.","• Trận đấu phải diễn ra liên tục. Các lỗi hành vi, câu giờ có thể bị trọng tài nhắc nhở hoặc phạt điểm."]}]},en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Beta Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class V{constructor(){this.players=[],this.teams=[],this.matches=[],this.listeners=[],this.init()}init(){const n=localStorage.getItem("badminton_players"),t=localStorage.getItem("badminton_teams"),e=localStorage.getItem("badminton_matches");this.players=n?JSON.parse(n):[...A],this.teams=t?JSON.parse(t):[...B],this.matches=e?JSON.parse(e):[...H],this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),this.players=[...A],this.teams=[...B],this.matches=[...H],this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}addListener(n){this.listeners.push(n)}notifyListeners(){this.listeners.forEach(n=>n(this))}updateMatchScore(n,t,e,s,a){const i=this.matches.find(l=>l.id===n);return i?(i.sets=t,i.score1=e,i.score2=s,i.status=a,a==="Completed"?i.winner=e>s?i.team1:i.team2:i.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(n){const t=this.teams.filter(i=>i.category===n),e=this.matches.filter(i=>i.category===n&&i.stage==="Group Stage"),s={};t.forEach(i=>{s[i.name]={name:i.name,teamId:i.id,player1:i.player1,player2:i.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),e.forEach(i=>{if(i.status!=="Completed")return;const l=i.team1,d=i.team2;if(!s[l]||!s[d])return;s[l].played+=1,s[d].played+=1;const h=Number(i.score1)||0,m=Number(i.score2)||0;s[l].setsWon+=h,s[l].setsLost+=m,s[d].setsWon+=m,s[d].setsLost+=h,h>m?(s[l].won+=1,s[l].points+=1,s[d].lost+=1):(s[d].won+=1,s[d].points+=1,s[l].lost+=1),i.sets.forEach(u=>{const r=Number(u.t1)||0,g=Number(u.t2)||0;s[l].pointsWon+=r,s[l].pointsLost+=g,s[d].pointsWon+=g,s[d].pointsLost+=r})}),Object.values(s).forEach(i=>{i.netSets=i.setsWon-i.setsLost,i.netPoints=i.pointsWon-i.pointsLost});const a=Object.values(s);return a.sort((i,l)=>{if(l.points!==i.points)return l.points-i.points;if(l.netSets!==i.netSets)return l.netSets-i.netSets;if(a.filter(h=>h.points===i.points&&h.netSets===i.netSets).length===2){const h=e.find(m=>m.status==="Completed"&&(m.team1===i.name&&m.team2===l.name||m.team1===l.name&&m.team2===i.name));if(h){if(h.winner===i.name)return-1;if(h.winner===l.name)return 1}}return l.netPoints!==i.netPoints?l.netPoints-i.netPoints:i.name.localeCompare(l.name)}),a}isGroupStageComplete(n){const t=this.matches.filter(e=>e.category===n&&e.stage==="Group Stage");return t.length>0&&t.every(e=>e.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(t=>{const e=this.isGroupStageComplete(t),s=this.calculateStandings(t),a=e?s[0].name:`1st Place ${t==="Men's Doubles"?"MD":"XD"}`,i=e?s[1].name:`2nd Place ${t==="Men's Doubles"?"MD":"XD"}`,l=e?s[2].name:`3rd Place ${t==="Men's Doubles"?"MD":"XD"}`,d=e?s[3].name:`4th Place ${t==="Men's Doubles"?"MD":"XD"}`,h=t==="Men's Doubles"?"MD":"XD",m=`SF1-${h}`,u=`SF2-${h}`,r=`F-${h}`,g=`B-${h}`;let o=this.matches.find(b=>b.id===m),c=this.matches.find(b=>b.id===u),p=this.matches.find(b=>b.id===r),v=this.matches.find(b=>b.id===g);const S="4:30 - 5:10",$=t==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";o?(o.status!=="Completed"||o.team1&&o.team1.includes("Place")||o.team2&&o.team2.includes("Place"))&&(o.team1=a,o.team2=d):(o={id:m,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:S,team1:a,team2:d,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(o)),c?(c.status!=="Completed"||c.team1&&c.team1.includes("Place")||c.team2&&c.team2.includes("Place"))&&(c.team1=i,c.team2=l):(c={id:u,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:S,team1:i,team2:l,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(c));const M=o.status==="Completed"?o.winner:`Winner SF1 (${h})`,f=o.status==="Completed"?o.winner===o.team1?o.team2:o.team1:`Loser SF1 (${h})`,w=c.status==="Completed"?c.winner:`Winner SF2 (${h})`,T=c.status==="Completed"?c.winner===c.team1?c.team2:c.team1:`Loser SF2 (${h})`;v?(v.status!=="Completed"||v.team1&&v.team1.includes("Loser")||v.team2&&v.team2.includes("Loser"))&&(v.team1=f,v.team2=T):(v={id:g,category:t,stage:"Bronze Match",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:$,team1:f,team2:T,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(v)),p?(p.status!=="Completed"||p.team1&&p.team1.includes("Winner")||p.team2&&p.team2.includes("Winner"))&&(p.team1=M,p.team2=w):(p={id:r,category:t,stage:"Grand Final",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:$,team1:M,team2:w,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(p))})}}class F{constructor(n,t){this.state=n,this.onUpdate=t,this.isAdmin=!1,this.activeMatchId=null,this.lang="vi",this.passkey="admin2026",this.init()}setLanguage(n){this.lang=n}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const n=document.createElement("div");if(n.id="score-modal-container",n.className="modal-backdrop hidden",document.body.appendChild(n),document.getElementById("admin-modal-container"))return;const t=document.createElement("div");t.id="admin-modal-container",t.className="modal-backdrop hidden",document.body.appendChild(t)}setupAdminToggleListener(){document.body.addEventListener("click",n=>{n.target.closest("#btn-toggle-admin")&&(this.isAdmin?this.logout():this.showAdminLogin());const e=n.target.closest(".btn-edit-match");if(e&&this.isAdmin){const s=e.getAttribute("data-match-id");this.openScoreModal(s)}})}logout(){this.isAdmin=!1,sessionStorage.setItem("badminton_isAdmin","false"),this.onUpdate();const n=this.lang==="vi"?"Đã đăng xuất quyền Admin":"Logged out from Admin Mode";this.showToast(n,"info")}showAdminLogin(){const n=document.getElementById("admin-modal-container");if(!n)return;const t=this.lang==="vi"?"Đăng Nhập Admin":"Admin Login",e=this.lang==="vi"?"Nhập mã truy cập để kích hoạt quyền nhập điểm:":"Enter passkey to enable score reporting:",s=this.lang==="vi"?"Mã bảo mật":"Passkey",a=this.lang==="vi"?"Đăng Nhập":"Login",i=this.lang==="vi"?"Hủy":"Cancel";n.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${t}</h3>
        <p class="modal-desc">${e}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${s}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${i}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${a}</button>
        </div>
      </div>
    `,n.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>n.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=l=>{l.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const n=document.getElementById("admin-passkey-input"),t=document.getElementById("admin-login-error");if(!(!n||!t))if(n.value===this.passkey){this.isAdmin=!0,sessionStorage.setItem("badminton_isAdmin","true"),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const e=this.lang==="vi"?"Đăng nhập thành công! Quyền chỉnh sửa điểm đã mở.":"Login success! Admin score editor activated.";this.showToast(e,"success")}else t.textContent=this.lang==="vi"?"Mã bảo mật không đúng. Hãy thử lại.":"Incorrect passkey. Please try again.",t.classList.remove("hidden"),n.classList.add("input-error"),n.focus()}openScoreModal(n){this.activeMatchId=n;const t=this.state.matches.find(y=>y.id===n);if(!t)return;const e=document.getElementById("score-modal-container");if(!e)return;const s=t.stage==="Group Stage",a=s?15:21,i=s?21:30,l=this.lang==="vi"?"Nhập Điểm Trận Đấu":"Match Score Editor",d=(this.lang==="vi","Set"),h=t.team1,m=t.team2,u=this.lang==="vi"?"Lưu Kết Quả":"Save Score",r=this.lang==="vi"?"Hủy":"Cancel",g=this.lang==="vi"?"Xóa Điểm":"Clear Score",o=t.sets[0]?t.sets[0].t1:"",c=t.sets[0]?t.sets[0].t2:"",p=t.sets[1]?t.sets[1].t1:"",v=t.sets[1]?t.sets[1].t2:"",S=t.sets[2]?t.sets[2].t1:"",$=t.sets[2]?t.sets[2].t2:"";e.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${l}</h3>
          <span class="badge ${s?"bg-indigo":"bg-purple"}">${t.stage} (${a} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">${this.lang==="vi"?"Đội 1":"Team 1"}</div>
          <div>VS</div>
          <div class="col-span-2 text-right">${this.lang==="vi"?"Đội 2":"Team 2"}</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${h}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${m}</div>
        </div>

        <form id="score-form" class="space-y-4">
          <!-- Set 1 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${o}" required />
            </div>
            <div class="text-center font-bold text-muted">${d} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${c}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${p}" required />
            </div>
            <div class="text-center font-bold text-muted">${d} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${v}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${S}" />
            </div>
            <div class="text-center font-bold text-muted">${d} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${i}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${$}" />
            </div>
          </div>

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${g}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${r}</button>
              <button type="submit" class="btn btn-primary">${u}</button>
            </div>
          </div>
        </form>
      </div>
    `,e.classList.remove("hidden");const M=document.getElementById("s1-t1"),f=document.getElementById("s1-t2"),w=document.getElementById("s2-t1"),T=document.getElementById("s2-t2"),b=document.getElementById("s3-t1"),C=document.getElementById("s3-t2"),L=document.getElementById("s3-row"),k=()=>{const y=this.validateSetScore(Number(M.value),Number(f.value),a),x=this.validateSetScore(Number(w.value),Number(T.value),a);y.valid&&x.valid?y.winner===x.winner?(L.classList.add("opacity-40"),b.disabled=!0,C.disabled=!0,b.value="",C.value="",b.removeAttribute("required"),C.removeAttribute("required")):(L.classList.remove("opacity-40"),b.disabled=!1,C.disabled=!1,b.setAttribute("required","required"),C.setAttribute("required","required")):(L.classList.add("opacity-40"),b.disabled=!0,C.disabled=!0,b.value="",C.value="",b.removeAttribute("required"),C.removeAttribute("required"))};[M,f,w,T].forEach(y=>{y.addEventListener("input",k)}),k(),document.getElementById("btn-cancel-score").onclick=()=>e.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(n),document.getElementById("score-form").onsubmit=y=>{y.preventDefault(),this.handleSaveScore(t,a)}}validateSetScore(n,t,e){if(isNaN(n)||isNaN(t))return{valid:!1};if(n<0||t<0)return{valid:!1};const s=Math.max(n,t),a=Math.min(n,t),i=s-a,l=n>t?1:2;if(s<e)return{valid:!1};if(s===e&&i>=2)return{valid:!0,winner:l};const d=e===15?21:30;if(s>e){if(i===2&&s<d)return{valid:!0,winner:l};if(s===d&&i===1)return{valid:!0,winner:l}}return{valid:!1}}handleClearScore(n){confirm(this.lang==="vi"?"Bạn có chắc chắn muốn xóa điểm trận này không?":"Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(n,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã xóa điểm trận đấu.":"Match score cleared.","info"))}handleSaveScore(n,t){const e=Number(document.getElementById("s1-t1").value),s=Number(document.getElementById("s1-t2").value),a=Number(document.getElementById("s2-t1").value),i=Number(document.getElementById("s2-t2").value),l=document.getElementById("s3-t1"),d=document.getElementById("s3-t2"),h=document.getElementById("score-error-msg"),m=this.validateSetScore(e,s,t);if(!m.valid){this.showInputError(h,this.lang==="vi"?`Set 1 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm (hoặc chạm mốc giới hạn ${t===15?21:30} điểm).`:`Set 1 is invalid. Winner must reach ${t} and lead by 2, or reach cap limit of ${t===15?21:30} points.`);return}const u=this.validateSetScore(a,i,t);if(!u.valid){this.showInputError(h,this.lang==="vi"?`Set 2 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm.`:`Set 2 is invalid. Winner must reach at least ${t} and lead by 2.`);return}const r=[{t1:e,t2:s},{t1:a,t2:i}];let g=(m.winner===1?1:0)+(u.winner===1?1:0),o=(m.winner===2?1:0)+(u.winner===2?1:0);if(g===1&&o===1){const c=Number(l.value),p=Number(d.value),v=this.validateSetScore(c,p,t);if(!v.valid){this.showInputError(h,this.lang==="vi"?"Tỉ số Set 1 & 2 là hòa 1-1. Bạn phải nhập thông tin Set 3 hợp lệ.":"Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.");return}r.push({t1:c,t2:p}),v.winner===1?g++:o++}g>o?n.team1:n.team2,this.state.updateMatchScore(n.id,r,g,o,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã cập nhật kết quả thành công!":"Score updated successfully!","success")}showInputError(n,t){n.textContent=t,n.classList.remove("hidden")}showToast(n,t="success"){const e=document.createElement("div");e.className=`toast-alert toast-${t}`,e.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${t==="success"?"✓":t==="info"?"ℹ":"⚠"}</span>
        <span>${n}</span>
      </div>
    `,document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},3e3)}}class R{constructor(n){this.container=document.getElementById(n),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="vi",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(n){this.lang=n,this.render()}setScoreParity(n){this.isEven=n,this.render()}setTeams(n,t){this.teamAPlayers=n,this.teamBPlayers=t,this.render()}init(){this.container&&this.render()}render(){var L,k,y,x;if(!this.container)return;const n=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],t=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],e=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],s=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],a=this.lang==="vi"?"Điểm Chẵn (0, 2, 4...)":"Even Score (0, 2, 4...)",i=this.lang==="vi"?"Điểm Lẻ (1, 3, 5...)":"Odd Score (1, 3, 5...)",l=this.lang==="vi"?"Mô Phỏng Luật Giao Cầu Đôi":"Doubles Service Simulator",d=this.lang==="vi"?`Đội giao cầu (Phía dưới) có điểm số **${this.isEven?"CHẴN":"LẺ"}**:`:`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,h=this.lang==="vi"?`<ul>
          <li><strong>Người giao cầu:</strong> <span class="highlight-volt">${n}</span> giao cầu từ ô bên <strong>${this.isEven?"PHẢI":"TRÁI"}</strong>.</li>
          <li><strong>Người nhận cầu:</strong> <span class="highlight-cyan">${e}</span> đứng ô đối diện nhận cầu.</li>
          <li><strong>Vùng cầu hợp lệ:</strong> Ô giao cầu đôi (rộng hơn nhưng ngắn hơn vùng giao đơn) được tô viền sáng.</li>
         </ul>`:`<ul>
          <li><strong>Server:</strong> <span class="highlight-volt">${n}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
          <li><strong>Receiver:</strong> <span class="highlight-cyan">${e}</span> stands in the diagonal court to receive.</li>
          <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
         </ul>`,m=this.isEven?210:90,u=385,r=this.isEven?90:210,g=440,o=this.isEven?90:210,c=115,p=this.isEven?210:90,v=60,S=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",$=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",M=m,f=u-10,w=o,T=c+10,b=(M+w)/2+30,C=(f+T)/2-40;this.container.innerHTML=`
      <div class="court-sim-card glass-card">
        <h3 class="court-title flex items-center justify-between">
          <span>${l}</span>
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
              <path d="${S}" class="svg-highlight-box serving" filter="url(#neon-glow-volt)" />
              
              <!-- HIGHLIGHT TARGET RECEIVING BOX -->
              <path d="${$}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${M},${f} Q ${b},${C} ${w},${T}" class="svg-shuttle-path" />
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
              <text x="${m}" y="${u+28}" class="svg-player-name text-volt">${n.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${r}" cy="${g}" r="12" class="avatar-bg neutral" />
                <text x="${r}" y="${g+4}" class="avatar-text">P</text>
              </g>
              <text x="${r}" y="${g+26}" class="svg-player-name text-muted">${t.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${o}" cy="${c}" r="14" class="avatar-bg cyan" />
                <text x="${o}" y="${c+4}" class="avatar-text">R</text>
              </g>
              <text x="${o}" y="${c-20}" class="svg-player-name text-cyan">${e.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${p}" cy="${v}" r="12" class="avatar-bg neutral" />
                <text x="${p}" y="${v+4}" class="avatar-text">P</text>
              </g>
              <text x="${p}" y="${v-18}" class="svg-player-name text-muted">${s.split(" ")[0]}</text>
            </svg>
          </div>
          
          <div class="court-controls-wrapper flex flex-col justify-between">
            <div>
              <div class="selector-title">${this.lang==="vi"?"Trạng Thái Điểm Số":"Score Status"}</div>
              <div class="sim-toggle-buttons grid grid-cols-2 gap-2 mb-4">
                <button class="btn-toggle-sim ${this.isEven?"active glow-volt":""}" id="sim-btn-even">
                  ${a}
                </button>
                <button class="btn-toggle-sim ${this.isEven?"":"active glow-cyan"}" id="sim-btn-odd">
                  ${i}
                </button>
              </div>
              
              <div class="sim-explanation">
                <div class="exp-header flex items-center gap-2 mb-2">
                  <span class="indicator-dot pulse-${this.isEven?"volt":"cyan"}"></span>
                  <span>${d}</span>
                </div>
                <div class="exp-details">${h}</div>
              </div>
            </div>
            
            <div class="court-sim-footer mt-4 p-3 glass-panel rounded-lg text-xs text-muted">
              ${this.lang==="vi"?"💡 <strong>Gợi ý:</strong> Click trực tiếp vào ô sân dưới để giao chẵn/lẻ. Vị trí giao cầu đổi bên khi và chỉ khi đội giao cầu thắng pha cầu đó và ghi điểm chẵn/lẻ.":"💡 <strong>Tip:</strong> Click directly on the bottom court boxes to toggle even/odd service. Players only swap courts when their team wins a point on their own serve."}
            </div>
          </div>
        </div>
      </div>
    `,(L=document.getElementById("sim-btn-even"))==null||L.addEventListener("click",()=>this.setScoreParity(!0)),(k=document.getElementById("sim-btn-odd"))==null||k.addEventListener("click",()=>this.setScoreParity(!1)),(y=document.getElementById("svg-click-right"))==null||y.addEventListener("click",()=>this.setScoreParity(!0)),(x=document.getElementById("svg-click-left"))==null||x.addEventListener("click",()=>this.setScoreParity(!1))}}class j{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const n=()=>this.resize();window.addEventListener("resize",n),this.resizeHandler=n;for(let e=0;e<120;e++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const t=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let e=0;this.particles.forEach(s=>{s.tiltAngle+=s.tiltAngleIncremental,s.y+=s.speed,s.x+=Math.sin(s.tiltAngle)*.5,s.tilt=Math.sin(s.tiltAngle-s.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=s.r,this.ctx.strokeStyle=s.color,this.ctx.moveTo(s.x+s.tilt+s.r/2,s.y),this.ctx.lineTo(s.x+s.tilt,s.y+s.tilt+s.r/2),this.ctx.stroke(),s.y<=this.canvas.height&&e++}),e>0?this.animationFrame=requestAnimationFrame(t):this.stop()};t()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class O{constructor(){this.state=new V,this.lang=localStorage.getItem("badminton_lang")||"vi",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new j,this.countdownTimer=null,this.admin=new F(this.state,()=>this.handleStateChange()),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(s=>{s.addEventListener("click",a=>{const i=a.currentTarget.getAttribute("data-tab");i&&this.switchTab(i)})}),window.addEventListener("resize",()=>this.updateActivePill());const t=document.getElementById("btn-lang-toggle");t&&t.addEventListener("click",()=>{this.lang=this.lang==="vi"?"en":"vi",localStorage.setItem("badminton_lang",this.lang),this.admin.setLanguage(this.lang),this.courtSimulator&&this.courtSimulator.setLanguage(this.lang),this.translateStaticElements(),this.renderActiveView(),this.updateNavbar()});const e=document.getElementById("btn-reset-db");e&&e.addEventListener("click",()=>{this.admin.isAdmin&&confirm(this.lang==="vi"?"CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ dữ liệu giải đấu về trạng thái ban đầu. Bạn có muốn tiếp tục?":"WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast(this.lang==="vi"?"Đã thiết lập lại dữ liệu!":"Database reset to default!","success"))})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(n){this.activeTab=n,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(e=>{e.getAttribute("data-tab")===n?e.classList.add("active"):e.classList.remove("active")}),this.renderActiveView(),n==="rules"&&setTimeout(()=>{this.courtSimulator=new R("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const e=this.state.teams.filter(a=>a.category==="Men's Doubles")[0],s=this.state.teams.filter(a=>a.category==="Mixed's Doubles")[0];e&&s&&this.courtSimulator.setTeams([e.player1,e.player2],[s.player1,s.player2])},50),this.updateActivePill()}updateActivePill(){const n=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),t=document.querySelector(".nav-tabs-wrapper");if(!t)return;let e=document.querySelector(".nav-active-pill");e||(e=document.createElement("div"),e.className="nav-active-pill",t.appendChild(e)),n&&(e.style.width=`${n.offsetWidth}px`,e.style.transform=`translateX(${n.offsetLeft}px)`)}translateStaticElements(){const n=this.lang==="vi",t={dashboard:n?"🏠 Bảng Tin":"🏠 Dashboard",standings:n?"📊 Xếp Hạng":"📊 Standings",fixtures:n?"📅 Lịch Thi Đấu":"📅 Fixtures",bracket:n?"🌳 Sơ Đồ Cây":"🌳 Bracket",results:n?"🏆 Bảng Vàng":"🏆 Final Results",rules:n?"📘 Luật Đánh Đôi":"📘 Doubles Rules",teams:n?"👥 Đội Chơi":"👥 Teams"};Object.keys(t).forEach(s=>{const a=document.querySelector(`.nav-tab[data-tab="${s}"] span`);a&&(a.textContent=t[s])});const e=document.querySelector("#btn-lang-toggle span");e&&(e.textContent=n?"ENGLISH":"TIẾNG VIỆT")}updateNavbar(){const n=this.lang==="vi",t=document.getElementById("btn-toggle-admin"),e=document.getElementById("btn-reset-db");t&&(this.admin.isAdmin?(t.innerHTML=`🛡️ ${n?"Thoát Admin":"Exit Admin"}`,t.classList.remove("btn-outline"),t.classList.add("btn-danger"),e&&e.classList.remove("hidden")):(t.innerHTML=`🔐 ${n?"Đăng Nhập Admin":"Admin Login"}`,t.classList.remove("btn-danger"),t.classList.add("btn-outline"),e&&e.classList.add("hidden")))}renderActiveView(){const n=document.getElementById("main-view-container");if(n)switch(n.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(n);break;case"standings":this.renderStandings(n);break;case"fixtures":this.renderFixtures(n);break;case"bracket":this.renderBracket(n);break;case"results":this.renderResults(n);break;case"rules":this.renderRules(n);break;case"teams":this.renderTeams(n);break}}renderDashboard(n){var m,u;const t=this.lang==="vi",e=this.state.matches.length,s=this.state.matches.filter(r=>r.status==="Completed").length,a=e>0?Math.round(s/e*100):0;let i=0;this.state.matches.forEach(r=>{r.status==="Completed"&&r.sets.forEach(g=>{i+=g.t1+g.t2})});const l=t?"GIẢI VÔ ĐỊCH CẦU LÔNG GEAR GAMES 2026":"GEAR GAMES BADMINTON CHAMPIONSHIP 2026",d=t?"Hệ thống cập nhật xếp hạng, tỷ số & sơ đồ trực tiếp":"Live standings, schedule fixtures & bracket generator",h=t?"THỜI GIAN KHAI MẠC":"COUNTDOWN TO TOURNAMENT";n.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${l}</h1>
        <p class="hero-subtitle">${d}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${h}</div>
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
          <div class="stat-icon text-volt flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 28px; height: 28px;" class="stroke-volt animate-pulse">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3-3h.75a3 3 0 0 0 3-3v-1.5a3 3 0 0 0-3-3H19.5M16.5 18.75v-2.25m-9 2.25v-2.25m9-2.25H7.5m9 0a4.5 4.5 0 0 0 9-9V3.75h-9v1.5a4.5 4.5 0 0 0 9 9ZM7.5 12H6.75a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3h.75m0 7.5v-7.5" />
            </svg>
          </div>
          <div class="stat-info">
            <span class="stat-value">${s}/${e}</span>
            <span class="stat-label">${t?"Trận Đã Đấu":"Matches Completed"}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${a}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${a}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 28px; height: 28px;" class="stroke-cyan">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
            </svg>
          </div>
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
          <div class="stat-icon text-purple flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 28px; height: 28px;" class="stroke-purple">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          </div>
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
    `,(m=document.getElementById("dash-goto-md"))==null||m.addEventListener("click",()=>this.switchTab("standings")),(u=document.getElementById("dash-goto-xd"))==null||u.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(n){const t=this.state.calculateStandings(n),e=this.lang==="vi";let s=t.slice(0,3).map((a,i)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${i===0?"🥇":i===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${a.name}</td>
          <td class="text-center font-semibold text-volt">${a.points}</td>
          <td class="text-center text-slate-300">${a.played}</td>
          <td class="text-center text-slate-300">${a.netSets>0?"+"+a.netSets:a.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${a.pointsWon}-${a.pointsLost}</td>
        </tr>
      `).join("");return t.length===0&&(s=`<tr><td colspan="6" class="text-center text-muted py-4">${e?"Không có dữ liệu":"No data available"}</td></tr>`),`
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>${e?"Đội Chơi":"Team"}</th>
            <th class="text-center">${e?"Điểm Win":"Wins"}</th>
            <th class="text-center">${e?"Trận":"Pld"}</th>
            <th class="text-center">${e?"Hiệu Set":"Sets"}</th>
            <th class="text-center">${e?"Tổng Điểm":"Points"}</th>
          </tr>
        </thead>
        <tbody>
          ${s}
        </tbody>
      </table>
    `}renderStandings(n){const t=this.lang==="vi";n.innerHTML=`
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(n){const t=this.lang==="vi",e=this.state.calculateStandings(n),s=n==="Men's Doubles",a=s?"text-volt":"text-cyan",i=e.map((l,d)=>{const h=d+1,m=h<=4;this.state.isGroupStageComplete(n);let u=`<span class="rank-circle font-bold ${h===1?"gold":h===2?"silver":h===3?"bronze":""}">${h}</span>`,r="";m?r=`<span class="advance-tag neon-green">${t?"BÁN KẾT":"SEMIS"}</span>`:r=`<span class="advance-tag text-muted">${t?"LOẠI":"OUT"}</span>`;const g=l.played===e.length-1,o=g?`<span class="finished-tag">${t?"Đủ 4 trận":"4 Matches"}</span>`:"";return`
        <tr class="${m?"row-top-4":"row-eliminated"} ${s?"md-row":"xd-row"}">
          <td class="text-center">${u}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${l.name}</span>
              ${r}
              ${o}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${l.player1} & ${l.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${l.points}</td>
          <td class="text-center font-bold ${g?"text-emerald-400":"text-slate-200"}">${l.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${l.won}</td>
          <td class="text-center font-semibold ${l.lost>0?"text-rose-400":"text-slate-400"}">${l.lost}</td>
          <td class="text-center text-slate-200 font-bold ${l.netSets>=0?"text-emerald-400":"text-rose-400"}">
            ${l.setsWon}-${l.setsLost} 
            <span class="text-xs font-normal">(${l.netSets>=0?"+"+l.netSets:l.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${l.pointsWon}-${l.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${l.netPoints>=0?"+"+l.netPoints:l.netPoints})</span>
          </td>
        </tr>
      `}).join("");return`
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${s?"💎":"🔮"}</span>
          <span class="${a}">${n}</span>
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
    `}renderFixtures(n){const t=this.lang==="vi";let e="";this.activeCategoryFilter==="all"?e=`
        <div class="fixtures-grid gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `:this.activeCategoryFilter==="md"?e=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
        </div>
      `:e=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `,n.innerHTML=`
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

      ${e}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const s=document.getElementById("fixture-search");s.oninput=i=>{this.fixtureSearchText=i.target.value,this.renderActiveView();const l=document.getElementById("fixture-search");l&&(l.focus(),l.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(i=>{i.onclick=()=>{this.fixtureStatusFilter=i.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(n,t,e){const s=this.state.teams.find(i=>i.name===n),a=this.state.teams.find(i=>i.name===t);return!!(s&&(s.player1.toLowerCase().includes(e)||s.player2.toLowerCase().includes(e))||a&&(a.player1.toLowerCase().includes(e)||a.player2.toLowerCase().includes(e)))}renderCategoryFixtures(n){const t=this.lang==="vi",e=n==="Men's Doubles",s=e?"Men's Doubles":"Mixed's Doubles";let a=this.state.matches.filter(c=>c.category===n);if(this.fixtureStatusFilter!=="all"&&(a=a.filter(c=>c.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const c=this.fixtureSearchText.toLowerCase().trim();a=a.filter(p=>p.team1.toLowerCase().includes(c)||p.team2.toLowerCase().includes(c)||p.stage&&p.stage.toLowerCase().includes(c)||p.pitch&&p.pitch.toLowerCase().includes(c)||this.checkPlayersIncludeSearch(p.team1,p.team2,c))}const i=a.filter(c=>c.stage==="Group Stage"),l=a.filter(c=>c.stage==="Semi-finals"),d=a.filter(c=>c.stage==="Grand Final"),h=a.filter(c=>c.stage==="Bronze Match"),m=t?"TRẬN CHUNG KẾT":"GRAND CHAMPIONSHIP",u=t?"TRANH HẠNG BA":"BRONZE FINALS",r=t?"VÒNG BÁN KẾT":"SEMIFINALS STAGE",g=t?"VÒNG BẢNG XOAY VÒNG":"GROUP STAGE QUALIFYING",o=(c,p)=>c.length===0?"":`
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${e?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${e?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${p}</span>
            <span class="text-slate-600 font-medium">${c.length} ${c.length===1?"Match":"Matches"}</span>
          </div>
          <div class="flex flex-col gap-3">
            ${this.renderMatchCards(c)}
          </div>
        </div>
      `;return`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${e?"💎":"🔮"}</span>
          <span class="${e?"text-volt":"text-cyan"}">${s}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${o(d,m)}
          ${o(h,u)}
          ${o(l,r)}
          ${o(i,g)}
        </div>
      </div>
    `}renderMatchCards(n){const t=this.lang==="vi";return n.length===0?`<div class="col-span-2 text-center text-muted py-6">${t?"Không tìm thấy trận đấu nào":"No matches found"}</div>`:n.map(e=>{const s=e.status==="Completed",a=e.team1&&(e.team1.includes("Place")||e.team1.includes("Winner")||e.team1.includes("Loser"))||e.team2&&(e.team2.includes("Place")||e.team2.includes("Winner")||e.team2.includes("Loser"));let i="",l="";e.stage==="Grand Final"?(i="border-glow-gold bg-gold-gradient",l=s?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>${t?"CHUNG KẾT":"GRAND FINAL"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">${t?"CHUNG KẾT":"GRAND FINAL"}</span>`):e.stage==="Bronze Match"?(i="border-glow-bronze bg-bronze-gradient",l=s?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>${t?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">${t?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`):(i=s?"border-completed":"border-scheduled",l=s?`<span class="match-badge completed">${t?"KẾT THÚC":"FINAL"}</span>`:`<span class="match-badge scheduled">${t?"LỊCH HẸN":"SCHEDULED"}</span>`);const d=this.admin.isAdmin?`<button class="btn btn-xs btn-outline glow-cyan btn-edit-match flex items-center gap-1.5 ${a?"disabled-btn":""}" 
                    data-match-id="${e.id}" 
                    ${a?'disabled style="opacity: 0.4; pointer-events: none; cursor: not-allowed; border-color: rgba(255,255,255,0.05); color: var(--text-muted);"':""}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; flex-shrink: 0;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"/></svg> <span>${a?t?"Khóa":"Locked":t?"Nhập Điểm":"Edit Score"}</span>
           </button>`:"",h=e.category==="Men's Doubles",m=h?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',u=this.state.teams.find($=>$.name===e.team1),r=this.state.teams.find($=>$.name===e.team2),g=u?`${u.player1} & ${u.player2}`:"",o=r?`${r.player1} & ${r.player2}`:"",c=h?"text-volt":"text-cyan";let p="",v="";if(s&&e.sets&&e.sets.length>0){const $=e.winner===e.team1?`<span class="${c}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',M=e.winner===e.team2?`<span class="${c}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';p+=$,v+=M,e.sets.forEach(f=>{p+=`<span class="${f.t1>f.t2?c:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${f.t1}</span>`,v+=`<span class="${f.t2>f.t1?c:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${f.t2}</span>`});for(let f=e.sets.length;f<3;f++)p+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',v+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else p='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',v='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';const S=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${i} ${S}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${m}
              <span>${e.pitch} | ${e.time}</span>
            </div>
            ${l}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${s&&e.winner===e.team1?c:"text-slate-200"} truncate" title="${e.team1}">
                  ${e.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${g||(t?"Đang xác định":"TBD")}">${g||(t?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${p}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${s&&e.winner===e.team2?c:"text-slate-200"} truncate" title="${e.team2}">
                  ${e.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${o||(t?"Đang xác định":"TBD")}">${o||(t?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${v}
              </div>
            </div>
          </div>

          <!-- Edit Button Footer (If Admin) -->
          ${d?`<div class="flex justify-end mt-1 pt-2 border-t border-slate-900/50">${d}</div>`:""}
        </div>
      `}).join("")}renderBracket(n){const t=this.lang==="vi",e=d=>{const h=d==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(m=>m.id===`SF1-${h}`),sf2:this.state.matches.find(m=>m.id===`SF2-${h}`),f:this.state.matches.find(m=>m.id===`F-${h}`),b:this.state.matches.find(m=>m.id===`B-${h}`)}},s=e("Men's Doubles"),a=e("Mixed's Doubles"),i=d=>this.state.calculateStandings(d).map((m,u)=>{const r=u+1,g=r<=4,o=r===1?"gold":r===2?"silver":r===3?"bronze":"",c=r===1?"🥇 Seed 1":r===2?"🥈 Seed 2":r===3?"🥉 Seed 3":r===4?"🎫 Seed 4":t?"❌ Loại":"❌ Out",p=g?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${m.name}">
              <span class="rank-circle font-bold ${o}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${r}</span>
              <span class="font-bold text-slate-200 truncate">${m.name}</span>
            </div>
            <span class="font-extrabold ${p}" style="font-size: 0.55rem; flex-shrink: 0;">${c}</span>
          </div>
        `}).join(""),l=(d,h,m,u)=>{const r=this.getAwardResults(u),g=o=>{if(!o)return'<div class="bracket-node empty">N/A</div>';const c=o.status==="Completed",p=o.team1&&(o.team1.includes("Place")||o.team1.includes("Winner")||o.team1.includes("Loser"))||o.team2&&(o.team2.includes("Place")||o.team2.includes("Winner")||o.team2.includes("Loser")),v=this.admin.isAdmin?p?`<span title="${t?"Chưa thể nhập điểm":"Cannot edit score yet"}" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>`:`<button class="btn-edit-node-score btn-edit-match" data-match-id="${o.id}">✏️</button>`:"",S=this.state.teams.find(L=>L.name===o.team1),$=this.state.teams.find(L=>L.name===o.team2),M=S?`${S.player1} & ${S.player2}`:"",f=$?`${$.player1} & ${$.player2}`:"",w=m?"text-volt":"text-cyan";let T="",b="";if(c&&o.sets&&o.sets.length>0){const L=o.winner===o.team1?`<span class="${w}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',k=o.winner===o.team2?`<span class="${w}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';T+=L,b+=k,o.sets.forEach(y=>{T+=`<span class="${y.t1>y.t2?w:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${y.t1}</span>`,b+=`<span class="${y.t2>y.t1?w:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${y.t2}</span>`});for(let y=o.sets.length;y<3;y++)T+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',b+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else T='<span style="width: 6px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',b='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';const C=c?`<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ ${t?"Đã kết thúc":"Finished"}</div>`:`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${o.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${c?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${o.pitch} | ${o.stage}</span>
              ${v}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${c&&o.winner===o.team1?w:"text-slate-300"}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${o.team1}">${o.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${M||(t?"Đang xác định":"TBD")}">${M||(t?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${T}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${c&&o.winner===o.team2?w:"text-slate-300"}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${o.team2}">${o.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${f||(t?"Đang xác định":"TBD")}">${f||(t?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${b}
                </div>
              </div>
            </div>
            
            ${C}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${m?"text-volt":"text-cyan"}">${h} Bracket</span>
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
                ${g(d.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${g(d.sf2)}
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
                ${g(d.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${g(d.b)}
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
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${r.goldTeam.name}">${r.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.goldTeam.players}">${r.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>${t?"Á QUÂN":"RUNNER-UP"}</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${r.silverTeam.name}">${r.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.silverTeam.players}">${r.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>${t?"HẠNG 3":"3RD PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${r.bronzeTeam.name}">${r.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.bronzeTeam.players}">${r.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>${t?"HẠNG 4":"4TH PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${r.fourthTeam.name}">${r.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.fourthTeam.players}">${r.fourthTeam.players}</div>
              </div>
            </div>
          </div>
        </div>
      `};n.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Sơ Đồ Cây Vòng Đoạt Cúp</h2>
        <p class="view-subtitle">${t?"Tự động tính phân cặp & lộ trình thăng cấp trực quan":"Automatic calculated tournament brackets and playoff trees"}</p>
      </div>

      ${l(s,"Men's Doubles",!0,"Men's Doubles")}
      ${l(a,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `}getAwardResults(n){const t=n==="Men's Doubles"?"MD":"XD",e=this.state.matches.find(u=>u.id===`F-${t}`),s=this.state.matches.find(u=>u.id===`B-${t}`),a=this.lang==="vi";let i={name:a?"Chưa xác định":"TBD",players:a?"Đội vô địch":"Championship Winner",confirmed:!1},l={name:a?"Chưa xác định":"TBD",players:a?"Đội hạng nhì":"Championship Runner-up",confirmed:!1},d={name:a?"Chưa xác định":"TBD",players:a?"Đội hạng ba":"Bronze Winner",confirmed:!1},h={name:a?"Chưa xác định":"TBD",players:a?"Đội hạng tư":"Bronze Runner-up",confirmed:!1};const m=u=>{if(!u)return"";const r=this.state.teams.find(g=>g.name===u);return r?`${r.player1} & ${r.player2}`:""};if(e)if(e.status==="Completed"){const u=e.winner,r=e.winner===e.team1?e.team2:e.team1;i={name:u,players:m(u),confirmed:!0},l={name:r,players:m(r),confirmed:!0}}else e.team1.includes("Winner")||e.team2.includes("Winner")||(i={name:a?"Chung Kết Đang Đấu":"Grand Finalists",players:`${e.team1} vs ${e.team2}`,confirmed:!1},l={name:a?"Đang Tranh Chức Á Quân":"Chasing Runner-up",players:a?"Đội thua trận Chung kết":"Runner-up of Grand Final",confirmed:!1});if(s)if(s.status==="Completed"){const u=s.winner,r=s.winner===s.team1?s.team2:s.team1;d={name:u,players:m(u),confirmed:!0},h={name:r,players:m(r),confirmed:!0}}else s.team1.includes("Loser")||s.team2.includes("Loser")||(d={name:a?"Tranh Hạng 3 Đang Đấu":"Bronze Contenders",players:`${s.team1} vs ${s.team2}`,confirmed:!1});return{goldTeam:i,silverTeam:l,bronzeTeam:d,fourthTeam:h}}renderResults(n){const t=this.lang==="vi",e=this.getAwardResults("Men's Doubles"),s=this.getAwardResults("Mixed's Doubles"),a=(i,l,d)=>{const h=i.goldTeam.confirmed||i.silverTeam.confirmed||i.bronzeTeam.confirmed;return`
        <div class="glass-card mb-8 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[3px] ${d?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${d?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${l}</span>
          </h3>
          <p class="text-xs text-muted mb-6">
            ${h?t?"⚡ Kết quả thi đấu chính thức đã được ghi nhận":"⚡ Official championship matches completed":t?"⏳ Đang chờ các trận chung kết & tranh hạng 3 diễn ra":"⏳ Waiting for championship finals to complete"}
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
      `};n.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Bảng Vàng Danh Vọng</h2>
        <p class="view-subtitle">${t?"Vinh danh nhà vô địch và các thứ hạng danh giá của mùa giải":"Honoring the champions and premium standings of the season"}</p>
      </div>

      ${a(e,"Men's Doubles",!0)}
      ${a(s,"Mixed's Doubles",!1)}
    `,setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(n){const t=this.lang==="vi",e=t?G.vi:G.en,s=e.sections.map(a=>{const i=a.content.map(l=>{let d=l.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return d=d.replace(/\\rightarrow/g," ➔ "),d=d.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${d}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${a.title}</h3>
          <div>${i}</div>
        </div>
      `}).join("");n.innerHTML=`
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
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${e.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${e.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${s}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(n){const t=this.lang==="vi",e=(i,l)=>{const d=l==="Men's Doubles",h=d?"text-volt":"text-cyan",m=this.state.calculateStandings(l),u=i.map(r=>{const g=this.state.matches.filter(x=>x.category===l&&x.status==="Completed"&&(x.team1===r.name||x.team2===r.name));let o=0,c=0,p=0,v=0,S=0,$=0;g.forEach(x=>{const N=x.team1===r.name;x.winner===r.name?o++:c++,N?(p+=Number(x.score1)||0,v+=Number(x.score2)||0):(p+=Number(x.score2)||0,v+=Number(x.score1)||0),x.sets&&Array.isArray(x.sets)&&x.sets.forEach(P=>{const E=Number(P.t1)||0,I=Number(P.t2)||0;N?(S+=E,$+=I):(S+=I,$+=E)})});const M=g.length,f=M>0?Math.round(o/M*100):0,w=p-v,T=S-$,b=o,C=m.findIndex(x=>x.name===r.name),L=C!==-1?C+1:"-",k=g.map(x=>{const N=x.winner===r.name,P=N?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",E=N?"W":"L",I=`${x.stage}: ${x.team1} vs ${x.team2} (${x.score1}-${x.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${P}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${I}">${E}</span>`}).join(""),y=k.length>0?k:`<span class="text-slate-500 text-5xs italic font-sans">${t?"Chưa đấu":"No matches"}</span>`;return`
          <div class="team-profile-card glass-panel border border-slate-700/50 p-4 rounded-lg hover-glowing flex flex-col justify-between"
               style="background: radial-gradient(circle at top right, ${d?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%);">
            <div>
              <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <div class="flex items-center gap-1.5 truncate max-w-[70%]">
                  <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${r.name}">${r.name}</span>
                </div>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                  <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${L}</span>
                  <span class="badge ${d?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
                </div>
              </div>

              <!-- Members -->
              <div class="flex flex-col gap-1.5 mb-4 text-xs">
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${r.player1}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${r.player2}</span>
                </div>
                
                <!-- Form guide -->
                <div class="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                  <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">${t?"PHONG ĐỘ:":"FORM:"}</span>
                  <div class="flex items-center gap-1">
                    ${y}
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
                  <div class="text-2xs font-extrabold ${d?"text-volt":"text-cyan"}">${o}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Thắng":"Won"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold ${c>0?"text-rose-400":"text-slate-400"}">${c}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Thua":"Lost"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${f}%</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${t?"Tỉ Lệ":"Win%"}</div>
                </div>
              </div>

              <!-- Telemetry detail list -->
              <div class="flex flex-col gap-1.5 font-mono">
                <div class="flex items-center justify-between text-slate-400">
                  <span>${t?"Điểm tích lũy:":"Standing Pts:"}</span>
                  <span class="font-extrabold text-slate-200">${b}</span>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${t?"Set Thắng/Bại:":"Sets W/L:"}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${p}-${v}</span>
                    <span class="text-5xs font-bold px-1 py-0.5 rounded ${w>0?"bg-emerald-500/10 text-emerald-400":w<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                      ${w>0?"+":""}${w}
                    </span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${t?"Điểm Thắng/Bại:":"Points W/L:"}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${S}-${$}</span>
                    <span class="text-5xs font-bold px-1 py-0.5 rounded ${T>0?"bg-emerald-500/10 text-emerald-400":T<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                      ${T>0?"+":""}${T}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `}).join("");return`
        <div class="glass-card mb-6">
          <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2">
            <span class="${h}">${d?"💎":"🔮"}</span>
            <span class="${h}">${l} (${i.length} Teams)</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            ${u}
          </div>
        </div>
      `},s=this.state.teams.filter(i=>i.category==="Men's Doubles"),a=this.state.teams.filter(i=>i.category==="Mixed's Doubles");n.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Thành Viên & Đội Đăng Ký</h2>
        <p class="view-subtitle">${t?"Hồ sơ thành viên và danh sách đội hình phân hạng":"Browse player preferences and team statistics"}</p>
      </div>

      <!-- Teams lists -->
      ${e(s,"Men's Doubles")}
      ${e(a,"Mixed's Doubles")}
    `}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const n=new Date("May 31, 2026 13:30:00").getTime(),t=()=>{const e=document.getElementById("cd-days"),s=document.getElementById("cd-hours"),a=document.getElementById("cd-minutes"),i=document.getElementById("cd-seconds");if(!e){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const l=new Date().getTime(),d=n-l;if(d<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),e.textContent="00",s.textContent="00",a.textContent="00",i.textContent="00";return}const h=Math.floor(d/(1e3*60*60*24)),m=Math.floor(d%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(d%(1e3*60*60)/(1e3*60)),r=Math.floor(d%(1e3*60)/1e3);e.textContent=h.toString().padStart(2,"0"),s.textContent=m.toString().padStart(2,"0"),a.textContent=u.toString().padStart(2,"0"),i.textContent=r.toString().padStart(2,"0")};t(),this.countdownTimer=setInterval(t,1e3)}}window.addEventListener("DOMContentLoaded",()=>{new O});
