import DateText from "../atoms/text/DateText";
import DayText from "../atoms/text/DayText";
import TimeText from "../atoms/text/TimeText";

const Date = (props) => {
  const { date, day, time } = props;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <DateText date={date} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <DayText day={day} />
        <TimeText time={time} />
      </div>
    </div>
  );
};

export default Date;
