import React, { useCallback } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const List = ({ filteredData }) => {
  return (
    <ListWrapper>
      {filteredData?.map((item) => (
        <ListItem
          key={item.id}
          time={item.time}
          eventName={item.eventName}
          start={item.start}
          end={item.end}
          circleColor={item.circleColor}
        />
      ))}
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
