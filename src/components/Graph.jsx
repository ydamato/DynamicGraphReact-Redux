import React from 'react';
import GraphItem from './GraphItem';

export default React.createClass({
  getRankings: function() {
    return this.props.data.filter((itemA, itemB) => itemA.sort < itemB.sort ? -1 : 1);
  },
  render: function() {
    return <div className="graph">
      {this.getRankings().map(entry => 
        <GraphItem key={entry.sort} data={entry}/>
      )}
    </div>;
  }
});