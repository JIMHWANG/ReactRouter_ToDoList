import "../Style/Home_Login.scss";
import { useNavigate } from "react-router-dom";
import React from 'react';
import AccountPassword from "./AccountPassword.js";

const { useState, useEffect } = React;

function Home() {
    let LoginPageNavigate = useNavigate();
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
                LoginPageNavigate("/Function");
            } else {
                alert(`登入失敗 : ${JSON.parse(Loginxhr.responseText).message}`)
            }
            setLoginInfo({});
        }
    }, [loginInfo]);

    return (
        <div className="Login">
            <AccountPassword account={account} setAccount={setAccount} password={password} setPassword={setPassword} />
            <div className="Login_Buttons">
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
                <input type="button" value="註冊" onClick={() => {
                    LoginPageNavigate("/Register");
                    <AccountPassword account={account} setAccount={setAccount} password={password} setPassword={setPassword} />
                }} />
            </div>
        </div>
    );
}

export default Home;