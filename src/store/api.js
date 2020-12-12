import axios from 'axios';
import { API_SERVER_URL } from '../constants';

axios.defaults.baseURL = API_SERVER_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosWrapper = apiCall => apiCall.then(res => res.data).catch(err => Promise.reject(err));

let API = {
  auth: {
    // Characters
    getCharacters: params => axiosWrapper(axios.get('/api/character/', { params: {...params} })),
    getEpisode: id => axiosWrapper(axios.get(`/api/episode/${id}`)),
  },
};

export { API };
