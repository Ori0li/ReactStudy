import { FaCheck } from "react-icons/fa";

const Checker = ({ text, isValid }) => {
  return (
    <span style={{ color: isValid ? "#56BA9F" : "#E0E0E0", fontSize: "14px" }}>
      <FaCheck /> {text}
    </span>
  );
};

export default Checker;
