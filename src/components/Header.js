import React from 'react';
import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Ganador : {this.props.J1Result}</h1>
        <h1>Perdedor : {this.props.J2Result}</h1>
      </div>
    );
  }
}
