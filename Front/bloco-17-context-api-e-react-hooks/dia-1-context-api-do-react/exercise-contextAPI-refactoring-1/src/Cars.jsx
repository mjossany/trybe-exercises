import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './MyContext';

class Cars extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ cars, moveCar }) => (
          <div>
            <div>
              <img
                className={cars.redCar ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => moveCar('redCar')}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={cars.blueCar ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => moveCar('blueCar')}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={cars.yellowCar ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => moveCar('yellowCar')}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

export default Cars;
