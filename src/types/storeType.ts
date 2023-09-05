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
  isAllCategoryData: string[];
  randDiscProductsData: IProduct[];
  catalogProducts: ICatalog;
  selectedTag: CheckBoxType[];
  searchProducts: IProduct[];
  isLoading: boolean;
  isLoadingRandom: boolean;
  isAllCategoryLoading: boolean;
  isLoadingDiscRandom: boolean;
  isLoadingCatalogProducts: boolean;
  isLoadingSearchProducts: boolean;
  errorProduct: null | string;
  errorRandomProducts: null | string;
  errorAllCategory: null | string;
  errorRandDiscProducts: null | string;
  errorCatalogProducts: null | string;
  errorSearchProducts: null | string;
}

interface ICatalog {
  products: IProduct[];
  totalProducts: number;
}

type CheckBoxType = string | number | boolean;

interface SetSelectedTag {
  type: string[];
  payload: CheckBoxType[];
}

interface UserState {
  isFirstLoad: boolean;
  userFull: IUserFull;
  isLoading: boolean;
  fullUserError: null | string;

  currentUserMenu: string;
}

interface IUserFull {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isActivated: boolean;
  billingAddress: string[];
  shippingAddress: string[];
  orders: string[];
  activationLink: string;
  birthday: string;
}

interface IsFirstLoadUser {
  type: boolean;
  payload: boolean;
}

interface CurrentUserMenu {
  type: string;
  payload: string;
}

export type {
  AuthState,
  ThemeState,
  SetThemeSuper,
  ThemeType,
  IsFirstLoadInt,
  ICurrentPage,
  ProductState,
  UserState,
  IUserFull,
  IsFirstLoadUser,
  CurrentUserMenu,
  ICatalog,
  CheckBoxType,
  SetSelectedTag,
};
