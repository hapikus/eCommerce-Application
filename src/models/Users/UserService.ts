// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosResponse } from 'axios';
import $api from '../Base/http';
import { IUserDb } from '../../types/IUser';

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUserDb[]>> {
    return $api.get<IUserDb[]>('/users');
  }

  static async fetchUser(): Promise<AxiosResponse<IUserDb>> {
    return $api.get<IUserDb>('/user');
  }
}
