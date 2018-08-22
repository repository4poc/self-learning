import React,{Component} from 'react'
import {connect} from 'react-redux';
import { removeCounter } from '../actions';
import { bindActionCreators } from 'redux';

class RemoveCounter extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <button onClick={(e) => {e.preventDefault();this.props.dispatch(removeCounter())}}>Remove</button>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(removeCounter, dispatch) }
}

export default connect(mapDispatchToProps)(RemoveCounter);
