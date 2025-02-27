import { useState } from "react";
import CheckBox from "./components/CheckBox";
import AgreeBtn from "./components/AgreeBtn";

function App() {
  const [isCheck, setIsCheck] = useState([
    { text: "만 14세 이상입니다", checked: false, isNecessary: true },
    {
      text: "무신사, 무신사 스토어에 이용 약관",
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

  const handleCheck = (i) => {
    setIsCheck((prev) => {
      const newArr = [...prev];
      newArr[i].checked = !newArr[i].checked;
      return newArr;
    });
  };

  const allNecessaryChecked = () => {
    return isCheck.filter((v) => v.isNecessary).every((v) => v.checked);
  };

  const checkPlz = () => {
    return isCheck
      .filter((v) => v.isNecessary && !v.checked)
      .map((v) => v.text)
      .join(" / ");
  };

  return (
    <div style={flexStyle}>
      <section style={{ flexStyle, padding: "50px" }}>
        {isCheck.map((v, i) => {
          return (
            <>
              <CheckBox
                {...v}
                event={() => {
                  handleCheck(i);
                }}
              />
            </>
          );
        })}
      </section>
      <section>
        <AgreeBtn
          text="동의하고 본인인증하기"
          change={allNecessaryChecked()}
          error={checkPlz()}
        />
      </section>
    </div>
  );
}

export default App;
