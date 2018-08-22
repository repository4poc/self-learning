import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class UserDetails extends Component {

  constructor(props){
    super(props)
  }

  render(){
    if(!this.props.activeuser){
      return(<h2>Select a User...</h2>)
    }
    return(
    <div>
      <h2>{this.props.activeuser.first} {this.props.activeuser.last} {this.props.activeuser.age}</h2>
    </div>
  );
  }
}

function mapStateToProps(state){
  return {
    activeuser: state.activeuser,
  };
}


export default connect(mapStateToProps)(UserDetails);
