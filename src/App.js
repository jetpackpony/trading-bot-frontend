import React, { Component } from 'react';
import './App.css';
import Statistics from './Statistics';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Trading BTC/ETH</h1>
        </header>
        <div class="container-fluid">
          <Statistics text="test me baby"/>
        </div>
      </div>
    );
  }
}

export default App;
