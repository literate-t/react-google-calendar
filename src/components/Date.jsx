import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const Date = ({ date, rowIdx }) => {
  const [dateEvents, setDateEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (event) => dayjs(event.day).format("DD-MM-YY") === date.format("DD-MM-YY")
    );

    setDateEvents(events);
  }, [filteredEvents, date]);

  const getTodayClass = () => {
    return date.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  return (
    <div className="flex flex-col border border-gray-200">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{date.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getTodayClass()}`}>
          {date.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(date);
          setShowEventModal(true);
          console.log("b");
        }}
      >
        {dateEvents.map((event, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedEvent(event);
              console.log("a");
            }}
            className={`bg-${event.label}-400 p-1 mr-3 text-gray-300 text-sm rounded mb-1 truncate`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Date;
