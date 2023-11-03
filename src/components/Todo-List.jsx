import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);

  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;
    setTodos([...cloneTodos]);
  };

  console.log(todos);
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="mt-4 flex flex-row justify-between bg-orange-300 p-4 rounded-xl shadow-md items-center"
        >
          <span className="font-semibold flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 mr-2"
              onClick={() => handleStatus(index)}
            />
            {todo.value}{" "}
          </span>

          <div className="flex flex-row justify-between gap-2">
            <button
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
