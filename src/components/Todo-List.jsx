import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoList() {
  const { todos } = useContext(TodoContext);
  //   console.log(data);
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="mt-4 flex flex-row justify-between bg-orange-300 p-4 rounded-xl shadow-md items-center"
        >
          <span className="font-semibold">{todo.value}</span>
          <div className="flex flex-row justify-between gap-2">
            <button className="text-white font-semibold bg-blue-400 p-1 px-3 rounded-xl">
              EDIT
            </button>
            <button className="text-white font-semibold bg-red-400 p-1 px-3 rounded-xl">
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
