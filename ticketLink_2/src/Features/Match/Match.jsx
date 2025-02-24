import MatchDay from "../Components/MatchDay";
import MatchInfoBox from "../Components/MatchInfoBox";
import MatchPlace from "../Components/MatchPlace";
import MatchTeam from "../Components/MatchTeam";
import MatchTeamIcon from "../Components/MatchTeamIcon";

const Match = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "fit-content",
        padding: "15px 30px",
        gap: "40px",
        borderBottom: "2px solid #e6e6e6",
      }}
    >
      <MatchDay {...props} />
      <MatchTeamIcon {...props} />
      <MatchTeam {...props} />
      <MatchPlace {...props} />
      <MatchInfoBox {...props} />
    </div>
  );
};

export default Match;
