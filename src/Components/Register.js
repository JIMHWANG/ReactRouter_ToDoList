import AccountPassword from "./AccountPassword";
import { useNavigate } from "react-router-dom";
import "../Style/Register.scss";
import React from 'react';

const { useState, useEffect } = React;

function Register() {
    let RegisterNavigate = useNavigate();
    const [RegisterAccount, setRegisterAccount] = useState('');
    const [RegisterPassword, setRegisterPassword] = useState('');
    const [RegisterInfo, setRegisterInfo] = useState({});

    useEffect(() => {
        if (Object.keys(RegisterInfo).length === 0) { return; }
        var RegisterAccountPassord = {};
        RegisterAccountPassord.email = RegisterInfo.Account;
        RegisterAccountPassord.password = RegisterInfo.Password;
        // console.log(RegisterAccountPassord);

        var Registerxhr = new XMLHttpRequest();
        Registerxhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
        Registerxhr.setRequestHeader('Content-type', 'application/json');
        var RegisterAccountPassordStr = JSON.stringify(RegisterAccountPassord);
        Registerxhr.send(RegisterAccountPassordStr);

        Registerxhr.onload = function () {
            if (JSON.parse(Registerxhr.responseText).success) {
                alert(`註冊成功 : ${JSON.parse(Registerxhr.responseText).message}`)
                RegisterNavigate("/");
            } else {
                alert(`註冊失敗 : ${JSON.parse(Registerxhr.responseText).message}`)
            }
            setRegisterInfo({});
        }

    }, [RegisterInfo])

    return (
        <div className="Register">
            <h2>歡迎加入</h2>
            <AccountPassword account={RegisterAccount} setAccount={setRegisterAccount} password={RegisterPassword} setPassword={setRegisterPassword} />
            <div className="Register_Buttons">
                <input type="button" value="註冊" onClick={() => {
                    if (!RegisterAccount || !RegisterPassword) {
                        alert('帳號或密碼未輸入');
                        return;
                    }
                    setRegisterInfo({
                        Account: RegisterAccount,
                        Password: RegisterPassword
                    });
                    setRegisterAccount('');
                    setRegisterPassword('');
                }} />
            </div>
        </div>

    )
}

export default Register;