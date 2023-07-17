import styled from "styled-components";
import Modal from "./Modal";
const CalendarItem = ({ modalChecked, onDateClick }) => {
  return <CalendarCell></CalendarCell>;
};

export default CalendarItem;

const CalendarCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 56px;
  font-size: 24px;
  filter: blur(0.5px);

  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  color: ${(props) =>
    props.$isSun
      ? `rgba(255, 0, 0, ${props.$isSameMonth ? 1 : 0.3})`
      : props.$isSat
      ? `rgba(0, 0, 255, ${props.$isSameMonth ? 1 : 0.3})`
      : props.$isSameMonth
      ? "black"
      : "rgba(0, 0, 0, 0.3)"};
`;
