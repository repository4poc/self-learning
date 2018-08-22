import React, { Component } from 'react';
import './App.css';
import Counter from '../containers/Counter'
import AddCounter from '../containers/AddCounter'
import RemoveCounter from '../containers/RemoveCounter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        <AddCounter></AddCounter>
        <RemoveCounter></RemoveCounter>
      </div>
    );
  }
}

export default App;
