import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoInfo() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-lg font-bold">
          {todos.length == 0 ? "No Todo" : "Todos : " + todos.length}
        </h1>
      </div>
    </div>
  );
}

export default TodoInfo;
