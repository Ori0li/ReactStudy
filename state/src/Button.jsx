const Button = (props) => {
  const { text, output } = props;

  const outputMethod = () => {
    if (output === "console") {
      console.log(text);
    } else if (output === "alert") {
      alert(text);
    }
  };

  return <button onClick={outputMethod}>아악</button>;
};

export default Button;
