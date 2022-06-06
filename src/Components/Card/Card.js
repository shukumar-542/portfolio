import React from 'react';
import './Card.css'

const Card = ({heart,heading,details}) => {
      return (
            <div className='card'>
                 <img src={heart} alt="" /> 
                 <span>{heading}</span>
                 <span>{details}</span>
                 <button className='c-button'>Show Details</button>
            </div>
      );
};

export default Card;