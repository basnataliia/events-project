import {combineReducers} from 'redux';
import {EventReducer} from './EventReducer';

const rootReducer = combineReducers({
  events: EventReducer,
});

export default rootReducer;
