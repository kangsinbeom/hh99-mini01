import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import useCalendar from "../hooks/useCalendar";
import Calendar from "../components/Calendar";

const CalendarContainor = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const month = format(currentMonth, "yyyy-MM");
  useCalendar(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <Calendar
      currentMonth={currentMonth}
      month={month}
      prevMonth={prevMonth}
      nextMonth={nextMonth}
    />
  );
};

export default CalendarContainor;
