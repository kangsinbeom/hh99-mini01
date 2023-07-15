import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toogleModal } from "../redux/modules/modal";
import ReactDOM from "react-dom";
const Modal = () => {
  const { modalChecked } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const onClickModalHandler = () => {
    dispatch(toogleModal());
  };

  return <></>;
};

export default Modal;
