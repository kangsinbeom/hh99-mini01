import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
const List = () => {
  return (
    <ListWrapper>
      <ListItem></ListItem>
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
  max-height: 300px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 15px;
`;
