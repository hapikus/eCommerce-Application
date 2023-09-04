import { AxiosResponse } from 'axios';
import $api from '../Base/http';

import { IUserDb } from '../../types/IUser';
import { IUserFull } from '../../types/storeType';
import { IUpdateData, UpdateResp, IPassword, IUpdateShipAddress, IAddress } from '../../types/UserResponse';

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUserDb[]>> {
    return $api.get<IUserDb[]>('/users');
  }

  static async fetchUser(): Promise<AxiosResponse<IUserFull>> {
    return $api.get<IUserFull>('/user');
  }

  static async updateUser(
    updateUserBody: IUpdateData,
  ): Promise<AxiosResponse<UpdateResp>> {
    return $api.put<UpdateResp>('/user', { updateUserBody });
  }

  static async checkPassword(
    password: string,
  ): Promise<AxiosResponse<IPassword>> {
    return $api.post<IPassword>('/user/check-password', { password });
  }

  static async getShippingAddress(
    shippingAddressIds: string[],
  ): Promise<AxiosResponse<IAddress[]>> {
    const requestBody = { shippingAddressIds };
    return $api.post('/user/address/shipping', requestBody);
  }

  static async updateShippingAddress(
    updateShippingAddressBody: IUpdateShipAddress,
  ): Promise<AxiosResponse<IUpdateShipAddress>> {
    return $api.put<IUpdateShipAddress>(
      '/user/address/shipping',
      updateShippingAddressBody,
    );
  }
}
