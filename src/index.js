import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {calculateRankRatio, getMaxRank} from './helpers/ranking'

import initialState from './data/initialState'

  let maxRank = getMaxRank(initialState.rankings);

  initialState.rankings.forEach((ranking) => {
    ranking.rankRatio = calculateRankRatio(ranking.rank, maxRank);
  });


const store = createStore(reducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
