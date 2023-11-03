function TodoInput() {
  return (
    <div>
      <h1 className="text-center mb-3 text-gray-500">Input Your Todo Bellow</h1>
      <form className="flex flex-row justify-between gap-2">
        <input className="p-2 border-solid border-black border-2 w-[100%] rounded-lg outline-none" />
        <button className="p-2 rounded-lg px-4 bg-orange-600 text-white font-medium">
          ADD
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
