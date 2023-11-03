function Navbar() {
  return (
    <header className="text-white">
      <div className=" bg-orange-400 p-4">
        <h1 className="text-center text-4xl font-bold tracking-wide">
          Todo App
        </h1>
      </div>
      <ul className="bg-orange-300 flex flex-row justify-center gap-10 text-lg p-2">
        <li className="hover:text-orange-600">Home</li>
        <li className="hover:text-orange-600">Todo</li>
      </ul>
    </header>
  );
}

export default Navbar;
