import { getAccessToken, getRefreshToken, setAccessToken } from './../utils/localStorage';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 300000,
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

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "api/auth/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 403 && err.response.data.message === "TokenExpiredError: jwt expired" && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const res = await axiosInstance.post("/api/auth/refreshToken", {
            refreshToken: getRefreshToken()
          });

          const { accessToken } = res.data.result;
          setAccessToken(accessToken);

          return axiosInstance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);
