import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      articles : [{id: 1, title: "Article1"},{id: 2, title: "Article2"}]
    }

    this.addValue = this.addValue.bind(this)
    this.subValue = this.subValue.bind(this)
  }

  addValue(){
    this.props.store.dispatch({type:'add'});
    document.getElementById('total').innerHTML = this.props.state
    //alert("Store Value  :"+ this.props.state);
  }

  subValue(){
      this.props.store.dispatch({type:'sub'});
      document.getElementById('total').innerHTML = this.props.state
      //alert("Store Value  :"+ this.props.state);
  }

  render() {
    return (
      <div className="App">
          <div>
            <ul>
              {this.state.articles.map(element => <li key={element.id}>{element.title}</li>)}
            </ul>
          </div>
          Total: <span id="total">0</span><br></br>
          <button onClick={this.addValue}>ADD</button>
          <button onClick={this.subValue}>Subtract</button>
      </div>
    );
  }
}

export default App;
