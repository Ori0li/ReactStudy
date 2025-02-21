import PlaceText from "../atoms/PlaceText";
import Versus from "../atoms/Versus";

const VsInfo = (props) => {
  const { vsTeam, place } = props;
  return (
    <>
      <Versus vsTeam={vsTeam} />
      <PlaceText place={place} />
    </>
  );
};

export default VsInfo;
