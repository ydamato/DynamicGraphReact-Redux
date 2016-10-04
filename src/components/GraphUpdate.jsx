import React from 'react';
import GraphItem from './GraphItem';

export default React.createClass({
  render: function() {
    var years = this.props.years;

    return <form className="graph-update">
      <div>Change value:</div>
      <select name="year" className="graph-update-year">
      {years.map((year, index) => 
        <option value="{year}" key={index}>{year}</option>
      )}
      </select>
      <label htmlFor="newValue">new value: </label>
      <input type="number" min="1" max="1000" placeholder="0"/>
      <input type="submit" value="Change" />
    </form>;
  }
});