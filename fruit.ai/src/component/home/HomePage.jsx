import React from 'react'
import './home.css'
import google_icon from "../../assets/google_image.png"
import { NavLink } from 'react-router-dom'
export const HomePage = () => {
  return (
    <div className='outside-container'>
        <div className="container">
            <h1 className="header">Fruit.Ai</h1>

            <p className="subheading">"Be Healthy"</p>

            <div className="button-container">
                <NavLink to="/chat" className="nav-link">
                    <div className="div-chat">Chat.</div>
                </NavLink>

                <div className="div-google-div">
                    <NavLink to="/translate">
                        <img src={google_icon} alt="Google Logo" className="google-image" />
                    </NavLink>
                </div>
                <NavLink to="/faqs" className="nav-link">
                    <div className="div-faq">FAQs</div>
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    <div className="div-about">About</div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
