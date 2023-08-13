/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosInstance } from 'axios';

export const API_URL = 'http://localhost:5000/api';
// export const API_URL = 'https://codefrondlers.store';

const $api: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;
