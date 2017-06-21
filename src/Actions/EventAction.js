import {LOAD_EVENTS_SUCCESS,
        LOAD_EVENTS_ERROR,
        GET_EVENT_BY_ID
        } from './ActionTypes';
import {apiCall} from '../Api/Api';
import {GET_ALL_EVENTS, GET_EVENT_BY_ID_URL} from '../Constants/api-url';

export function loadEvents(param) {
  return function loadAllEvents(dispatch) {
    apiCall(GET_ALL_EVENTS + param)
      .then(response => {
        const respWithImages = response.events.event.filter(event => {
          if(event.image) {
            return event;
          }
        });
        dispatch({
          type: LOAD_EVENTS_SUCCESS,
          payload: respWithImages
        })
      })
        //on error dispatch an error
      .catch(error => dispatch({
        type: LOAD_EVENTS_ERROR,
        payload: error
      }))
  };
}

export function getEventSuccess(recipe) {
  return {
    type: GET_EVENT_BY_ID,
    payload: recipe,
  };
}

export function GetEventById(eventId) {
  return dispatch => {
    debugger;
    const url = GET_EVENT_BY_ID_URL + eventId;
    console.log('url', url);
    apiCall(url)
      .then(response => {
        debugger;
        dispatch(getEventSuccess(response));
      })
      .catch(error => {
        throw (error);
      });
  };
}
