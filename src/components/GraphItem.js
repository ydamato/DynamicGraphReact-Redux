import React, { PropTypes } from 'react'

const Todo = ({ year, rank, rankRatio }) => {

  const MAX_HEIGHT = 100,
        MIN_HEIGHT = 5;

  let calculateHeight = (rank) => (rank * MAX_HEIGHT + MIN_HEIGHT);

  return (
	<div className="graph-item">
      <div className="graph-item-value">
        #{rank}
      </div>
      <div className="graph-item-rank" style={{height:calculateHeight(rankRatio)}}></div>
      <div className="graph-item-year">
        {year}
      </div>
    </div>
  )
}

Todo.propTypes = {
    year: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    rankRatio: PropTypes.number.isRequired
}

export default Todo
