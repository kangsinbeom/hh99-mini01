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
  return (
    <ListWrapper>
      {data?.map((item) => {
        return (
          <ListItem
            key={item.id}
            start={item.start}
            end={item.end}
            eventName={item.eventName}
          />
        );
      })}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
