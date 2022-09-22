import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Calendar from "./components/Calendar";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
  const [currentCalendar, setCurrentCalendar] = useState(getMonth());
  const { monthIndex, smallCalendarMonthIndex, setMonthIndex, showEventModel } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentCalendar(getMonth(monthIndex));
  }, [monthIndex, setCurrentCalendar]);

  useEffect(() => {
    if (smallCalendarMonthIndex) {
      setMonthIndex(smallCalendarMonthIndex);
    }
  }, [smallCalendarMonthIndex, setMonthIndex]);

  return (
    <>
      {showEventModel && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Calendar calendar={currentCalendar} />
        </div>
      </div>
    </>
  );
}

export default App;
