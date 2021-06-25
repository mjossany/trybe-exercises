import React from 'react';

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {

    }
  }
  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    })
  }
  render () {
    return (
      <div>
        <h1>Formulário de Testes</h1>
        <form>
          <label>
            <select
              name='estado'
              value={this.state.estado}
              onChange={this.handleChange}
            >
              <option>Flórida</option>
              <option>California</option>
              <option>Texas</option>
            </select>
          </label>
          <label>
            <input name='cidade' value={this.state.cidade} onChange ={this.handleChange} type='text'/>
            <input name='campeão' value={this.state.campeão} onChange ={this.handleChange} type='checkbox'/>
            <input type='file'/>
          </label>
          <label>
            <textarea name='time' checked={this.state.time} onChange={this.handleChange}/>
          </label>    
        </form>
      </div>
    )
  }
}

export default Form