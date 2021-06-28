import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h1>Fomulario para C.V:</h1>
        <Form />
      </div>
    );
  }
}

export default App;