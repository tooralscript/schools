import React, { useState } from 'react'
import style from "../styles/Login.module.css"
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    // make sure user entered something in the fields
    if(username && password){
      navigate('/content'); 
    }
    
  };



  return (
    <div className={style.container}>

      <div className={style.loginBox}>

        <span>Login</span>

        <form className={style.loginForm}>

          <div>
            <label htmlFor="username">Username</label>
            <input value={username} type="text" id='username' name='username' required onChange={(e=>{setUsername(e.target.value)})} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input value={password} type="text" id='password' name='password' required onChange={(e=>{setPassword(e.target.value)})} />
          </div>

          <button type='submit' onClick={handleLogin}>Login</button>

        </form>

      </div>

    </div>
  )
}
