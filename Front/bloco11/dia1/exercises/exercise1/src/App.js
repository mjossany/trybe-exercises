import React, { Component } from 'react';
import Task from './components/Task';

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => <Task item={tarefa} src='xablau' />) }</ul>
    );
  }
}

export default App;