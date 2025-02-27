import Checker from "../components/Checker";
import Input from "../components/Input";

const InputCheckers = (props) => {
  const { inputChange, placeholder, checkers, num } = props;

  return (
    <>
      <Input num={num} change={inputChange} placeholder={placeholder} />
      {checkers.map((v) => (
        <Checker text={v.text} isValid={v.isValid} />
      ))}
    </>
  );
};

export default InputCheckers;
