const AgreeBtn = ({ text, change, error }) => {
  const btnStyle = {
    width: "450px",
    backgroundColor: change ? "black" : "lightgray",
    border: "none",
    padding: "10px",
    color: change ? "white" : "gray",
    borderRadius: "10px",
  };

  return (
    <button
      onClick={() => {
        change ? alert("동의하심") : alert(`${error} 선택좀`);
      }}
      style={btnStyle}
    >
      {text}
    </button>
  );
};

export default AgreeBtn;
