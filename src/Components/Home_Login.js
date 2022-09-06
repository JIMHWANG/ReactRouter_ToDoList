import "../Style/Home.scss";
import { useNavigate } from "react-router-dom";
import React from 'react';

const { useState, useEffect } = React;

function Home() {
    let FunctionPageNavigate = useNavigate();
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [loginInfo, setLoginInfo] = useState({});

    useEffect(() => {
        if (Object.keys(loginInfo).length === 0) { return; }
        var LoginAccountPassord = {};
        LoginAccountPassord.email = loginInfo.Account;
        LoginAccountPassord.password = loginInfo.Password;
        var Loginxhr = new XMLHttpRequest();
        Loginxhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
        Loginxhr.setRequestHeader('Content-type', 'application/json');
        var LoginAccountPassordStr = JSON.stringify(LoginAccountPassord);
        Loginxhr.send(LoginAccountPassordStr);

        Loginxhr.onload = function () {
            if (JSON.parse(Loginxhr.responseText).success) {
                FunctionPageNavigate("/Function");
            } else {
                alert(`登入失敗 : ${JSON.parse(Loginxhr.responseText).message}`)
            }
            setLoginInfo({});
        }
    }, [loginInfo]);

    return (
        <>
            <div className="Home_Login">
                <div className="Container">
                    <div className="Login_Container">
                        <label htmlFor="">帳號 : </label>
                        <input type="text" placeholder="" name="" id="" value={account} onChange={(e) => {
                            setAccount(e.target.value);
                        }} />
                    </div>
                    <div className="Login_Container">
                        <label htmlFor="">密碼 : </label>
                        <input type="password" name="" id="" value={password} onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                    </div>
                    <div className="Login_Button">
                        <input type="button" value="登入" onClick={() => {
                            if (!account || !password) {
                                alert('帳號或密碼未輸入');
                                return;
                            }
                            setLoginInfo({
                                Account: account,
                                Password: password
                            })
                            setAccount('');
                            setPassword('');
                        }} />
                        <input type="button" value="註冊" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;