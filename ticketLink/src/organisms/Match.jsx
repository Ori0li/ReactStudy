import Date from "../molecules/Date";
import Reservation from "../molecules/Reservation";
import VsImg from "../molecules/VsImg";
import VsInfo from "../molecules/VsInfo";

const Match = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        borderBottom: "1px solid black",
      }}
    >
      <Date {...props} />
      <VsImg {...props} />
      <VsInfo {...props} />
      <Reservation {...props} />
    </div>
  );
};

export default Match;
