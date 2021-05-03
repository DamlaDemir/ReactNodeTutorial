import React, { useState } from 'react';
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import './style.css';
import Home from '../../Views/Home';

function Login() {
    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });

    const signin = () => {
    }

    return (
        <div className="loginPanel">
            <div className="card" >
                <div className="card-body">

                    <h5 className="card-title">Login</h5>
                    <div className="mt-10">
                        <div className="mb-3"><label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" value={loginInfo.username} onChange={e => setLoginInfo({ ...loginInfo, username: e.target.value })} ></input>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="mb-3"><label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" value={loginInfo.password} onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })} ></input>
                        </div>
                    </div>
                    <button type="button" class="btn btn-success" onClick={signin}><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>SIGN IN</Link></button>
                    <button type="button" class="btn btn-info"><Link to="/" >SIGN UP</Link></button>
                </div>
            </div>

        </div>
    )
}

export default Login;

