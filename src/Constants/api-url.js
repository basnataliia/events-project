
export const APP_KEY = '3RXRMbCtSm89nDRV';
const EVENTS_API_BASE_URL = 'http://api.eventful.com/json/events/';
const GOOGLE_API_KEY = 'AIzaSyDbAgr7WAxWvOPGf4XxE4YrUustue_tuRs'
export const GOOGLE_API_BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}&latlng=`;
export const GET_ALL_EVENTS = EVENTS_API_BASE_URL + `search?app_key=${APP_KEY}&date=Future` +
            `&image_sizes=perspectivecrop290by250&page_size=100&within=25&location=`;
