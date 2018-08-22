function appreducer(state = 0,action) {
  switch(action.type){
    case 'add':
      return state++;
    case 'sub':
      return state--
    default:
      return state;
  }
}

export default appreducer;
