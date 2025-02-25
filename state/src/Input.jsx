const Input = (props) => {
  const { type, info, event } = props;

  const inputStyle = {
    width: "250px",
    outline: "none",
    border: "2px solid #d6d6d6",
    borderRadius: "20px",
    padding: "5px 10px",
    fontSize: "14px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ margin: "5px", fontWeight: "bold" }}>{info}</span>
      <input
        style={inputStyle}
        type={type}
        onChange={(e) => {
          event((prev) => e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
