import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";
import modal from "../modules/modal";
const store = configureStore({
  reducer: {
    todos,
    modal,
  }
});


export default store;