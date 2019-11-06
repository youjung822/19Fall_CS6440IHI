import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={'/newfoodplanner2frontend'}>
    <App />
  </Router>,
  document.getElementById('root')
);
