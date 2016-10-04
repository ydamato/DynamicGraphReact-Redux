import React, { PropTypes } from 'react'

const Todo = ({ year, rank }) => (
	<div className="graph-item">
      <div className="graph-item-value">
        #{rank}
      </div>
      <div className="graph-item-rank" style={{height:rank}}></div>
      <div className="graph-item-year">
        {year}
      </div>
    </div>
)

Todo.propTypes = {
    year: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
}

export default Todo
