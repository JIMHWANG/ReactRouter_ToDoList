import Home from "./Components/Home"
import Function from "./Components/Function"
import './Style/App.scss';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>
        <Link to="/">Online ToDoList</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Function" element={<Function />} />
      </Routes>
    </>
  );
}

export default App;
