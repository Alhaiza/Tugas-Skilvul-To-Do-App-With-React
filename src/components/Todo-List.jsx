import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setEdit } =
    useContext(TodoContext);

  const handleStatus = (index) => {
    let cloneTodos = { ...todos };
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

  return (
    <div>
      <div className="flex flex-row gap-10 mt-2">
        <button className="bg-gray-500 px-5 rounded-lg text-white">ALL</button>
        <button className="bg-gray-500 px-5 rounded-lg text-white">
          ACTIVE
        </button>
        <button className="bg-gray-500 px-5 rounded-lg text-white">
          COMPLETED
        </button>
      </div>

      {todos.map((todo, index) => (
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
            {todo.value}{" "}
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
