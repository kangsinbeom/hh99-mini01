import React, { useState } from "react";
import styled from "styled-components";
import CalendarItem from "./CalendarItem";
import logo from "../style/img/calender.png";
import { format, addMonths, subMonths } from "date-fns";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
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
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  for (let i = 0; i < 7; i++) {
    days.push(<div key={i}>{date[i]}</div>);
  }

  return <Days>{days}</Days>;
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  return (
    <CalendarWrapper>
      {/* <CalendarImg src={logo}></CalendarImg> */}
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      ></RenderHeader>
      <RenderDays></RenderDays>
      <CalendarItem
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      ></CalendarItem>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarImg = styled.img`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 400px;
  gap: 15px;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 400px;
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
