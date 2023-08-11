import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AuthState,
  SetLoginAnswerAction,
  SetIsAuthorizedUserAction,
  SetAccountEmailAction,
} from '../../types/storeType';

const initialState: AuthState = {
  loginAnswer: '',
  isAuthorizedUser: false,
  accountEmail: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginAnswer: (
      state,
      action: PayloadAction<SetLoginAnswerAction['payload']>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.loginAnswer = action.payload;
    },
    setIsAuthorizedUserAction: (
      state,
      action: PayloadAction<SetIsAuthorizedUserAction['payload']>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.isAuthorizedUser = action.payload;
    },
    setAccountEmailAction: (
      state,
      action: PayloadAction<SetAccountEmailAction['payload']>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.accountEmail = action.payload;
    },
  },
});

export const {
  setLoginAnswer,
  setIsAuthorizedUserAction,
  setAccountEmailAction,
} = authSlice.actions;
export default authSlice.reducer;
