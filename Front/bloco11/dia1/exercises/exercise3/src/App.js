import React, { Component } from 'react'
import './App.css';
import List from './components/List';

const listItens = ['Acordar', 'Fazer a cama', 'Escovar os dentes', 'Tomar café da manhã', 'Orar'];

class App extends Component {
  render() {
    return (
      <div>
        {/*Just adding a comment for tests */}
        <h1>Rotina</h1>
        <p>To-do list</p>
        <ul>{ listItens.map((item) => <List itens={item} />) }</ul>
      </div>
    )
  }
}

export default App;
