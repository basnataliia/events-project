import {LOAD_EVENTS_SUCCESS,
         LOAD_EVENTS_ERROR}
         from '../Actions/ActionTypes';

const eventsInitialState = {
  events: [],
  error: undefined,
}

export const EventReducer = (state = eventsInitialState, action={}) => {
  switch(action.type){
    case LOAD_EVENTS_SUCCESS:
        return Object.assign({}, state, {events: action.payload});

    case LOAD_EVENTS_ERROR:
        return Object.assign({}, state, {error: action.payload});

    default:
        return state;
  }
}
