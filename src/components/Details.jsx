import React from "react";
import styled from "styled-components";
import Detail from "../assets/images/detail.png";
import Button from "../components/common/Button";
const Details = ({
  info,
  handleDelete,
  updatedeventname,
  updatedStart,
  updatedEnd,
  updatedcolor,
  onInputChange,
  onClickUpdateHandler,
}) => {
  const { eventname, start, end, color } = info;

  return (
    <DetailWarpper img={Detail}>
      <h1>Detail Page</h1>
      <DetailName>
        <p>Event Name: {eventname}</p>
        <input
          type="text"
          name="updatedeventname"
          value={updatedeventname}
          onChange={onInputChange}
        />
      </DetailName>
      <DetailTime>
        <p>Time: </p>
        <input
          type="number"
          name="updatedStart"
          value={updatedStart}
          onChange={onInputChange}
          min="0"
          max="24"
        />

        <input
          type="number"
          name="updatedEnd"
          value={updatedEnd}
          onChange={onInputChange}
          min="0"
          max="24"
        />
      </DetailTime>
      <DetailColor>
        <p>Color: {color}</p>
        <select
          name="updatedcolor"
          value={updatedcolor}
          onChange={onInputChange}
        >
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="blue">blue</option>
          <option value="violet">violet</option>
        </select>
      </DetailColor>
      <ButtonBox>
        <Button width={100} onClick={onClickUpdateHandler}>
          수정
        </Button>
        &nbsp;
        <Button width={100} onClick={handleDelete}>
          삭제
        </Button>
      </ButtonBox>
    </DetailWarpper>
  );
};

export default Details;

const DetailWarpper = styled.div`
  max-width: 60%;
  min-width: 900px;
  height: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ img }) => img});
  padding-top: 142px;
  > h1 {
    font-size: 44px;
  }
  > * {
    padding-bottom: 44px;
  }
  > * input {
    border: none;
    border-bottom: 3px solid black;
    background-color: transparent;
    width: 150px;
    outline: none;
    font-size: 32px;
    height: 44px;
    padding-left: 20px;
  }
`;

const DetailName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 44px;
  align-items: center;
  gap: 20px;
  > p {
    font-size: 28px;
  }
`;

const DetailTime = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 44px;
  align-items: center;

  gap: 20px;
  > p {
    font-size: 28px;
  }
  > input {
    width: 80px;
    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const DetailColor = styled.div`
  width: 300px;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  > p {
    width: 150px;
    font-size: 28px;
  }
  > select {
    font-size: 20px;
    height: 44px;
    width: 200px;
    background-color: transparent;
    border: 0px;
  }
`;

const ButtonBox = styled.div`
  gap: 10%;
  display: flex;
`;
