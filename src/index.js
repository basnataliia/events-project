import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Containers/Home/Home';
import EventDetails from './Containers/EventDetails/EventDetails';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/ConfigureStore';
import './index.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path='/' component={Home}/>
        <Route name="EventDetails" path="/EventDetails/:id" component={EventDetails} />
      </Router>
   </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
