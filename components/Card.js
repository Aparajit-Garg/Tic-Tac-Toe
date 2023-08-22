import React from 'react';
import "../styles/Card.css";

const Card = ({ handleClick, value }) => {

    return (
        <div className='card' onClick={handleClick}>
            {value}
        </div>
    )
}

export default Card;