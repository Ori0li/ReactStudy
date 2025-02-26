const Counter = ({ cnt, plus, minus }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button
        style={{
          width: "fit-content",
          padding: "10px 20px",
          border: "none",
          borderRadius: "9999px",
          fontSize: "20px",
        }}
        onClick={minus}
      >
        -
      </button>
      <span>{cnt}</span>
      <button
        style={{
          width: "fit-content",
          padding: "10px 20px",
          border: "none",
          borderRadius: "9999px",
          fontSize: "20px",
        }}
        onClick={plus}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
