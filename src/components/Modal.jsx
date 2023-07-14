import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toogleModal } from "../redux/modules/modal";
const Modal = () => {
  const { modalChecked } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const onClickModalHandler = () => {
    dispatch(toogleModal());
  };

  return (
    <Wrapper>
      {modalChecked &&
        createPortal(
          <>
            <ModalBackground />
            <ModalContents>
              <span>title</span>
              <input type="text" />
              <span>date</span>
              <input type="text" />
              <span>time</span>
              <input type="text" />
              <button>input</button>
              <button onClick={onClickModalHandler}> X </button>
            </ModalContents>
          </>,
          document.getElementById("modal")
        )}
    </Wrapper>
  );
};

export default Modal;

const ModalContents = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  top: 50%;
  left: 50%;
  > * {
    margin-bottom: 5px;
  }

  position: fixed;
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

const Wrapper = styled.div``;
