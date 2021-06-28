import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render () {
    const { 
      inputLabel,
      inputType, 
      inputName, 
      inputOnChange,
      inputOnBlur,
      inputOnClick, 
      inputValue, 
      inputMaxLength,
      inputChecked,
      inputRequired,
    } = this.props;
    return(
      <label htmlFor={ inputName }>
        { inputLabel }
        <input
        type={ inputType }
        name={ inputName }
        onChange={ inputOnChange }
        onBlur={ inputOnBlur }
        onClick={ inputOnClick }
        value={ inputValue }
        maxLength={ inputMaxLength }
        defaultChecked={ inputChecked }
        required={ inputRequired }
        />
      </label>
    )
  }
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func,
  inputOnClick: PropTypes.func,
  inputOnBlur: PropTypes.func,
  inputValue: PropTypes.string,
  inputMaxLength: PropTypes.number,
  inputChecked: PropTypes.bool,
  inputRequired: PropTypes.bool,
}

export default Input;