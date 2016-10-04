import { combineReducers } from 'redux'
import {calculateRankRatio, getMaxRank} from '../helpers/ranking'

const rankings = (state = [], action) => {
  switch (action.type) {

    case 'CHANGE_VALUE':

      let stateCopy = state.slice(0),
          maxRank;

      stateCopy.forEach((ranking) => {
        if(ranking.year === action.year) {
          ranking.rank = parseInt(action.value, 10);
        }
      });

      maxRank = getMaxRank(state);

      stateCopy.forEach((ranking) => {
        ranking.rankRatio = calculateRankRatio(ranking.rank, maxRank);
      });

      return stateCopy;

    default:
      return state
  }
}

const rankingApp = combineReducers({
  rankings
})

export default rankingApp
