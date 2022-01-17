import React, { useState, useEffect } from 'react';
import { QuadradoButton, QuadradosContainer } from"./Quadrado.elements";
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

const Board = () => {
  const [boardState, setBoardState] = useState(Array(9).fill(null));
  const [playerI, setPlayerI] = useState('');
  const [playerXTurn, setPlayerXTurn] = useState(true);

  const handleClick = (e, index) => {
    // const quadrados = boardState.slice();
    const newArray = [...boardState];
    if (newArray[index]) return;
    newArray[index] = playerXTurn ? 'X' : 'O';
    socket.emit('updateArray', newArray);
    setPlayerXTurn(!playerXTurn);
    // return setBoardState(newArray);
  }

  useEffect(() => {
    socket.on('getArray', ({array, socketId}) => {
      setBoardState(array);
      setPlayerI(socketId);
    })
  }, []);

  socket.on('refreshBoard', (updatedArray) => {
    setBoardState(updatedArray);
  })

  return(
    <QuadradosContainer>
      {
        boardState.map((pos, index) => <QuadradoButton onClick={(e) => handleClick(e, index)}>{pos}</QuadradoButton>)
      }
    </QuadradosContainer>
  )
}

export default Board;