import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser} from '../actions'
import {bindActionCreators} from 'redux'

class UserList extends Component {

  constructor(props){
    super(props)
  }

  createListItems(){
    return this.props.users.map((user) => {
    return (
      <li key={user.id}
      onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</li>
    )
    }
    )
  }

  render(){
    return(
    <div>
      {this.createListItems()}
    </div>
  );
  }
}

function mapStateToProps(state){
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);