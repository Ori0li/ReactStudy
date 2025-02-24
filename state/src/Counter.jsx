import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const plus = () => {
    setNum((prev) => prev + 1);
  };
  const minus = () => {
    setNum((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const numStyle = () => (num >= 10 ? "blue" : "black");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={minus}> - </button>
      <div style={{ color: numStyle() }}>{num}</div>
      <button onClick={plus}> + </button>
    </div>
  );
};

export default Counter;
