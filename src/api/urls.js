// is Development

const isDevelopment = window.location.hostname === 'localhost';

const DEVELOPMENT_URL = 'http://localhost:3001/';
const LIVE_URL = '/';
export const BASE_URL = isDevelopment? DEVELOPMENT_URL : LIVE_URL;