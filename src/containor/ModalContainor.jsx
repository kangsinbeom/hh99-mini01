import { useDispatch, useSelector } from "react-redux";
import { changeModalColor, toogleModal } from "../redux/modules/modal";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../apis/api";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
const ModalContainor = () => {
  const { modalChecked, date, color } = useSelector((state) => state.modal);

  const [todo, setTodo] = useState({
    eventname: "",
    start: "",
    end: "",
    date,
    color,
  });
  const onChangeTodosHandler = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    name !== "eventname" && (newValue = value.replace(/\D/g, ""));
    const newTodo = {
      ...todo,
      [name]: newValue,
    };
    setTodo(newTodo);
  };

  useEffect(() => {
    let newColor = {
      ...todo,
      color,
    };
    setTodo(newColor);
  }, [color]);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const onClickModalHandler = () => {
    dispatch(toogleModal());
    dispatch(changeModalColor("red"));
  };

  const onClickSubmitHandler = () => {
    if (todo.eventname === "" || todo.start === "" || todo.end === "") {
      return alert("입력을 제대로 안함");
    }
    if (todo.start > todo.end || 24 < todo.end) {
      return alert("시간이 이게 맞나요?");
    }

    mutation.mutate(todo);
    dispatch(toogleModal());
    setTodo({
      eventname: "",
      start: "",
      end: "",
      date,
      color: "red",
    });
  };

  return (
    <Modal
      modalChecked={modalChecked}
      onChangeTodosHandler={onChangeTodosHandler}
      onClickModalHandler={onClickModalHandler}
      onClickSubmitHandler={onClickSubmitHandler}
      date={date}
      todo={todo}
      color={color}
    />
  );
};
export default ModalContainor;
