import React from 'react'
import style from "../styles/Login.module.css"

export default function Login() {
  return (
    <div className={style.container}>

      <div className={style.loginBox}>

        <span>Login</span>

        <form>

          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' name='username' />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id='password' name='password' />
          </div>

          <button type='submit'>Login</button>

        </form>

      </div>

    </div>
  )
}
