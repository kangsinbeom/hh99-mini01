import CalendarItem from "../components/CalendarItem";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal, setModalId } from "../redux/modules/modal";

const CalendarItemContainor = () => {
  const calendars = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const { modalChecked } = useSelector((state) => state.modal);
  const onDateClick = (id) => {
    dispatch(toogleModal());
    dispatch(setModalId(id));
  };

  return (
    <CalendarItem
      calendars={calendars}
      onDateClick={onDateClick}
      modalChecked={modalChecked}
    />
  );
};

export default CalendarItemContainor;
