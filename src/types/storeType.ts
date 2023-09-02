import { IUserDto } from './IUser';
import IProduct from './IProduct';

interface AuthState {
  isFirstLoad: boolean;
  user: IUserDto;
  isAuth: boolean;
  isLoading: boolean;
  loginError: null | string;
  logoutError: null | string;
  registError: null | string;
  checkError: null | string;
}

interface ThemeState {
  themes: { [key: string]: string };
  theme: string;
  currentPage: string;
}

interface SetThemeSuper {
  type: string;
  payload: string;
}

interface IsFirstLoadInt {
  type: boolean;
  payload: boolean;
}

interface ICurrentPage {
  type: string;
  payload: string;
}

type ThemeType = { [key: string]: string };

interface ProductState {
  productData: IProduct;
  randomProductsData: IProduct[];
  isAllCategoryData: string[],
  isLoading: boolean;
  isLoadingRandom: boolean;
  isAllCategoryLoading: boolean;
  errorProduct: null | string;
  errorRandomProducts: null | string;
  errorAllCategory: null | string;
}

export type {
  AuthState,
  ThemeState,
  SetThemeSuper,
  ThemeType,
  IsFirstLoadInt,
  ICurrentPage,
  ProductState,
};
