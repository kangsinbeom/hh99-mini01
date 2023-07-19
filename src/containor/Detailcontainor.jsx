import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo, deleteTodo, updateTodo } from "../apis/api";
import { useMutation, useQueryClient } from "react-query";
import Details from "../components/Details";

function Detailcontainor() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      navigate("/");
    },
  });

  const handleDelete = async () => {
    await mutation.mutateAsync(id);
  };

  const handleUpdate = async (updatedTodo) => {
    await updateTodo(id, updatedTodo); // updateTodo 함수를 사용하여 업데이트 수행
    navigate("/"); // 업데이트 후 메인 페이지로 이동
  };

  const [updatedEventname, setUpdatedEventname] = useState("");
  const [updatedStart, setUpdatedStart] = useState("");
  const [updatedEnd, setUpdatedEnd] = useState("");
  const [updatedColor, setUpdatedColor] = useState("");

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "updatedEventname":
        setUpdatedEventname(value);
        break;
      case "updatedStart":
        setUpdatedStart(value);
        break;
      case "updatedEnd":
        setUpdatedEnd(value);
        break;
      case "updatedColor":
        setUpdatedColor(value);
        break;
      default:
        break;
    }
  };

  const onClickUpdateHandler = () => {
    const updatedInfo = {
      ...info,
      eventname: updatedEventname,
      start: updatedStart,
      end: updatedEnd,
      color: updatedColor,
    };
    handleUpdate(updatedInfo);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await getTodo(id);
      setInfo(...response);
    };
    fetchInfo();
  }, [id]);

  if (!info) {
    return <div> 아직 로딩중입니다...</div>;
  }

  return (
    <Details
      info={info}
      handleDelete={handleDelete}
      updatedEventname={updatedEventname}
      updatedStart={updatedStart}
      updatedEnd={updatedEnd}
      updatedColor={updatedColor}
      onInputChange={onInputChange}
      onClickUpdateHandler={onClickUpdateHandler}
    ></Details>
  );
}

export default Detailcontainor;
