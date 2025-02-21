import BaseText from "../text/BaseText";

const BaseButton = (props) => {
  const { text } = props;
  return <button>{text}</button>;
};

export default BaseButton;
