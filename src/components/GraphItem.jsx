import React from 'react';

export default React.createClass({

  render: function() {
    return <div className="graph-item">
      <div className="graph-item-value">
        #{this.props.data.rank}
      </div>
      <div className="graph-item-rank" style={{height:this.props.data.rank}}></div>
      <div className="graph-item-year">
        {this.props.data.year}
      </div>
    </div>;
  }
});