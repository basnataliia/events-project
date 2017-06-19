
export const APP_KEY = '3RXRMbCtSm89nDRV';
const EVENTS_API_BASE_URL = 'http://api.eventful.com/json/events/';

export const GET_ALL_EVENTS = EVENTS_API_BASE_URL + `search?app_key=${APP_KEY}&date=Future` +
            `&image_sizes=perspectivecrop290by250&location=Toronto&page_size=100&where=43.650033099999995%252C%20-79.391594&within=25`;
