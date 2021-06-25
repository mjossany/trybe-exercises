import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      timeFavorito: '',
    }
  }
  handleChange(e) {
    this.setState({
        timeFavorito: e.target.value,
    })
  }
  render () {
    return (
      <div>
        <h1>Formulário de Testes</h1>
        <form>
          <select></select>
          <input type='text'/>
          <input type='checkbox'/>
          <textarea value={this.state.timeFavorito} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default Form