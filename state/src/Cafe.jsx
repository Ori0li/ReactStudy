import { useState } from "react";

const Cafe = () => {
  const coffee = [
    { name: "바닐라크림콜드브루", price: "5500" },
    { name: "아메리카노", price: "2000" },
    { name: "프라푸치노", price: "3500" },
    { name: "화이트초코", price: "4500" },
    { name: "카페라떼", price: "4000" },
  ];

  const [num, setNum] = useState(0);

  const nextMenu = () => {
    setNum((prev) => {
      if (prev == coffee.length - 1) {
        alert("마지막 메뉴 입니다");
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const prevMenu = () => {
    setNum((prev) => {
      if (prev == 0) {
        alert("처음 메뉴 입니다");
        return prev;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div>
      <button onClick={prevMenu}>이전메뉴</button>
      <span>메뉴 이름: {coffee[num].name}</span>
      <span>메뉴 가격:{coffee[num].price}</span>
      <button onClick={nextMenu}>다음메뉴</button>
    </div>
  );
};

export default Cafe;
