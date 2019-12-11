import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.ebay.com/',
});

export default api;
