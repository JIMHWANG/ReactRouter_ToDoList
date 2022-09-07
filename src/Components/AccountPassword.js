import "../Style/AccountPassword.scss";
import { useNavigate } from "react-router-dom";
import React from 'react';

function AccountPassword({ account, setAccount, password, setPassword }) {

    return (
        <>
            <div className="AccountPassword">
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
                </div>
            </div>
        </>
    );


}

export default AccountPassword;