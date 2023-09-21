import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ThemeState, SetThemeSuper, ICurrentPage } from '../../types/storeType';

export const themes = {
  light: 'light',
  dark: 'dark',
  barbie: 'barbie',
};

const initialState: ThemeState = {
  theme: 'light',
  themes,
  currentPage: 'main',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<SetThemeSuper['payload']>) => {
      state.theme = action.payload;
      document.documentElement.setAttribute('data-theme', action.payload);
      localStorage.setItem('theme', action.payload);
    },
    setCurrentPage: (state, action: PayloadAction<ICurrentPage['payload']>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setTheme, setCurrentPage } = themeSlice.actions;
export type ThemeSliceType = typeof themeSlice;
export default themeSlice.reducer;
