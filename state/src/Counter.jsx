import { useState } from "react";

const Counter = (props) => {
  const { num, setNum, index } = props;

  const plus = () => {
    setNum((prev) => {
      const newArray = [...prev];
      newArray[index] += 1;
      return newArray;
    });
  };
  const minus = () => {
    setNum((prev) => {
      const newArray = [...prev];
      if (newArray[index] > 0) newArray[index] -= 1;
      return newArray;
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
