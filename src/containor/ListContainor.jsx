import List from "../components/List";
import { useQuery } from "react-query";
import { getTodos } from "../apis/api";

const ListContainor = ({ month }) => {
  const { isLoading, isError, data, error } = useQuery("todos", getTodos);
  if (isLoading) {
    <p>Loading</p>;
  }
  if (isError) {
    <p>{error}</p>;
  }
  const filteredData = data?.filter((item) => {
    const itemMonth = +item.date?.slice(5, 7);
    return itemMonth.toString() === month.toString();
  });

  return <List month={month} filteredData={filteredData} />;
};

export default ListContainor;
