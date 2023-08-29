import { AxiosResponse } from 'axios';
import $api from '../Base/http';
import IProduct from '../../types/IProduct';

export default class ProductService {
  static async fetchProductByTitle(
    title: string,
  ): Promise<AxiosResponse<IProduct>> {
    return $api.get<IProduct>(`/product/${title}`);
  }

  static async getRandProducts(
    num: number,
  ): Promise<AxiosResponse<IProduct[]>> {
    return $api.get<IProduct[]>('/random-products', {
      params: { num },
    });
  }
}
