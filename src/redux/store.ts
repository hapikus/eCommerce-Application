import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import themeReducer from './slice/themeSlice';
import productReducer from './slice/productSlice';
import userReducer from './slice/userSlice';
import { AuthState, ThemeState, ProductState, UserState } from '../types/storeType';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    product: productReducer,
    user: userReducer,
  },
});

export type RootState = {
  auth: AuthState;
  theme: ThemeState;
  product: ProductState;
  user: UserState;
};

export default store;
