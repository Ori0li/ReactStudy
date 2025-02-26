const Counter = (props) => {
  const { num, setNum, index } = props;

  const plus = () => {
    setNum((prev) => {
      const newArr = [...prev];
      newArr[index] += 1;
      return newArr;
    });
  };
  const minus = () => {
    setNum((prev) => {
      const newArr = [...prev];
      if (newArr[index] > 0) newArr[index] -= 1;
      return newArr;
    });
  };

  // const numStyle = () => (num >= 10 ? "blue" : "black");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={minus}>-</button>
      <div>{num[index]}</div>
      <button onClick={plus}> + </button>
    </div>
  );
};

export default Counter;
