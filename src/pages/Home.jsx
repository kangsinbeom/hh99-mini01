import styled from "styled-components";
import List from "../components/List";
import Calendar from "../components/Calendar";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal } from "../redux/modules/modal";

const Home = () => {
  // const { modalChecked } = useSelector((state) => state.modal);
  // const dispatch = useDispatch();
  // const onClickModalHandler = () => {
  //   dispatch(toogleModal());
  return (
    <Div>
      <Calendar></Calendar>
      <List></List>
      {/* <Modal />
      <Div>asdf</Div>
      <button onClick={onClickModalHandler}>modal</button> */}
    </Div>
  );
};
// };

export default Home;

const Div = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
`;
