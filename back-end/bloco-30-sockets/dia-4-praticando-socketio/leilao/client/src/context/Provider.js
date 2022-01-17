import React, { useState, useCallback, useEffect } from 'react';
import Context from './Context';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Provider = ({ children }) => {
  const [cellphonePrice, setCellPhonePrice] = useState(0);
  const [tvPrice, setTvPrice] = useState(0);
  const [notebookPrice, setNotebookPrice] = useState(0);
  const [cellphoneButton, setCellphoneButton] = useState("Dar um lance");
  const [cellphoneDisabled, setCellphoneDisabled] = useState(false);
  const [tvButton, setTvButton] = useState("Dar um lance");
  const [tvDisabled, setTvDisabled] = useState(false);
  const [notebookButton, setNotebookButton] = useState("Dar um lance");
  const [notebookDisabled, setNotebookDisabled] = useState(false);

  const increaseCellphonePrice = () => {
    if (cellphonePrice < 100) socket.emit('updateCellphonePrice', { cellphonePrice });
  };

  socket.on('updateCellPhonePriceAll', (newCellphonePrice) => {
    setCellPhonePrice(newCellphonePrice);
  });

  const contextValue = {
    cellphonePrice,
    increaseCellphonePrice,
    tvPrice,
    setTvPrice,
    notebookPrice,
    setNotebookPrice,
    cellphoneButton,
    setCellphoneButton,
    cellphoneDisabled,
    setCellphoneDisabled,
    tvButton,
    setTvButton,
    tvDisabled,
    setTvDisabled,
    notebookButton,
    setNotebookButton,
    notebookDisabled,
    setNotebookDisabled
  };

  return(
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
};

export default Provider;