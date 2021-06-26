import React from 'react';

class EstadoTime extends React.Component {
  render () {
    const { nameInput, value, onChangeInput } = this.props;
    let error = undefined
    if(value !== 'California') error = 'Wrong State'
    return (
      <label>
        <select name={ nameInput } value={ value } onChange={ onChangeInput }>
          <option>California</option>
          <option>Flórida</option>
          <option>Texas</option>
        </select>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default EstadoTime