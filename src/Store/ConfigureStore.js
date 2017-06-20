import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(ReduxThunk, logger));
}
