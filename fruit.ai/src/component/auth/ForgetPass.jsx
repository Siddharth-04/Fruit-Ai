import React from 'react'
import { NavLink } from 'react-router-dom'
import password_icon from "../../assets/password.png"
import './Signup.css'
export const ForgetPass = () => {
  return (
    <div>
        <div className='container'> 
          <div className="header">
            <div className="text">Reset Password</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">

            <div className="input">
              <img src={password_icon} alt="" srcset="" />
              <input type="password" placeholder='Enter new password'/>
            </div>

            <div className="input">
              <img src={password_icon} alt="" srcset="" />
              <input type="password" placeholder='Confirm new password'/>
            </div>

            <div className="submit-container">
              <NavLink to="/">
                <div className="submit">Back to Login Page</div>
              </NavLink>

            </div>
          </div>
        </div>
    </div>
  )
}
