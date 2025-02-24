const MatchTeamIcon = (props) => {
  const { imgSrc1, imgSrc2 } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "24px",
        color: "#878d95",
      }}
    >
      <img src={imgSrc1} style={{ width: "80px" }} />
      VS
      <img src={imgSrc2} style={{ width: "80px" }} />
    </div>
  );
};

export default MatchTeamIcon;
