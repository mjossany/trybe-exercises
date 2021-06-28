import React from 'react';
import Input from './Input';
import inputsPessoais from '../inputsPessoais';
import states from '../estados'
import './PersonalData.css'
import PropTypes from 'prop-types';

class PersonalData extends React.Component {
  render() {

    const {
      estado,
      onChangeHandler,
      onBlurHandler,
    } = this.props;

    return(
      <fieldset className='fieldset-dados-pessoais'>
        <legend>Dados Pessoais:</legend>
        { inputsPessoais.map((input) =>
          <Input key={ input.name }
          inputLabel={ input.label }
          inputType={ input.type }
          inputName={ input.name }
          inputOnChange={ onChangeHandler }
          inputOnBlur={ onBlurHandler }
          inputValue={ estado[input.name] }
          inputMaxLength={ input.maxLength }
          inputRequired={ input.isRequired }
          />
        )}
        <label htmlFor='estado'>
          <select name='estado' onChange={ onChangeHandler }>
            {states.map((estado) => {
              const [ siglaENome ] = Object.entries(estado);
              return (
                <option key={ siglaENome[0] } value={ siglaENome[0] }>
                  { siglaENome[1] }
                </option>
              )
            })}
          </select>
        </label>
        <Input
          inputChecked={ true }
          inputLabel='Apartamento'
          inputType='radio'
          inputName='moradia'
          inputOnClick={ onChangeHandler }
          inputValue='Apartamento'
        />
        <Input
          inputLabel='Casa'
          inputType='radio'
          inputName='moradia'
          inputOnClick={ onChangeHandler }
          inputValue='Casa'
        />
      </fieldset>
    )
  }
}

PersonalData.propTypes = {
  estado: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
}

export default PersonalData