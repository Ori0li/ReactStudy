import { useState } from "react";

const Chicken = () => {
  const chicken = ["🥚", "🐣", "🐥", "🐓", "🍗"];
  const [emoji, setEmoji] = useState(chicken[0]);

  const evolution = () => {
    setEmoji((prev) => {
      const currentIndex = chicken.indexOf(prev);
      return currentIndex == chicken.length - 1
        ? prev
        : chicken[(currentIndex + 1) % chicken.length];
    });
  };

  const degeneration = () => {
    setEmoji((prev) => {
      const currentIndex = chicken.indexOf(prev);
      return currentIndex == 0
        ? prev
        : chicken[(currentIndex - 1 + chicken.length) % chicken.length];
    });
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={degeneration}>퇴화</button>
      <div>{emoji}</div>
      <button onClick={evolution}>진화</button>
    </div>
  );
};

export default Chicken;
