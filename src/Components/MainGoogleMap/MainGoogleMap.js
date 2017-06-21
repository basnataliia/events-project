import  { default as React }  from 'react';
import {Link} from 'react-router';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const MainGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    defaultCenter={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        >
          {marker.showInfo && (
          <InfoWindow>
            <Link to={'/EventDetails/' + marker.id}>
              <div>{marker.title}</div>
            </Link>
          </InfoWindow>
          )}
      </Marker>
    ))}
  </GoogleMap>
));

export default MainGoogleMap;
