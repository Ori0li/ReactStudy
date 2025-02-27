const Button = ({ text, change }) => {
  const btnStyle = {
    width: "300px",
    backgroundColor: change ? "black" : "#e6e6e6",
    border: "none",
    padding: "10px",
    color: change ? "white" : "gray",
    borderRadius: "10px",
  };

  return (
    <button
      onClick={() => {
        change ? alert("통과") : alert("실패");
      }}
      style={btnStyle}
    >
      {text}
    </button>
  );
};

export default Button;
