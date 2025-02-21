import BaseButton from "../atoms/button/Base/BaseButton";

const Reservation = (props) => {
  const { fullDate, openDate } = props;

  const resStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    backgroundColor: "#e6e6e6",
    borderRadius: "6px",
    padding: "10px 15px",
  };

  return (
    <div style={resStyle}>
      <BaseButton text={fullDate} />
      <BaseButton text={openDate} />
    </div>
  );
};

export default Reservation;
