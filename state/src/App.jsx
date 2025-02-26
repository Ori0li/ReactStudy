import { useState } from "react";
import Counter from "./Counter";
import Total from "./Total";
import HelloButton from "./HelloButton";
import CounterTwo from "./CounterTwo";

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   //   const change = (e) => {
//   //     setInputValue((prev) => e.target.value);
//   //   };

//   return (
//     <div style={{ display: "flex", gap: "20px" }}>
//       <Input type="text" info="Email" event={setInputValue} />
//       <Length length={inputValue.length} />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [total, setTotal] = useState(Array(100).fill(0));

//   return (
//     <>
//       <Counter num={total} setNum={setTotal} index={0} />
//       <Counter num={total} setNum={setTotal} index={1} />
//       <Counter num={total} setNum={setTotal} index={2} />
//       <Counter num={total} setNum={setTotal} index={3} />

//       <Total cnt={total.reduce((a, c) => a + c)} />
//     </>
//   );
// }

// export default App;

function App() {
  const [numArr, setNumArr] = useState(Array(10).fill(0));

  const plus = (i) => {
    setNumArr((prev) => {
      const newArr = [...prev];
      newArr[i] += 1;
      return newArr;
    });
  };

  const minus = (i) => {
    setNumArr((prev) => {
      const newArr = [...prev];
      if (newArr[i] > 0) newArr[i] -= 1;
      return newArr;
    });
  };

  return (
    <>
      {numArr.map((v, i) => (
        <CounterTwo
          num={v}
          plus={() => {
            plus(i);
          }}
          minus={() => {
            minus(i);
          }}
        />
      ))}
      <Total cnt={numArr.reduce((a, c) => a + c)}></Total>
    </>
  );
}

export default App;
