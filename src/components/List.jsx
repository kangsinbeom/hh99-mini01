import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { useQuery } from "react-query";
import { getTodos } from "../apis/api";

const List = () => {
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
          <ListItem key={item.id} time={item.time} eventName={item.eventName} />
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
