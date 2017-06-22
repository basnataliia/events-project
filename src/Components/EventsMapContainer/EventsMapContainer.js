import React from 'react';
import {PropTypes} from 'prop-types';
import MainGoogleMap from '../MainGoogleMap/MainGoogleMap';

export default function EventsMap({markers, currentLocation, handleMarkerClick}) {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <MainGoogleMap
        containerElement={<div style={{ height: '600px' }} />}
        mapElement={<div style={{ height: '600px' }} />}
        markers={markers}
        currentLocation={currentLocation}
        onMarkerClick={handleMarkerClick}
      />
    </div>
  );
}

EventsMap.propTypes = {
  markers: PropTypes.array,
  currentLocation: PropTypes.object,
  handleMarkerClick: PropTypes.func,
};
