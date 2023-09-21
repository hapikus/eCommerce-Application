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
    firstName: string,
    lastName: string,
    email: string,
    dob: Date,
    password: string,
    defaultShipping: undefined | boolean,
    shipCountry: string,
    shipCity: string,
    shipStreet: string,
    shipPostalCode: string,
    defaultBilling: undefined | boolean,
    billCountry: string,
    billCity: string,
    billStreet: string,
    billPostalCode: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const defaultShippingCheck = defaultShipping || false;
    const defaultBillingCkeck = defaultBilling || false;
    return $api.post<AuthResponse>('/registration', {
      firstName,
      lastName,
      email,
      dob,
      password,
      defaultShippingCheck,
      shipCountry,
      shipCity,
      shipStreet,
      shipPostalCode,
      defaultBillingCkeck,
      billCountry,
      billCity,
      billStreet,
      billPostalCode,
    });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
