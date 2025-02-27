const Counter = ({ cnt, maxCount, plus, minus }) => {
  const buttonStyle = {
    width: "fit-content",
    padding: "10px 20px",
    border: "none",
    borderRadius: "9999px",
    fontSize: "20px",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button style={buttonStyle} onClick={minus}>
        -
      </button>
      <input
        type="number"
        value={cnt > maxCount ? maxCount : cnt}
        max={maxCount}
      />
      <span>{cnt}</span>
      <button style={buttonStyle} onClick={plus}>
        +
      </button>
    </div>
  );
};

export default Counter;
