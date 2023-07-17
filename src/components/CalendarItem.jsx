import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal, setModalId } from "../redux/modules/modal";

const CalendarItem = () => {
  const calendars = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const { modalChecked } = useSelector((state) => state.modal);
  const onDateClick = (id) => {
    dispatch(toogleModal());
    dispatch(setModalId(id));
  };

  return (
    <CalendarBody>
      {calendars.map((days, inx) => (
        <CalendarRow key={inx}>
          {days.map((date) => (
            <CalendarCell
              onClick={() => onDateClick(date.id)}
              key={date.id}
              value={date.date}
              $isSun={date.isSun ? "true" : ""}
              $isSat={date.isSat ? "true" : ""}
              $isSameMonth={date.isSameMonth ? "true" : ""}
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
  /* border: 1px solid black; */
`;

const CalendarRow = styled.div`
  display: flex;
`;

const CalendarCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 56px;
  font-size: 24px;
  filter: blur(0.5px);
  transform: skewX(-5deg);
  /* border: 1px solid #ccc; */
  color: ${(props) =>
    props.$isSun
      ? `rgba(255, 0, 0, ${props.$isSameMonth ? 1 : 0.3})`
      : props.$isSat
      ? `rgba(0, 0, 255, ${props.$isSameMonth ? 1 : 0.3})`
      : props.$isSameMonth
      ? "black"
      : "rgba(0, 0, 0, 0.3)"};
`;
