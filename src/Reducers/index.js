import {combineReducers} from 'redux';
// import { routerReducer } from 'react-router-redux';
import {EventReducer} from './EventReducer';
// import {GeolocationReducer} from './GeolocationReducer';

const rootReducer = combineReducers({
  // routing: routerReducer,
  events: EventReducer,
  // currentLocation: GeolocationReducer,
});

export default rootReducer;
