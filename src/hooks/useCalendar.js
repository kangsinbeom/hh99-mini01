import {
  format,
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { useDispatch } from "react-redux";
import {setCalendar} from "../redux/modules/calendar"

const useCalendar = (currentMonth) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dispatch = useDispatch();

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      days.push({
        id: day,
        date: formattedDate
      })
      day = addDays(day, 1);
    }
    rows.push(days)
    days = [];
  }
  return dispatch(setCalendar(rows));
};

export default useCalendar;
