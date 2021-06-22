import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.poke
    return (
      <div>
        <h3>{ name }</h3>
        <p>{ type }</p>
        <p>Average Weight: { averageWeight.value } { averageWeight.measurementUnit }</p>
        <img src={ image } alt=""></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;