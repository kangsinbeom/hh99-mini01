import styled from "styled-components";
import ModalContainor from "../containor/ModalContainor";

const CalendarItem = ({ calendars, onDateClick, modalChecked, data }) => {
  return (
    <CalendarBody>
      {calendars?.map((days, inx) => (
        <CalendarRow key={inx}>
          {days?.map((date) => {
            const matchingTodo = data?.find((todo) => todo.date === date.id);
            return (
              <CalendarCell
                onClick={() => onDateClick(date.id)}
                key={date.id}
                value={date.date}
                $isSun={date.isSun ? "true" : ""}
                $isSat={date.isSat ? "true" : ""}
                $isSameMonth={date.isSameMonth ? "true" : ""}
                color={matchingTodo?.color}
              >
                <div className="number">{date.date}</div>
                <div className="calendarCircle"></div>
              </CalendarCell>
            );
          })}
        </CalendarRow>
      ))}
      {modalChecked && <ModalContainor />}
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
  justify-content: flex-start;
  width: 100px;
  height: 56px;
  font-size: 24px;
  margin-left: 13px;
  filter: blur(0.5px);
  transition: font-size 0.2s ease-in-out;
  /* border: 1px solid #ccc; */
  &:hover {
    cursor: pointer;
    font-size: 28px;
  }
  color: ${(props) =>
    props.$isSun
      ? `rgba(255, 0, 0, ${props.$isSameMonth ? 1 : 0.3})`
      : props.$isSat
      ? `rgba(0, 0, 255, ${props.$isSameMonth ? 1 : 0.3})`
      : props.$isSameMonth
      ? "black"
      : "rgba(0, 0, 0, 0.3)"};

  .calendarCircle {
    width: 24px;
    height: 24px;
    margin-top: 4px;
    border-left: 3px solid ${({ color }) => color || "white"};
    position: absolute;
    z-index: -1;
  }

  .number {
    margin-left: 4px;
    margin-top: 4px;
  }
`;
