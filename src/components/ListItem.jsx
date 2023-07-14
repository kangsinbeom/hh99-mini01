import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const ListItem = () => {
  const [todos, setTodos] = useState([]);

  //json값을 조회하는 용도
  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos");
    console.log(data);
    setTodos(data);
  };

  //처음마운트 될때 한번만 실행되도록
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {todos.map((item) => {
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
  border: 1px solid black;
  width: 90%;
  height: 50px;
  margin: 0 auto;
  text-align: center;
`;
