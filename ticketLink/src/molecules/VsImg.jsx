import BaseImg from "../atoms/image/BaseImg";

const VsImg = (props) => {
  const { imgSrc } = props;
  return (
    <>
      <BaseImg imgSrc={imgSrc} />
      <BaseImg imgSrc={imgSrc} />
    </>
  );
};

export default VsImg;
