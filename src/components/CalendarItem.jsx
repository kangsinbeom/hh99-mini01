import React from "react";
import styled from "styled-components";
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
} from "date-fns";

const CalendarItem = ({ currentMonth, selectedDate, onDateClick }) => {
  // 현재 월의 시작일과 종료일 계산
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);

  // 현재 월의 첫 주의 시작일과 마지막 주의 종료일 계산
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = []; // 주(row)를 저장하는 배열
  let days = []; // 날짜(cell)를 저장하는 배열
  let day = startDate; // 현재 날짜
  let formattedDate = ""; // 형식이 적용된 날짜 문자열

  // 주 단위로 반복
  while (day <= endDate) {
    // 일주일(7일) 동안의 날짜(cell) 생성
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d"); // 형식이 적용된 날짜 문자열 생성
      const cloneDay = day; // 현재 변수를 복제하여 함수외부에서도 사용가능 하게함.

      // 날짜(cell) 요소 생성하여 배열에 추가
      days.push(
        <CalendarCell
          key={day.toString()} // 날짜를 고유한 키로 사용
          onClick={() => onDateClick(parse(cloneDay))} // 클릭 이벤트 핸들러 지정
        >
          <span>
            {formattedDate} {/* 형식이 적용된 날짜 문자열 출력 */}
          </span>
        </CalendarCell>
      );

      day = addDays(day, 1); // 다음 날짜로 이동
    }

    // 한 주(row)를 저장하는 배열에 날짜(cell) 배열 추가
    rows.push(<CalendarRow key={day.toString()}>{days}</CalendarRow>);

    days = []; // 날짜(cell) 배열 초기화
  }

  return <CalendarBody>{rows}</CalendarBody>; // 전체 달력(body) 컴포넌트 반환
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
