import React from "react";
import styled from "styled-components";

const ListItem = ({ start, end, eventname, color, onClick }) => {
  return (
    <ListItmeBox color={color} onClick={onClick}>
      <div>{eventname}</div>
      <div>
        {start}시 - {end}시
      </div>
    </ListItmeBox>
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
  font-size: 20px;
  border-left: 5px solid ${({ color }) => color};
  filter: blur(0.5px);
  transition: font-size 0.2s ease-in-out, background-color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    font-size: 23px;
    background-color: #dad8d8;
  }
`;
