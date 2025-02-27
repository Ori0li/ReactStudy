import { useState } from "react";

const InputForm = ({ type, placeholder, require, event }) => {
  const [inputValue, setInputValue] = useState("");
  const [requireMet, setRequireMet] = useState(require.map(() => false));

  const changeColor = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const newRequirMet = require.map((req) => {
      if (req.includes("6~20자 내외")) {
        return newValue.length >= 6 && newValue.length <= 20;
      } else if (req.includes("특수문자(!@$%)")) {
        return /[!@$%]/.test(newValue);
      } else if (req.includes("8~20자 내외")) {
        return newValue.length >= 8 && newValue.length <= 20;
      }
      return false;
    });

    setRequireMet(newRequirMet);

    event((prev) =>
      prev.map((input) =>
        input.placeholder === placeholder
          ? { ...input, check: newRequirMet.every((v) => v) }
          : input
      )
    );
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={changeColor}
      ></input>
      <div
        style={{
          fontSize: "13px",
          display: "flex",
          gap: "10px",
          color: "gray",
        }}
      >
        {require.map((v, i) => {
          return (
            <span
              style={{
                color: requireMet[i] ? "green" : "gray",
              }}
            >
              {...v}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default InputForm;
