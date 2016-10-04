import React, { PropTypes } from 'react'
import GraphItem from './GraphItem'

const Graph = ({ rankings }) => (
  <div className="graph">
    {rankings.map(ranking =>
      <GraphItem
        key={ranking.year}
        {...ranking}
      />
    )}
  </div>
)

Graph.propTypes = {
  rankings: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Graph
