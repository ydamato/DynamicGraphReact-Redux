import { combineReducers } from 'redux'

const rankings = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      var stateCopy = state.slice(0);
      stateCopy.forEach((ranking) => {
        if(ranking.year === action.year) {
          ranking.rank = parseInt(action.value, 10);
        }
      });
      return stateCopy;
    default:
      return state
  }
}

const todoApp = combineReducers({
  rankings
})

export default todoApp
