import BaseText from "./Base/BaseText";

const DayText = (props) => {
  const { day } = props;

  const obj = {
    일: "#dd6045" || "#62676c",
  };

  const dayStyle = {
    marginBottom: "2px",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "14px",
    color: obj[day],
    letterSpacing: "-0.04em",
  };

  return <BaseText text={"(" + day + ")"} css={dayStyle} />;
};

export default DayText;
