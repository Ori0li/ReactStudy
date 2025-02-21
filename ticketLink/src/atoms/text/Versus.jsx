import BaseText from "./Base/BaseText";

const Versus = (props) => {
  const { vsTeam1, vsTeam2 } = props;

  const vsStyle = {
    fontWeight: "bold",
    textAlign: "center",
  };

  console.log(vsTeam1);
  return <BaseText text={vsTeam1 + " vs " + vsTeam2} css={vsStyle} />;
};

export default Versus;
