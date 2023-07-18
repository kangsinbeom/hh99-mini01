import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";

const List = ({ filteredData }) => {
  const navigate = useNavigate();

  const onClickNavHandler = (id) => {
    navigate(`/detail/${id}`);
  };

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
          todoId={item.id}
          onClick={() => onClickNavHandler(item.id)}
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
