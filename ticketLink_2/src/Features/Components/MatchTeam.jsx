const MatchTeam = (props) => {
  const { team1, team2 } = props;
  return (
    <div style={{ fontWeight: "bold", fontSize: "18px" }}>
      <span style={{ padding: "0px 7px" }}>{team1}</span>
      VS
      <span style={{ padding: "0px 7px" }}>{team2}</span>
    </div>
  );
};

export default MatchTeam;
