import {GET_CURRENT_GEOLOCATION} from './ActionTypes';
import {apiCall} from '../Api/Api';
import {GOOGLE_API_BASE_URL} from '../Constants/api-url';

export function getLocationSuccess(location) {
  return {
    type: GET_CURRENT_GEOLOCATION,
    payload: location
  };
}

function getCityName(dispatch, latitude, longitude) {
  apiCall(GOOGLE_API_BASE_URL + latitude + ',' + longitude)
    .then(response => {
      if(response.results[1]) {
          let results = response.results[1];
          let res = results.address_components.filter(item => {
            return item.types.indexOf("postal_code") >= 0;
          });
        let postalCode = res[0].long_name;
        dispatch(getLocationSuccess(postalCode));
      } else {
        dispatch(getLocationSuccess('Toronto'));
      }
    })
    .catch(error => {
      console.log(error)
    })
}

//Thunk always returns a function that accepts a dispatch
export function getGeoLocation() {
  return function(dispatch) {
    if(navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const {latitude, longitude} = position.coords;
        getCityName(dispatch, latitude, longitude);
      });
    } else {
      dispatch(getLocationSuccess('Toronto'));
    }
  };
}
