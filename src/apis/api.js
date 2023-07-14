import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {}
  })

const getTodos = async () => {
  const response = await instance.get("/todos", {
    params: {}
  })
  return response.data
}


const addTodo = async (newTodo) => {
  const response = await instance.get("/todos", newTodo)
  return response.data
}


export {getTodos, addTodo}