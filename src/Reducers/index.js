import {combineReducers} from 'redux';
// import { routerReducer } from 'react-router-redux';
import {EventReducer} from './EventReducer';

const rootReducer = combineReducers({
  // routing: routerReducer,
  events: EventReducer,
});

export default rootReducer;
