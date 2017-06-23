import React from 'react';
import {Link} from 'react-router';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';

const MainGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
    {props.markers.map(marker => {
      return (
        <Marker
            {...marker}
            onClick={() => props.onMarkerClick(marker.id, true)}
            >
              {marker.showInfo && (
              <InfoWindow onCloseClick={() => props.onMarkerClick(marker.id, false)}>
                <Link to={'/EventDetails/' + marker.id}>
                  <div>{marker.title}</div>
                </Link>
              </InfoWindow>
              )}
          </Marker>
        )
    })}
  </GoogleMap>
));

MainGoogleMap.propTypes = {
  markers: React.PropTypes.array,
  currentLocation: React.PropTypes.object,
  handleMarkerClick: React.PropTypes.func,
};

export default MainGoogleMap;
