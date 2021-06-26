import React from 'react';

class Campeao extends React.Component {
  render () {
    const { nameInput, checkedInput, onChangeInput } = this.props;
    return (
      <label>
        <input name={ nameInput } type='checkbox' checked={ checkedInput } onChange={ onChangeInput }/>
      </label>
    )
  }
}


export default Campeao