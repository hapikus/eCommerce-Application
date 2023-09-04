import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import themeReducer from './slice/themeSlice';
import { AuthState, ThemeState } from '../types/storeType';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});

export type RootState = {
  auth: AuthState;
  theme: ThemeState;
};

export default store;
