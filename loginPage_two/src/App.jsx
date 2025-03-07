import { useState } from "react";
import InputCheckers from "./container/InputCheckers";
import Button from "./components/Button";
function App() {
  const checkLength = (value, min, max) =>
    min <= value.length && value.length <= max;
  const hasSpecial = (value) => [..."!@$%^*_+"].some((v) => value.includes(v));
  const hasAt = (value) => value.includes("@");

  const [inputs, setInputs] = useState([
    {
      placeholder: "아이디 입력하세요",
      inputChange: (e, i) => {
        setInputs((prev) => {
          const newArr = [...prev];
          newArr[i].checkers.map((v) => {
            v.isValid = v.validator(e.target.value);
            return { ...v, isValid: v.validator(e.target.value) };
          });
          return newArr;
        });
      },
      checkers: [
        {
          text: "6~20글자 입력",
          isValid: false,
          validator: (value) => checkLength(value, 6, 20),
        },
      ],
    },
    {
      placeholder: "비밀번호 입력하세요",
      inputChange: (e, i) => {
        setInputs((prev) => {
          const newArr = [...prev];
          newArr[i].checkers.map((v) => {
            v.isValid = v.validator(e.target.value);
            return { ...v };
          });
          return newArr;
        });
      },
      checkers: [
        {
          text: "8~20글자 입력",
          isValid: false,
          validator: (value) => checkLength(value, 8, 20),
        },
        {
          text: "특수문자 (!@$%^*_+~)",
          isValid: false,
          validator: (value) => hasSpecial(value),
        },
      ],
    },
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {inputs.map((v, i) => (
        <InputCheckers {...v} num={i} />
      ))}
      <Button
        isValid={inputs.every((v) => v.checkers.every((v1) => v1.isValid))}
      />
    </div>
  );
}

export default App;
