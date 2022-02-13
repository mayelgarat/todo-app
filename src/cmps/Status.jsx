import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from './Accounts'
import { Login } from "../cmps/Login"
import { Signup } from "../cmps/Signup"
import avatar from '../assets/img/login.jpg'

export function Status() {
    const [status, setStatus] = useState(false)
    const [isUser, setUser] = useState(false)

    const { getSession, logout } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session', session);
                setStatus(true)
            })
    }, []);

    const toggleSignLog = () => {
        setUser(!isUser)
    }

    return <div className="status">
        <img className="avatar" src={avatar} alt=""></img>
        {status ? <div>
            <p className="account">
                You are Logged in
            </p>
            <button onClick={logout} className="btn">Logout</button>
        </div> : isUser ? <div>
            <Login />
            <p className="account">Dont have an account? </p> <button className="btn" onClick={toggleSignLog}>Sign up</button>
        </div>
            : <div><Signup />
                <p className="account">Already have an account? </p> <button className="btn" onClick={toggleSignLog}>Log in</button></div>}
    </div>
}