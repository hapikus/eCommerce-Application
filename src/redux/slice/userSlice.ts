import { AxiosError } from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import UserService from '../../models/Users/UserService';

import { UserState, IUserFull, IsFirstLoadUser, CurrentUserMenu } from '../../types/storeType';

const initialState: UserState = {
  isFirstLoad: true,
  userFull: {} as IUserFull,
  isLoading: false,
  fullUserError: null,

  currentUserMenu: 'userProfile',
};

export const getFullUserDataAsync = createAsyncThunk(
  'user/getFullUserData',
  async (_, thunkAPI) => {
    try {
      const response = await UserService.fetchUser();
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsFirstLoadUser: (
      state,
      action: PayloadAction<IsFirstLoadUser['payload']>,
    ) => {
      state.isFirstLoad = action.payload;
    },
    setCurrentUserMenu: (
      state,
      action: PayloadAction<CurrentUserMenu['payload']>,
    ) => {
      state.currentUserMenu = action.payload;
    },
    clearUserData: (state) => {
      state.isFirstLoad = true;
      state.userFull = {} as IUserFull;
      state.isLoading = false;
      state.fullUserError = null;
      state.currentUserMenu = 'userProfile';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFullUserDataAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFullUserDataAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userFull = action.payload;
        state.fullUserError = null;
      })
      .addCase(getFullUserDataAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.userFull = {} as IUserFull;
        state.fullUserError = action.payload as string;
      });
  },
});

export const { setIsFirstLoadUser, setCurrentUserMenu, clearUserData } = userSlice.actions;

export default userSlice.reducer;
