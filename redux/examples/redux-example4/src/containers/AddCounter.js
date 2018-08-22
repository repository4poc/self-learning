import React,{Component} from 'react'
import * as actionType from '../actions/ActionType';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCounter } from '../actions';

class AddCounter extends Component {

  constructor(props){
    super(props)
    //this.add = this.add.bind(this)
  }

  render(){
    return(
      <button onClick={(e) => {e.preventDefault();this.props.dispatch(addCounter())}}>ADD</button>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {actions : bindActionCreators(addCounter, dispatch) }
}

export default connect(mapDispatchToProps)(AddCounter);
