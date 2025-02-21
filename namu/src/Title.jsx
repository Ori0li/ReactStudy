const Title = (props) => {
  const { title } = props;

  const titleStyle = {
    width: "80px",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    borderTop: "1px solid white",
  };

  return (
    <>
      <div style={titleStyle}>{title}</div>
    </>
  );
};

export default Title;
