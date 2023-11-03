function Home() {
  return (
    <div className="flex flex-col items-center mt-5">
      <div>
        <h1 className="text-xl font-bold m-5 text-center">
          [Todo List App with React.js & Redux] - Syarif Muhammad Alhaiza
        </h1>
      </div>
      <div className=" justify-center  my-5">
        <h3 className="text-md text-center my-3">Made With : </h3>
        <div className="flex flex-col gap-2">
          <button className="bg-teal-300 font-normal px-2 rounded-xl">
            TAILWIND CSS
          </button>
          <button className="bg-sky-300 font-normal px-2 rounded-xl">
            REACT JS
          </button>
          <button className="bg-violet-300 font-normal px-2 rounded-xl">
            Redux
          </button>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-gray-400 p-3 rounded-xl font-semibold text-white hover:scale-110">
          <a
            href="https://github.com/Alhaiza/ToDoList-App-with-React.js-and-Redux"
            target="_blank"
          >
            Source Code Here!
          </a>
        </button>
      </div>
    </div>
  );
}

export default Home;
