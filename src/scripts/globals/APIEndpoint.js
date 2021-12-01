import CONFIG from './Config';

const API_ENDPOINT = {
  LISTRESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SENDREVIEW: `${CONFIG.BASE_URL}review`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
};

export default API_ENDPOINT;
