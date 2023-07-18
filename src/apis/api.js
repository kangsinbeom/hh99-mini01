import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

const getTodos = async () => {
  const response = await instance.get("/todos", {
    params: {},
  });
  return response.data;
};

const addTodo = async (newTodo) => {
  const response = await instance.post("/api/memo", newTodo);
  return response.data;
};

const deleteTodo = async (id) => {
  const response = await instance.delete(`/api/memo/${id}`);
  return response.data;
};


const getTodo = async (id) => {
  const response = await instance.get("/api/memo")
  const todo = response.data.filter(todo => todo.id === parseInt(id));
  return todo
} 


export {getTodos, addTodo, getTodo, deleteTodo}


//  get으로 이렇게 받아오는 방식이랑 가져와서 캐쉬 된 데이터를 꺼내쓰는거랑
// 뭐가 더 효율적인 일인가??

