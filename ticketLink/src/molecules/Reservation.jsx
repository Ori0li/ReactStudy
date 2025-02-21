import BaseButton from "../atoms/button/BaseButton";

const Reservation = (props) => {
  const { fullDate, openDate } = props;
  return (
    <>
      <BaseButton text={fullDate} />
      <BaseButton text={openDate} />
    </>
  );
};

export default Reservation;
