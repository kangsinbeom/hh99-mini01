import React from "react";
import styled from "styled-components";
import CalendarItem from "./CalendarItem";
import logo from "../style/img/calender.png";

const Calendar = () => {
  return <CalendarWrapper src={logo}></CalendarWrapper>;
};

export default Calendar;

const CalendarWrapper = styled.img`
  display: block;
  justify-content: center;
  width: 80%;
  height: 400px;
  gap: 15px;
`;
