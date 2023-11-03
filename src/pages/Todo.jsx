import TodoList from "../components/Todo-List";
import TodoInfo from "../components/TodoInfo";
import TodoInput from "../components/Todo-Input";

function Todo() {
  return (
    <div className="mt-12 p-4 w-[100vw] mx-auto sm:w-[80vw] md:w-[70vw]">
      <TodoInput />
      <TodoList />
      <TodoInfo />
    </div>
  );
}

export default Todo;
