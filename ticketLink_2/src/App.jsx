import Match from "./Features/Match/Match";

const matchData = [
  {
    date: "03.03",
    day: "월",
    time: "14:00",
    imgSrc1:
      "https://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
    imgSrc2: "https://image.toast.com/aaaaab/ticketlink/TKL_5/Gimcheon.png",
    team1: "FC서울",
    team2: "김천",
    place: "서울월드컵경기장",
    fullDate: "2025.02.26 (수)",
    openDate: "18:00 오픈예정",
  },
  {
    date: "03.29",
    day: "토",
    time: "14:00",
    imgSrc1:
      "https://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
    imgSrc2: "https://image.toast.com/aaaaab/ticketlink/TKL_5/Daegu.png",
    team1: "FC서울",
    team2: "대구",
    place: "서울월드컵경기장",
    fullDate: "2025.03.24 (월)",
    openDate: "18:00 오픈예정",
  },
  {
    date: "04.20",
    day: "일",
    time: "14:00",
    imgSrc1:
      "https://image.toast.com/aaaaab/ticketlink/TKL_5/Soccer_KL1_Seoul.png",
    imgSrc2: "	https://image.toast.com/aaaaab/ticketlink/TKL_3/Daejeon.png",
    team1: "FC서울",
    team2: "대전",
    place: "서울월드컵경기장",
    fullDate: "2025.04.07 (월)",
    openDate: "18:00 오픈예정",
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        marginTop: "100px",
      }}
    >
      {matchData.map((v) => {
        return <Match {...v} />;
      })}
    </div>
  );
}

export default App;
