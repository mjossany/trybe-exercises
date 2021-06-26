import React from 'react';

class TimeFavorito extends React.Component {
  render() {
    const { value, onChangeInput } = this.props;
    let error = undefined
    if(value.length > 50) error = "Texto muito grande"
    if(value !== 'Golden State Warriors') error = "Not from Cali"
    return (
      <label>
        <textarea 
          name='time'
          value={ value }
          onChange= { onChangeInput }
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default TimeFavorito