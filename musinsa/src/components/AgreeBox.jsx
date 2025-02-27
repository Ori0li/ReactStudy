import { useState } from "react";
import Button from "./Button";

const AgreeBox = () => {
  const [isCheck, setIsCheck] = useState([
    { text: "만 14세 이상입니다", checked: false, isNecessary: true },
    {
      text: "무신사, 무신사 스토에 이용 약관",
      checked: false,
      isNecessary: true,
    },
    {
      text: "마케팅 목적의 개인정보 수집 및 이용 동의",
      checked: false,
      isNecessary: false,
    },
    { text: "광고성 정보 수신 동의", checked: false, isNecessary: false },
  ]);

  const flexStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const isChecking = (i) => {
    setIsCheck((prev) => {
      const newArr = [...prev];
      newArr[i].checked = !newArr[i].checked;
      return newArr;
    });
  };

  const isNecessaring = () => {
    return isCheck.filter((v) => v.isNecessary).every((v) => v.checked);
  };

  return (
    <div style={flexStyle}>
      <section style={flexStyle}>
        {isCheck.map((v, i) => (
          <Agreement
            {...v}
            event={() => {
              isChecking(i);
            }}
          />
        ))}
      </section>
      <section>
        <Button text="동의하심네까" change={isNecessaring()} />
      </section>
    </div>
  );
};

export default AgreeBox;
