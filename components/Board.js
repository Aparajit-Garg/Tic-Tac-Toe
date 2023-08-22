import React, {useState, useEffect} from 'react';
import Card from './Card';
import '../styles/Board.css'

const Board = () => {
    const initialState = Array(9).fill(null)
    const [xTurn, setXTurn] = useState(true);
    const [turns, setTurns] = useState(initialState);
    const [winner, setWinner] = useState(null)
    const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

    useEffect(() => {checkWinner()}, [xTurn])
    
    const markCard = cardNo => {
        console.log(winner)
        if (turns[cardNo] || winner)
            return;
        
        if (xTurn) {
            setTurns(prev => {
                let newArr = prev
                newArr[cardNo] = 'x'

                return newArr
            });
            setXTurn(prev => !prev);
        }
        else {
            setTurns(prev => {
                let newArr = prev;
                newArr[cardNo] = 'o'
                return newArr;
            });
            setXTurn(prev => !prev);
        }
    }

    const checkWinner = () => {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (turns[a] && (turns[a] == turns[b]) && (turns[a] == turns[c])) {
                setWinner(!xTurn ? 'x' : 'o')
            }
        }
    }

    const resetGame = () => {
        setXTurn(true);
        setTurns(initialState);
        setWinner(null)
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
                <span> Turn : </span>
                <span className={xTurn ? 'right' : ''} style={{color: xTurn ? (winner ? (winner === 'x' ? '#ffa02e' : '#62fffc') : '#ffa02e') : '#fff', display: xTurn ? 'flex' : 'none'}}> { !winner ? 'X' : winner.toUpperCase() + ' won.'} </span>
                <span className={!xTurn ? 'left' : ''} style={{color: !xTurn ? (winner ? (winner === 'o' ? '#62fffc' : '#ffa02e') : '#62fffc') : 'fff', display: !xTurn ? 'flex' : 'none'}}> { !winner ? 'O' : winner.toUpperCase() + ' won'} </span>
            </div>
        </div>
    )
}

export default Board;