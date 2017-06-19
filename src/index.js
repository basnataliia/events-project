import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from './Containers/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter history="createHistory">
      <Route path='/' component={Home}/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
