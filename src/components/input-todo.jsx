import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/todo-reducer";

function InputTodoList() {
  const dispacth = useDispatch();
  const [input, setInput] = useState("");

  //
  const handeClick = (e) => {
    e.preventDefault();
    console.log(input);
    // kirimkan data dengan dispatch addTodo dari Store
    dispacth(addTodo(input));
    // reset inputan ketika diclick
    setInput("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Insert Some Todo"
          // mengambil value dari useState dengan parameter input
          value={input}
          // diberi onChange dengan target value atau isi yang telah kita ketikan dengan callback setInput
          onChange={(e) => setInput(e.target.value)}
          className="mx-2 my-2 px-5 py-1 border-solid border-2 border-black placeholder:text-center"
        />

        <button
          // button diberi onClick dengan fungsi handeClick untuk mengakses inputan kita
          onClick={handeClick}
          className="bg-blue-500 px-5 py-1 rounded-sm text-center text-white"
        >
          Add Todo!
        </button>
      </form>
    </div>
  );
}

export default InputTodoList;
