const Button = (props) => {
  const { isValid } = props;
  return (
    <>
      <button
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          backgroundColor: isValid ? "black" : "#efefef",
          color: isValid ? "white" : "#e6e6e6",
        }}
      >
        가입하기
      </button>
    </>
  );
};

export default Button;
