import BaseText from "./Base/BaseText";

const PlaceText = (props) => {
  const { place } = props;

  const placeStyle = {
    marginTop: "5px",
    fontSize: "13px",
    lineHeight: "20px",
    textOverflow: "ellipsis",
    wordWrap: "break-word",
  };
  return <BaseText text={place} css={placeStyle} />;
};

export default PlaceText;
