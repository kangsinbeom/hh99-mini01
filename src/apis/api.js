import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const MOCK_URL = process.env.REACT_APP_MOCK_URL;
const instance = axios.create({
  baseURL: MOCK_URL,
  headers: {},
});

const getTodos = async () => {
  const response = await instance.get("/todos");
  return response.data;
};

const addTodo = async (newTodo) => {
  const response = await instance.post("/todos", newTodo);
  return response.data;
};

const deleteTodo = async (id) => {
  const response = await instance.delete(`/todos/${id}`);
  return response.data;
};

const updateTodo = async (id, updatedTodo) => {
  const response = await instance.put(`/todos/${id}`, updatedTodo);
  return response.data;
};

const getTodo = async (id) => {
  const response = await instance.get("/todos");
  const todo = response.data.filter((todo) => todo.id === parseInt(id));
  return todo;
};

export { getTodos, addTodo, getTodo, deleteTodo, updateTodo };

//  get으로 이렇게 받아오는 방식이랑 가져와서 캐쉬 된 데이터를 꺼내쓰는거랑
// 뭐가 더 효율적인 일인가??
