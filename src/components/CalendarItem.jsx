import React from "react";
import styled from "styled-components";
import useCalendar from "../hooks/useCalendar";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  format,
  addDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isSameDay,
  parse,
  daysInWeek,
} from "date-fns";

const CalendarItem = ({ currentMonth, onDateClick }) => {
  useCalendar(currentMonth);
  const rows = useSelector((state) => state.calendar);
  console.log(rows);
  const dispatch = useDispatch();
  const { modalChecked } = useSelector((state) => state.modal);

  return (
    <CalendarBody>
      {rows.map((days, inx) => (
        <CalendarRow key={inx}>
          {days.map((date) => (
            <CalendarCell onClick={onDateClick} key={date.id} value={date.date}>
              {date.date}
            </CalendarCell>
          ))}
        </CalendarRow>
      ))}
      {modalChecked && <Modal />}
    </CalendarBody>
  );
};

export default CalendarItem;

const CalendarBody = styled.div`
  border: 1px solid black;
`;

const CalendarRow = styled.div`
  display: flex;
`;

const CalendarCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 63px;
  border: 1px solid #ccc;
`;
