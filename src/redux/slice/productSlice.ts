import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../../models/Product/ProductService';

import { ProductState } from '../../types/storeType';
import IProduct from '../../types/IProduct';

const initialState: ProductState = {
  productData: {} as IProduct,
  randomProductsData: [],
  isAllCategoryData: [],
  isLoading: false,
  isLoadingRandom: false,
  isAllCategoryLoading: false,
  errorProduct: null,
  errorRandomProducts: null,
  errorAllCategory: null,
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

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetProductData: (state) => {
      state.productData = {} as IProduct;
      state.isLoading = false;
      state.errorProduct = null;
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
      });
  },
});

export const { resetProductData } = productSlice.actions;
export default productSlice.reducer;
