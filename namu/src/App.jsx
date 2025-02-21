import InfoBox from "./InfoBox";

function App() {
  return (
    <article style={{ border: "3px solid black", width: "fit-content" }}>
      <InfoBox title={"본명"} infos={["신류진 (申留眞, Shin Ryujin)"]} />
      <InfoBox
        title={"출생"}
        infos={[
          "2001년 4월 17일 (23세)",
          "강원도 춘천시 \n(現 강원특별자치도 춘천시)",
        ]}
      />
      <InfoBox title={"출신"} infos={["서울특별시"]} />
      <InfoBox title={"본관"} infos={["평산 신씨 (平山 申氏)"]} />
      <InfoBox title={"신체"} infos={["163cm, B형, 250mm"]} />
      <InfoBox
        title={"가족"}
        infos={["부모님(1970년생), 오빠 신류성(1998년생)", "반려묘 별이, 달이"]}
      />
      <InfoBox
        title={"학력"}
        infos={[
          "서울광남초등학교 (졸업) \n대왕중학교 (졸업) \n경기여자고등학교 (전학) \n한림연예예술고등학교 (실용무용과 / 졸업)",
        ]}
      />
    </article>
  );
}

export default App;
