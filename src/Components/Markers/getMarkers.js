import {PropTypes} from 'prop-types';

const getMarkers = (events) => {
  return events.map((event, index)=> {
    return {
      position: {
        lat: Number(event.latitude),
        lng: Number(event.longitude),
      },
      key: index,
      defaultAnimation: 2,
      showInfo: event.showInfo,
      title: event.title,
      id: event.id,
    };
  });
}

getMarkers.propTypes = {
  events: PropTypes.array.isRequired,
};

export default getMarkers
