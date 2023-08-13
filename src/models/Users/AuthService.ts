// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosResponse } from 'axios';
import $api from '../Base/http';
import AuthResponse from '../../types/AuthResponse';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
  }

  static async registration(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', {
      email,
      password,
      firstName,
      lastName,
    });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
