import Home_Login from "./Home_Login";
import "../Style/Function.scss"
import { Link } from "react-router-dom";

function MainFunction() {
    return (
        <>
            <h1>
                <Link to="/">Online ToDoList</Link>
            </h1>
            <div className="ToDoList_Container">
                <div className="ToDoList_Input">
                    <input type="text" placeholder="請輸入代辦事項" />
                    <a href="#"><i></i></a>
                </div>
                <div className="ToDoList_Content">
                    <div className="ToDoList_ItemStatus">
                        <Link to="/">全部</Link>
                        <Link to="/">待完成</Link>
                        <Link to="/">已完成</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFunction;