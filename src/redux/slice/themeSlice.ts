import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ThemeState, SetThemeSuper } from '../../types/storeType';

export const themes = {
  light: 'light',
  dark: 'dark',
  barbie: 'barbie',
};

const initialState: ThemeState = {
  theme: 'light',
  themes,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<SetThemeSuper['payload']>) => {
      state.theme = action.payload;
      document.documentElement.setAttribute('data-theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
