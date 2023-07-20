import CalendarItem from "../components/CalendarItem";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal, setModalId } from "../redux/modules/modal";
import { useQuery } from "react-query";
import { getTodos } from "../apis/api";

const CalendarItemContainor = () => {
  const calendars = useSelector((state) => state.calendar);
  const { data, isLoading } = useQuery("todos", getTodos);
  const dispatch = useDispatch();
  const { modalChecked } = useSelector((state) => state.modal);
  const onDateClick = (id) => {
    dispatch(toogleModal());
    dispatch(setModalId(id));
  };

  // queryClient가 data값을 가져올때 동기적으로 가져와서 find로 찾지못했던것
  // 비동기적으로 가져오는 useQuery를 사용해서 해결
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <CalendarItem
      calendars={calendars}
      onDateClick={onDateClick}
      modalChecked={modalChecked}
      data={data}
    />
  );
};

export default CalendarItemContainor;
