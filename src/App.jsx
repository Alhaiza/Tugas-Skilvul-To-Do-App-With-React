import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./pages/Todo";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-orange-100 h-[100vh]">
        {/* navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
