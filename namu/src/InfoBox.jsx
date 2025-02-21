import Info from "./Info";
import Title from "./Title";

const InfoBox = (props) => {
  const { title, infos } = props;
  return (
    <div style={{ display: "flex" }}>
      <Title title={title} />
      <Info infos={infos} />
    </div>
  );
};

export default InfoBox;
