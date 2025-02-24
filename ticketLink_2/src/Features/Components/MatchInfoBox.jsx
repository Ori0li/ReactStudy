const MatchInfoBox = (props) => {
  const { fullDate, openDate } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#d6d6d6",
        padding: "10px 15px",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      <span>{fullDate}</span>
      <span>{openDate}</span>
    </div>
  );
};

export default MatchInfoBox;
