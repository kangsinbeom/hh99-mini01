import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./common/Button";
import { toogleModal } from "../redux/modules/modal";

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
            <input type="text" />
            <input type="text" />
            <Button onClick={onClickModalHandler} width={100}>
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
  transform: translate(-50%, -50%);
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px;
  z-index: 100;
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
