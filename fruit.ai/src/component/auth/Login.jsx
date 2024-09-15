import React from 'react'
import './Signup.css'
import { ForgetPass } from './ForgetPass'
import { NavLink } from 'react-router-dom'
import email_icon from "../../assets/email.png"
import password_icon from "../../assets/password.png"
import {Signup} from './Signup'
export const LoginPage = () => {
  return (
    <div>
        <div className='container'> 
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">

            <div className="input">
              <img src={email_icon} alt="" srcset="" />
              <input type="email" placeholder='Email Id' />
            </div>

            <div className="input">
              <img src={password_icon} alt="" srcset="" />
              <input type="password" placeholder='Password'/>
            </div>
            <NavLink to="/forgetpass">
                <div className="forgot-password">Forget Password ?</div>
            </NavLink>
            <div className="submit-container">
              <NavLink to="/signup">
                <div className="submit">Signup</div>
              </NavLink>
              <NavLink to="/home">
                <div className="submit">Login</div>
              </NavLink>

            </div>
          </div>
        </div>
    </div>
  )
}
