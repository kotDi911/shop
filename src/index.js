import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import RouterApp from './router/RouterApp.jsx';
import {HashRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <RouterApp />
      </Router>
  </React.StrictMode>
);
