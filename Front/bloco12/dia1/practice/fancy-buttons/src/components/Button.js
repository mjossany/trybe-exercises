import React from 'react';
class Button extends React.Component {
  constructor() {
    super()
    this.countClick = this.countClick.bind(this)
    this.paintButton = this.paintButton.bind(this)
    this.state = {
      numeroDeCliques: 0,
      backgroundColor: 'white'
    }
  }
  countClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }), () => {
      this.paintButton();
    })
  }
  
  paintButton () {
    const { numeroDeCliques, backgroundColor} = this.state
    if (numeroDeCliques % 2 === 0 && numeroDeCliques !== 0 ) {
    this.setState({backgroundColor: 'green'}, () => console.log(backgroundColor))
    } else {
    this.setState({backgroundColor: 'white'}, () => console.log(backgroundColor))
    }
  }

    render() {
      return (
      <button onClick={this.countClick} style={{ background: this.state.backgroundColor }}>{this.state.numeroDeCliques}</button>
    ) 
  }
}

export default Button