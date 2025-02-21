import Match from "./organisms/Match";

function App() {
  return (
    <>
      <Match
        date={"02.26"}
        day={"수"}
        time={"15:00"}
        imgSrc={"../public/new_Jeonbuk.png"}
        vsTeam={"울산 VS 전북현대"}
        place={"울산 문수 월드컵경기장"}
        fullDate={"2025.02.26 (수)"}
        openDate={"12:00 오픈예정"}
      />
    </>
  );
}

export default App;
