import React, { Component } from 'react';
import './App.css';
import UserList from '../containers/UserList'
import UserDetails from '../containers/UserDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Users</h2>
        <UserList></UserList>
        <hr/>
        <h2>User Details</h2>
        <UserDetails></UserDetails>
      </div>
    );
  }
}

export default App;
