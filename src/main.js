import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    return;
  }

  fetchImages(query)
    .then(renderImages)
    .catch(error => {
      console.error('Помилка при завантаженні зображень:', error);
    })
    .finally(() => {
      input.value = '';
      input.blur();
    });
});
