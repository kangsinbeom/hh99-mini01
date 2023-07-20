import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import img from "../assets/images/calender.png";
import Rarrow from "../assets/images/arrowright.png";
import Larrow from "../assets/images/arrowleft.png";
import ListContainor from "../containor/ListContainor";
import CalendarItemContainor from "../containor/CalendarItemContainor";

const Calendar = ({ currentMonth, month, prevMonth, nextMonth }) => {
  return (
    <Layout>
      <CalendarWrapper>
        <Header>
          <div>
            <CalendarHeader>
              {format(currentMonth, "yyyy")}년 {format(currentMonth, "M")}월
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
        {/* <CalendarItem currentMonth={currentMonth} /> */}
        <CalendarItemContainor />
        <CarendarImg src={img}></CarendarImg>
      </CalendarWrapper>
      <ListContainor month={month} />
    </Layout>
  );
};

export default Calendar;

const CarendarImg = styled.img`
  position: absolute;
  margin: 25px 30px 0 0;
  width: 664px;
  height: 380px;
  z-index: -9999;
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
  filter: blur(0.5px);
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
const Layout = styled.div`
  @media (max-width: 900px) {
    margin: auto;
  }
  @media (min-width: 901px) {
    display: flex;
  }
`;
