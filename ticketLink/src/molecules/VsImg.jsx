import BaseImg from "../atoms/image/Base/BaseImg";

const VsImg = (props) => {
  const { imgSrc1, imgSrc2 } = props;
  return (
    <div
      style={{
        fontSize: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#62676c",
      }}
    >
      <BaseImg imgSrc={imgSrc1} />
      VS
      <BaseImg imgSrc={imgSrc2} />
    </div>
  );
};

export default VsImg;
