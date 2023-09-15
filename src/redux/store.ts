import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import themeReducer from './slice/themeSlice';
import productReducer from './slice/productSlice';
import userReducer from './slice/userSlice';
import basketReducer from './slice/basketSlice';
import {
  AuthState,
  ThemeState,
  ProductState,
  UserState,
  BasketState
} from '../types/storeType';

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    product: productReducer,
    user: userReducer,
    basket: basketReducer,
  },
});

export type RootState = {
  auth: AuthState;
  theme: ThemeState;
  product: ProductState;
  user: UserState;
  basket: BasketState;
};

export default store;
