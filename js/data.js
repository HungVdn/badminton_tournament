export const INITIAL_PLAYERS = [
  { "id": 1, "name": "DuongDLQ", "preferred_format": "Any", "preferred_partnership": "Totally random" },
  { "id": 2, "name": "HungVDN", "preferred_format": "Men's Doubles", "preferred_partnership": "Totally random" },
  { "id": 3, "name": "KhaiCT", "preferred_format": "Men's Doubles", "preferred_partnership": "Totally random" },
  { "id": 4, "name": "phuocnv", "preferred_format": "Any", "preferred_partnership": "Totally random" },
  { "id": 5, "name": "TriemPT", "preferred_format": "Any", "preferred_partnership": "Totally random" },
  { "id": 6, "name": "MinhDN", "preferred_format": "Men's Doubles", "preferred_partnership": "Form your own team and register later" },
  { "id": 10, "name": "LongNT", "preferred_format": "Any", "preferred_partnership": "Totally random" },
  { "id": 11, "name": "ChiKP", "preferred_format": "Mixed's Doubles", "preferred_partnership": "Totally random" },
  { "id": 12, "name": "QuanNLH", "preferred_format": "Any", "preferred_partnership": "Totally random" },
  { "id": 13, "name": "HungNT", "preferred_format": "Any", "preferred_partnership": "Skill-based tiers, then random" },
  { "id": 14, "name": "TienTS", "preferred_format": "Men's Doubles", "preferred_partnership": "Skill-based tiers, then random" },
  { "id": 15, "name": "HieuPV", "preferred_format": "Men's Doubles", "preferred_partnership": "Totally random" },
  { "id": 16, "name": "ThanhPT", "preferred_format": "Mixed's Doubles", "preferred_partnership": "Totally random" }
];

export const INITIAL_TEAMS = [
  // Men's Doubles
  { "id": "MD-1", "name": "Hưng 7 - Khải", "player1": "HungVDN", "player2": "KhaiCT", "category": "Men's Doubles" },
  { "id": "MD-2", "name": "Hưng 14 - Phong", "player1": "HungNT", "player2": "PhongTH", "category": "Men's Doubles" },
  { "id": "MD-3", "name": "Tùng - Dương", "player1": "DuongDLQ", "player2": "TungHD", "category": "Men's Doubles" },
  { "id": "MD-4", "name": "Tiến - Minh", "player1": "TienTS", "player2": "MinhDN", "category": "Men's Doubles" },
  { "id": "MD-5", "name": "Phước - Hiếu", "player1": "PhuocNV", "player2": "HieuPV", "category": "Men's Doubles" },
  
  // Mixed's Doubles
  { "id": "XD-1", "name": "Hằng - Minh", "player1": "HangTTT-GA", "player2": "MinhTH1993", "category": "Mixed's Doubles" },
  { "id": "XD-2", "name": "Minh - Triêm", "player1": "MinhLNH", "player2": "TriemPT", "category": "Mixed's Doubles" },
  { "id": "XD-3", "name": "Trân - Long", "player1": "TranPQB", "player2": "LongNT1988", "category": "Mixed's Doubles" },
  { "id": "XD-4", "name": "Thanh - Hoàn", "player1": "ThanhPT", "player2": "HoanTT", "category": "Mixed's Doubles" },
  { "id": "XD-5", "name": "Chi - Quân", "player1": "ChiKP", "player2": "QuanNLH", "category": "Mixed's Doubles" }
];

export const INITIAL_MATCHES = [
  // Men's Doubles
  {
    "id": "M-1",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 15",
    "time": "1:30 - 2:00",
    "team1": "Hưng 7 - Khải",
    "team2": "Hưng 14 - Phong",
    "score1": 2,
    "score2": 1,
    "sets": [{ "t1": 15, "t2": 11 }, { "t1": 9, "t2": 15 }, { "t1": 15, "t2": 13 }],
    "status": "Completed",
    "winner": "Hưng 7 - Khải"
  },
  {
    "id": "M-2",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 16",
    "time": "1:30 - 2:00",
    "team1": "Tùng - Dương",
    "team2": "Tiến - Minh",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 12 }, { "t1": 15, "t2": 10 }],
    "status": "Completed",
    "winner": "Tùng - Dương"
  },
  {
    "id": "M-5",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 15",
    "time": "2:05 - 2:35",
    "team1": "Tùng - Dương",
    "team2": "Hưng 7 - Khải",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 13 }, { "t1": 15, "t2": 11 }],
    "status": "Completed",
    "winner": "Tùng - Dương"
  },
  {
    "id": "M-6",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 16",
    "time": "2:05 - 2:35",
    "team1": "Hưng 14 - Phong",
    "team2": "Phước - Hiếu",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 9 }, { "t1": 15, "t2": 7 }],
    "status": "Completed",
    "winner": "Hưng 14 - Phong"
  },
  {
    "id": "M-9",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 15",
    "time": "2:40 - 3:10",
    "team1": "Hưng 7 - Khải",
    "team2": "Tiến - Minh",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 13 }, { "t1": 15, "t2": 12 }],
    "status": "Completed",
    "winner": "Hưng 7 - Khải"
  },
  {
    "id": "M-10",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 16",
    "time": "2:40 - 3:10",
    "team1": "Tùng - Dương",
    "team2": "Phước - Hiếu",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 8 }, { "t1": 15, "t2": 11 }],
    "status": "Completed",
    "winner": "Tùng - Dương"
  },
  {
    "id": "M-13",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 15",
    "time": "3:15 - 3:45",
    "team1": "Phước - Hiếu",
    "team2": "Hưng 7 - Khải",
    "score1": 0,
    "score2": 2,
    "sets": [{ "t1": 11, "t2": 15 }, { "t1": 10, "t2": 15 }],
    "status": "Completed",
    "winner": "Hưng 7 - Khải"
  },
  {
    "id": "M-14",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 16",
    "time": "3:15 - 3:45",
    "team1": "Hưng 14 - Phong",
    "team2": "Tiến - Minh",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 13 }, { "t1": 15, "t2": 10 }],
    "status": "Completed",
    "winner": "Hưng 14 - Phong"
  },
  {
    "id": "M-17",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 15",
    "time": "3:50 - 4:20",
    "team1": "Hưng 14 - Phong",
    "team2": "Tùng - Dương",
    "score1": "",
    "score2": "",
    "sets": [],
    "status": "Scheduled"
  },
  {
    "id": "M-18",
    "category": "Men's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 16",
    "time": "3:50 - 4:20",
    "team1": "Tiến - Minh",
    "team2": "Phước - Hiếu",
    "score1": "",
    "score2": "",
    "sets": [],
    "status": "Scheduled"
  },

  // Mixed's Doubles
  {
    "id": "M-3",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 20",
    "time": "1:30 - 2:00",
    "team1": "Hằng - Minh",
    "team2": "Minh - Triêm",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 8 }, { "t1": 15, "t2": 13 }],
    "status": "Completed",
    "winner": "Hằng - Minh"
  },
  {
    "id": "M-4",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 21",
    "time": "1:30 - 2:00",
    "team1": "Trân - Long",
    "team2": "Thanh - Hoàn",
    "score1": 2,
    "score2": 1,
    "sets": [{ "t1": 12, "t2": 15 }, { "t1": 15, "t2": 13 }, { "t1": 16, "t2": 14 }],
    "status": "Completed",
    "winner": "Trân - Long"
  },
  {
    "id": "M-7",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 20",
    "time": "2:05 - 2:35",
    "team1": "Trân - Long",
    "team2": "Hằng - Minh",
    "score1": 0,
    "score2": 2,
    "sets": [{ "t1": 11, "t2": 15 }, { "t1": 11, "t2": 15 }],
    "status": "Completed",
    "winner": "Hằng - Minh"
  },
  {
    "id": "M-8",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 21",
    "time": "2:05 - 2:35",
    "team1": "Minh - Triêm",
    "team2": "Chi - Quân",
    "score1": 2,
    "score2": 1,
    "sets": [{ "t1": 15, "t2": 13 }, { "t1": 10, "t2": 15 }, { "t1": 15, "t2": 11 }],
    "status": "Completed",
    "winner": "Minh - Triêm"
  },
  {
    "id": "M-11",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 20",
    "time": "2:40 - 3:10",
    "team1": "Thanh - Hoàn",
    "team2": "Hằng - Minh",
    "score1": 0,
    "score2": 2,
    "sets": [{ "t1": 9, "t2": 15 }, { "t1": 8, "t2": 15 }],
    "status": "Completed",
    "winner": "Hằng - Minh"
  },
  {
    "id": "M-12",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 21",
    "time": "2:40 - 3:10",
    "team1": "Trân - Long",
    "team2": "Chi - Quân",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 10 }, { "t1": 15, "t2": 12 }],
    "status": "Completed",
    "winner": "Trân - Long"
  },
  {
    "id": "M-15",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 20",
    "time": "3:15 - 3:45",
    "team1": "Hằng - Minh",
    "team2": "Chi - Quân",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 11 }, { "t1": 15, "t2": 9 }],
    "status": "Completed",
    "winner": "Hằng - Minh"
  },
  {
    "id": "M-16",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 21",
    "time": "3:15 - 3:45",
    "team1": "Minh - Triêm",
    "team2": "Thanh - Hoàn",
    "score1": 2,
    "score2": 0,
    "sets": [{ "t1": 15, "t2": 12 }, { "t1": 15, "t2": 13 }],
    "status": "Completed",
    "winner": "Minh - Triêm"
  },
  {
    "id": "M-19",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 20",
    "time": "3:50 - 4:20",
    "team1": "Minh - Triêm",
    "team2": "Trân - Long",
    "score1": "",
    "score2": "",
    "sets": [],
    "status": "Scheduled"
  },
  {
    "id": "M-20",
    "category": "Mixed's Doubles",
    "stage": "Group Stage",
    "pitch": "Pitch 21",
    "time": "3:50 - 4:20",
    "team1": "Thanh - Hoàn",
    "team2": "Chi - Quân",
    "score1": "",
    "score2": "",
    "sets": [],
    "status": "Scheduled"
  }
];

export const REGULATIONS_DATA = {
  vi: {
    title: " GEAR GAMES BADMINTON TOURNAMENT 2026",
    subtitle: "Quy Định và Thông Tin Giải Đấu",
    sections: [
      {
        id: "categories",
        title: "I. Nội dung thi đấu",
        content: [
          "• Đôi nam nữ",
          "• Đôi nam nam",
          "• Tổng cộng: 10 đội - 20 người chơi"
        ]
      },
      {
        id: "schedule",
        title: "II. Thời gian & Địa điểm",
        content: [
          "• Ngày thi đấu: 31 May 2026",
          "• Địa điểm: Sân cầu lông Beta Era"
        ]
      },
      {
        id: "prizes",
        title: "III. Giải thưởng",
        content: [
          "🏆 Giải Nhất: 2,000,000 VND + Cúp Vô Địch",
          "🥈 Giải Nhì: 1,500,000 VND",
          "🥉 Giải Ba: 1,000,000 VND"
        ]
      },
      {
        id: "regulations",
        title: "IV. Thể thức thi đấu",
        content: [
          "• **Vòng loại**: Thi đấu vòng tròn tính điểm (Round-Robin). Top 4 đội của mỗi hạng mục bước vào bán kết.",
          "• **Vòng bán kết**: Đấu loại trực tiếp để chọn ra Top 2 team vào chung kết.",
          "• **Vòng chung kết**: Đấu loại trực tiếp để chọn ra Top 1 Vô Địch Mùa Giải.",
          "• **Điểm số ván đấu**:",
          "  - Vòng loại: BO3 - thi đấu đến 15 điểm mỗi hiệp.",
          "  - Bán kết & Chung kết: BO3 - thi đấu đến 21 điểm mỗi hiệp.",
          "  - Nếu tỷ số là 20 đều (hoặc 14 đều ở 15 điểm), bên nào ghi trước 2 điểm cách biệt sẽ thắng ván đó.",
          "  - Nếu tỷ số đạt đến 29 đều (hoặc 20 đều ở 15 điểm), bên nào ghi điểm thứ 30 (hoặc 21) trước sẽ thắng ván đó.",
          "• **Cách tính điểm xếp hạng vòng bảng**:",
          "  - Thắng: +1 điểm xếp hạng. Thua: +0 điểm xếp hạng.",
          "  - Thứ tự ưu tiên khi xếp hạng: (1) Điểm số xếp hạng $\\rightarrow$ (2) Hiệu số hiệp (Set) thắng - thua $\\rightarrow$ (3) Đối đầu trực tiếp (Head-to-head) $\\rightarrow$ (4) Hiệu số tổng điểm thắng - điểm thua $\\rightarrow$ (5) Bốc thăm."
        ]
      },
      {
        id: "rules",
        title: "V. Luật thi đấu đánh đôi",
        content: [
          "• Áp dụng Luật Cầu lông Quốc tế của BWF.",
          "• **Giao cầu & Nhận cầu**:",
          "  - Khi điểm bên giao phát cầu là **chẵn** (0, 2, 4, 6,...), người giao cầu sẽ đứng ở ô giao cầu bên **phải** của họ và giao chéo sang ô nhận bên phải đối phương.",
          "  - Khi điểm bên giao phát cầu là **lẻ** (1, 3, 5, 7,...), người giao cầu sẽ đứng ở ô giao cầu bên **trái** của họ và giao chéo sang ô nhận bên trái đối phương.",
          "  - VĐV của bên nhận cầu đứng chéo đối diện với VĐV phát cầu sẽ là người nhận cầu.",
          "  - Chỉ có người nhận cầu được quyền đánh trả cầu phát. Nếu đồng đội của họ chạm vào cầu trước, bên phát cầu được cộng 1 điểm.",
          "• **Vị trí đứng đổi chỗ**:",
          "  - Hai VĐV chỉ đổi chỗ bên trái-phải cho nhau khi bên họ **giao cầu và giành được điểm**.",
          "  - Nếu bên nhận cầu giành được điểm, vị trí đứng của cả hai đội giữ nguyên và quyền giao cầu chuyển sang cho họ mà không đổi chỗ."
        ]
      },
      {
        id: "intervals",
        title: "VI. Thời gian nghỉ & Lỗi hành vi",
        content: [
          "• Khi một bên ghi được 11 điểm (hoặc 8 điểm ở hiệp 15 điểm) trước, thời gian nghỉ giữa hiệp đấu không quá 60 giây.",
          "• Thời gian nghỉ giữa các hiệp 1, 2 và 3 không quá 2 phút.",
          "• Trận đấu phải diễn ra liên tục. Các lỗi hành vi, câu giờ có thể bị trọng tài nhắc nhở hoặc phạt điểm."
        ]
      }
    ]
  },
  en: {
    title: "GEAR GAMES BADMINTON TOURNAMENT 2026",
    subtitle: "Tournament Regulations and General Information",
    sections: [
      {
        id: "categories",
        title: "I. Competition Categories",
        content: [
          "• Mixed Doubles",
          "• Men's Doubles",
          "• Total: 10 pairs - 20 players"
        ]
      },
      {
        id: "schedule",
        title: "II. Schedule & Venue",
        content: [
          "• Date: 31 May 2026",
          "• Venue: Beta Era court"
        ]
      },
      {
        id: "prizes",
        title: "III. Prizes",
        content: [
          "🏆 First Place: 2,000,000 VND + Championship Trophy",
          "🥈 Second Place: 1,500,000 VND",
          "🥉 Third Place: 1,000,000 VND"
        ]
      },
      {
        id: "regulations",
        title: "IV. Regulations & Tournament Format",
        content: [
          "• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.",
          "• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.",
          "• **Grand Final**: A Single-elimination match to crown the Season Champion.",
          "• **Set Points Rules**:",
          "  - Qualifying Round: Best of 3 (BO3) – 15 points per set.",
          "  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.",
          "  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.",
          "  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.",
          "• **Group Stage Ranking Priority**:",
          "  - Win: +1 point. Loss: +0 point.",
          "  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."
        ]
      },
      {
        id: "rules",
        title: "V. Doubles Rules & Service Position",
        content: [
          "• Standard BWF Laws of Badminton apply.",
          "• **Service and Receiving Courts**:",
          "  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.",
          "  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.",
          "  - The player diagonally opposite to the server shall be the receiver.",
          "  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.",
          "• **Swapping Positions**:",
          "  - Players only swap their left/right service positions when their team **wins a point on their own service**.",
          "  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."
        ]
      },
      {
        id: "intervals",
        title: "VI. Intervals & Player Behavior",
        content: [
          "• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.",
          "• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.",
          "• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."
        ]
      }
    ]
  }
};
