import { getAccessToken } from './../utils/localStorage';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

axiosInstance.interceptors.request.use((request) => {
  const accessToken = getAccessToken();
  const accessHeader = accessToken !== null ? `Bearer ${accessToken}` : '';
  if (request.headers !== undefined) {
    request.headers.Authorization = accessHeader;
  }
  return request;
});
