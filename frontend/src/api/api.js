// frontend/src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

// before each request, attach the token if we have one
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // send it as Bearer <token>
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
