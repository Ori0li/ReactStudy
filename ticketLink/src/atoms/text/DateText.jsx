import BaseText from "./Base/BaseText";

const DateText = (props) => {
  const dateStyle = {
    fontSize: "40px",
    lineHeight: "40px",
    fontWeight: "300",
    letterSpacing: "-0.04em",
  };

  const { date } = props;
  return <BaseText text={date} css={dateStyle} />;
};

export default DateText;
