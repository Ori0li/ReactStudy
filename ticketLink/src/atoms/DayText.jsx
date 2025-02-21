import BaseText from "./text/BaseText";

const DayText = (props) => {
  const { day } = props;
  return <BaseText text={"(" + day + ")"} />;
};

export default DayText;
