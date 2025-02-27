import { useState } from "react";
import InputForm from "./components/InputForm";

function WhatThe() {
  const [value, setValue] = useState([
    {
      placeholder: "아이디를 입력해 주세요",
      type: "text",
      require: ["6~20자 내외"],
      check: false,
    },
    {
      placeholder: "비밀번호를 입력해 주세요",
      type: "password",
      require: ["특수문자(!@$%)", "8~20자 내외"],
      check: false,
    },
  ]);

  const allRequirementsMet = value.every((input) => input.check);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        {value.map((v, i) => {
          return <InputForm {...v} event={setValue} />;
        })}
      </div>
      <button
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: allRequirementsMet ? "green" : "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        disabled={!allRequirementsMet}
      >
        Submit
      </button>
    </>
  );
}

export default WhatThe;
