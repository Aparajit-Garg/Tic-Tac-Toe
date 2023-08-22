import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../styles/Board.css'

const Board = () => {
    const initialState = Array(9).fill(null)
    const [xTurn, setXTurn] = useState(true);
    const [turns, setTurns] = useState(initialState);
    
    const markCard = cardNo => {
        if (turns[cardNo])
            return;
        
        if (xTurn) {
            setTurns(prev => {
                let newArr = prev
                newArr[cardNo] = 'X'

                return newArr
            });
            setXTurn(prev => !prev);
        }
        else {
            setTurns(prev => {
                let newArr = prev;
                newArr[cardNo] = 'O'
                return newArr;
            });
            setXTurn(prev => !prev);
        }
    }

    const resetGame = () => {
        setXTurn(true);
        setTurns(initialState);
    }

    return (
        <div className='board'>
            TIC-TAC-TOE
            <button onClick={resetGame}> Reset Game </button>
            <div className='board-row'>
                <Card handleClick={() => markCard(0)} value={turns[0]} />
                <Card handleClick={() => markCard(1)} value={turns[1]} />
                <Card handleClick={() => markCard(2)} value={turns[2]} />
            </div>
            <div className='board-row'>
                <Card handleClick={() => markCard(3)} value={turns[3]} />
                <Card handleClick={() => markCard(4)} value={turns[4]} />
                <Card handleClick={() => markCard(5)} value={turns[5]} />
            </div>
            <div className='board-row'>
                <Card handleClick={() => markCard(6)} value={turns[6]} />
                <Card handleClick={() => markCard(7)} value={turns[7]} />
                <Card handleClick={() => markCard(8)} value={turns[8]} />
            </div>
            <div className='player-turn'>
                <span style={{backgroundColor: xTurn ? 'green' : ''}}> X </span>
                <span style={{backgroundColor: !xTurn ? 'green' : ''}}> O </span>
            </div>
        </div>
    )
}

export default Board;