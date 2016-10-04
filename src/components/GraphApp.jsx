import React from 'react';
import Graph from './Graph';
import GraphUpdate from './GraphUpdate';

export default React.createClass({

  getYears: function(data) {
  console.log(data);
    return data.map(item => item.year);
  },

  render: function() {
    var data = this.props.data;

    return <div>
      <Graph data={data.rankings} />
      <GraphUpdate years={this.getYears(data.rankings)} />
    </div>;
  }
});