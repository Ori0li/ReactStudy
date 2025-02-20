const CardInfo = (props) => {
  return (
    <section>
      <span>{props.rate}</span>
      <span>{props.price ? "KRW" + props.price : "예약없음"}</span>
      <span>{props.sit}</span>
    </section>
  );
};

export default CardInfo;
