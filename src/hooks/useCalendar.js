import {
  format,
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
} from "date-fns";
import { useDispatch } from "react-redux";
import { setCalendar } from "../redux/modules/calendar";

const useCalendar = (currentMonth) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dispatch = useDispatch();

  const rows = [];
  let day = startDate;

  while (rows.length < 6) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      const date = format(day, "d");
      const id = format(day, "yyyy-MM-dd");
      const isSun = day.getDay() === 0;
      const isSat = day.getDay() === 6;
      const isSameMonthValue = isSameMonth(day, currentMonth);

      week.push({
        id,
        date,
        isSun,
        isSat,
        isSameMonth: isSameMonthValue,
      });

      day = addDays(day, 1);
    }

    rows.push(week);
  }

  dispatch(setCalendar(rows));
};

export default useCalendar;
