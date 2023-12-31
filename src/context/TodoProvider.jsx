import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, value: "Melupakan dia", status: false },
    { id: 2, value: "Move On", status: false },
    { id: 2, value: "Cari Yang Baru", status: false },
  ]);

  const [todoInput, setTodoInput] = useState("");
  const [edit, setEdit] = useState({});
  const [isEdit, setIsEdit] = useState("");

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        edit,
        setEdit,
        todoInput,
        setTodoInput,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
