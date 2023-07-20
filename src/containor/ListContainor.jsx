import List from "../components/List";
import { useQuery } from "react-query";
import { getTodos } from "../apis/api";
import { useNavigate } from "react-router-dom";

const ListContainor = ({ month }) => {
  const { isLoading, isError, data, error } = useQuery("todos", getTodos);
  const navigate = useNavigate();

  const onClickNavHandler = (id) => {
    navigate(`/detail/${id}`);
  };

  if (isLoading) {
    <p>Loading</p>;
  }
  if (isError) {
    <p>{error}</p>;
  }

  const filteredData = data?.filter((item) => {
    const itemMonth = item.date?.slice(0, 7);
    return itemMonth.toString() === month.toString();
  });

  return (
    <List filteredData={filteredData} onClickNavHandler={onClickNavHandler} />
  );
};

export default ListContainor;
