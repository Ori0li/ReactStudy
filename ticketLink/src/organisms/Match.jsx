import Date from "../molecules/Date";
import Reservation from "../molecules/Reservation";
import VsImg from "../molecules/VsImg";
import VsInfo from "../molecules/VsInfo";

const Match = (props) => {
  const { date, day, time, imgSrc, vsTeam, place, fullDate, openDate } = props;
  return (
    <>
      <Date date={date} day={day} time={time} />
      <VsImg imgSrc={imgSrc} />
      <VsInfo vsTeam={vsTeam} place={place} />
      <Reservation fullDate={fullDate} openDate={openDate} />
    </>
  );
};

export default Match;
