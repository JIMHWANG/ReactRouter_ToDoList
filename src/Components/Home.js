import "../Style/Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
    let FunctionPageNavigate = useNavigate();
    return (
        <>
            <div className="Home">
                <h2>Welcom to the homepage!</h2>
                <p>This is a React Router ToDoList Practice</p>
                <input type="button" value="Go to Function Page!" onClick={() => {
                    FunctionPageNavigate("/Function");
                }} />
            </div>
        </>
    );
}

export default Home;