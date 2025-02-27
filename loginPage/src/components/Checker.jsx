import { FaCheck } from "react-icons/fa";
const Checker = (props) => {
  const { text, isChecked } = props;
  return (
    <span style={{ color: isChecked ? "green" : "gray" }}>
      <FaCheck />
      {text}
    </span>
  );
};

export default Checker;
