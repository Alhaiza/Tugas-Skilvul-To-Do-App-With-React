import { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoInput() {
  const { todos, setTodos, edit, todoInput, setTodoInput, isEdit, setIsEdit } =
    useContext(TodoContext);
  const [input, setInput] = useState("");

  const handeClick = (e) => {
    e.preventDefault();

    if (isEdit) {
      let cloneTodo = [...todos];
      let index = cloneTodo.findIndex((item) => item.id == edit.id);
      cloneTodo[index].value = todoInput;

      setTodos(cloneTodo);
      setIsEdit(false);
    } else {
      let newTodo = {
        id: new Date(),
        value: todoInput,
        status: false,
      };

      setTodos([...todos, newTodo]);
    }

    setTodoInput("");
  };
  return (
    <div>
      <h1 className="text-center mb-3 text-gray-500">Input Your Todo Bellow</h1>
      <form className="flex flex-row justify-between gap-2" type="text">
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="p-2 border-solid border-black border-2 w-[100%] rounded-lg outline-none"
        />
        <button
          onClick={handeClick}
          className="p-2 rounded-lg px-4 bg-orange-600 text-white font-medium"
        >
          {isEdit ? "EDIT" : "ADD"}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
