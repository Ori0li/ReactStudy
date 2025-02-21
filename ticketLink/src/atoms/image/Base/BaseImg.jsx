const BaseImg = (props) => {
  const imgStyle = {
    width: "100px",
    height: "100px",
  };

  const { imgSrc } = props;
  return <img src={imgSrc} alt="" style={imgStyle} />;
};

export default BaseImg;
