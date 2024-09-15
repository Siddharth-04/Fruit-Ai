import React from 'react';
import './about.css';
import { NavLink } from 'react-router-dom';

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Fruit AI</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>Fruit AI</strong>! Our platform provides comprehensive information about a variety of fruits. Whether you're curious about the health benefits, nutritional facts, or general knowledge of different fruits, Fruit AI has you covered. Our AI-powered solution ensures that you get accurate and detailed information on a wide range of fruits to help you make informed decisions about your diet.
        </p>
        <p>
          With our user-friendly interface, you can easily search for any fruit and get instant responses. Whether you’re looking for the best fruits to include in your diet or simply want to learn more about your favorites, Fruit AI is your go-to source!
        </p>

        <NavLink to="/home"><button
        style={{
          padding: '10px 20px',
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go back
      </button>
      </NavLink>
      </div>
    </div>
  );
};
