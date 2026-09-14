import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export function requestCharacters({ name, status, species, page }) {
  return apiClient.get('/character', {
    params: {
      page,
      name: name.trim() || undefined,
      status: status || undefined,
      species: species || undefined,
    },
  });
}
