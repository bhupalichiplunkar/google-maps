import React, { Component } from 'react';
import logo from './logo.svg';
import GoogleMaps from './maps';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A simple react Google map Component</h1>
        </header>
        <p> Pincode : N21 2EG</p>
        <GoogleMaps pincode="N21 2EG"/>
      </div>
    );
  }
}

export default App;
