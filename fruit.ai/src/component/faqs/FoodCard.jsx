import React from 'react';
import './foodcard.css';

const FoodCard = ({ image, name, title, desc }) => {
  return (
    <div className="food-card">
        

        <div className='left-side'>
            
            <img src={image} alt={name} className='fruit-image' />
            
            <div className="food-name">
                <h4>{name}</h4>
            </div>
        </div>

      <div className="right-side">
        <div className="title">
            <h1> {title} </h1>
        </div>

        <div className="desc">
            {desc}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;