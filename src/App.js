import Home_Login from "./Components/Home_Login"
import Function from "./Components/Function"
import Register from "./Components/Register"
import './Style/App.scss';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="ReactRouter_ToDoList/" element={<Home_Login />} />
        <Route path="Function" element={<Function />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
