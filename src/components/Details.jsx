import React from "react";
import styled from "styled-components";
import Detail from "../assets/images/detail.png";
const Details = ({
  info,
  handleDelete,
  updatedEventname,
  updatedStart,
  updatedEnd,
  updatedColor,
  onInputChange,
  onClickUpdateHandler,
}) => {
  const { eventname, start, end, color } = info;

  return (
    <DetailWarpper img={Detail}>
      <input type="text" />
      <textarea type="text" name="inputcontent" maxLength={600} />
    </DetailWarpper>
  );
};

export default Details;

const DetailWarpper = styled.div`
  max-width: 800px;
  height: 800px;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  padding: 40px;

  > input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid black;
    width: 300px;
    outline: none;
    font-size: 32px;
    position: absolute;
    top: 6%;
    left: 30%;
  }
  textarea {
    width: 100%;
    height: 70%;
    padding: 15px 10px;
    resize: none;
    border: none;
    border-top: 1px solid grey;
    background: transparent;
    white-space: pre-wrap;
    word-break: break-all;
    box-sizing: border-box;
    /* margin-top: 18px; */

    &:focus {
      outline: none;
    }
  }
`;
