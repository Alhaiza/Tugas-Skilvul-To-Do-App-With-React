import { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../context/TodoProvider";

function TodoInput() {
  const { todos, setTodos } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handeClick = (e) => {
    e.preventDefault();
    let newTodo = {
      id: new Date(),
      value: input,
      status: false,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h1 className="text-center mb-3 text-gray-500">Input Your Todo Bellow</h1>
      <form
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex flex-row justify-between gap-2"
      >
        <input className="p-2 border-solid border-black border-2 w-[100%] rounded-lg outline-none" />
        <button
          onClick={handeClick}
          className="p-2 rounded-lg px-4 bg-orange-600 text-white font-medium"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
