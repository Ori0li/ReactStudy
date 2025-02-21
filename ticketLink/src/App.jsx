import { matchData } from "./js/matchData";
import Match from "./organisms/Match";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {matchData.map((v) => {
        return <Match {...v} />;
      })}
    </div>
  );
}

export default App;
