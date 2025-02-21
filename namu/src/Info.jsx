const Info = (props) => {
  const { infos } = props;
  const infoStyle = {
    padding: "10px 20px",
    fontWeight: "500",
    borderTop: "1px solid gray",
    width: "350px",
    whiteSpace: "pre-wrap",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {infos.map((v) => {
        return <div style={infoStyle}>{v}</div>;
      })}
    </div>
  );
};

export default Info;
