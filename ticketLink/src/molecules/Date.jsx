import DateText from "../atoms/DateText";
import DayText from "../atoms/DayText";
import TimeText from "../atoms/TimeText";

const Date = (props) => {
  const { date, day, time } = props;

  return (
    <>
      <DateText date={date} />
      <DayText day={day} />
      <TimeText time={time} />
    </>
  );
};

export default Date;
