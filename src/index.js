import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {Router, Route} from 'react-router';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Router, Route, browserHistory} from 'react-router';
// import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory';
import Home from './Containers/Home/Home';
// import App from './Store/App';
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
