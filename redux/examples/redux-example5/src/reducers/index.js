import {combineReducers} from 'redux';
import userreducer from './reducer-users';
import activeuserreducer from './active-user-reducer'

const allReducers = combineReducers({users: userreducer,activeuser: activeuserreducer});

export default allReducers;
