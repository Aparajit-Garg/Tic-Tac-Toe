import React from 'react';
import "../styles/Card.css";

const Card = ({ handleClick, value }) => {

    return (
        <div className='card' onClick={handleClick} style={{color: value == 'x' ? '#ffa02e' : '#62fffc'}}>
            {value}
        </div>
    )
}

export default Card;