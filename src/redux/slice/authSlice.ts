/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import axios, { AxiosError } from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../models/Users/AuthService';

import { API_URL } from '../../models/Base/http';

import AuthState from '../../types/storeType';
import AuthResponse from '../../types/AuthResponse';
import { IUserDto } from '../../types/IUser';

const initialState: AuthState = {
  user: {} as IUserDto,
  isAuth: false,
  isLoading: false,
  loginError: null,
  logoutError: null,
  registError: null,
  checkError: null,
};

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (loginData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await AuthService.login(
        loginData.email,
        loginData.password,
      );
      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const registAsync = createAsyncThunk(
  'auth/regist',
  async (
    loginData: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    },
    thunkAPI,
  ) => {
    try {
      const response = await AuthService.registration(
        loginData.email,
        loginData.password,
        loginData.firstName,
        loginData.lastName,
      );
      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

export const logoutAsync = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('An unknown error occurred');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        state.loginError = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isAuth = false;
        state.loginError = action.payload as string;
      })
      .addCase(registAsync.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        state.loginError = null;
      })
      .addCase(registAsync.rejected, (state, action) => {
        state.isAuth = false;
        state.registError = action.payload as string;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuth = false;
        state.user = {} as IUserDto;
        state.logoutError = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.logoutError = action.payload as string;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
        state.checkError = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isAuth = false;
        state.checkError = action.payload as string;
      });
  },
});

export default authSlice.reducer;
