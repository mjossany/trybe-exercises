import React, { useState, useEffect, useCallback } from 'react';
import Context from './Context';

const Provider = ({ children }) => {

  const contextValue = {};

  return(
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
};