import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal } from "../redux/modules/modal";
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

const CalendarItem = () => {
  const calendars = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const { modalChecked } = useSelector((state) => state.modal);
  const onDateClick = (id) => {
    dispatch(toogleModal());
    console.log(id);
  };

  return (
    <CalendarBody>
      {calendars.map((days, inx) => (
        <CalendarRow key={inx}>
          {days.map((date, idx) => (
            <CalendarCell
              onClick={() => onDateClick(date.id)}
              key={date.id}
              value={date.date}
            >
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
