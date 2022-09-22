import { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonthIndex: 0,
  setSmallCalendarMonthIndex: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModel: false,
  setShowEventModal: () => {},
  dispatchCalenderEvents: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: null,
  updateLabel: () => {},
  filteredEvents: [],
});

export default GlobalContext;
