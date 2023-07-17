import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { useQuery } from "react-query";
import { getTodos } from "../apis/api";

const List = ({ month }) => {
  // api요청시 params에 month 넣어서 그것에 해당하는 값만 가져오기
  const { isLoading, isError, data, error } = useQuery("todos", getTodos);

  if (isLoading) {
    <p>Loading</p>;
  }
  if (isError) {
    <p>{error}</p>;
  }

  const filteredData = data?.filter((item) => {
    const itemMonth = item.date?.slice(5, 7);
    return itemMonth === month.toString();
  });

  return (
    <ListWrapper>
      {filteredData?.map((item) => (
        <ListItem
          key={item.id}
          time={item.time}
          eventName={item.eventName}
          date={item.date}
        />
      ))}
      {console.log({ month })}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  display: grid;
  /* border: 1px solid black; */
  width: 20%;
  margin-top: 60px;
  margin-left: 40px;
  max-height: 310px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 15px;
`;
