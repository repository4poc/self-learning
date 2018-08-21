import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
  }

  getFullName(){
    return <div> Hello {this.props.fname} {this.props.lname} </div>
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.fname} {this.props.lname}</h1>
        <h1> {this.getFullName()}</h1>
      </div>
    );
  }
}

App.defaultProps = {fname:'default_fname',lname:'default_lname'}

export default App;
