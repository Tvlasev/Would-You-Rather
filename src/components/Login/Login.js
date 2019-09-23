import React, { Fragment } from 'react'
import './Login.css'

const Login = () => {
  return(
    <Fragment>
      <div className='login-box'>
        <h1>Welcome! Please Sign in to your account</h1>
        <select className='users-dropdown'>
          <option value="move" disabled>Select a user</option>
          <option value="username">username 1</option>
        </select>
        <div className='login-button'>
          <button>Login</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Login