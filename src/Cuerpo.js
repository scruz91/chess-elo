import React from 'react';
import './App.css';
import { Component } from 'react';

class Saludo extends Component {
    
    render() {
      return <h1>{this.props.greeting}</h1>;
    }
  }
  
  export default Saludo;

