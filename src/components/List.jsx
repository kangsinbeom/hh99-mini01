import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
const List = () => {
  return (
    <ListWrapper>
      <ListItem></ListItem>
      <Button>test button</Button>
      <Input />
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  width: 20%;
  height: 400px;
  gap: 15px;
`;
