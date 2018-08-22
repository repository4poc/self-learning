import * as actionType from '../actions/ActionType'

//function counterReducer(state = 0,action){
//  switch(action.type){
//    case 'add':
//      return state;
//    default:
//      return state;
//  }
//}

const counterReducer = (state = 0,action) => {
  switch(action.type){
    case actionType.ADD_COUNTER:
      return state + 1;
    case actionType.REMOVE_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
