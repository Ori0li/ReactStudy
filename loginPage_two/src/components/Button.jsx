const Button = ({ isValid }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: isValid ? "black" : "gray",
          color: isValid ? "white" : "#efefef",
          width: "300px",
          padding: "10px 0",
          textAlign: "center",
          border: "none",
          borderRadius: "30px",
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Button;
