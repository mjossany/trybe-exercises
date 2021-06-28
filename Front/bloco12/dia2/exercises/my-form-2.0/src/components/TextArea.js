import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render () {
    const {
      textAreaName,
      textAreaLabel,
      textAreaValue,
      textAreaOnChange,
      textAreaLength,
      textAreaOnMouseEnter,
    } = this.props;
    return(
      <label>
        { textAreaLabel }
        <textarea
        name={ textAreaName }
        value={ textAreaValue }
        onChange={ textAreaOnChange }
        maxLength={ textAreaLength }
        onMouseEnter={ textAreaOnMouseEnter }
        required/>
      </label>
    )
  }
}

TextArea.propTypes = {
  textAreaName: PropTypes.string.isRequired,
  textAreaLabel: PropTypes.string.isRequired,
  textAreaValue: PropTypes.string.isRequired,
  textAreaOnChange: PropTypes.func.isRequired,
  textAreaLength: PropTypes.number,
  textAreaOnMouseEnter: PropTypes.func,
}

export default TextArea;