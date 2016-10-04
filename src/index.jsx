import React from 'react';
import ReactDOM from 'react-dom';
import GraphApp from './components/GraphApp';

//var data = require("json!./data.json");
import data from 'json!./data.json';
import './main.less'

ReactDOM.render(
  <GraphApp data={data} />,
  document.getElementById('app')
);