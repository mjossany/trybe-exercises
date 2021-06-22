import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.usuario.name} </p>
        <p> {this.props.usuario.email} </p>
        <Image source={this.props.usuario.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;

