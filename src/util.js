import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let dayCount = 0 - firstDayOfTheMonth;

  const datesMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      dayCount++;
      return dayjs(new Date(year, month, dayCount));
    });
  });

  return datesMatrix;
};
