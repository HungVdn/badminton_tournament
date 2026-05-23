(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const E=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],P=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],N=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],A={vi:{title:" GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Quy Định và Thông Tin Giải Đấu",sections:[{id:"categories",title:"I. Nội dung thi đấu",content:["• Đôi nam nữ","• Đôi nam nam","• Tổng cộng: 10 đội - 20 người chơi"]},{id:"schedule",title:"II. Thời gian & Địa điểm",content:["• Ngày thi đấu: 31 May 2026","• Địa điểm: Sân cầu lông Gear Games"]},{id:"prizes",title:"III. Giải thưởng",content:["🏆 Giải Nhất: 2,000,000 VND + Cúp Vô Địch","🥈 Giải Nhì: 1,500,000 VND","🥉 Giải Ba: 1,000,000 VND"]},{id:"regulations",title:"IV. Thể thức thi đấu",content:["• **Vòng loại**: Thi đấu vòng tròn tính điểm (Round-Robin). Top 4 đội của mỗi hạng mục bước vào bán kết.","• **Vòng bán kết**: Đấu loại trực tiếp để chọn ra Top 2 team vào chung kết.","• **Vòng chung kết**: Đấu loại trực tiếp để chọn ra Top 1 Vô Địch Mùa Giải.","• **Điểm số ván đấu**:","  - Vòng loại: BO3 - thi đấu đến 15 điểm mỗi hiệp.","  - Bán kết & Chung kết: BO3 - thi đấu đến 21 điểm mỗi hiệp.","  - Nếu tỷ số là 20 đều (hoặc 14 đều ở 15 điểm), bên nào ghi trước 2 điểm cách biệt sẽ thắng ván đó.","  - Nếu tỷ số đạt đến 29 đều (hoặc 20 đều ở 15 điểm), bên nào ghi điểm thứ 30 (hoặc 21) trước sẽ thắng ván đó.","• **Cách tính điểm xếp hạng vòng bảng**:","  - Thắng: +1 điểm xếp hạng. Thua: +0 điểm xếp hạng.","  - Thứ tự ưu tiên khi xếp hạng: (1) Điểm số xếp hạng $\\rightarrow$ (2) Hiệu số hiệp (Set) thắng - thua $\\rightarrow$ (3) Đối đầu trực tiếp (Head-to-head) $\\rightarrow$ (4) Hiệu số tổng điểm thắng - điểm thua $\\rightarrow$ (5) Bốc thăm."]},{id:"rules",title:"V. Luật thi đấu đánh đôi",content:["• Áp dụng Luật Cầu lông Quốc tế của BWF.","• **Giao cầu & Nhận cầu**:","  - Khi điểm bên giao phát cầu là **chẵn** (0, 2, 4, 6,...), người giao cầu sẽ đứng ở ô giao cầu bên **phải** của họ và giao chéo sang ô nhận bên phải đối phương.","  - Khi điểm bên giao phát cầu là **lẻ** (1, 3, 5, 7,...), người giao cầu sẽ đứng ở ô giao cầu bên **trái** của họ và giao chéo sang ô nhận bên trái đối phương.","  - VĐV của bên nhận cầu đứng chéo đối diện với VĐV phát cầu sẽ là người nhận cầu.","  - Chỉ có người nhận cầu được quyền đánh trả cầu phát. Nếu đồng đội của họ chạm vào cầu trước, bên phát cầu được cộng 1 điểm.","• **Vị trí đứng đổi chỗ**:","  - Hai VĐV chỉ đổi chỗ bên trái-phải cho nhau khi bên họ **giao cầu và giành được điểm**.","  - Nếu bên nhận cầu giành được điểm, vị trí đứng của cả hai đội giữ nguyên và quyền giao cầu chuyển sang cho họ mà không đổi chỗ."]},{id:"intervals",title:"VI. Thời gian nghỉ & Lỗi hành vi",content:["• Khi một bên ghi được 11 điểm (hoặc 8 điểm ở hiệp 15 điểm) trước, thời gian nghỉ giữa hiệp đấu không quá 60 giây.","• Thời gian nghỉ giữa các hiệp 1, 2 và 3 không quá 2 phút.","• Trận đấu phải diễn ra liên tục. Các lỗi hành vi, câu giờ có thể bị trọng tài nhắc nhở hoặc phạt điểm."]}]},en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Gear Games Badminton Arena"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class B{constructor(){this.players=[],this.teams=[],this.matches=[],this.listeners=[],this.init()}init(){const e=localStorage.getItem("badminton_players"),t=localStorage.getItem("badminton_teams"),s=localStorage.getItem("badminton_matches");e&&t&&s?(this.players=JSON.parse(e),this.teams=JSON.parse(t),this.matches=JSON.parse(s)):(this.players=[...E],this.teams=[...P],this.matches=[...N]),this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),this.players=[...E],this.teams=[...P],this.matches=[...N],this.saveToStorage(),this.notifyListeners()}addListener(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e(this))}updateMatchScore(e,t,s,i,r){const n=this.matches.find(a=>a.id===e);return n?(n.sets=t,n.score1=s,n.score2=i,n.status=r,r==="Completed"?n.winner=s>i?n.team1:n.team2:n.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(e){const t=this.teams.filter(n=>n.category===e),s=this.matches.filter(n=>n.category===e&&n.stage==="Group Stage"),i={};t.forEach(n=>{i[n.name]={name:n.name,teamId:n.id,player1:n.player1,player2:n.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),s.forEach(n=>{if(n.status!=="Completed")return;const a=n.team1,o=n.team2;if(!i[a]||!i[o])return;i[a].played+=1,i[o].played+=1;const l=Number(n.score1)||0,d=Number(n.score2)||0;i[a].setsWon+=l,i[a].setsLost+=d,i[o].setsWon+=d,i[o].setsLost+=l,l>d?(i[a].won+=1,i[a].points+=1,i[o].lost+=1):(i[o].won+=1,i[o].points+=1,i[a].lost+=1),n.sets.forEach(c=>{const h=Number(c.t1)||0,g=Number(c.t2)||0;i[a].pointsWon+=h,i[a].pointsLost+=g,i[o].pointsWon+=g,i[o].pointsLost+=h})}),Object.values(i).forEach(n=>{n.netSets=n.setsWon-n.setsLost,n.netPoints=n.pointsWon-n.pointsLost});const r=Object.values(i);return r.sort((n,a)=>{if(a.points!==n.points)return a.points-n.points;if(a.netSets!==n.netSets)return a.netSets-n.netSets;if(r.filter(l=>l.points===n.points&&l.netSets===n.netSets).length===2){const l=s.find(d=>d.status==="Completed"&&(d.team1===n.name&&d.team2===a.name||d.team1===a.name&&d.team2===n.name));if(l){if(l.winner===n.name)return-1;if(l.winner===a.name)return 1}}return a.netPoints!==n.netPoints?a.netPoints-n.netPoints:n.name.localeCompare(a.name)}),r}isGroupStageComplete(e){const t=this.matches.filter(s=>s.category===e&&s.stage==="Group Stage");return t.length>0&&t.every(s=>s.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(t=>{const s=this.isGroupStageComplete(t),i=this.calculateStandings(t),r=s?i[0].name:`1st Place ${t==="Men's Doubles"?"MD":"XD"}`,n=s?i[1].name:`2nd Place ${t==="Men's Doubles"?"MD":"XD"}`,a=s?i[2].name:`3rd Place ${t==="Men's Doubles"?"MD":"XD"}`,o=s?i[3].name:`4th Place ${t==="Men's Doubles"?"MD":"XD"}`,l=t==="Men's Doubles"?"MD":"XD",d=`SF1-${l}`,c=`SF2-${l}`,h=`F-${l}`,g=`B-${l}`;let m=this.matches.find(f=>f.id===d),u=this.matches.find(f=>f.id===c),p=this.matches.find(f=>f.id===h),v=this.matches.find(f=>f.id===g);const S="4:30 - 5:10",b=t==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";m?m.status!=="Completed"&&(m.team1=r,m.team2=o):(m={id:d,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:S,team1:r,team2:o,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(m)),u?u.status!=="Completed"&&(u.team1=n,u.team2=a):(u={id:c,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:S,team1:n,team2:a,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(u));const T=m.status==="Completed"?m.winner:`Winner SF1 (${l})`,M=m.status==="Completed"?m.winner===m.team1?m.team2:m.team1:`Loser SF1 (${l})`,y=u.status==="Completed"?u.winner:`Winner SF2 (${l})`,$=u.status==="Completed"?u.winner===u.team1?u.team2:u.team1:`Loser SF2 (${l})`;v?v.status!=="Completed"&&(v.team1=M,v.team2=$):(v={id:g,category:t,stage:"Bronze Match",pitch:t==="Men's Doubles"?"Pitch 15":"Pitch 20",time:b,team1:M,team2:$,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(v)),p?p.status!=="Completed"&&(p.team1=T,p.team2=y):(p={id:h,category:t,stage:"Grand Final",pitch:t==="Men's Doubles"?"Pitch 16":"Pitch 21",time:b,team1:T,team2:y,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(p))})}}class H{constructor(e,t){this.state=e,this.onUpdate=t,this.isAdmin=!1,this.activeMatchId=null,this.lang="vi",this.passkey="admin2026",this.init()}setLanguage(e){this.lang=e}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const e=document.createElement("div");if(e.id="score-modal-container",e.className="modal-backdrop hidden",document.body.appendChild(e),document.getElementById("admin-modal-container"))return;const t=document.createElement("div");t.id="admin-modal-container",t.className="modal-backdrop hidden",document.body.appendChild(t)}setupAdminToggleListener(){document.body.addEventListener("click",e=>{if(e.target.id==="btn-toggle-admin"&&(this.isAdmin?this.logout():this.showAdminLogin()),e.target.classList.contains("btn-edit-match")&&this.isAdmin){const t=e.target.getAttribute("data-match-id");this.openScoreModal(t)}})}logout(){this.isAdmin=!1,sessionStorage.setItem("badminton_isAdmin","false"),this.onUpdate();const e=this.lang==="vi"?"Đã đăng xuất quyền Admin":"Logged out from Admin Mode";this.showToast(e,"info")}showAdminLogin(){const e=document.getElementById("admin-modal-container");if(!e)return;const t=this.lang==="vi"?"Đăng Nhập Admin":"Admin Login",s=this.lang==="vi"?"Nhập mã truy cập để kích hoạt quyền nhập điểm:":"Enter passkey to enable score reporting:",i=this.lang==="vi"?"Mã bảo mật":"Passkey",r=this.lang==="vi"?"Đăng Nhập":"Login",n=this.lang==="vi"?"Hủy":"Cancel";e.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${t}</h3>
        <p class="modal-desc">${s}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${i}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${n}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${r}</button>
        </div>
      </div>
    `,e.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>e.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=a=>{a.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const e=document.getElementById("admin-passkey-input"),t=document.getElementById("admin-login-error");if(!(!e||!t))if(e.value===this.passkey){this.isAdmin=!0,sessionStorage.setItem("badminton_isAdmin","true"),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const s=this.lang==="vi"?"Đăng nhập thành công! Quyền chỉnh sửa điểm đã mở.":"Login success! Admin score editor activated.";this.showToast(s,"success")}else t.textContent=this.lang==="vi"?"Mã bảo mật không đúng. Hãy thử lại.":"Incorrect passkey. Please try again.",t.classList.remove("hidden"),e.classList.add("input-error"),e.focus()}openScoreModal(e){this.activeMatchId=e;const t=this.state.matches.find(w=>w.id===e);if(!t)return;const s=document.getElementById("score-modal-container");if(!s)return;const i=t.stage==="Group Stage",r=i?15:21,n=i?21:30,a=this.lang==="vi"?"Nhập Điểm Trận Đấu":"Match Score Editor",o=(this.lang==="vi","Set"),l=t.team1,d=t.team2,c=this.lang==="vi"?"Lưu Kết Quả":"Save Score",h=this.lang==="vi"?"Hủy":"Cancel",g=this.lang==="vi"?"Xóa Điểm":"Clear Score",m=t.sets[0]?t.sets[0].t1:"",u=t.sets[0]?t.sets[0].t2:"",p=t.sets[1]?t.sets[1].t1:"",v=t.sets[1]?t.sets[1].t2:"",S=t.sets[2]?t.sets[2].t1:"",b=t.sets[2]?t.sets[2].t2:"";s.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${a}</h3>
          <span class="badge ${i?"bg-indigo":"bg-purple"}">${t.stage} (${r} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">${this.lang==="vi"?"Đội 1":"Team 1"}</div>
          <div>VS</div>
          <div class="col-span-2 text-right">${this.lang==="vi"?"Đội 2":"Team 2"}</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${l}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${d}</div>
        </div>

        <form id="score-form" class="space-y-4">
          <!-- Set 1 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${m}" required />
            </div>
            <div class="text-center font-bold text-muted">${o} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${u}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${p}" required />
            </div>
            <div class="text-center font-bold text-muted">${o} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${v}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${S}" />
            </div>
            <div class="text-center font-bold text-muted">${o} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${b}" />
            </div>
          </div>

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${g}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${h}</button>
              <button type="submit" class="btn btn-primary">${c}</button>
            </div>
          </div>
        </form>
      </div>
    `,s.classList.remove("hidden");const T=document.getElementById("s1-t1"),M=document.getElementById("s1-t2"),y=document.getElementById("s2-t1"),$=document.getElementById("s2-t2"),f=document.getElementById("s3-t1"),x=document.getElementById("s3-t2"),D=document.getElementById("s3-row"),C=()=>{const w=this.validateSetScore(Number(T.value),Number(M.value),r),I=this.validateSetScore(Number(y.value),Number($.value),r);w.valid&&I.valid?w.winner===I.winner?(D.classList.add("opacity-40"),f.disabled=!0,x.disabled=!0,f.value="",x.value="",f.removeAttribute("required"),x.removeAttribute("required")):(D.classList.remove("opacity-40"),f.disabled=!1,x.disabled=!1,f.setAttribute("required","required"),x.setAttribute("required","required")):(D.classList.add("opacity-40"),f.disabled=!0,x.disabled=!0,f.value="",x.value="",f.removeAttribute("required"),x.removeAttribute("required"))};[T,M,y,$].forEach(w=>{w.addEventListener("input",C)}),C(),document.getElementById("btn-cancel-score").onclick=()=>s.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(e),document.getElementById("score-form").onsubmit=w=>{w.preventDefault(),this.handleSaveScore(t,r)}}validateSetScore(e,t,s){if(isNaN(e)||isNaN(t))return{valid:!1};if(e<0||t<0)return{valid:!1};const i=Math.max(e,t),r=Math.min(e,t),n=i-r,a=e>t?1:2;if(i<s)return{valid:!1};if(i===s&&n>=2)return{valid:!0,winner:a};const o=s===15?21:30;if(i>s){if(n===2&&i<o)return{valid:!0,winner:a};if(i===o&&n===1)return{valid:!0,winner:a}}return{valid:!1}}handleClearScore(e){confirm(this.lang==="vi"?"Bạn có chắc chắn muốn xóa điểm trận này không?":"Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(e,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã xóa điểm trận đấu.":"Match score cleared.","info"))}handleSaveScore(e,t){const s=Number(document.getElementById("s1-t1").value),i=Number(document.getElementById("s1-t2").value),r=Number(document.getElementById("s2-t1").value),n=Number(document.getElementById("s2-t2").value),a=document.getElementById("s3-t1"),o=document.getElementById("s3-t2"),l=document.getElementById("score-error-msg"),d=this.validateSetScore(s,i,t);if(!d.valid){this.showInputError(l,this.lang==="vi"?`Set 1 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm (hoặc chạm mốc giới hạn ${t===15?21:30} điểm).`:`Set 1 is invalid. Winner must reach ${t} and lead by 2, or reach cap limit of ${t===15?21:30} points.`);return}const c=this.validateSetScore(r,n,t);if(!c.valid){this.showInputError(l,this.lang==="vi"?`Set 2 chưa hợp lệ. Đội thắng phải đạt ít nhất ${t} điểm và hơn đối thủ 2 điểm.`:`Set 2 is invalid. Winner must reach at least ${t} and lead by 2.`);return}const h=[{t1:s,t2:i},{t1:r,t2:n}];let g=(d.winner===1?1:0)+(c.winner===1?1:0),m=(d.winner===2?1:0)+(c.winner===2?1:0);if(g===1&&m===1){const u=Number(a.value),p=Number(o.value),v=this.validateSetScore(u,p,t);if(!v.valid){this.showInputError(l,this.lang==="vi"?"Tỉ số Set 1 & 2 là hòa 1-1. Bạn phải nhập thông tin Set 3 hợp lệ.":"Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.");return}h.push({t1:u,t2:p}),v.winner===1?g++:m++}g>m?e.team1:e.team2,this.state.updateMatchScore(e.id,h,g,m,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã cập nhật kết quả thành công!":"Score updated successfully!","success")}showInputError(e,t){e.textContent=t,e.classList.remove("hidden")}showToast(e,t="success"){const s=document.createElement("div");s.className=`toast-alert toast-${t}`,s.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${t==="success"?"✓":t==="info"?"ℹ":"⚠"}</span>
        <span>${e}</span>
      </div>
    `,document.body.appendChild(s),setTimeout(()=>s.classList.add("show"),10),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},3e3)}}class k{constructor(e){this.container=document.getElementById(e),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="vi",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(e){this.lang=e,this.render()}setScoreParity(e){this.isEven=e,this.render()}setTeams(e,t){this.teamAPlayers=e,this.teamBPlayers=t,this.render()}init(){this.container&&this.render()}render(){var D,C;if(!this.container)return;const e=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],t=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],s=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],i=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],r=this.lang==="vi"?"Điểm Chẵn (0, 2, 4...)":"Even Score (0, 2, 4...)",n=this.lang==="vi"?"Điểm Lẻ (1, 3, 5...)":"Odd Score (1, 3, 5...)",a=this.lang==="vi"?"Mô Phỏng Luật Giao Cầu Đôi":"Doubles Service Simulator",o=this.lang==="vi"?`Đội giao cầu (Phía dưới) có điểm số **${this.isEven?"CHẴN":"LẺ"}**:`:`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,l=this.lang==="vi"?`<ul>
          <li><strong>Người giao cầu:</strong> <span class="highlight-volt">${e}</span> giao cầu từ ô bên <strong>${this.isEven?"PHẢI":"TRÁI"}</strong>.</li>
          <li><strong>Người nhận cầu:</strong> <span class="highlight-cyan">${s}</span> đứng ô đối diện nhận cầu.</li>
          <li><strong>Vùng cầu hợp lệ:</strong> Ô giao cầu đôi (rộng hơn nhưng ngắn hơn vùng giao đơn) được tô viền sáng.</li>
         </ul>`:`<ul>
          <li><strong>Server:</strong> <span class="highlight-volt">${e}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
          <li><strong>Receiver:</strong> <span class="highlight-cyan">${s}</span> stands in the diagonal court to receive.</li>
          <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
         </ul>`,d=this.isEven?210:90,c=385,h=this.isEven?90:210,g=440,m=this.isEven?90:210,u=115,p=this.isEven?210:90,v=60,S=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",b=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",T=d,M=c-10,y=m,$=u+10,f=(T+y)/2+30,x=(M+$)/2-40;this.container.innerHTML=`
      <div class="court-sim-card glass-card">
        <h3 class="court-title flex items-center justify-between">
          <span>${a}</span>
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
              <path d="${b}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path d="M ${T},${M} Q ${f},${x} ${y},${$}" class="svg-shuttle-path" />
              <circle cx="${y}" cy="${$}" r="5" class="svg-shuttle" filter="url(#neon-glow-cyan)" />

              <!-- Player Avatars Bottom (Team A) -->
              <!-- Server -->
              <g class="player-avatar server">
                <circle cx="${d}" cy="${c}" r="14" class="avatar-bg volt" />
                <text x="${d}" y="${c+4}" class="avatar-text">S</text>
              </g>
              <text x="${d}" y="${c+28}" class="svg-player-name text-volt">${e.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${h}" cy="${g}" r="12" class="avatar-bg neutral" />
                <text x="${h}" y="${g+4}" class="avatar-text">P</text>
              </g>
              <text x="${h}" y="${g+26}" class="svg-player-name text-muted">${t.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${m}" cy="${u}" r="14" class="avatar-bg cyan" />
                <text x="${m}" y="${u+4}" class="avatar-text">R</text>
              </g>
              <text x="${m}" y="${u-20}" class="svg-player-name text-cyan">${s.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${p}" cy="${v}" r="12" class="avatar-bg neutral" />
                <text x="${p}" y="${v+4}" class="avatar-text">P</text>
              </g>
              <text x="${p}" y="${v-18}" class="svg-player-name text-muted">${i.split(" ")[0]}</text>
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
                  ${n}
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
              ${this.lang==="vi"?"💡 <strong>Gợi ý:</strong> Vị trí giao cầu đổi bên khi và chỉ khi đội giao cầu thắng pha cầu đó và ghi điểm chẵn/lẻ. Đội nhận cầu không thay đổi vị trí khi thắng điểm.":"💡 <strong>Tip:</strong> Players only swap courts when their team wins a point on their own serve. The receiving team stays in their positions."}
            </div>
          </div>
        </div>
      </div>
    `,(D=document.getElementById("sim-btn-even"))==null||D.addEventListener("click",()=>this.setScoreParity(!0)),(C=document.getElementById("sim-btn-odd"))==null||C.addEventListener("click",()=>this.setScoreParity(!1))}}class G{constructor(){this.state=new B,this.lang=localStorage.getItem("badminton_lang")||"vi",this.activeTab="dashboard",this.activeCategoryFilter="all",this.admin=new H(this.state,()=>this.handleStateChange()),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),this.renderActiveView(),this.updateNavbar(),this.startCountdown()}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(i=>{i.addEventListener("click",r=>{const n=r.currentTarget.getAttribute("data-tab");n&&this.switchTab(n)})});const t=document.getElementById("btn-lang-toggle");t&&t.addEventListener("click",()=>{this.lang=this.lang==="vi"?"en":"vi",localStorage.setItem("badminton_lang",this.lang),this.admin.setLanguage(this.lang),this.courtSimulator&&this.courtSimulator.setLanguage(this.lang),this.translateStaticElements(),this.renderActiveView(),this.updateNavbar()});const s=document.getElementById("btn-reset-db");s&&s.addEventListener("click",()=>{this.admin.isAdmin&&confirm(this.lang==="vi"?"CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ dữ liệu giải đấu về trạng thái ban đầu. Bạn có muốn tiếp tục?":"WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast(this.lang==="vi"?"Đã thiết lập lại dữ liệu!":"Database reset to default!","success"))})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(e){this.activeTab=e,document.querySelectorAll(".nav-tab").forEach(s=>{s.getAttribute("data-tab")===e?s.classList.add("active"):s.classList.remove("active")}),this.renderActiveView(),e==="rules"&&setTimeout(()=>{this.courtSimulator=new k("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const s=this.state.teams.filter(r=>r.category==="Men's Doubles")[0],i=this.state.teams.filter(r=>r.category==="Mixed's Doubles")[0];s&&i&&this.courtSimulator.setTeams([s.player1,s.player2],[i.player1,i.player2])},50)}translateStaticElements(){const e=this.lang==="vi",t={dashboard:e?"🏠 Bảng Tin":"🏠 Dashboard",standings:e?"📊 Xếp Hạng":"📊 Standings",fixtures:e?"📅 Lịch Thi Đấu":"📅 Fixtures",bracket:e?"🌳 Sơ Đồ Cây":"🌳 Bracket",rules:e?"📘 Luật Đánh Đôi":"📘 Doubles Rules",teams:e?"👥 Đội Chơi":"👥 Teams"};Object.keys(t).forEach(i=>{const r=document.querySelector(`.nav-tab[data-tab="${i}"] span`);r&&(r.textContent=t[i])});const s=document.querySelector("#btn-lang-toggle span");s&&(s.textContent=e?"ENGLISH":"TIẾNG VIỆT")}updateNavbar(){const e=this.lang==="vi",t=document.getElementById("btn-toggle-admin"),s=document.getElementById("btn-reset-db");t&&(this.admin.isAdmin?(t.innerHTML=`🛡️ ${e?"Thoát Admin":"Exit Admin"}`,t.classList.remove("btn-outline"),t.classList.add("btn-danger"),s&&s.classList.remove("hidden")):(t.innerHTML=`🔐 ${e?"Đăng Nhập Admin":"Admin Login"}`,t.classList.remove("btn-danger"),t.classList.add("btn-outline"),s&&s.classList.add("hidden")))}renderActiveView(){const e=document.getElementById("main-view-container");if(e)switch(e.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(e);break;case"standings":this.renderStandings(e);break;case"fixtures":this.renderFixtures(e);break;case"bracket":this.renderBracket(e);break;case"rules":this.renderRules(e);break;case"teams":this.renderTeams(e);break}}renderDashboard(e){var d,c;const t=this.lang==="vi",s=this.state.matches.length,i=this.state.matches.filter(h=>h.status==="Completed").length,r=s>0?Math.round(i/s*100):0;let n=0;this.state.matches.forEach(h=>{h.status==="Completed"&&h.sets.forEach(g=>{n+=g.t1+g.t2})});const a=t?"GIẢI VÔ ĐỊCH CẦU LÔNG GEAR GAMES 2026":"GEAR GAMES BADMINTON CHAMPIONSHIP 2026",o=t?"Hệ thống cập nhật xếp hạng, tỷ số & sơ đồ trực tiếp":"Live standings, schedule fixtures & bracket generator",l=t?"THỜI GIAN KHAI MẠC":"COUNTDOWN TO TOURNAMENT";e.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${a}</h1>
        <p class="hero-subtitle">${o}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${l}</div>
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
          <div class="text-xs text-muted mt-3">⚡ 31 May 2026 @ 13:30 | Gear Games badminton court arena ⚡</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="dashboard-stat-card glass-card border-glow-volt">
          <div class="stat-icon text-volt">🏆</div>
          <div class="stat-info">
            <span class="stat-value">${i}/${s}</span>
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
            <span class="stat-value">${n}</span>
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
    `,(d=document.getElementById("dash-goto-md"))==null||d.addEventListener("click",()=>this.switchTab("standings")),(c=document.getElementById("dash-goto-xd"))==null||c.addEventListener("click",()=>this.switchTab("standings"))}renderMiniStandingsTable(e){const t=this.state.calculateStandings(e),s=this.lang==="vi";let i=t.slice(0,3).map((r,n)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${n===0?"🥇":n===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${r.name}</td>
          <td class="text-center font-semibold text-volt">${r.points}</td>
          <td class="text-center text-slate-300">${r.played}</td>
          <td class="text-center text-slate-300">${r.netSets>0?"+"+r.netSets:r.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${r.pointsWon}-${r.pointsLost}</td>
        </tr>
      `).join("");return t.length===0&&(i=`<tr><td colspan="6" class="text-center text-muted py-4">${s?"Không có dữ liệu":"No data available"}</td></tr>`),`
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>${s?"Đội Chơi":"Team"}</th>
            <th class="text-center">${s?"Điểm Win":"Wins"}</th>
            <th class="text-center">${s?"Trận":"Pld"}</th>
            <th class="text-center">${s?"Hiệu Set":"Sets"}</th>
            <th class="text-center">${s?"Tổng Điểm":"Points"}</th>
          </tr>
        </thead>
        <tbody>
          ${i}
        </tbody>
      </table>
    `}renderStandings(e){const t=this.lang==="vi";e.innerHTML=`
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(e){const t=this.lang==="vi",s=this.state.calculateStandings(e),i=e==="Men's Doubles",r=i?"text-volt":"text-cyan",n=s.map((a,o)=>{const l=o+1,d=l<=4;this.state.isGroupStageComplete(e);let c=`<span class="rank-circle font-bold ${l===1?"gold":l===2?"silver":l===3?"bronze":""}">${l}</span>`,h="";return d?h=`<span class="advance-tag neon-green">${t?"BÁN KẾT":"SEMIS"}</span>`:h=`<span class="advance-tag text-muted">${t?"LOẠI":"OUT"}</span>`,`
        <tr class="${d?"row-top-4":"row-eliminated"}">
          <td class="text-center">${c}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2">
              <span>${a.name}</span>
              ${h}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${a.player1} & ${a.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${a.points}</td>
          <td class="text-center text-slate-200 font-semibold">${a.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${a.won}</td>
          <td class="text-center text-slate-400">${a.lost}</td>
          <td class="text-center text-slate-200 font-bold ${a.netSets>=0?"text-emerald-400":"text-rose-400"}">
            ${a.setsWon}-${a.setsLost} 
            <span class="text-xs font-normal">(${a.netSets>=0?"+"+a.netSets:a.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${a.pointsWon}-${a.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${a.netPoints>=0?"+"+a.netPoints:a.netPoints})</span>
          </td>
        </tr>
      `}).join("");return`
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${i?"💎":"🔮"}</span>
          <span class="${r}">${e}</span>
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
              ${n}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span>${t?"<strong>Quy tắc xếp hạng:</strong> Top 4 đội sẽ tự động giành vé vào Bán Kết. Ưu tiên xét: Thắng ván $\\rightarrow$ Hiệu số hiệp $\\rightarrow$ Đối kháng trực tiếp $\\rightarrow$ Hiệu số điểm.":"<strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins $\\rightarrow$ Net Sets $\\rightarrow$ Head-to-Head $\\rightarrow$ Net Points."}
        </div>
      </div>
    `}renderFixtures(e){const t=this.lang==="vi",s=this.state.matches.filter(a=>a.stage==="Group Stage"),i=this.state.matches.filter(a=>a.stage!=="Group Stage");let r=s,n=i;this.activeCategoryFilter==="md"?(r=s.filter(a=>a.category==="Men's Doubles"),n=i.filter(a=>a.category==="Men's Doubles")):this.activeCategoryFilter==="xd"&&(r=s.filter(a=>a.category==="Mixed's Doubles"),n=i.filter(a=>a.category==="Mixed's Doubles")),e.innerHTML=`
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0">📅 ${t?"Lịch Thi Đấu & Kết Quả":"Match Schedule & Results"}</h2>
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

      <!-- Knockout Stage Card -->
      <div class="glass-card mb-8">
        <h3 class="flex items-center justify-between border-b border-slate-700/50 pb-3 mb-4 font-bold text-glow-cyan">
          <span>🎯 VÒNG LOẠI TRỰC TIẾP (KNOCK OUT STAGE)</span>
          <span class="badge bg-cyan text-slate-900 font-bold">STAGE 2</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${this.renderMatchCards(n)}
        </div>
      </div>

      <!-- Group Stage Card -->
      <div class="glass-card">
        <h3 class="flex items-center justify-between border-b border-slate-700/50 pb-3 mb-4 font-bold text-glow-volt">
          <span>📌 VÒNG BẢNG XOAY VÒNG (GROUP STAGE)</span>
          <span class="badge bg-volt text-slate-900 font-bold">STAGE 1</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${this.renderMatchCards(r)}
        </div>
      </div>
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderMatchCards(e){const t=this.lang==="vi";return e.length===0?`<div class="col-span-2 text-center text-muted py-6">${t?"Không tìm thấy trận đấu nào":"No matches found"}</div>`:e.map(s=>{const i=s.status==="Completed",r=i?s.score1:"-",n=i?s.score2:"-",a=i?s.sets.map(g=>`${g.t1}-${g.t2}`).join(", "):t?"Chưa thi đấu":"Scheduled",o=i?"border-completed":"border-scheduled",l=i?`<span class="match-badge completed">${t?"KẾT THÚC":"FINAL"}</span>`:`<span class="match-badge scheduled">${t?"LỊCH HẸN":"SCHEDULED"}</span>`,d=this.admin.isAdmin?`<button class="btn btn-xs btn-outline glow-cyan btn-edit-match flex items-center gap-1" data-match-id="${s.id}">
            ✏️ ${t?"Nhập Điểm":"Edit Score"}
           </button>`:"",h=s.category==="Men's Doubles"?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>';return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${o}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${h}
              <span>${s.pitch} | ${s.time}</span>
            </div>
            ${l}
          </div>

          <div class="grid grid-cols-5 items-center gap-2 mb-3 text-center">
            <!-- Team 1 -->
            <div class="col-span-2 text-left font-bold ${i&&s.winner===s.team1?"text-volt":"text-slate-200"}">
              <div class="truncate" title="${s.team1}">${s.team1}</div>
            </div>
            
            <!-- Score box -->
            <div class="score-display flex items-center justify-center gap-1.5 font-extrabold text-base bg-slate-950/70 py-1 rounded px-2 text-slate-200">
              <span class="${i&&s.winner===s.team1?"text-volt":""}">${r}</span>
              <span class="text-slate-500 font-normal">:</span>
              <span class="${i&&s.winner===s.team2?"text-cyan":""}">${n}</span>
            </div>

            <!-- Team 2 -->
            <div class="col-span-2 text-right font-bold ${i&&s.winner===s.team2?"text-cyan":"text-slate-200"}">
              <div class="truncate" title="${s.team2}">${s.team2}</div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-1 pt-2 border-t border-slate-900/50 text-xs">
            <span class="text-slate-400 font-semibold truncate max-w-[200px]" title="${a}">
              🎾 ${a}
            </span>
            ${d}
          </div>
        </div>
      `}).join("")}renderBracket(e){const t=this.lang==="vi",s=a=>{const o=a==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(l=>l.id===`SF1-${o}`),sf2:this.state.matches.find(l=>l.id===`SF2-${o}`),f:this.state.matches.find(l=>l.id===`F-${o}`),b:this.state.matches.find(l=>l.id===`B-${o}`)}},i=s("Men's Doubles"),r=s("Mixed's Doubles"),n=(a,o,l)=>{const d=c=>{if(!c)return'<div class="bracket-node empty">N/A</div>';const h=c.status==="Completed",g=h?c.score1:"-",m=h?c.score2:"-",u=h?c.sets.map(p=>`${p.t1}-${p.t2}`).join(" / "):c.time;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${h?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1 pb-1 border-b border-slate-800">
              <span>${c.pitch} | ${c.stage}</span>
              ${this.admin.isAdmin?`<button class="btn-edit-node-score btn-edit-match" data-match-id="${c.id}">✏️</button>`:""}
            </div>
            
            <div class="node-team flex items-center justify-between font-bold text-3xs ${h&&c.winner===c.team1?"text-emerald-400":"text-slate-300"}">
              <span class="truncate pr-1" title="${c.team1}">${c.team1}</span>
              <span>${g}</span>
            </div>
            
            <div class="node-team flex items-center justify-between font-bold text-3xs mt-1 ${h&&c.winner===c.team2?"text-emerald-400":"text-slate-300"}">
              <span class="truncate pr-1" title="${c.team2}">${c.team2}</span>
              <span>${m}</span>
            </div>
            
            <div class="node-footer text-4xs text-slate-400 font-semibold mt-1">
              🎾 ${u}
            </div>
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${l?"text-volt":"text-cyan"}">${o} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Semifinals Column -->
            <div class="bracket-col">
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 1</div>
                ${d(a.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${d(a.sf2)}
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
                ${d(a.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${d(a.b)}
              </div>
            </div>
          </div>
        </div>
      `};e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Sơ Đồ Cây Vòng Đoạt Cúp</h2>
        <p class="view-subtitle">${t?"Tự động tính phân cặp & lộ trình thăng cấp trực quan":"Automatic calculated tournament brackets and playoff trees"}</p>
      </div>

      ${n(i,"Men's Doubles",!0)}
      ${n(r,"Mixed's Doubles",!1)}
    `}renderRules(e){const t=this.lang==="vi",s=t?A.vi:A.en,i=s.sections.map(r=>{const n=r.content.map(a=>{let o=a.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return o=o.replace(/\\rightarrow/g," ➔ "),o=o.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${o}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${r.title}</h3>
          <div>${n}</div>
        </div>
      `}).join("");e.innerHTML=`
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
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${s.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${s.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${i}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(e){const t=this.lang==="vi",s=this.state.players.length,i=this.state.players.map(o=>{let l=o.preferred_format==="Men's Doubles"?"bg-volt":o.preferred_format==="Mixed's Doubles"?"bg-cyan":"bg-indigo";return`
        <div class="player-card glass-panel p-3 border border-slate-800 rounded-lg hover-glowing">
          <div class="flex items-center gap-3">
            <div class="player-circle font-bold">${o.name.substring(0,2).toUpperCase()}</div>
            <div>
              <div class="font-bold text-slate-100 text-xs">${o.name}</div>
              <div class="flex gap-1.5 items-center mt-1">
                <span class="badge ${l} text-slate-950 text-4xs font-bold">${o.preferred_format}</span>
                <span class="text-4xs text-muted truncate max-w-[100px]">${o.preferred_partnership}</span>
              </div>
            </div>
          </div>
        </div>
      `}).join(""),r=(o,l)=>{const d=l==="Men's Doubles",c=d?"text-volt":"text-cyan",h=o.map(g=>{const m=this.state.matches.filter(b=>b.category===l&&b.status==="Completed"&&(b.team1===g.name||b.team2===g.name));let u=0,p=0,v=0;m.forEach(b=>{b.winner===g.name&&u++,b.team1===g.name?(p+=b.score1,v+=b.score2):(p+=b.score2,v+=b.score1)});const S=m.length>0?Math.round(u/m.length*100):0;return`
          <div class="team-profile-card glass-panel border border-slate-700/50 p-4 rounded-lg hover-glowing flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${g.name}">${g.name}</span>
                <span class="badge ${d?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
              </div>

              <!-- Members -->
              <div class="flex flex-col gap-1.5 mb-4 text-xs">
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${g.player1}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-slate-500">🏸</span>
                  <span class="font-semibold text-slate-300">${g.player2}</span>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div class="bg-slate-950/60 p-2.5 rounded border border-slate-900 text-4xs">
              <div class="grid grid-cols-3 gap-1 text-center font-semibold text-slate-400">
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${m.length}</div>
                  <div>${t?"Đã Đấu":"Played"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-volt">${u}</div>
                  <div>${t?"Thắng":"Won"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${S}%</div>
                  <div>${t?"Tỉ Lệ":"Win %"}</div>
                </div>
              </div>
            </div>
          </div>
        `}).join("");return`
        <div class="glass-card mb-6">
          <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2">
            <span class="${c}">${d?"💎":"🔮"}</span>
            <span class="${c}">${l} (${o.length} Teams)</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            ${h}
          </div>
        </div>
      `},n=this.state.teams.filter(o=>o.category==="Men's Doubles"),a=this.state.teams.filter(o=>o.category==="Mixed's Doubles");e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Thành Viên & Đội Đăng Ký</h2>
        <p class="view-subtitle">${t?"Hồ sơ thành viên và danh sách đội hình phân hạng":"Browse player preferences and team statistics"}</p>
      </div>

      <!-- Teams lists -->
      ${r(n,"Men's Doubles")}
      ${r(a,"Mixed's Doubles")}

      <!-- Players gallery -->
      <div class="glass-card mt-8">
        <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2 text-slate-200">
          <span>🎯</span>
          <span>${t?"Danh Sách VĐV Cá Nhân":"Individual Player Preferences"} (${s} Players)</span>
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          ${i}
        </div>
      </div>
    `}startCountdown(){const e=new Date("May 31, 2026 13:30:00").getTime(),t=document.getElementById("cd-days"),s=document.getElementById("cd-hours"),i=document.getElementById("cd-minutes"),r=document.getElementById("cd-seconds");if(!t)return;const n=setInterval(()=>{const a=new Date().getTime(),o=e-a;if(o<0){clearInterval(n),t&&(t.textContent="00",s.textContent="00",i.textContent="00",r.textContent="00");return}const l=Math.floor(o/(1e3*60*60*24)),d=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),c=Math.floor(o%(1e3*60*60)/(1e3*60)),h=Math.floor(o%(1e3*60)/1e3);t&&(t.textContent=l.toString().padStart(2,"0"),s.textContent=d.toString().padStart(2,"0"),i.textContent=c.toString().padStart(2,"0"),r.textContent=h.toString().padStart(2,"0"))},1e3)}}window.addEventListener("DOMContentLoaded",()=>{new G});
