import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from '@aws-amplify/core'
import config from './aws-exports'
import { BrowserRouter as Router } from 'react-router-dom'

import { RootCmp } from './root-cmp.jsx'
import './styles.scss';

Amplify.configure(config)



ReactDOM.render(
  <React.StrictMode>
      <Router> 
        <RootCmp />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


