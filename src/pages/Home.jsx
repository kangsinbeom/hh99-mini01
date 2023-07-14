import styled from "styled-components";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal } from "../redux/modules/modal";
const Home = () => {
  const { modalChecked } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const onClickModalHandler = () => {
    dispatch(toogleModal());
  };

  return (
    <>
      <Modal />
      <Div>asdf</Div>
      <button onClick={onClickModalHandler}>modal</button>
    </>
  );
};

export default Home;

const Div = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  border: 30px solid black;
`;
