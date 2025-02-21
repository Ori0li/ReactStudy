import PlaceText from "../atoms/text/PlaceText";
import Versus from "../atoms/text/Versus";

const VsInfo = (props) => {
  return (
    <>
      <Versus {...props} />
      <PlaceText {...props} />
    </>
  );
};

export default VsInfo;
