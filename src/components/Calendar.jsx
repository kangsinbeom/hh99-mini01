import styled from "styled-components";
import CalendarItem from "./CalendarItem";
import { format } from "date-fns";
import img from "../style/img/calender.png";
import Rarrow from "../style/img/arrowright.png";
import Larrow from "../style/img/arrowleft.png";
import List from "./List";
const Calendar = ({ currentMonth, month, prevMonth, nextMonth, calendars }) => {
  return (
    <>
      <CalendarWrapper>
        <Header>
          <div>
            <CalendarHeader>
              {format(currentMonth, "yyyy")} {month}월
            </CalendarHeader>
          </div>
          <div>
            <HeaderArrow src={Larrow} onClick={prevMonth}></HeaderArrow>
            <HeaderArrow src={Rarrow} onClick={nextMonth}></HeaderArrow>
          </div>
        </Header>
        <Days>
          {/* {dates.map((date, idx) => (
          <div key={idx}>{date}</div>
        ))} */}
        </Days>
        {/* <CalendarItem></CalendarItem> */}
        <CalendarBody>
          {calendars.map((days, inx) => (
            <CalendarRow key={inx}>
              {days.map((date) => (
                <CalendarItem
                  key={date.id}
                  value={date.date}
                  $isSun={date.isSun ? "true" : ""}
                  $isSat={date.isSat ? "true" : ""}
                  $isSameMonth={date.isSameMonth ? "true" : ""}
                >
                  {date.date}
                </CalendarItem>
              ))}
            </CalendarRow>
          ))}
          {/* {modalChecked && <Modal />} */}
        </CalendarBody>
        <CarendarImg src={img}></CarendarImg>
      </CalendarWrapper>
      <List />
    </>
  );
};

export default Calendar;

const CarendarImg = styled.img`
  position: absolute;
  margin: 25px 30px 0 0;
  width: 664px;
  height: 380px;
  z-index: -100;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 664px;
  max-height: 400px;
  gap: 15px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: space-between;
  align-items: center;
`;

const CalendarHeader = styled.h2`
  filter: blur(0.3px);
  margin-left: 10px;
  font-size: 20px;
`;

const HeaderArrow = styled.img`
  display: inline-flex;
  cursor: pointer;
  margin: 0 5px;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  &:hover {
    width: 40px;
    height: 40px;
  }
`;

const Days = styled.div`
  display: flex;
  width: 90%;
  height: 15px;
  margin: 0 5%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const CalendarBody = styled.div`
  /* border: 1px solid black; */
`;

const CalendarRow = styled.div`
  display: flex;
`;
