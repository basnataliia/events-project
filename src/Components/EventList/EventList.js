import React from 'react';
import {PropTypes} from 'prop-types';
import EventItem from '../EventItem/EventItem';

const EventList = ({events}) => {
  // console.log('events', events);
  const list = events.map(event => {
    return <EventItem key={event.id} event={event}/>
  });

  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>{list}</div>
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList
