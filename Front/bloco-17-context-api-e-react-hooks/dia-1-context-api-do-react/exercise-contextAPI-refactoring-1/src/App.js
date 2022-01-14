import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }
  
  moveCar(car) {
    this.setState((prevState) => ({
      ...prevState,
      [car]: !prevState[car]
    }))
  }

  render() {
    const contextValue = {
      cars: this.state,
      moveCar: this.moveCar
    }

    return (
      <MyContext.Provider value={contextValue}>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
