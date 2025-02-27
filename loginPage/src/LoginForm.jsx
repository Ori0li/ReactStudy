import { useState } from "react";
import Checker from "./components/Checker";
import Input from "./components/Input";
import Buttons from "./components/Buttons";

const LoginForm = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const idChange = (e) => {
    setIdValue((prev) => e.target.value);
  };
  const pwChange = (e) => {
    setPwValue((prev) => e.target.value);
  };

  const isLengthIDValid = 6 <= idValue.length && idValue.length <= 20;
  const isLengthPWValid = 8 <= pwValue.length && pwValue.length <= 20;
  const isSpecialValid = [..."!@#$%^&*"].some((v) => pwValue.includes(v));

  return (
    <div>
      <Input placeholder={"아이디를 입력하세요"} change={idChange}></Input>
      <Checker text="6~20 글자 내외" isChecked={isLengthIDValid} />
      <Input placeholder={"비밀번호를 입력하세요"} change={pwChange}></Input>
      <Checker text="8~20 글자 내외" isChecked={isLengthPWValid} />
      <Checker text="특수문자" isChecked={isSpecialValid} />
      <Buttons isValid={isLengthIDValid && isLengthPWValid && isSpecialValid} />
    </div>
  );
};

export default LoginForm;
