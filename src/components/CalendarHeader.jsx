import dayjs from "dayjs";
import { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";

const CalendarHeader = () => {
  const { setMonthIndex, monthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex((index) => index - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex((index) => index + 1);
  };

  // const handleToday = () => {
  //   setMonthIndex(dayjs().month());
  // };
  // 스몰 캘린더에도 영향을 주기 위해
  // 강제로 리렌더를 발생시키는 트릭
  const handleToday = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold"> Calendar</h1>
      <button onClick={handleToday} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-symbols-rounded cursor-pointer text-gray-600 mx-2">
          arrow_back
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-symbols-rounded cursor-pointer text-gray-600 mx-2">
          arrow_forward
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-600 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalendarHeader;
