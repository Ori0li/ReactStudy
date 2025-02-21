import BaseText from "./text/BaseText";

const FullDateText = (props) => {
  const { fullDate } = props;
  return <BaseText text={fullDate} />;
};

export default FullDateText;
