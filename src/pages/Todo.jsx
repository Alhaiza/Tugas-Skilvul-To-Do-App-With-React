function Todo() {
  return (
    <div className="mt-12 p-4 w-[100vw] mx-auto sm:w-[80vw] md:w-[70vw]">
      <h1 className="text-center mb-3 text-gray-500">Input Your Todo Bellow</h1>
      <form className="flex flex-row justify-between gap-2">
        <input className="p-2 border-solid border-black border-2 w-[100%] rounded-lg outline-none" />
        <button className="p-2 rounded-lg px-4 bg-orange-600 text-white font-medium">
          ADD
        </button>
      </form>
      <div>
        <div className="mt-4 flex flex-row justify-between bg-orange-300 p-4 rounded-xl shadow-md items-center">
          <span className="font-semibold">Value 1</span>
          <div className="flex flex-row justify-between gap-2">
            <button className="text-white font-semibold bg-blue-400 p-1 px-3 rounded-xl">
              EDIT
            </button>
            <button className="text-white font-semibold bg-red-400 p-1 px-3 rounded-xl">
              DELETE
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-between bg-orange-300 p-4 rounded-xl shadow-md items-center">
          <span className="font-semibold">Value 2</span>
          <div className="flex flex-row justify-between gap-2">
            <button className="text-white font-semibold bg-blue-400 p-1 px-3 rounded-xl">
              EDIT
            </button>
            <button className="text-white font-semibold bg-red-400 p-1 px-3 rounded-xl">
              DELETE
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10">
          <h1 className="text-lg font-bold">Total : 2</h1>
        </div>
      </div>
    </div>
  );
}

export default Todo;
