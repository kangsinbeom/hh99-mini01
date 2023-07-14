import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getTodos } from "../apis/api";

const ListItem = () => {
  const { isLoading, isError, data, error } = useQuery("todos", getTodos);
  console.log(data);
  if (isLoading) {
    <p>Loading</p>;
  }
  if (isError) {
    <p>{error}</p>;
  }
  return (
    <>
      {data?.map((item) => {
        return (
          <ListItmeBox key={item.id}>
            <div>{item.time}</div>
            <div>{item.eventname}</div>
          </ListItmeBox>
        );
      })}
    </>
  );
};

export default ListItem;

const ListItmeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  font-size: 16px;
  transition: font-size 0.5s ease-in-out, background-color 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    font-size: 18px;
    background-color: #dad8d8;
  }
`;
