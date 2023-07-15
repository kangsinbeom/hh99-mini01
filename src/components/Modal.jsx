import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./common/Button";
import { toogleModal } from "../redux/modules/modal";
import Input from "./common/Input";
const Modal = () => {
  const { modalChecked } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const onClickModalHandler = () => {
    dispatch(toogleModal());
  };

  return (
    <>
      {modalChecked && (
        <>
          <ModalContent>
            <span>할 일</span>
            <p>0/20</p>
            <Input type="text" />
            <Button onClick={onClickModalHandler} width={70}>
              hello
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
  padding: 20px;
  z-index: 100;
  &:hover {
    transform: translate(-50%, -50%);
    width: 310px;
    height: 310px;
    transition: 0.3s ease-in;
  }
  > button {
    position: absolute;
    top: 80%;
    left: 65%;
  }
  > p {
    position: absolute;
    left: 85%;
    top: 20%;
  }
  > input {
  }

  > span {
    margin-right: auto;
    margin-left: 10px;
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
