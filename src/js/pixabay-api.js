import axios from 'axios';
import { handleError } from './render-functions';

const API_KEY = '49574533-99195dbfc8ece3e2fce047715';
const BASE_URL = 'https://pixabay.com/api/';

const PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

function fetchImages(query) {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex';

  return axios
    .get(BASE_URL, {
      params: { ...PARAMS, q: query },
    })
    .then(response => response.data)
    .catch(() => handleError('Щось пішло не так 😢'))
    .finally(() => {
      loader.style.display = 'none';
    });
}

export { fetchImages };