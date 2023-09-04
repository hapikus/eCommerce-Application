import $api from '../Base/http';
import store from '../../redux/store';

import { checkAuth } from '../../redux/slice/authSlice';

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await store.dispatch(checkAuth());
        return await $api.request(originalRequest);
      } catch (e) {
        return e;
      }
    }
    throw error;
  },
);
