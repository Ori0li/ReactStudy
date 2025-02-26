const CounterTwo = ({ num, plus, minus }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={minus}>-</button>
      <div>{num}</div>
      <button onClick={plus}> + </button>
    </div>
  );
};
export default CounterTwo;
