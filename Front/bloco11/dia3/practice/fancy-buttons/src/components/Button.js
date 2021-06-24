import React from 'react';


class Button extends React.Component {
  render() {
    const { salute } = this.props
    const handleClick = () => console.log(salute);
    return (
      <button onClick={handleClick}>{`Imprime ${salute}`}</button>
    )
  }
}

export default Button