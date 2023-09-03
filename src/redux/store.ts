import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import themeReducer from './slice/themeSlice';
import productReducer from './slice/productSlice';
import { AuthState, ThemeState, ProductState } from '../types/storeType';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    product: productReducer,
  },
});

export type RootState = {
  auth: AuthState;
  theme: ThemeState;
  product: ProductState;
};

export default store;
