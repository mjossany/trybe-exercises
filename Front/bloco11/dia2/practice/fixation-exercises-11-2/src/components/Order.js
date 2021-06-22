// arquivo Order.js
import React, { Component } from 'react';

class Order extends Component {
  render() {
    const { user, product, price } = this.props.order;
    const index = this.props.chave

    return (
      <li key={ index }> {user} bought {product} for {price.value} {price.currency} </li>
    );
  }
}

export default Order;