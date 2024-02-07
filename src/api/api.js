
import axios from 'axios';
const URL = `https://pixabay.com/api/`;
const API_KEY = '42110770-e5d9f58a0d862bfd05efded27';

export const onSearch = (name, page) => {
  const response = axios.get(`${URL}`, {
    params: {
      key: API_KEY,
      q: name,
      page: `${page}`,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  console.log(response);
  return response;
};