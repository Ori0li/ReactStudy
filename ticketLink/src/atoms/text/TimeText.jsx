import BaseText from "./Base/BaseText";

const TimeText = (props) => {
  const { time } = props;

  const timeStyle = {
    fontSize: "17px",
    lineHeight: "18px",
    color: "#62676c",
    letterSpacing: "-0.04em",
  };

  return <BaseText text={time} css={timeStyle} />;
};

export default TimeText;
