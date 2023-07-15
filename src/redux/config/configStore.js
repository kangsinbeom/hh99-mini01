import { configureStore } from "@reduxjs/toolkit";
import calendar from "../modules/calendar";
import modal from "../modules/modal";
const store = configureStore({
  reducer: {
    calendar,
    modal,
  }
});


export default store;