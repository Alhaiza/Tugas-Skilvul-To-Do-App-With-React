import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setEdit } =
    useContext(TodoContext);

  const handleStatus = (index) => {
    const cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;
    setTodos([...cloneTodos]);
  };

  const handleEdit = (todo) => {
    setEdit(todo);
    setTodoInput(todo.value);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const [filter, setFilter] = useState("ALL");

  const filterTodos = () => {
    switch (filter) {
      case "ACTIVE":
        return todos.filter((todo) => !todo.status);
      case "COMPLETED":
        return todos.filter((todo) => todo.status);
      default:
        return todos;
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-evenly mt-3">
        <button
          onClick={() => setFilter("ALL")}
          className="bg-gray-300 px-3 rounded-xl focus:bg-gray-400"
        >
          ALL
        </button>
        <button
          onClick={() => setFilter("COMPLETED")}
          className="bg-gray-300 px-3 rounded-xl focus:bg-gray-400"
        >
          COMPLETE
        </button>
        <button
          onClick={() => setFilter("ACTIVE")}
          className="bg-gray-300 px-3 rounded-xl focus:bg-gray-400"
        >
          ACTIVE
        </button>
      </div>
      {filterTodos().map((todo, index) => (
        <div
          key={todo.id}
          className="mt-4 flex flex-row justify-between bg-orange-300 p-4 rounded-xl shadow-md items-center"
        >
          <span className="font-semibold flex items-center text-black">
            <input
              type="checkbox"
              className="w-4 h-4 mr-2"
              onClick={() => handleStatus(index)}
            />
            {todo.value}
          </span>

          <div className="flex flex-row justify-between gap-2">
            <button
              onClick={() => handleEdit(todo)}
              className={
                todo.status
                  ? "hidden"
                  : "text-white font-semibold bg-blue-400 p-1 px-3 rounded-xl"
              }
            >
              EDIT
            </button>
            <span
              className={
                todo.status
                  ? " bg-green-500 mx-auto p-1 px-3 rounded-xl text-white text-center"
                  : "hidden"
              }
            >
              TASK DONE
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className={
                todo.status
                  ? "hidden"
                  : "text-white font-semibold bg-red-400 p-1 px-3 rounded-xl"
              }
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
