import BaseText from "./text/BaseText";

const DateText = (props) => {
  const { date } = props;
  return <BaseText text={date} />;
};

export default DateText;
