import {LOAD_EVENTS_SUCCESS,
        LOAD_EVENTS_ERROR,
        GET_CURRENT_GEOLOCATION,
        GET_EVENT_BY_ID,
        }
        from '../Actions/ActionTypes';

const eventsInitialState = {
  events: [],
  error: undefined,
  location: {},
  loaded: false,
  eventDetails: {},
}

export const EventReducer = (state = eventsInitialState, action={}) => {
  switch(action.type){
    case LOAD_EVENTS_SUCCESS:
        return Object.assign({}, state, {events: action.payload, loaded: true});
    case LOAD_EVENTS_ERROR:
        return Object.assign({}, state, {error: action.payload});
    case GET_CURRENT_GEOLOCATION:
        return Object.assign({}, state, {location: action.payload});
    case GET_EVENT_BY_ID:
        return Object.assign({}, state, {eventDetails: action.payload});
    default:
        return state;
  }
}
