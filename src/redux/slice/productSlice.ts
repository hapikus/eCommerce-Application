import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import ProductService from '../../models/Product/ProductService';

import { ProductState, ICatalog, SetSelectedTag } from '../../types/storeType';
import IProduct from '../../types/IProduct';
import { CatalogOptionsType } from '../../types/types';

const initialState: ProductState = {
  productData: {} as IProduct,
  randomProductsData: [],
  isAllCategoryData: [],
  randDiscProductsData: [],
  catalogProducts: {} as ICatalog,
  selectedTag: [],
  isLoading: false,
  isLoadingRandom: false,
  isAllCategoryLoading: false,
  isLoadingDiscRandom: false,
  isLoadingCatalogProducts: false,
  errorProduct: null,
  errorRandomProducts: null,
  errorAllCategory: null,
  errorRandDiscProducts: null,
  errorCatalogProducts: null,
};

export const fetchProductData = createAsyncThunk(
  'product/fetchProductData',
  async (productTitle: string, thunkAPI) => {
    try {
      const response = await ProductService.fetchProductByTitle(productTitle);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const fetchRandProducts = createAsyncThunk(
  'product/fetchRandProducts',
  async (num: number, thunkAPI) => {
    try {
      const response = await ProductService.getRandProducts(num);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const fetchAllCategory = createAsyncThunk(
  'product/fetchAllCat',
  async (_, thunkAPI) => {
    try {
      const response = await ProductService.getAllCategories();
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const fetchDiscountProducts = createAsyncThunk(
  'product/fetchDiscountProducts',
  async (num: number, thunkAPI) => {
    try {
      const response = await ProductService.getRandProductsWithDiscount(num);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const fetchCatalogProducts = createAsyncThunk(
  'product/fetchCatalogProducts',
  async (options: CatalogOptionsType, thunkAPI) => {
    try {
      const {
        pageNumber,
        pageLimit,
        sortColumn,
        sortDirection,
        tags,
        minPrice,
        maxPrice,
      } = options;
      const response = await ProductService.getProductsForCatalog(
        pageNumber,
        pageLimit,
        sortColumn,
        sortDirection,
        tags,
        minPrice,
        maxPrice,
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProductData: (state) => {
      state.productData = {} as IProduct;
      state.isLoading = false;
      state.errorProduct = null;
    },
    setSelectedTag: (
      state,
      action: PayloadAction<SetSelectedTag['payload']>,
    ) => {
      state.selectedTag = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.productData = {} as IProduct;
        state.isLoading = true;
        state.errorProduct = null;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productData = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorProduct = `${action.payload}`;
      })
      .addCase(fetchRandProducts.pending, (state) => {
        state.randomProductsData = [];
        state.isLoadingRandom = true;
        state.errorRandomProducts = null;
      })
      .addCase(fetchRandProducts.fulfilled, (state, action) => {
        state.isLoadingRandom = false;
        state.randomProductsData = action.payload;
      })
      .addCase(fetchRandProducts.rejected, (state, action) => {
        state.isLoadingRandom = false;
        state.errorRandomProducts = `${action.payload}`;
      })
      .addCase(fetchAllCategory.pending, (state) => {
        state.isAllCategoryData = [];
        state.isAllCategoryLoading = true;
        state.errorAllCategory = null;
      })
      .addCase(fetchAllCategory.fulfilled, (state, action) => {
        state.isAllCategoryLoading = false;
        state.isAllCategoryData = action.payload;
      })
      .addCase(fetchAllCategory.rejected, (state, action) => {
        state.isAllCategoryLoading = false;
        state.errorAllCategory = `${action.payload}`;
      })
      .addCase(fetchDiscountProducts.pending, (state) => {
        state.randDiscProductsData = [];
        state.isLoadingDiscRandom = true;
        state.errorRandDiscProducts = null;
      })
      .addCase(fetchDiscountProducts.fulfilled, (state, action) => {
        state.isLoadingDiscRandom = false;
        state.randDiscProductsData = action.payload;
      })
      .addCase(fetchDiscountProducts.rejected, (state, action) => {
        state.isLoadingDiscRandom = false;
        state.errorRandDiscProducts = `${action.payload}`;
      })
      .addCase(fetchCatalogProducts.pending, (state) => {
        state.catalogProducts = {} as ICatalog;
        state.isLoadingCatalogProducts = true;
        state.errorCatalogProducts = null;
      })
      .addCase(fetchCatalogProducts.fulfilled, (state, action) => {
        state.isLoadingCatalogProducts = false;
        state.catalogProducts = action.payload;
      })
      .addCase(fetchCatalogProducts.rejected, (state, action) => {
        state.isLoadingCatalogProducts = false;
        state.errorCatalogProducts = `${action.payload}`;
      });
  },
});

export const { resetProductData, setSelectedTag } = productSlice.actions;
export default productSlice.reducer;