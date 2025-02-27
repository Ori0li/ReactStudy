import { useState } from "react";
import Price from "./components/Price";
import Counter from "./components/Counter";

function App() {
  const [arr, setArr] = useState([
    { price: 10000, cnt: 1, maxCount: 12 },
    { price: 25000, cnt: 1, maxCount: 1 },
    { price: 30000, cnt: 1, maxCount: 5 },
  ]);

  const plus = (i) => {
    setArr((prev) => {
      const newArr = [...prev];
      newArr[i].cnt =
        newArr[i].cnt == newArr[i].maxCount
          ? newArr[i].maxCount
          : (newArr[i].cnt += 1);
      return newArr;
    });
  };

  const minus = (i) => {
    setArr((prev) => {
      const newArr = [...prev];
      if (newArr[i].cnt > 1) newArr[i].cnt -= 1;
      return newArr;
    });
  };

  const reset = () =>
    setArr((prev) => [...prev].map((v) => ({ ...v, cnt: 1 })));

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      {arr.map((v, i) => {
        return (
          <div
            style={{
              width: "fit-content",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              border: "1px solid black",
              borderRadius: "20px",
            }}
          >
            <Price price={v.price} cnt={v.cnt} />
            <Counter
              cnt={v.cnt}
              maxCount={v.maxCount}
              plus={() => {
                plus(i);
              }}
              minus={() => {
                minus(i);
              }}
            />
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <span style={{ fontSize: "30px" }}>
          Total : {arr.map((v) => v.price * v.cnt).reduce((a, c) => a + c)}
        </span>
        <button
          style={{
            width: "fit-content",
            padding: "10px 20px",
            border: "none",
            borderRadius: "9999px",
            fontSize: "20px",
            backgroundColor: "crimson",
          }}
          onClick={reset}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
