import React, { useState, useEffect } from 'react';
import "../styles/Modal.css";

const Modal = ({ winningPlayer, modalOpen, setModal, gameReset }) => {
    const [winner, setWinner] = useState(3)

    useEffect(() => {
        let intervalId = setInterval(() => {
            setWinner(prev => prev-1);
        }, 1000);

        let timerId = setTimeout(() => {
            clearInterval(intervalId);
            setWinner(winningPlayer.toUpperCase())
        }, 3000)

        return (() => clearTimeout(timerId))
    }, []);

    const change = () => {
        setModal(prev => !prev);
        gameReset();
    }

    if (!modalOpen) return <></>

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <span> And the winner is..... {winner}</span>
                <span> Do you want to restart the game? </span>
                <span className='restart-options'>
                    <span onClick={change}> Yes </span>
                    <span onClick={() => setModal(prev => !prev)}> No </span>
                </span>
            </div>
        </div>
    );
}

export default Modal;