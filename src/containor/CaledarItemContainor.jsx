import { useDispatch, useSelector } from "react-redux";
import { toogleModal, setModalId } from "../redux/modules/modal";
import CalendarItem from "../components/CalendarItem";

function CaledarItemContainor(props) {
  const dispatch = useDispatch();
  const { modalChecked } = useSelector((state) => state.modal);
  const onDateClick = (id) => {
    dispatch(toogleModal());
    dispatch(setModalId(id));
  };

  return <CalendarItem modalChecked={modalChecked} onDateClick={onDateClick} />;
}

export default CaledarItemContainor;
