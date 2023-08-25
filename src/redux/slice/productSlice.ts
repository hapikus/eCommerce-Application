import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProductService from '../../models/Users/ProductService';

import { ProductState } from '../../types/storeType';
import IProduct from '../../types/IProduct';

const initialState: ProductState = {
  productData: {} as IProduct,
  isLoading: false,
  errorProduct: null,
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
      });
  },
});

export const { resetProductData } = productSlice.actions;
export default productSlice.reducer;
