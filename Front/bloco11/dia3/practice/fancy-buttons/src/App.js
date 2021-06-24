import './App.css';
import React from 'react';
import Button from './components/Button';

const arr = ['Oi', 'Hi', 'Hola']

class App extends React.Component {
  render() {
    return (
    arr.map((greeting, index) => <Button key={index} salute={greeting}/>)
    )
  }
}

export default App;
