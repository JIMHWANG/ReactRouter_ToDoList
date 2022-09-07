import Home_Login from "./Components/Home_Login"
import Function from "./Components/Function"
import Register from "./Components/Register"
import './Style/App.scss';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>
        <Link to="/">Online ToDoList</Link>
      </h1>
      <Routes>
        <Route path="/" element={<Home_Login />} />
        <Route path="Function" element={<Function />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </>
  );
}

// document.querySelector('.TitleAHref').click();

export default App;
