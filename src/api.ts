import axios from 'axios';

// Set the base URL for API calls
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Mock API URL
});

export default api;
