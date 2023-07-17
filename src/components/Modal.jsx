import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./common/Button";
import { toogleModal } from "../redux/modules/modal";
import Input from "./common/Input";
import Selecter from "./common/Selector";
import { QueryClient, useMutation, useQuery } from "react-query";
import { addTodo } from "../apis/api";
import useInput from "../hooks/useInput";
const Modal = () => {
  // color랑 id는 API로 받아와야 유지가 되겠군
  const { date, modalChecked, circleColor } = useSelector(
    (state) => state.modal
  );
  const queryClient = new QueryClient();
  const dispatch = useDispatch();
  const newTodo = {
    eventName: "리액트 공부하기",
    time: "10PM - 12PM",
    date,
    circleColor,
  };
  const { eventName, onChange } = useInput();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onClickModalHandler = () => {
    dispatch(toogleModal());
  };

  const onClickSubmitHandler = () => {
    mutation.mutate({ newTodo });
  };
  return (
    <>
      {modalChecked && (
        <>
          <ModalContent>
            <span>할 일</span>
            {/* css가 undefined가 뜨는데 왜일까? */}
            <div className="circle" circlecolor={circleColor} />
            <p className="date">날짜 : {date}</p>
            <p className="count">0/20</p>
            <Input
              type="text"
              width={220}
              value={eventName}
              onChange={onChange}
            />
            <Selecter />
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
  .circle {
    position: absolute;
    left: 28%;
    top: 9%;
    width: 20px;
    height: 20px;
    background-color: ${({ circlecolor }) => circlecolor};
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
    left: 70%;
    top: 0;
  }
  > input {
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
