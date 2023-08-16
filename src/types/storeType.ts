import { IUserDto } from './IUser';

interface AuthState {
  user: IUserDto;
  isAuth: boolean;
  isLoading: boolean;
  loginError: null | string;
  logoutError: null | string;
  registError: null | string;
  checkError: null | string;
}

interface ThemeState {
  themes: { [key: string] : string };
  theme: string;
}

interface SetThemeSuper {
  type: string;
  payload: string;
}

type ThemeType = { [key: string] : string };

export type { AuthState, ThemeState, SetThemeSuper, ThemeType };
