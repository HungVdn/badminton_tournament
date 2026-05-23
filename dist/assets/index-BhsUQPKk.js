(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const B=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],A=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],H=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:2,score2:1,sets:[{t1:15,t2:11},{t1:9,t2:15},{t1:15,t2:13}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:10}],status:"Completed",winner:"Tùng - Dương"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:9},{t1:15,t2:7}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:12}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:11}],status:"Completed",winner:"Tùng - Dương"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:10,t2:15}],status:"Completed",winner:"Hưng 7 - Khải"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:2,score2:0,sets:[{t1:15,t2:13},{t1:15,t2:10}],status:"Completed",winner:"Hưng 14 - Phong"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:2,score2:0,sets:[{t1:15,t2:8},{t1:15,t2:13}],status:"Completed",winner:"Hằng - Minh"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:2,score2:1,sets:[{t1:12,t2:15},{t1:15,t2:13},{t1:16,t2:14}],status:"Completed",winner:"Trân - Long"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:11,t2:15},{t1:11,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:2,score2:1,sets:[{t1:15,t2:13},{t1:10,t2:15},{t1:15,t2:11}],status:"Completed",winner:"Minh - Triêm"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:0,score2:2,sets:[{t1:9,t2:15},{t1:8,t2:15}],status:"Completed",winner:"Hằng - Minh"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:10},{t1:15,t2:12}],status:"Completed",winner:"Trân - Long"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:2,score2:0,sets:[{t1:15,t2:11},{t1:15,t2:9}],status:"Completed",winner:"Hằng - Minh"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:2,score2:0,sets:[{t1:15,t2:12},{t1:15,t2:13}],status:"Completed",winner:"Minh - Triêm"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],G={vi:{title:" GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Quy Định và Thông Tin Giải Đấu",sections:[{id:"categories",title:"I. Nội dung thi đấu",content:["• Đôi nam nữ","• Đôi nam nam","• Tổng cộng: 10 đội - 20 người chơi"]},{id:"schedule",title:"II. Thời gian & Địa điểm",content:["• Ngày thi đấu: 31 May 2026","• Địa điểm: Sân cầu lông Beta Era"]},{id:"prizes",title:"III. Giải thưởng",content:["🏆 Giải Nhất: 2,000,000 VND + Cúp Vô Địch","🥈 Giải Nhì: 1,500,000 VND","🥉 Giải Ba: 1,000,000 VND"]},{id:"regulations",title:"IV. Thể thức thi đấu",content:["• **Vòng loại**: Thi đấu vòng tròn tính điểm (Round-Robin). Top 4 đội của mỗi hạng mục bước vào bán kết.","• **Vòng bán kết**: Đấu loại trực tiếp để chọn ra Top 2 team vào chung kết.","• **Vòng chung kết**: Đấu loại trực tiếp để chọn ra Top 1 Vô Địch Mùa Giải.","• **Điểm số ván đấu**:","  - Vòng loại: BO3 - thi đấu đến 15 điểm mỗi hiệp.","  - Bán kết & Chung kết: BO3 - thi đấu đến 21 điểm mỗi hiệp.","  - Nếu tỷ số là 20 đều (hoặc 14 đều ở 15 điểm), bên nào ghi trước 2 điểm cách biệt sẽ thắng ván đó.","  - Nếu tỷ số đạt đến 29 đều (hoặc 20 đều ở 15 điểm), bên nào ghi điểm thứ 30 (hoặc 21) trước sẽ thắng ván đó.","• **Cách tính điểm xếp hạng vòng bảng**:","  - Thắng: +1 điểm xếp hạng. Thua: +0 điểm xếp hạng.","  - Thứ tự ưu tiên khi xếp hạng: (1) Điểm số xếp hạng $\\rightarrow$ (2) Hiệu số hiệp (Set) thắng - thua $\\rightarrow$ (3) Đối đầu trực tiếp (Head-to-head) $\\rightarrow$ (4) Hiệu số tổng điểm thắng - điểm thua $\\rightarrow$ (5) Bốc thăm."]},{id:"rules",title:"V. Luật thi đấu đánh đôi",content:["• Áp dụng Luật Cầu lông Quốc tế của BWF.","• **Giao cầu & Nhận cầu**:","  - Khi điểm bên giao phát cầu là **chẵn** (0, 2, 4, 6,...), người giao cầu sẽ đứng ở ô giao cầu bên **phải** của họ và giao chéo sang ô nhận bên phải đối phương.","  - Khi điểm bên giao phát cầu là **lẻ** (1, 3, 5, 7,...), người giao cầu sẽ đứng ở ô giao cầu bên **trái** của họ và giao chéo sang ô nhận bên trái đối phương.","  - VĐV của bên nhận cầu đứng chéo đối diện với VĐV phát cầu sẽ là người nhận cầu.","  - Chỉ có người nhận cầu được quyền đánh trả cầu phát. Nếu đồng đội của họ chạm vào cầu trước, bên phát cầu được cộng 1 điểm.","• **Vị trí đứng đổi chỗ**:","  - Hai VĐV chỉ đổi chỗ bên trái-phải cho nhau khi bên họ **giao cầu và giành được điểm**.","  - Nếu bên nhận cầu giành được điểm, vị trí đứng của cả hai đội giữ nguyên và quyền giao cầu chuyển sang cho họ mà không đổi chỗ."]},{id:"intervals",title:"VI. Thời gian nghỉ & Lỗi hành vi",content:["• Khi một bên ghi được 11 điểm (hoặc 8 điểm ở hiệp 15 điểm) trước, thời gian nghỉ giữa hiệp đấu không quá 60 giây.","• Thời gian nghỉ giữa các hiệp 1, 2 và 3 không quá 2 phút.","• Trận đấu phải diễn ra liên tục. Các lỗi hành vi, câu giờ có thể bị trọng tài nhắc nhở hoặc phạt điểm."]}]},en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Beta Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};class V{constructor(){this.players=[],this.teams=[],this.matches=[],this.listeners=[],this.init()}init(){const s=localStorage.getItem("badminton_players"),e=localStorage.getItem("badminton_teams"),t=localStorage.getItem("badminton_matches");this.players=s?JSON.parse(s):[...B],this.teams=e?JSON.parse(e):[...A],this.matches=t?JSON.parse(t):[...H],this.propagateKnockoutTeams(),this.saveToStorage()}saveToStorage(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches))}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),this.players=[...B],this.teams=[...A],this.matches=[...H],this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}addListener(s){this.listeners.push(s)}notifyListeners(){this.listeners.forEach(s=>s(this))}updateMatchScore(s,e,t,i,a){const n=this.matches.find(l=>l.id===s);return n?(n.sets=e,n.score1=t,n.score2=i,n.status=a,a==="Completed"?n.winner=t>i?n.team1:n.team2:n.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(s){const e=this.teams.filter(n=>n.category===s),t=this.matches.filter(n=>n.category===s&&n.stage==="Group Stage"),i={};e.forEach(n=>{i[n.name]={name:n.name,teamId:n.id,player1:n.player1,player2:n.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),t.forEach(n=>{if(n.status!=="Completed")return;const l=n.team1,c=n.team2;if(!i[l]||!i[c])return;i[l].played+=1,i[c].played+=1;const m=Number(n.score1)||0,h=Number(n.score2)||0;i[l].setsWon+=m,i[l].setsLost+=h,i[c].setsWon+=h,i[c].setsLost+=m,m>h?(i[l].won+=1,i[l].points+=1,i[c].lost+=1):(i[c].won+=1,i[c].points+=1,i[l].lost+=1),n.sets.forEach(p=>{const r=Number(p.t1)||0,u=Number(p.t2)||0;i[l].pointsWon+=r,i[l].pointsLost+=u,i[c].pointsWon+=u,i[c].pointsLost+=r})}),Object.values(i).forEach(n=>{n.netSets=n.setsWon-n.setsLost,n.netPoints=n.pointsWon-n.pointsLost});const a=Object.values(i);return a.sort((n,l)=>{if(l.points!==n.points)return l.points-n.points;if(l.netSets!==n.netSets)return l.netSets-n.netSets;if(a.filter(m=>m.points===n.points&&m.netSets===n.netSets).length===2){const m=t.find(h=>h.status==="Completed"&&(h.team1===n.name&&h.team2===l.name||h.team1===l.name&&h.team2===n.name));if(m){if(m.winner===n.name)return-1;if(m.winner===l.name)return 1}}return l.netPoints!==n.netPoints?l.netPoints-n.netPoints:n.name.localeCompare(l.name)}),a}isGroupStageComplete(s){const e=this.matches.filter(t=>t.category===s&&t.stage==="Group Stage");return e.length>0&&e.every(t=>t.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(e=>{const t=this.isGroupStageComplete(e),i=this.calculateStandings(e),a=t?i[0].name:`1st Place ${e==="Men's Doubles"?"MD":"XD"}`,n=t?i[1].name:`2nd Place ${e==="Men's Doubles"?"MD":"XD"}`,l=t?i[2].name:`3rd Place ${e==="Men's Doubles"?"MD":"XD"}`,c=t?i[3].name:`4th Place ${e==="Men's Doubles"?"MD":"XD"}`,m=e==="Men's Doubles"?"MD":"XD",h=`SF1-${m}`,p=`SF2-${m}`,r=`F-${m}`,u=`B-${m}`;let o=this.matches.find(b=>b.id===h),d=this.matches.find(b=>b.id===p),g=this.matches.find(b=>b.id===r),v=this.matches.find(b=>b.id===u);const S="4:30 - 5:10",y=e==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";o?(o.status!=="Completed"||o.team1&&o.team1.includes("Place")||o.team2&&o.team2.includes("Place"))&&(o.team1=a,o.team2=c):(o={id:h,category:e,stage:"Semi-finals",pitch:e==="Men's Doubles"?"Pitch 15":"Pitch 20",time:S,team1:a,team2:c,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(o)),d?(d.status!=="Completed"||d.team1&&d.team1.includes("Place")||d.team2&&d.team2.includes("Place"))&&(d.team1=n,d.team2=l):(d={id:p,category:e,stage:"Semi-finals",pitch:e==="Men's Doubles"?"Pitch 16":"Pitch 21",time:S,team1:n,team2:l,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(d));const M=o.status==="Completed"?o.winner:`Winner SF1 (${m})`,f=o.status==="Completed"?o.winner===o.team1?o.team2:o.team1:`Loser SF1 (${m})`,$=d.status==="Completed"?d.winner:`Winner SF2 (${m})`,T=d.status==="Completed"?d.winner===d.team1?d.team2:d.team1:`Loser SF2 (${m})`;v?(v.status!=="Completed"||v.team1&&v.team1.includes("Loser")||v.team2&&v.team2.includes("Loser"))&&(v.team1=f,v.team2=T):(v={id:u,category:e,stage:"Bronze Match",pitch:e==="Men's Doubles"?"Pitch 15":"Pitch 20",time:y,team1:f,team2:T,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(v)),g?(g.status!=="Completed"||g.team1&&g.team1.includes("Winner")||g.team2&&g.team2.includes("Winner"))&&(g.team1=M,g.team2=$):(g={id:r,category:e,stage:"Grand Final",pitch:e==="Men's Doubles"?"Pitch 16":"Pitch 21",time:y,team1:M,team2:$,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(g))})}}class R{constructor(s,e){this.state=s,this.onUpdate=e,this.isAdmin=!1,this.activeMatchId=null,this.lang="vi",this.passkey="admin2026",this.init()}setLanguage(s){this.lang=s}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const s=document.createElement("div");if(s.id="score-modal-container",s.className="modal-backdrop hidden",document.body.appendChild(s),document.getElementById("admin-modal-container"))return;const e=document.createElement("div");e.id="admin-modal-container",e.className="modal-backdrop hidden",document.body.appendChild(e)}setupAdminToggleListener(){document.body.addEventListener("click",s=>{s.target.closest("#btn-toggle-admin")&&(this.isAdmin?this.logout():this.showAdminLogin());const t=s.target.closest(".btn-edit-match");if(t&&this.isAdmin){const i=t.getAttribute("data-match-id");this.openScoreModal(i)}})}logout(){this.isAdmin=!1,sessionStorage.setItem("badminton_isAdmin","false"),this.onUpdate();const s=this.lang==="vi"?"Đã đăng xuất quyền Admin":"Logged out from Admin Mode";this.showToast(s,"info")}showAdminLogin(){const s=document.getElementById("admin-modal-container");if(!s)return;const e=this.lang==="vi"?"Đăng Nhập Admin":"Admin Login",t=this.lang==="vi"?"Nhập mã truy cập để kích hoạt quyền nhập điểm:":"Enter passkey to enable score reporting:",i=this.lang==="vi"?"Mã bảo mật":"Passkey",a=this.lang==="vi"?"Đăng Nhập":"Login",n=this.lang==="vi"?"Hủy":"Cancel";s.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${e}</h3>
        <p class="modal-desc">${t}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${i}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${n}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${a}</button>
        </div>
      </div>
    `,s.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>s.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=l=>{l.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const s=document.getElementById("admin-passkey-input"),e=document.getElementById("admin-login-error");if(!(!s||!e))if(s.value===this.passkey){this.isAdmin=!0,sessionStorage.setItem("badminton_isAdmin","true"),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const t=this.lang==="vi"?"Đăng nhập thành công! Quyền chỉnh sửa điểm đã mở.":"Login success! Admin score editor activated.";this.showToast(t,"success")}else e.textContent=this.lang==="vi"?"Mã bảo mật không đúng. Hãy thử lại.":"Incorrect passkey. Please try again.",e.classList.remove("hidden"),s.classList.add("input-error"),s.focus()}openScoreModal(s){this.activeMatchId=s;const e=this.state.matches.find(w=>w.id===s);if(!e)return;const t=document.getElementById("score-modal-container");if(!t)return;const i=e.stage==="Group Stage",a=i?15:21,n=i?21:30,l=this.lang==="vi"?"Nhập Điểm Trận Đấu":"Match Score Editor",c=(this.lang==="vi","Set"),m=e.team1,h=e.team2,p=this.lang==="vi"?"Lưu Kết Quả":"Save Score",r=this.lang==="vi"?"Hủy":"Cancel",u=this.lang==="vi"?"Xóa Điểm":"Clear Score",o=e.sets[0]?e.sets[0].t1:"",d=e.sets[0]?e.sets[0].t2:"",g=e.sets[1]?e.sets[1].t1:"",v=e.sets[1]?e.sets[1].t2:"",S=e.sets[2]?e.sets[2].t1:"",y=e.sets[2]?e.sets[2].t2:"";t.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${l}</h3>
          <span class="badge ${i?"bg-indigo":"bg-purple"}">${e.stage} (${a} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">${this.lang==="vi"?"Đội 1":"Team 1"}</div>
          <div>VS</div>
          <div class="col-span-2 text-right">${this.lang==="vi"?"Đội 2":"Team 2"}</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${m}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${h}</div>
        </div>

        <form id="score-form" class="space-y-4">
          <!-- Set 1 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s1-t1" class="form-input score-box text-left" placeholder="0" value="${o}" required />
            </div>
            <div class="text-center font-bold text-muted">${c} 1</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s1-t2" class="form-input score-box text-right" placeholder="0" value="${d}" required />
            </div>
          </div>

          <!-- Set 2 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center">
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s2-t1" class="form-input score-box text-left" placeholder="0" value="${g}" required />
            </div>
            <div class="text-center font-bold text-muted">${c} 2</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s2-t2" class="form-input score-box text-right" placeholder="0" value="${v}" required />
            </div>
          </div>

          <!-- Set 3 -->
          <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s3-row">
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s3-t1" class="form-input score-box text-left" placeholder="0" value="${S}" />
            </div>
            <div class="text-center font-bold text-muted">${c} 3</div>
            <div class="col-span-2">
              <input type="number" min="0" max="${n}" id="s3-t2" class="form-input score-box text-right" placeholder="0" value="${y}" />
            </div>
          </div>

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${u}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${r}</button>
              <button type="submit" class="btn btn-primary">${p}</button>
            </div>
          </div>
        </form>
      </div>
    `,t.classList.remove("hidden");const M=document.getElementById("s1-t1"),f=document.getElementById("s1-t2"),$=document.getElementById("s2-t1"),T=document.getElementById("s2-t2"),b=document.getElementById("s3-t1"),C=document.getElementById("s3-t2"),D=document.getElementById("s3-row"),L=()=>{const w=this.validateSetScore(Number(M.value),Number(f.value),a),x=this.validateSetScore(Number($.value),Number(T.value),a);w.valid&&x.valid?w.winner===x.winner?(D.classList.add("opacity-40"),b.disabled=!0,C.disabled=!0,b.value="",C.value="",b.removeAttribute("required"),C.removeAttribute("required")):(D.classList.remove("opacity-40"),b.disabled=!1,C.disabled=!1,b.setAttribute("required","required"),C.setAttribute("required","required")):(D.classList.add("opacity-40"),b.disabled=!0,C.disabled=!0,b.value="",C.value="",b.removeAttribute("required"),C.removeAttribute("required"))};[M,f,$,T].forEach(w=>{w.addEventListener("input",L)}),L(),document.getElementById("btn-cancel-score").onclick=()=>t.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(s),document.getElementById("score-form").onsubmit=w=>{w.preventDefault(),this.handleSaveScore(e,a)}}validateSetScore(s,e,t){if(isNaN(s)||isNaN(e))return{valid:!1};if(s<0||e<0)return{valid:!1};const i=Math.max(s,e),a=Math.min(s,e),n=i-a,l=s>e?1:2;if(i<t)return{valid:!1};if(i===t&&n>=2)return{valid:!0,winner:l};const c=t===15?21:30;if(i>t){if(n===2&&i<c)return{valid:!0,winner:l};if(i===c&&n===1)return{valid:!0,winner:l}}return{valid:!1}}handleClearScore(s){confirm(this.lang==="vi"?"Bạn có chắc chắn muốn xóa điểm trận này không?":"Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(s,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã xóa điểm trận đấu.":"Match score cleared.","info"))}handleSaveScore(s,e){const t=Number(document.getElementById("s1-t1").value),i=Number(document.getElementById("s1-t2").value),a=Number(document.getElementById("s2-t1").value),n=Number(document.getElementById("s2-t2").value),l=document.getElementById("s3-t1"),c=document.getElementById("s3-t2"),m=document.getElementById("score-error-msg"),h=this.validateSetScore(t,i,e);if(!h.valid){this.showInputError(m,this.lang==="vi"?`Set 1 chưa hợp lệ. Đội thắng phải đạt ít nhất ${e} điểm và hơn đối thủ 2 điểm (hoặc chạm mốc giới hạn ${e===15?21:30} điểm).`:`Set 1 is invalid. Winner must reach ${e} and lead by 2, or reach cap limit of ${e===15?21:30} points.`);return}const p=this.validateSetScore(a,n,e);if(!p.valid){this.showInputError(m,this.lang==="vi"?`Set 2 chưa hợp lệ. Đội thắng phải đạt ít nhất ${e} điểm và hơn đối thủ 2 điểm.`:`Set 2 is invalid. Winner must reach at least ${e} and lead by 2.`);return}const r=[{t1:t,t2:i},{t1:a,t2:n}];let u=(h.winner===1?1:0)+(p.winner===1?1:0),o=(h.winner===2?1:0)+(p.winner===2?1:0);if(u===1&&o===1){const d=Number(l.value),g=Number(c.value),v=this.validateSetScore(d,g,e);if(!v.valid){this.showInputError(m,this.lang==="vi"?"Tỉ số Set 1 & 2 là hòa 1-1. Bạn phải nhập thông tin Set 3 hợp lệ.":"Match is tied 1-1 after 2 sets. You must provide a valid Set 3 score.");return}r.push({t1:d,t2:g}),v.winner===1?u++:o++}u>o?s.team1:s.team2,this.state.updateMatchScore(s.id,r,u,o,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast(this.lang==="vi"?"Đã cập nhật kết quả thành công!":"Score updated successfully!","success")}showInputError(s,e){s.textContent=e,s.classList.remove("hidden")}showToast(s,e="success"){const t=document.createElement("div");t.className=`toast-alert toast-${e}`,t.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${e==="success"?"✓":e==="info"?"ℹ":"⚠"}</span>
        <span>${s}</span>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3e3)}}class F{constructor(s){this.container=document.getElementById(s),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="vi",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(s){this.lang=s,this.render()}setScoreParity(s){this.isEven=s,this.render()}setTeams(s,e){this.teamAPlayers=s,this.teamBPlayers=e,this.render()}init(){this.container&&this.render()}render(){var D,L;if(!this.container)return;const s=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],e=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],t=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],i=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],a=this.lang==="vi"?"Điểm Chẵn (0, 2, 4...)":"Even Score (0, 2, 4...)",n=this.lang==="vi"?"Điểm Lẻ (1, 3, 5...)":"Odd Score (1, 3, 5...)",l=this.lang==="vi"?"Mô Phỏng Luật Giao Cầu Đôi":"Doubles Service Simulator",c=this.lang==="vi"?`Đội giao cầu (Phía dưới) có điểm số **${this.isEven?"CHẴN":"LẺ"}**:`:`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,m=this.lang==="vi"?`<ul>
          <li><strong>Người giao cầu:</strong> <span class="highlight-volt">${s}</span> giao cầu từ ô bên <strong>${this.isEven?"PHẢI":"TRÁI"}</strong>.</li>
          <li><strong>Người nhận cầu:</strong> <span class="highlight-cyan">${t}</span> đứng ô đối diện nhận cầu.</li>
          <li><strong>Vùng cầu hợp lệ:</strong> Ô giao cầu đôi (rộng hơn nhưng ngắn hơn vùng giao đơn) được tô viền sáng.</li>
         </ul>`:`<ul>
          <li><strong>Server:</strong> <span class="highlight-volt">${s}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
          <li><strong>Receiver:</strong> <span class="highlight-cyan">${t}</span> stands in the diagonal court to receive.</li>
          <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
         </ul>`,h=this.isEven?210:90,p=385,r=this.isEven?90:210,u=440,o=this.isEven?90:210,d=115,g=this.isEven?210:90,v=60,S=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",y=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",M=h,f=p-10,$=o,T=d+10,b=(M+$)/2+30,C=(f+T)/2-40;this.container.innerHTML=`
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
              <path d="${y}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path d="M ${M},${f} Q ${b},${C} ${$},${T}" class="svg-shuttle-path" />
              <circle cx="${$}" cy="${T}" r="5" class="svg-shuttle" filter="url(#neon-glow-cyan)" />

              <!-- Player Avatars Bottom (Team A) -->
              <!-- Server -->
              <g class="player-avatar server">
                <circle cx="${h}" cy="${p}" r="14" class="avatar-bg volt" />
                <text x="${h}" y="${p+4}" class="avatar-text">S</text>
              </g>
              <text x="${h}" y="${p+28}" class="svg-player-name text-volt">${s.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${r}" cy="${u}" r="12" class="avatar-bg neutral" />
                <text x="${r}" y="${u+4}" class="avatar-text">P</text>
              </g>
              <text x="${r}" y="${u+26}" class="svg-player-name text-muted">${e.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${o}" cy="${d}" r="14" class="avatar-bg cyan" />
                <text x="${o}" y="${d+4}" class="avatar-text">R</text>
              </g>
              <text x="${o}" y="${d-20}" class="svg-player-name text-cyan">${t.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${g}" cy="${v}" r="12" class="avatar-bg neutral" />
                <text x="${g}" y="${v+4}" class="avatar-text">P</text>
              </g>
              <text x="${g}" y="${v-18}" class="svg-player-name text-muted">${i.split(" ")[0]}</text>
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
                  ${n}
                </button>
              </div>
              
              <div class="sim-explanation">
                <div class="exp-header flex items-center gap-2 mb-2">
                  <span class="indicator-dot pulse-${this.isEven?"volt":"cyan"}"></span>
                  <span>${c}</span>
                </div>
                <div class="exp-details">${m}</div>
              </div>
            </div>
            
            <div class="court-sim-footer mt-4 p-3 glass-panel rounded-lg text-xs text-muted">
              ${this.lang==="vi"?"💡 <strong>Gợi ý:</strong> Vị trí giao cầu đổi bên khi và chỉ khi đội giao cầu thắng pha cầu đó và ghi điểm chẵn/lẻ. Đội nhận cầu không thay đổi vị trí khi thắng điểm.":"💡 <strong>Tip:</strong> Players only swap courts when their team wins a point on their own serve. The receiving team stays in their positions."}
            </div>
          </div>
        </div>
      </div>
    `,(D=document.getElementById("sim-btn-even"))==null||D.addEventListener("click",()=>this.setScoreParity(!0)),(L=document.getElementById("sim-btn-odd"))==null||L.addEventListener("click",()=>this.setScoreParity(!1))}}class O{constructor(){this.state=new V,this.lang=localStorage.getItem("badminton_lang")||"vi",this.activeTab="dashboard",this.activeCategoryFilter="all",this.countdownTimer=null,this.admin=new R(this.state,()=>this.handleStateChange()),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(i=>{i.addEventListener("click",a=>{const n=a.currentTarget.getAttribute("data-tab");n&&this.switchTab(n)})}),window.addEventListener("resize",()=>this.updateActivePill());const e=document.getElementById("btn-lang-toggle");e&&e.addEventListener("click",()=>{this.lang=this.lang==="vi"?"en":"vi",localStorage.setItem("badminton_lang",this.lang),this.admin.setLanguage(this.lang),this.courtSimulator&&this.courtSimulator.setLanguage(this.lang),this.translateStaticElements(),this.renderActiveView(),this.updateNavbar()});const t=document.getElementById("btn-reset-db");t&&t.addEventListener("click",()=>{this.admin.isAdmin&&confirm(this.lang==="vi"?"CẢNH BÁO: Hành động này sẽ đặt lại toàn bộ dữ liệu giải đấu về trạng thái ban đầu. Bạn có muốn tiếp tục?":"WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast(this.lang==="vi"?"Đã thiết lập lại dữ liệu!":"Database reset to default!","success"))})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(s){this.activeTab=s,document.querySelectorAll(".nav-tab").forEach(t=>{t.getAttribute("data-tab")===s?t.classList.add("active"):t.classList.remove("active")}),this.renderActiveView(),s==="rules"&&setTimeout(()=>{this.courtSimulator=new F("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const t=this.state.teams.filter(a=>a.category==="Men's Doubles")[0],i=this.state.teams.filter(a=>a.category==="Mixed's Doubles")[0];t&&i&&this.courtSimulator.setTeams([t.player1,t.player2],[i.player1,i.player2])},50),this.updateActivePill()}updateActivePill(){const s=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),e=document.querySelector(".nav-tabs-wrapper");if(!e)return;let t=document.querySelector(".nav-active-pill");t||(t=document.createElement("div"),t.className="nav-active-pill",e.appendChild(t)),s&&(t.style.width=`${s.offsetWidth}px`,t.style.transform=`translateX(${s.offsetLeft}px)`)}translateStaticElements(){const s=this.lang==="vi",e={dashboard:s?"🏠 Bảng Tin":"🏠 Dashboard",standings:s?"📊 Xếp Hạng":"📊 Standings",fixtures:s?"📅 Lịch Thi Đấu":"📅 Fixtures",bracket:s?"🌳 Sơ Đồ Cây":"🌳 Bracket",results:s?"🏆 Bảng Vàng":"🏆 Final Results",rules:s?"📘 Luật Đánh Đôi":"📘 Doubles Rules",teams:s?"👥 Đội Chơi":"👥 Teams"};Object.keys(e).forEach(i=>{const a=document.querySelector(`.nav-tab[data-tab="${i}"] span`);a&&(a.textContent=e[i])});const t=document.querySelector("#btn-lang-toggle span");t&&(t.textContent=s?"ENGLISH":"TIẾNG VIỆT")}updateNavbar(){const s=this.lang==="vi",e=document.getElementById("btn-toggle-admin"),t=document.getElementById("btn-reset-db");e&&(this.admin.isAdmin?(e.innerHTML=`🛡️ ${s?"Thoát Admin":"Exit Admin"}`,e.classList.remove("btn-outline"),e.classList.add("btn-danger"),t&&t.classList.remove("hidden")):(e.innerHTML=`🔐 ${s?"Đăng Nhập Admin":"Admin Login"}`,e.classList.remove("btn-danger"),e.classList.add("btn-outline"),t&&t.classList.add("hidden")))}renderActiveView(){const s=document.getElementById("main-view-container");if(s)switch(s.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(s);break;case"standings":this.renderStandings(s);break;case"fixtures":this.renderFixtures(s);break;case"bracket":this.renderBracket(s);break;case"results":this.renderResults(s);break;case"rules":this.renderRules(s);break;case"teams":this.renderTeams(s);break}}renderDashboard(s){var h,p;const e=this.lang==="vi",t=this.state.matches.length,i=this.state.matches.filter(r=>r.status==="Completed").length,a=t>0?Math.round(i/t*100):0;let n=0;this.state.matches.forEach(r=>{r.status==="Completed"&&r.sets.forEach(u=>{n+=u.t1+u.t2})});const l=e?"GIẢI VÔ ĐỊCH CẦU LÔNG GEAR GAMES 2026":"GEAR GAMES BADMINTON CHAMPIONSHIP 2026",c=e?"Hệ thống cập nhật xếp hạng, tỷ số & sơ đồ trực tiếp":"Live standings, schedule fixtures & bracket generator",m=e?"THỜI GIAN KHAI MẠC":"COUNTDOWN TO TOURNAMENT";s.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${l}</h1>
        <p class="hero-subtitle">${c}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${m}</div>
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
          <div class="text-xs text-muted mt-3">⚡ 31 May 2026 @ 13:30 | Beta Era court ⚡</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="dashboard-stat-card glass-card border-glow-volt">
          <div class="stat-icon text-volt">🏆</div>
          <div class="stat-info">
            <span class="stat-value">${i}/${t}</span>
            <span class="stat-label">${e?"Trận Đã Đấu":"Matches Completed"}</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${a}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${a}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${n}</span>
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
    `,(h=document.getElementById("dash-goto-md"))==null||h.addEventListener("click",()=>this.switchTab("standings")),(p=document.getElementById("dash-goto-xd"))==null||p.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(s){const e=this.state.calculateStandings(s),t=this.lang==="vi";let i=e.slice(0,3).map((a,n)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${n===0?"🥇":n===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${a.name}</td>
          <td class="text-center font-semibold text-volt">${a.points}</td>
          <td class="text-center text-slate-300">${a.played}</td>
          <td class="text-center text-slate-300">${a.netSets>0?"+"+a.netSets:a.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${a.pointsWon}-${a.pointsLost}</td>
        </tr>
      `).join("");return e.length===0&&(i=`<tr><td colspan="6" class="text-center text-muted py-4">${t?"Không có dữ liệu":"No data available"}</td></tr>`),`
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>${t?"Đội Chơi":"Team"}</th>
            <th class="text-center">${t?"Điểm Win":"Wins"}</th>
            <th class="text-center">${t?"Trận":"Pld"}</th>
            <th class="text-center">${t?"Hiệu Set":"Sets"}</th>
            <th class="text-center">${t?"Tổng Điểm":"Points"}</th>
          </tr>
        </thead>
        <tbody>
          ${i}
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(s){const e=this.lang==="vi",t=this.state.calculateStandings(s),i=s==="Men's Doubles",a=i?"text-volt":"text-cyan",n=t.map((l,c)=>{const m=c+1,h=m<=4;this.state.isGroupStageComplete(s);let p=`<span class="rank-circle font-bold ${m===1?"gold":m===2?"silver":m===3?"bronze":""}">${m}</span>`,r="";h?r=`<span class="advance-tag neon-green">${e?"BÁN KẾT":"SEMIS"}</span>`:r=`<span class="advance-tag text-muted">${e?"LOẠI":"OUT"}</span>`;const u=l.played===t.length-1,o=u?`<span class="finished-tag">${e?"Đủ 4 trận":"4 Matches"}</span>`:"";return`
        <tr class="${h?"row-top-4":"row-eliminated"}">
          <td class="text-center">${p}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${l.name}</span>
              ${r}
              ${o}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${l.player1} & ${l.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${l.points}</td>
          <td class="text-center font-bold ${u?"text-emerald-400":"text-slate-200"}">${l.played}</td>
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
          <span>${i?"💎":"🔮"}</span>
          <span class="${a}">${s}</span>
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
              ${n}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span>${e?"<strong>Quy tắc xếp hạng:</strong> Top 4 đội sẽ tự động giành vé vào Bán Kết. Ưu tiên xét: Thắng ván ➔ Hiệu số hiệp ➔ Đối kháng trực tiếp ➔ Hiệu số điểm.":"<strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points."}
        </div>
      </div>
    `}renderFixtures(s){const e=this.lang==="vi";let t="";this.activeCategoryFilter==="all"?t=`
        <div class="fixtures-grid gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `:this.activeCategoryFilter==="md"?t=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
        </div>
      `:t=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `,s.innerHTML=`
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
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

      ${t}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryFixtures(s){const e=this.lang==="vi",t=s==="Men's Doubles",i=t?"Men's Doubles":"Mixed's Doubles",a=this.state.matches.filter(d=>d.category===s),n=a.filter(d=>d.stage==="Group Stage"),l=a.filter(d=>d.stage==="Semi-finals"),c=a.filter(d=>d.stage==="Grand Final"),m=a.filter(d=>d.stage==="Bronze Match"),h=e?"TRẬN CHUNG KẾT":"GRAND CHAMPIONSHIP",p=e?"TRANH HẠNG BA":"BRONZE FINALS",r=e?"VÒNG BÁN KẾT":"SEMIFINALS STAGE",u=e?"VÒNG BẢNG XOAY VÒNG":"GROUP STAGE QUALIFYING",o=(d,g)=>d.length===0?"":`
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${t?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${t?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${g}</span>
            <span class="text-slate-600 font-medium">${d.length} ${d.length===1?"Match":"Matches"}</span>
          </div>
          <div class="flex flex-col gap-3">
            ${this.renderMatchCards(d)}
          </div>
        </div>
      `;return`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${t?"💎":"🔮"}</span>
          <span class="${t?"text-volt":"text-cyan"}">${i}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${o(c,h)}
          ${o(m,p)}
          ${o(l,r)}
          ${o(n,u)}
        </div>
      </div>
    `}renderMatchCards(s){const e=this.lang==="vi";return s.length===0?`<div class="col-span-2 text-center text-muted py-6">${e?"Không tìm thấy trận đấu nào":"No matches found"}</div>`:s.map(t=>{const i=t.status==="Completed",a=t.team1&&(t.team1.includes("Place")||t.team1.includes("Winner")||t.team1.includes("Loser"))||t.team2&&(t.team2.includes("Place")||t.team2.includes("Winner")||t.team2.includes("Loser"));let n="",l="";t.stage==="Grand Final"?(n="border-glow-gold bg-gold-gradient",l=i?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>${e?"CHUNG KẾT":"GRAND FINAL"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">${e?"CHUNG KẾT":"GRAND FINAL"}</span>`):t.stage==="Bronze Match"?(n="border-glow-bronze bg-bronze-gradient",l=i?`<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>${e?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`:`<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">${e?"TRANH HẠNG 3":"BRONZE MATCH"}</span>`):(n=i?"border-completed":"border-scheduled",l=i?`<span class="match-badge completed">${e?"KẾT THÚC":"FINAL"}</span>`:`<span class="match-badge scheduled">${e?"LỊCH HẸN":"SCHEDULED"}</span>`);const c=this.admin.isAdmin?`<button class="btn btn-xs btn-outline glow-cyan btn-edit-match flex items-center gap-1.5 ${a?"disabled-btn":""}" 
                    data-match-id="${t.id}" 
                    ${a?'disabled style="opacity: 0.4; pointer-events: none; cursor: not-allowed; border-color: rgba(255,255,255,0.05); color: var(--text-muted);"':""}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle; flex-shrink: 0;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z"/></svg> <span>${a?e?"Khóa":"Locked":e?"Nhập Điểm":"Edit Score"}</span>
           </button>`:"",m=t.category==="Men's Doubles",h=m?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',p=this.state.teams.find(y=>y.name===t.team1),r=this.state.teams.find(y=>y.name===t.team2),u=p?`${p.player1} & ${p.player2}`:"",o=r?`${r.player1} & ${r.player2}`:"",d=m?"text-volt":"text-cyan";let g="",v="";if(i&&t.sets&&t.sets.length>0){const y=t.winner===t.team1?`<span class="${d}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',M=t.winner===t.team2?`<span class="${d}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';g+=y,v+=M,t.sets.forEach(f=>{g+=`<span class="${f.t1>f.t2?d:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${f.t1}</span>`,v+=`<span class="${f.t2>f.t1?d:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${f.t2}</span>`});for(let f=t.sets.length;f<3;f++)g+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',v+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else g='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',v='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>';const S=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${n} ${S}">
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
                <span class="text-sm font-bold ${i&&t.winner===t.team1?d:"text-slate-200"} truncate" title="${t.team1}">
                  ${t.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${u||(e?"Đang xác định":"TBD")}">${u||(e?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${g}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${i&&t.winner===t.team2?d:"text-slate-200"} truncate" title="${t.team2}">
                  ${t.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${o||(e?"Đang xác định":"TBD")}">${o||(e?"Đang xác định":"TBD")}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: 100px; gap: 0.5rem; flex-shrink: 0;">
                ${v}
              </div>
            </div>
          </div>

          <!-- Edit Button Footer (If Admin) -->
          ${c?`<div class="flex justify-end mt-1 pt-2 border-t border-slate-900/50">${c}</div>`:""}
        </div>
      `}).join("")}renderBracket(s){const e=this.lang==="vi",t=c=>{const m=c==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(h=>h.id===`SF1-${m}`),sf2:this.state.matches.find(h=>h.id===`SF2-${m}`),f:this.state.matches.find(h=>h.id===`F-${m}`),b:this.state.matches.find(h=>h.id===`B-${m}`)}},i=t("Men's Doubles"),a=t("Mixed's Doubles"),n=c=>this.state.calculateStandings(c).map((h,p)=>{const r=p+1,u=r<=4,o=r===1?"gold":r===2?"silver":r===3?"bronze":"",d=r===1?"🥇 Seed 1":r===2?"🥈 Seed 2":r===3?"🥉 Seed 3":r===4?"🎫 Seed 4":e?"❌ Loại":"❌ Out",g=u?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${h.name}">
              <span class="rank-circle font-bold ${o}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${r}</span>
              <span class="font-bold text-slate-200 truncate">${h.name}</span>
            </div>
            <span class="font-extrabold ${g}" style="font-size: 0.55rem; flex-shrink: 0;">${d}</span>
          </div>
        `}).join(""),l=(c,m,h,p)=>{const r=this.getAwardResults(p),u=o=>{if(!o)return'<div class="bracket-node empty">N/A</div>';const d=o.status==="Completed",g=o.team1&&(o.team1.includes("Place")||o.team1.includes("Winner")||o.team1.includes("Loser"))||o.team2&&(o.team2.includes("Place")||o.team2.includes("Winner")||o.team2.includes("Loser")),v=this.admin.isAdmin?g?`<span title="${e?"Chưa thể nhập điểm":"Cannot edit score yet"}" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>`:`<button class="btn-edit-node-score btn-edit-match" data-match-id="${o.id}">✏️</button>`:"",S=this.state.teams.find(D=>D.name===o.team1),y=this.state.teams.find(D=>D.name===o.team2),M=S?`${S.player1} & ${S.player2}`:"",f=y?`${y.player1} & ${y.player2}`:"",$=h?"text-volt":"text-cyan";let T="",b="";if(d&&o.sets&&o.sets.length>0){const D=o.winner===o.team1?`<span class="${$}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',L=o.winner===o.team2?`<span class="${$}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';T+=D,b+=L,o.sets.forEach(w=>{T+=`<span class="${w.t1>w.t2?$:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${w.t1}</span>`,b+=`<span class="${w.t2>w.t1?$:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${w.t2}</span>`});for(let w=o.sets.length;w<3;w++)T+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',b+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else T='<span style="width: 6px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',b='<span style="width: 8px;"></span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span><span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>';const C=d?`<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ ${e?"Đã kết thúc":"Finished"}</div>`:`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${o.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${d?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${o.pitch} | ${o.stage}</span>
              ${v}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${d&&o.winner===o.team1?$:"text-slate-300"}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${o.team1}">${o.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${M||(e?"Đang xác định":"TBD")}">${M||(e?"Đang xác định":"TBD")}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: 70px; gap: 0.35rem; flex-shrink: 0;">
                  ${T}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${d&&o.winner===o.team2?$:"text-slate-300"}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${o.team2}">${o.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${f||(e?"Đang xác định":"TBD")}">${f||(e?"Đang xác định":"TBD")}</span>
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
            <span class="${h?"text-volt":"text-cyan"}">${m} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 ${e?"BẢNG XẾP HẠNG":"GROUP STANDINGS"}</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${n(p)}
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
                ${u(c.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${u(c.sf2)}
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
                ${u(c.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${u(c.b)}
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
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>${e?"VÔ ĐỊCH":"CHAMPION"}</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${r.goldTeam.name}">${r.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.goldTeam.players}">${r.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>${e?"Á QUÂN":"RUNNER-UP"}</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${r.silverTeam.name}">${r.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.silverTeam.players}">${r.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>${e?"HẠNG 3":"3RD PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${r.bronzeTeam.name}">${r.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.bronzeTeam.players}">${r.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>${e?"HẠNG 4":"4TH PLACE"}</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${r.fourthTeam.name}">${r.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${r.fourthTeam.players}">${r.fourthTeam.players}</div>
              </div>
            </div>
          </div>
        </div>
      `};s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Sơ Đồ Cây Vòng Đoạt Cúp</h2>
        <p class="view-subtitle">${e?"Tự động tính phân cặp & lộ trình thăng cấp trực quan":"Automatic calculated tournament brackets and playoff trees"}</p>
      </div>

      ${l(i,"Men's Doubles",!0,"Men's Doubles")}
      ${l(a,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `}getAwardResults(s){const e=s==="Men's Doubles"?"MD":"XD",t=this.state.matches.find(p=>p.id===`F-${e}`),i=this.state.matches.find(p=>p.id===`B-${e}`),a=this.lang==="vi";let n={name:a?"Chưa xác định":"TBD",players:a?"Đội vô địch":"Championship Winner",confirmed:!1},l={name:a?"Chưa xác định":"TBD",players:a?"Đội hạng nhì":"Championship Runner-up",confirmed:!1},c={name:a?"Chưa xác định":"TBD",players:a?"Đội hạng ba":"Bronze Winner",confirmed:!1},m={name:a?"Chưa xác định":"TBD",players:a?"Đội hạng tư":"Bronze Runner-up",confirmed:!1};const h=p=>{if(!p)return"";const r=this.state.teams.find(u=>u.name===p);return r?`${r.player1} & ${r.player2}`:""};if(t)if(t.status==="Completed"){const p=t.winner,r=t.winner===t.team1?t.team2:t.team1;n={name:p,players:h(p),confirmed:!0},l={name:r,players:h(r),confirmed:!0}}else t.team1.includes("Winner")||t.team2.includes("Winner")||(n={name:a?"Chung Kết Đang Đấu":"Grand Finalists",players:`${t.team1} vs ${t.team2}`,confirmed:!1},l={name:a?"Đang Tranh Chức Á Quân":"Chasing Runner-up",players:a?"Đội thua trận Chung kết":"Runner-up of Grand Final",confirmed:!1});if(i)if(i.status==="Completed"){const p=i.winner,r=i.winner===i.team1?i.team2:i.team1;c={name:p,players:h(p),confirmed:!0},m={name:r,players:h(r),confirmed:!0}}else i.team1.includes("Loser")||i.team2.includes("Loser")||(c={name:a?"Tranh Hạng 3 Đang Đấu":"Bronze Contenders",players:`${i.team1} vs ${i.team2}`,confirmed:!1});return{goldTeam:n,silverTeam:l,bronzeTeam:c,fourthTeam:m}}renderResults(s){const e=this.lang==="vi",t=this.getAwardResults("Men's Doubles"),i=this.getAwardResults("Mixed's Doubles"),a=(n,l,c)=>{const m=n.goldTeam.confirmed||n.silverTeam.confirmed||n.bronzeTeam.confirmed;return`
        <div class="glass-card mb-8 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[3px] ${c?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${c?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${l}</span>
          </h3>
          <p class="text-xs text-muted mb-6">
            ${m?e?"⚡ Kết quả thi đấu chính thức đã được ghi nhận":"⚡ Official championship matches completed":e?"⏳ Đang chờ các trận chung kết & tranh hạng 3 diễn ra":"⏳ Waiting for championship finals to complete"}
          </p>

          <div class="podium-container">
            <!-- 2nd Place Step -->
            <div class="podium-step second-place">
              <span class="podium-medal">🥈</span>
              <div class="podium-team truncate max-w-full" title="${n.silverTeam.name}">${n.silverTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${n.silverTeam.players}">${n.silverTeam.players}</div>
              <span class="podium-label">${e?"Á Quân":"Runner-up"}</span>
            </div>

            <!-- 1st Place Step -->
            <div class="podium-step first-place">
              <span class="podium-medal">🥇</span>
              <div class="podium-team truncate max-w-full" title="${n.goldTeam.name}">${n.goldTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${n.goldTeam.players}">${n.goldTeam.players}</div>
              <span class="podium-label">${e?"Vô Địch":"Champion"}</span>
            </div>

            <!-- 3rd Place Step -->
            <div class="podium-step third-place">
              <span class="podium-medal">🥉</span>
              <div class="podium-team truncate max-w-full" title="${n.bronzeTeam.name}">${n.bronzeTeam.name}</div>
              <div class="podium-players truncate max-w-full" title="${n.bronzeTeam.players}">${n.bronzeTeam.players}</div>
              <span class="podium-label">${e?"Hạng 3":"3rd Place"}</span>
            </div>
          </div>

          <!-- Honorable 4th Place Card -->
          <div class="max-w-[280px] mx-auto mt-8 glass-panel border border-slate-700/30 p-2.5 rounded-lg flex items-center justify-center gap-2.5 hover-glowing">
            <span class="text-lg">🏅</span>
            <div class="text-left truncate">
              <div class="text-4xs text-muted font-bold uppercase tracking-wider">${e?"Hạng 4 Khuyến Khích":"Honorable 4th Place"}</div>
              <div class="text-2xs font-extrabold text-slate-300 truncate" title="${n.fourthTeam.name}">${n.fourthTeam.name}</div>
              <div class="text-4xs text-muted truncate" title="${n.fourthTeam.players}">${n.fourthTeam.players}</div>
            </div>
          </div>
        </div>
      `};s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Bảng Vàng Danh Vọng</h2>
        <p class="view-subtitle">${e?"Vinh danh nhà vô địch và các thứ hạng danh giá của mùa giải":"Honoring the champions and premium standings of the season"}</p>
      </div>

      ${a(t,"Men's Doubles",!0)}
      ${a(i,"Mixed's Doubles",!1)}
    `}renderRules(s){const e=this.lang==="vi",t=e?G.vi:G.en,i=t.sections.map(a=>{const n=a.content.map(l=>{let c=l.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return c=c.replace(/\\rightarrow/g," ➔ "),c=c.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${c}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${a.title}</h3>
          <div>${n}</div>
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
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${t.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${t.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${i}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(s){const e=this.lang==="vi",t=(n,l)=>{const c=l==="Men's Doubles",m=c?"text-volt":"text-cyan",h=this.state.calculateStandings(l),p=n.map(r=>{const u=this.state.matches.filter(x=>x.category===l&&x.status==="Completed"&&(x.team1===r.name||x.team2===r.name));let o=0,d=0,g=0,v=0,S=0,y=0;u.forEach(x=>{const N=x.team1===r.name;x.winner===r.name?o++:d++,N?(g+=Number(x.score1)||0,v+=Number(x.score2)||0):(g+=Number(x.score2)||0,v+=Number(x.score1)||0),x.sets&&Array.isArray(x.sets)&&x.sets.forEach(P=>{const I=Number(P.t1)||0,E=Number(P.t2)||0;N?(S+=I,y+=E):(S+=E,y+=I)})});const M=u.length,f=M>0?Math.round(o/M*100):0,$=g-v,T=S-y,b=o,C=h.findIndex(x=>x.name===r.name),D=C!==-1?C+1:"-",L=u.map(x=>{const N=x.winner===r.name,P=N?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",I=N?"W":"L",E=`${x.stage}: ${x.team1} vs ${x.team2} (${x.score1}-${x.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${P}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${E}">${I}</span>`}).join(""),w=L.length>0?L:`<span class="text-slate-500 text-5xs italic font-sans">${e?"Chưa đấu":"No matches"}</span>`;return`
          <div class="team-profile-card glass-panel border border-slate-700/50 p-4 rounded-lg hover-glowing flex flex-col justify-between"
               style="background: radial-gradient(circle at top right, ${c?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%);">
            <div>
              <div class="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                <div class="flex items-center gap-1.5 truncate max-w-[70%]">
                  <span class="font-extrabold text-sm text-slate-100 truncate pr-1" title="${r.name}">${r.name}</span>
                </div>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                  <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${D}</span>
                  <span class="badge ${c?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
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
                  <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">${e?"PHONG ĐỘ:":"FORM:"}</span>
                  <div class="flex items-center gap-1">
                    ${w}
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
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Đã đấu":"Pld"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold ${c?"text-volt":"text-cyan"}">${o}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Thắng":"Won"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold ${d>0?"text-rose-400":"text-slate-400"}">${d}</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Thua":"Lost"}</div>
                </div>
                <div>
                  <div class="text-2xs font-extrabold text-slate-200">${f}%</div>
                  <div class="text-5xs uppercase tracking-wider text-slate-500">${e?"Tỉ Lệ":"Win%"}</div>
                </div>
              </div>

              <!-- Telemetry detail list -->
              <div class="flex flex-col gap-1.5 font-mono">
                <div class="flex items-center justify-between text-slate-400">
                  <span>${e?"Điểm tích lũy:":"Standing Pts:"}</span>
                  <span class="font-extrabold text-slate-200">${b}</span>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${e?"Set Thắng/Bại:":"Sets W/L:"}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${g}-${v}</span>
                    <span class="text-5xs font-bold px-1 py-0.5 rounded ${$>0?"bg-emerald-500/10 text-emerald-400":$<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                      ${$>0?"+":""}${$}
                    </span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-slate-400">
                  <span>${e?"Điểm Thắng/Bại:":"Points W/L:"}</span>
                  <div class="flex items-center gap-1.5">
                    <span class="text-slate-200">${S}-${y}</span>
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
            <span class="${m}">${c?"💎":"🔮"}</span>
            <span class="${m}">${l} (${n.length} Teams)</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            ${p}
          </div>
        </div>
      `},i=this.state.teams.filter(n=>n.category==="Men's Doubles"),a=this.state.teams.filter(n=>n.category==="Mixed's Doubles");s.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Thành Viên & Đội Đăng Ký</h2>
        <p class="view-subtitle">${e?"Hồ sơ thành viên và danh sách đội hình phân hạng":"Browse player preferences and team statistics"}</p>
      </div>

      <!-- Teams lists -->
      ${t(i,"Men's Doubles")}
      ${t(a,"Mixed's Doubles")}
    `}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const s=new Date("May 31, 2026 13:30:00").getTime(),e=()=>{const t=document.getElementById("cd-days"),i=document.getElementById("cd-hours"),a=document.getElementById("cd-minutes"),n=document.getElementById("cd-seconds");if(!t){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const l=new Date().getTime(),c=s-l;if(c<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),t.textContent="00",i.textContent="00",a.textContent="00",n.textContent="00";return}const m=Math.floor(c/(1e3*60*60*24)),h=Math.floor(c%(1e3*60*60*24)/(1e3*60*60)),p=Math.floor(c%(1e3*60*60)/(1e3*60)),r=Math.floor(c%(1e3*60)/1e3);t.textContent=m.toString().padStart(2,"0"),i.textContent=h.toString().padStart(2,"0"),a.textContent=p.toString().padStart(2,"0"),n.textContent=r.toString().padStart(2,"0")};e(),this.countdownTimer=setInterval(e,1e3)}}window.addEventListener("DOMContentLoaded",()=>{new O});
