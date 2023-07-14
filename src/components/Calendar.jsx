import React from "react";
import styled from "styled-components";
import CalendarItem from "./CalendarItem";

const Calendar = () => {
  return (
    <CalendarWrapper>
      <CalendarItem></CalendarItem>
    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  width: 80%;
  height: 400px;
  gap: 15px;
`;
