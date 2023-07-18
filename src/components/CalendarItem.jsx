import styled from "styled-components";
import Modal from "./Modal";
import { useQueryClient } from "react-query";
import { useEffect } from "react";

const CalendarItem = ({ calendars, onDateClick, modalChecked }) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("todos");
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <CalendarBody>
      {calendars?.map((days, inx) => (
        <CalendarRow key={inx}>
          {days?.map((date) => {
            // 캐시된 데이터에서 같은 date를 가진 항목 찾기
            const matchingTodo = data?.find((todo) => todo.date === date.id);

            return (
              <CalendarCell
                onClick={() => onDateClick(date.id)}
                key={date.id}
                value={date.date}
                $isSun={date.isSun ? "true" : ""}
                $isSat={date.isSat ? "true" : ""}
                $isSameMonth={date.isSameMonth ? "true" : ""}
                color={matchingTodo?.circleColor} // 같은 date를 가진 todo의 circleColor 할당
              >
                <div className="number">{date.date}</div>
                <div className="calendarCircle"></div>
              </CalendarCell>
            );
          })}
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
  justify-content: flex-start;
  width: 15%;
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
