import Home_Login from "./Home_Login";
import "../Style/Function.scss"
import { Link } from "react-router-dom";
import React from "react";

const { useState, useEffect } = React;


function ShowItems({ ToDoListItems, ItemDisplayValue }) {
    return (
        <ul className={`${!ItemDisplayValue}ItemDisPlay`}>
            {
                ToDoListItems.map((ToDoListItem, Index) => {

                    return (
                        <li key={Index}>
                            <input type="checkbox" name="" id="" />
                            {ToDoListItem.item}
                        </li>
                    )
                })
            }
        </ul>
    )
}



function MainFunction() {

    const [ToDoListItems, setToDoListItems] = useState([]);
    const [InputItem, setInputItem] = useState('');
    const [ItemDisplayValue, setItemDisplayValue] = useState(false);

    useEffect(() => {

        if (Object.keys(ToDoListItems).length === 0) {
            setItemDisplayValue(true);
        } else {
            setItemDisplayValue(false);
        }
    }, [ToDoListItems])

    return (
        <>
            <h1>
                <Link to="/">Online ToDoList</Link>
            </h1>
            <div className="ToDoList_Container">
                <div className="ToDoList_Input">
                    <input type="text" placeholder="請輸入代辦事項" value={InputItem} onChange={(e) => {
                        setInputItem(e.target.value);
                    }} />
                    <a href="#" onClick={() => {
                        if (!InputItem) { return; }

                        setToDoListItems([...ToDoListItems, { item: InputItem, completed: false }]);
                        setInputItem('');

                    }}><i></i></a>
                </div>
                <div className="ToDoList_Content">
                    <div className="ToDoList_ItemStatus">
                        <Link to="#">全部</Link>
                        <Link to="#">待完成</Link>
                        <Link to="#">已完成</Link>
                    </div>
                    <div className="ToDoList_Items">
                        <p className={`NoItems ${ItemDisplayValue}ItemDisPlay`}>目前尚無代辦事項</p>
                        <ShowItems ToDoListItems={ToDoListItems} ItemDisplayValue={ItemDisplayValue} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFunction;