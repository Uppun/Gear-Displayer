import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GearPage from './components/GearPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GearPage />
      </div>
    );
  }
}

export default App;