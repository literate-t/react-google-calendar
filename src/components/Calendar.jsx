import React from "react";
import Date from "./Date";
const Calendar = ({ calendar }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {calendar.map((row, idx) => (
        <React.Fragment key={idx}>
          {row.map((date, index) => (
            <Date key={index} date={date} rowIdx={idx} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Calendar;
