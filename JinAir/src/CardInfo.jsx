const CardInfo = (props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        padding: "20px",
        borderBottom: "1px solid black",
      }}
    >
      <span>{props.rate}</span>
      <span>{props.price ? "KRW" + props.price : "예약없음"}</span>
      <span>{props.sit}</span>
    </section>
  );
};

export default CardInfo;
