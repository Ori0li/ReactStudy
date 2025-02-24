const MatchDay = (props) => {
  const { date, day, time } = props;

  const obj = {
    일: "red",
    토: "blue",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <span style={{ fontSize: "36px" }}>{date}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "14px",
        }}
      >
        <span style={{ color: obj[day] }}>({day})</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default MatchDay;
