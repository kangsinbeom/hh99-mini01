import React, { useCallback } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo } from "../apis/api";

const List = ({ filteredData }) => {
  const queryClient = useQueryClient();
  // delete함수 실행하고 성공하면 onSuccess하는 것
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  // id 받아서 삭제작업하는 것
  const handleDelete = useCallback(
    (id) => {
      mutation.mutate(id);
    },
    [mutation]
  );

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
          onDelete={handleDelete}
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
