// deklarasi initial state
const initialState = {
  todos: [
    // list todos berupa object yang masing masing memiliki id
    { id: 1, value: "belajar react" },
    { id: 2, value: "belajar redux" },
  ],
};

// fungsi todo reducer
// parameter diberi nama state dan akan menerima initial state yang sudah dibuat di atas serta action untuk masuk ke switch case untuk menerima action
function todoReducer(state = initialState, action) {
  // switch pada action akan berjenis type
  switch (action.type) {
    // case ADD_TODO
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };

      const cloneTodos = [...state.todos, newTodo];
      return {
        todos: cloneTodos,
      };
    // CASE DELETE_TODO
    case "DELETE_TODO":
      const filterTodo = state.todos.filter(
        (item) => item.id != action.payload
      );
      return {
        todos: filterTodo,
      };
    // switch case default mengembalikan nilai state sepeti biasa
    default:
      return state;
  }
}

// Fungsi Add dari Handle Click
export function addTodo(input) {
  return {
    type: "ADD_TODO",
    // gunakan properti dengan nama payload
    payload: input,
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}

export default todoReducer;

// fungsi reducer adalah fungsi untuk menyimpan data awal
