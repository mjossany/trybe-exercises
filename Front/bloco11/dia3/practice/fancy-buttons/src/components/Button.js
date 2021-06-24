import React from 'react';


class Button extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { salute } = this.props
    console.log(salute);
  }
  render() {
    const { salute } = this.props
    return (
      <button onClick={this.handleClick}>{`Imprime ${salute}`}</button>
    )
  }
}

export default Button