const Button = () => {
  const isIce = false;

  const makeHi = () => `하윙`;

  return (
    <button
      className={isIce ? "ice" : "fire"}
      style={{ color: isIce ? "blue" : "red" }}
    >
      {isIce ? "얼음" : makeHi()}
    </button>
  );
};

export default Button;
