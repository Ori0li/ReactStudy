const HelloButton = ({ num }) => {
  const number = (num) => {
    console.log(`누르신 버튼은 ${num} 입니다`);
  };

  return (
    <button
      onClick={() => {
        number(num);
      }}
    >
      {num}
    </button>
  );
};

export default HelloButton;
