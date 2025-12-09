import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

  const [action, setAction] = useState('Sign Up');


  function handleAction() {
    setAction(action === 'Sign Up' ? 'Login' : 'Sign Up')
  }


  return (
    <>
      <div className="container">

        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {
            action === 'Login' ? null : 
            <div className="input">
              <i className="bi bi-person-fill"></i>
              <input type="text" placeholder='User name'/>
            </div>
          }

          <div className="input">
            <i className="bi bi-envelope-fill"></i>
            <input type="email" placeholder='Email'/>
          </div>

          <div className="input">
            <i className="bi bi-lock-fill"></i>
            <input type="password" placeholder='Password'/>
          </div>
        </div>

        {action === 'Sign Up' ? null : <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}


        <div className="submit-container">
          <button className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>Sign Up</button>
          <button className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>Login</button>
        </div>
      </div>
    </>
  )
}

export default LoginSignup
