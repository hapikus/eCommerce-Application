import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import AuthState from '../types/storeType';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = {
  auth: AuthState;
};

export default store;
