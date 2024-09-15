import React from 'react'
import './Signup.css'
import { NavLink } from 'react-router-dom'
import user_icon from "../../assets/person.png"
import email_icon from "../../assets/email.png"
import password_icon from "../../assets/password.png"
export const Signup = () => {
  return (
    <div>
        <div className='container'> 
          <div className="header">
            <div className="text">Signup</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" srcset="" />
              <input type="text" placeholder='Enter your name' />
            </div>

            <div className="input">
              <img src={email_icon} alt="" srcset="" />
              <input type="email" placeholder='Email Id' />
            </div>

            <div className="input">
              <img src={password_icon} alt="" srcset="" />
              <input type="password" placeholder='Password'/>
            </div>
            <div className="submit-container">
            <NavLink to="/home"><div className="submit">Register and Login</div>
            </NavLink>
            </div>
          </div>
        </div>
        
    </div>
  )
}
