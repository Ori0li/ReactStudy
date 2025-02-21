import BaseText from "./text/BaseText";

const TimeText = (props) => {
  const { time } = props;
  return <BaseText text={time} />;
};

export default TimeText;
