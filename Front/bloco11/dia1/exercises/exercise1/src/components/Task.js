import React, {Component} from 'react';

class Task extends Component {
  render() {
    return (
      <li>{this.props.src}, {this.props.item}</li>
    );
  }
}

export default Task;