import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import BasketService from '../../models/Basket/BasketService';

import {
  BasketState,
  BasketItemsResponse,
  BasketFullResponse,
} from '../../types/storeType';

const initialState: BasketState = {
  itemsFromServer: {} as BasketItemsResponse,
  itemsFullFromServer: {} as BasketFullResponse,

  basketId: '',
  promo: '',
  itemsGameName: [],
  itemsQuantity: 0,
  itemsRegularPrice: 0,
  itemsDiscountPrice: 0,
  itemsPromoPrice: 0,

  isLoading: false,

  isGettingItem: false,
  isGettingItemFull: false,
  isAdding: false,
  isDeleting: false,
  isChangingQuantity: false,

  getItemsError: null,
  getItemsFullError: null,
  addingError: null,
  deletingError: null,
  changingQuantityError: null,
};

export const addItemToBasket = createAsyncThunk(
  'basket/addItem',
  async (
    { basketId, gameTitle }: { basketId: string; gameTitle: string },
    thunkAPI,
  ) => {
    try {
      const response = await BasketService.addItem(basketId, gameTitle);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const removeItemFromBasket = createAsyncThunk(
  'basket/removeItem',
  async (
    { basketId, gameTitle }: { basketId: string; gameTitle: string },
    thunkAPI,
  ) => {
    try {
      const response = await BasketService.removeItem(basketId, gameTitle);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const getBasketItems = createAsyncThunk(
  'basket/getBasketItems',
  async (basketId: string, thunkAPI) => {
    try {
      const response = await BasketService.getBasketItems(basketId);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const getBasketFull = createAsyncThunk(
  'basket/getBasketFull',
  async (basketId: string, thunkAPI) => {
    try {
      const response = await BasketService.getBasketFull(basketId);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

const basketSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setBasketId: (state, action: PayloadAction<string>) => {
      state.basketId = action.payload;
    },
    setPromo: (state, action: PayloadAction<string>) => {
      state.promo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemToBasket.pending, (state) => {
        state.isLoading = true;
        state.isAdding = true;
        state.addingError = null;
      })
      .addCase(addItemToBasket.fulfilled, (state) => {
        state.isLoading = false;
        state.isAdding = false;
      })
      .addCase(addItemToBasket.rejected, (state, action) => {
        state.isLoading = false;
        state.isAdding = false;
        state.addingError = `${action.payload}`;
      })
      .addCase(removeItemFromBasket.pending, (state) => {
        state.isLoading = true;
        state.isDeleting = true;
        state.deletingError = null;
      })
      .addCase(removeItemFromBasket.fulfilled, (state) => {
        state.isLoading = false;
        state.isDeleting = false;
      })
      .addCase(removeItemFromBasket.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleting = false;
        state.deletingError = `${action.payload}`;
      })
      .addCase(getBasketItems.pending, (state) => {
        state.isLoading = true;
        state.isGettingItem = true;
        state.getItemsError = null;
      })
      .addCase(getBasketItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isGettingItem = false;
        state.itemsFromServer = action.payload;
        state.promo = action.payload.promo;

        const gameNames: string[] = Object.keys(action.payload.items || {});
        state.itemsGameName = gameNames;
        state.itemsQuantity = gameNames.length;
      })
      .addCase(getBasketItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isGettingItem = false;
        state.getItemsError = `${action.payload}`;
      })
      .addCase(getBasketFull.pending, (state) => {
        state.isLoading = true;
        state.isGettingItemFull = true;
        state.getItemsFullError = null;
      })
      .addCase(getBasketFull.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isGettingItemFull = false;
        state.itemsFullFromServer = action.payload;
      })
      .addCase(getBasketFull.rejected, (state, action) => {
        state.isLoading = false;
        state.isGettingItemFull = false;
        state.getItemsFullError = `${action.payload}`;
      });
  },
});

export const { setBasketId, setPromo } = basketSlice.actions;
export default basketSlice.reducer;
