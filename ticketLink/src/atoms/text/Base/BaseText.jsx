const BaseText = (props) => {
  const { text, css } = props;
  return <span style={css}>{text}</span>;
};

export default BaseText;
