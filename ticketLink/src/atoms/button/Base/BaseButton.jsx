const BaseButton = (props) => {
  const { text } = props;

  const buttonStyle = {
    width: "fit-content",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "12px",
    fontWeight: "bold",
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default BaseButton;
