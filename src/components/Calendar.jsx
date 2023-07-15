import React, { useState } from "react";
import styled from "styled-components";
import CalendarItem from "./CalendarItem";
import { format, addMonths, subMonths } from "date-fns";
import useCalendar from "../hooks/useCalendar";
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dates = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  useCalendar(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // onClick시 day 정보 redux로 전달 및 modal open/close

  return (
    <CalendarWrapper>
      <Header>
        <div>
          <span>
            <span className="text month"> {format(currentMonth, "yyyy")} </span>
            {format(currentMonth, "M")}월
          </span>
        </div>
        <div>
          <HeaderArrow onClick={prevMonth}>⬅️</HeaderArrow>
          <HeaderArrow onClick={nextMonth}>➡️</HeaderArrow>
        </div>
      </Header>
      <Days>
        {dates.map((date, idx) => (
          <div key={idx}>{date}</div>
        ))}
      </Days>
      <CalendarItem></CalendarItem>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-height: 400px;
  gap: 15px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  align-items: center;
`;

const HeaderArrow = styled.div`
  display: inline-flex;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 3px;

  &:hover {
    background-color: gray;
  }
`;

const Days = styled.div`
  display: flex;
  width: 90%;
  height: 5%;
  margin: 0 5%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
