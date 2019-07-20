import React, { Component } from 'react';
import './App.css';
import GearPage from './components/GearPage';
import Landing from './components/Landing';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/build/:buildId' component={GearPage} />
        </Switch>
      </div>
    );
  }
}

export default App;