import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./common/Button";
import { changeModalColor, toogleModal } from "../redux/modules/modal";
import Selecter from "./common/Selector";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../apis/api";
import { useEffect, useState } from "react";

const Modal = () => {
  const { modalChecked, date, color } = useSelector((state) => state.modal);

  const [todo, setTodo] = useState({
    eventname: "",
    start: "",
    end: "",
    date,
    color,
  });
  const onChangeTodosHandler = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    name !== "eventname" && (newValue = value.replace(/\D/g, ""));
    const newTodo = {
      ...todo,
      [name]: newValue,
    };
    setTodo(newTodo);
  };

  useEffect(() => {
    let newColor = {
      ...todo,
      color,
    };
    setTodo(newColor);
  }, [color]);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onClickModalHandler = () => {
    dispatch(toogleModal());
    dispatch(changeModalColor("red"));
  };

  const onClickSubmitHandler = () => {
    if (todo.eventname === "" || todo.start === "" || todo.end === "") {
      return alert("입력을 제대로 안함");
    }
    if (todo.start > todo.end || 24 < todo.end) {
      return alert("시간이 이게 맞나요?");
    }

    mutation.mutate(todo);
    dispatch(toogleModal());
    setTodo({
      eventname: "",
      start: "",
      end: "",
      date,
      color: "red",
    });
  };

  return (
    <>
      {modalChecked && (
        <>
          <ModalContent $color={color}>
            <span>할 일</span>
            {/* css가 undefined가 뜨는데 왜일까? */}
            <div className="circle" />
            <p className="date">날짜 : {date}</p>
            <p className="count">{todo.eventname.length}/20</p>
            <InputBox
              type="text"
              maxLength={19}
              width={220}
              name="eventname"
              value={todo.eventname}
              onChange={(e) => onChangeTodosHandler(e)}
            />
            <Selecter />
            <ClockWrapper>
              <div className="start">
                <div className="timeSet">
                  <InputBox
                    width={30}
                    name="start"
                    maxLength={2}
                    value={todo.start}
                    onChange={(e) => onChangeTodosHandler(e)}
                  />
                  {/* <span
                    onClick={(e) => {
                      e.target.innerText === "PM"
                        ? (e.target.innerText = "AM")
                        : (e.target.innerText = "PM");
                    }}
                  >
                    PM
                  </span> */}
                </div>
              </div>
              <span>~</span>
              <div className="end">
                <div>
                  <InputBox
                    width={30}
                    name="end"
                    maxLength={2}
                    value={todo.end}
                    onChange={(e) => onChangeTodosHandler(e)}
                  />
                  {/* <span
                    onClick={(e) => {
                      e.target.innerText === "PM"
                        ? (e.target.innerText = "AM")
                        : (e.target.innerText = "PM");
                    }}
                  >
                    PM
                  </span> */}
                </div>
              </div>
            </ClockWrapper>
            <Button
              className="submitBtn"
              width={70}
              onClick={onClickSubmitHandler}
            >
              저장
            </Button>
            <Button
              className="closeBtn"
              onClick={onClickModalHandler}
              width={70}
            >
              닫기
            </Button>
          </ModalContent>
          <ModalBackground></ModalBackground>
        </>
      )}
    </>
  );
};

export default Modal;

const ModalContent = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(1deg);
  display: flex;
  text-align: center;
  flex-direction: column;
  background-color: #fcf6bd;
  box-shadow: 5px 5px 8px 1px black;
  padding: 25px;
  z-index: 100;
  &:hover {
    transform: translate(-50%, -50%);
    width: 310px;
    height: 310px;
    transition: 0.3s ease-in;
  }
  &:not(:hover) {
    transform: translate(-50%, -50%) rotate(1deg);
    width: 300px;
    height: 300px;
    transition: 0.3s ease-in;
  }

  .circle {
    position: absolute;
    left: 28%;
    top: 9%;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.$color};
    border-radius: 100%;
    border: 1px solid black;
  }

  .closeBtn {
    position: absolute;
    top: 80%;
    left: 65%;
  }
  .submitBtn {
    position: absolute;
    top: 80%;
    left: 35%;
  }
  .count {
    position: absolute;
    left: 85%;
    top: 22%;
  }
  .date {
    position: absolute;
    left: 65%;
    top: 0;
  }
  > span {
    margin-right: auto;
    margin-left: 10px;
    font-size: 24px;
  }

  > * {
    margin-top: 20px;
  }
`;

const ModalBackground = styled.div`
  opacity: 0.3;
  background-color: #6a6e83;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  .start {
    display: flex;
    flex-direction: row;
  }
  .end {
    display: flex;
    flex-direction: row;
  }
  & > * span {
    &:hover {
      background-color: black;
      color: white;
      border-radius: 5px;
    }
    cursor: pointer;
  }
`;

const InputBox = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  transition: border-bottom-width 0.3s ease-in;
  padding-left: 5%;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  &:focus {
    border-bottom: 2px solid black;
  }
`;
