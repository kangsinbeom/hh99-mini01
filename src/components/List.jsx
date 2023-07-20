import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = ({ filteredData, onClickNavHandler }) => {
  return (
    <ListWrapper>
      {filteredData?.map((item) => (
        <ListItem
          key={item.id}
          time={item.time}
          eventname={item.eventname}
          start={item.start}
          end={item.end}
          color={item.color}
          todoId={item.id}
          onClick={() => onClickNavHandler(item.id)}
        />
      ))}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.div`
  @media (max-width: 900px) {
    // background-color: red;
    display: flex;
    width: 650px;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    margin: 40px auto;
  }
  @media (min-width: 901px) {
    display: grid;
    width: 20%;
    margin-top: 60px;
    margin-left: 40px;
    max-height: 310px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    gap: 15px;
  }
`;
