import Home_Login from "./Home_Login";
import "../Style/Function.scss"
import { Link } from "react-router-dom";
import React from "react";

const { useState, useEffect } = React;

function DeleteItem(DItem, DItemIndex, ItemList, setToDoListItems) {
    ItemList = ItemList.filter((EachItem, EachItemIndex) => {
        if (EachItem.item === DItem && DItemIndex === EachItemIndex) {
            return false;
        }
        return true;
    });

    setToDoListItems(ItemList);
}

function ShowItems({ ToDoListItems, setToDoListItems, ItemDisplayValue, CurrentStatus }) {

    const NewToDoListItems = [...ToDoListItems];

    return (
        <ul className={`${!ItemDisplayValue}ItemDisPlay`}>
            {
                NewToDoListItems.map((ToDoListItem, Index) => {
                    if (ToDoListItem.show === false) { return; }
                    return (
                        <li key={Index}>
                            <input type="checkbox" checked={ToDoListItem.completed} onChange={() => {
                                ToDoListItem.completed = !ToDoListItem.completed;
                                CurrentStatus !== "全部" ? ToDoListItem.show = !ToDoListItem.show : ToDoListItem.show = true;
                                // ToDoListItem.show = !ToDoListItem.show;
                                setToDoListItems(NewToDoListItems);
                            }} />
                            <span className={`${ToDoListItem.completed}ItemComplete`}>{ToDoListItem.item}</span>
                            <Link to="#" onClick={() => {
                                DeleteItem(ToDoListItem.item, Index, NewToDoListItems, setToDoListItems);
                            }}></Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const TargetStatus = (Event, StatusList, setStatusList, setCurrentStatus, ToDoListItems, setToDoListItems) => {
    let TargetValue;
    const NewStatusList = [...StatusList];
    const NewToDoListItems = [...ToDoListItems];
    Event.target.id === "all" ? TargetValue = "全部" : Event.target.id === "InCompleted" ? TargetValue = "待完成" : TargetValue = "已完成";
    setCurrentStatus(TargetValue);

    NewStatusList.map((EachStatus) => {
        EachStatus.active = false;
        if (EachStatus.status === TargetValue) {
            EachStatus.active = !EachStatus.active;
        }
    })
    setStatusList(NewStatusList);

    ToDoListItems.map((EachToDoItem) => {
        if (TargetValue == "全部") {
            EachToDoItem.show = true
        } else if (TargetValue == "待完成") {
            EachToDoItem.completed === false ? EachToDoItem.show = true : EachToDoItem.show = false;
        } else if (TargetValue == "已完成") {
            EachToDoItem.completed === true ? EachToDoItem.show = true : EachToDoItem.show = false;
        }
    })
    setToDoListItems(ToDoListItems);
}

function ShowStatusList({ StatusList, setStatusList, setCurrentStatus, ToDoListItems, setToDoListItems }) {
    return (
        <>
            {
                StatusList.map((EachStatus, EachStatusIndex) => {
                    return (
                        <Link key={EachStatusIndex} className={`${EachStatus.active}StatusDisplay`} to="#" id={EachStatus.EngStatus} onClick={(e) => { TargetStatus(e, StatusList, setStatusList, setCurrentStatus, ToDoListItems, setToDoListItems) }}>{EachStatus.status}</Link>
                    )
                })
            }
        </>
    )
}

function TartgetStatusItemSum({ CurrentStatus, EachStatusSum }) {
    let TartgetStatusItemString;
    CurrentStatus === "全部" ? TartgetStatusItemString = `${EachStatusSum.Completed} 個已完成項目，${EachStatusSum.InCompleted} 個待完成項目` : CurrentStatus === "已完成" ? TartgetStatusItemString = `${EachStatusSum.Completed} 個已完成項目` : TartgetStatusItemString = `${EachStatusSum.InCompleted} 個待完成項目`;
    return (
        <>
            <p>{TartgetStatusItemString}</p>
        </>
    )
}

function MainFunction() {

    const [ToDoListItems, setToDoListItems] = useState([]);
    const [InputItem, setInputItem] = useState('');
    const [ItemDisplayValue, setItemDisplayValue] = useState(false);
    const [StatusList, setStatusList] = useState([
        { status: "全部", EngStatus: "all", active: true },
        { status: "待完成", EngStatus: "InCompleted", active: false },
        { status: "已完成", EngStatus: "Completed", active: false }
    ])
    const [CurrentStatus, setCurrentStatus] = useState('全部');
    const [EachStatusSum, setEachStatusSum] = useState({});


    useEffect(() => {

        if (Object.keys(ToDoListItems).length === 0) {
            setItemDisplayValue(true);
        } else {
            setItemDisplayValue(false);
        }

        setEachStatusSum({
            all: Object.keys(ToDoListItems).length,
            InCompleted: ToDoListItems.filter(Item => Item.completed === false).length,
            Completed: ToDoListItems.filter(Item => Item.completed === true).length,
        })

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

                        setToDoListItems([...ToDoListItems, { item: InputItem, completed: false, show: true }]);
                        setInputItem('');

                    }}><i></i></a>
                </div>
                <div className="ToDoList_Content">
                    <div className="ToDoList_ItemStatus">
                        <ShowStatusList StatusList={StatusList} setStatusList={setStatusList} setCurrentStatus={setCurrentStatus} ToDoListItems={ToDoListItems} setToDoListItems={setToDoListItems} />
                    </div>
                    <div className="ToDoList_Items">
                        <p className={`NoItems ${ItemDisplayValue}ItemDisPlay`}>目前尚無代辦事項</p>
                        <ShowItems ToDoListItems={ToDoListItems} setToDoListItems={setToDoListItems} ItemDisplayValue={ItemDisplayValue} CurrentStatus={CurrentStatus} />
                    </div>
                    <div className="TargetSumAndRemoveAll">
                        <TartgetStatusItemSum CurrentStatus={CurrentStatus} EachStatusSum={EachStatusSum} />
                        <input type="button" value="移除已完成項目" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFunction;