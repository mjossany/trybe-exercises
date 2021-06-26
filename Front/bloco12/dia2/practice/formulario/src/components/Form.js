import React from 'react';
import TimeFavorito from './TimeFavorito';
import EstadoTime from './EstadoTime';
import Campeao from './Campeao';

class Form extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      time: '',
      campeao: false,
      formularioComErros: false,
    }
  }

  handleErrors() {
    
  }
  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Formulário de Teste</h1>
        <form>
          <Campeao nameInput='campeao' checkedInput={this.state.campeao} onChangeInput={this.handleChange}/>
          <EstadoTime nameInput='estado' value={this.state.estado} onChangeInput={this.handleChange}/>
          <TimeFavorito value={this.state.time} onChangeInput={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default Form