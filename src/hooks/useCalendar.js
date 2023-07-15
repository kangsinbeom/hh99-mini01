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
  
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const date = format(day, "d");
      const id = format(day, "yyyy-MM-dd");
      
      days.push({
        id,
        date,
      })
      day = addDays(day, 1);
    }
    rows.push(days)
    days = [];
  }
  dispatch(setCalendar(rows))
};

export default useCalendar;
