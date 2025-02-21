import BaseText from "./text/BaseText";

const PlaceText = (props) => {
  const { place } = props;
  return <BaseText text={place} />;
};

export default PlaceText;
