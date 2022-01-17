import React from 'react';
import MainScreen from './components/MainScreen';
import Provider from './context/Provider';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <Provider>
      <>
        <GlobalStyle />
        <MainScreen />
      </>      
    </Provider>
  );
}

export default App;
