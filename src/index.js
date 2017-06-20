import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {Router, Route} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory';
import Home from './Containers/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/ConfigureStore';
import './index.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter history="createHistory">
          <Route path='/' component={Home}/>
      </BrowserRouter>
   </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
