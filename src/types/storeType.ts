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
  availableFilters: IFilters;
  selectedFilters: IFilters;
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

interface IFilters {
  themes: string[];
  genres: string[];
  tags: string[];
  minPrice: number;
  maxPrice: number;
}

interface ICatalog {
  products: IProduct[];
  filters: IFilters;
  totalProducts: number;
}

type CheckBoxType = string | number | boolean;

interface SetSelectedTag {
  type: string[];
  payload: CheckBoxType[];
}

interface SetSelectedFilters {
  type: IFilters;
  payload: IFilters;
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

interface BasketState {
  itemsFromServer: BasketItemsResponse;
  itemsFullFromServer: BasketFullResponse;

  basketId: string;
  promo: string;
  itemsGameName: string[];
  itemsQuantity: number;
  itemsRegularPrice: number;
  itemsDiscountPrice: number;
  itemsPromoPrice: number;

  isLoading: boolean;

  isGettingItem: boolean;
  isGettingItemFull: boolean;
  isAdding: boolean;
  isDeleting: boolean;
  isChangingQuantity: boolean;

  getItemsError: null | string;
  getItemsFullError: null | string;
  addingError: null | string;
  deletingError: null | string;
  changingQuantityError: null | string;
}

interface BasketItemsResponse {
  basketId: string;
  items: Map<string, number>;
  promo: string;
}

interface BasketFullResponse {
  [key: string]: BasketFullInfo;
}

interface BasketFullInfo {
  gameTitle: string;
  headerImg: string;
  descriptionShort: string;
  price: number;
  discountPrice: number;
  sortPrice: number;
  promoPrice: number;
  basketQantity: number;
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
  IFilters,
  SetSelectedFilters,
  BasketState,
  BasketItemsResponse,
  BasketFullResponse,
};
