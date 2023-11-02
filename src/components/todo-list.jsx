import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/reducer/todo-reducer";

function TodoList() {
  // Ambil data ke dalam store menggunakan useSelector
  // menggunakan callback yaitu state yang merupakan bagian dari store
  // destructure data pada todo menjadi todos
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="my-3">
          <span className="mx-2 my-2">{todo.value}</span>
          <button className="mx-1 bg-yellow-300 px-2 rounded-lg">Edit</button>
          <button
            // Memanggil Fungsi Delete
            onClick={() => handleDelete(todo.id)}
            className="mx-1 bg-red-300 px-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
