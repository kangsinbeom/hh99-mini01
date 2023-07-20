import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo, deleteTodo, updateTodo } from "../apis/api";
import { useMutation, useQueryClient } from "react-query";
import Details from "../components/Details";
import useInput from "../hooks/useInput";

function Detailcontainor() {
  const { id } = useParams();
  const [info, setInfo] = useState({});
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
    await updateTodo(id, updatedTodo);
    navigate("/");
  };

  const [detailForm, onInputChange] = useInput({
    updatedeventname: "",
    updatedStart: "",
    updatedEnd: "",
    updatedcolor: "red",
  });
  // console.log(detailForm);
  const onClickUpdateHandler = () => {
    if (
      detailForm.updatedeventname === "" ||
      detailForm.updatedStart === "" ||
      detailForm.updatedEnd === ""
    ) {
      return alert("모두 입력해주세요~");
    }
    if (
      detailForm.updatedStart > detailForm.updatedEnd ||
      24 < detailForm.updatedEnd
    ) {
      return alert("시간 확인해주세요~");
    }

    const updatedInfo = {
      ...info,
      eventname: detailForm.updatedeventname,
      start: detailForm.updatedStart,
      end: detailForm.updatedEnd,
      color: detailForm.updatedcolor,
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
      onInputChange={onInputChange}
      onClickUpdateHandler={onClickUpdateHandler}
      detailForm={detailForm}
      navigate={navigate}
    ></Details>
  );
}

export default Detailcontainor;
