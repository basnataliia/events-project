import {LOAD_EVENTS_SUCCESS, LOAD_EVENTS_ERROR} from './ActionTypes';
import {apiCall} from '../Api/Api';
import {GET_ALL_EVENTS, APP_KEY} from '../Constants/api-url';

export function loadEvents(param) {
  return function loadAllEvents(dispatch) {
    apiCall(GET_ALL_EVENTS)
      .then(response => dispatch({
        type: LOAD_EVENTS_SUCCESS,
        payload: response.events.event
      }))
        //on error we dispatch an error
      .catch(error => dispatch({
        type: LOAD_EVENTS_ERROR,
        payload: error
      }))
  };
}
