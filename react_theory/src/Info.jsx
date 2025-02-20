const Info = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "20px", fontWeight: 900 }}>{props.number || 0}</p>
      <span style={{ fontSize: "14px", fontWeight: 500 }}>
        {props.title || "?"}
      </span>
    </div>
  );
};

export default Info;
