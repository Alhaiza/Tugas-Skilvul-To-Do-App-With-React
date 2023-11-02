import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todo-reducer";

// menyimpan data
const store = configureStore({
  reducer: {
    // todo pada store akan menyimpan data yang telah dibuat di todoReducer
    todo: todoReducer,
  },
});

export default store;
