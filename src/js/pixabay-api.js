import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50197022-5c303e37ac1e7741936867a9a';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
};

export async function getImagesByQuery(query, page) {
  const response = await axios.get('', { params: { q: query, page: page } });
  return response.data;
}

// export async function getImagesByQuery(query) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '50197022-5c303e37ac1e7741936867a9a';

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   const response = await fetch(`${BASE_URL}?${params}`);

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   const data = await response.json();
//   return data.hits;
// }
