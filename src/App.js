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
          <Statistics
            startAt={Date.now()}
            profitTotal={0.143245}
            profit24={-0.01124}
            currentDealProfit={0.0}
          />
        </div>
      </div>
    );
  }
}

export default App;
