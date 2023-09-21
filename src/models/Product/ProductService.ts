import { AxiosResponse } from 'axios';
import $api from '../Base/http';
import IProduct from '../../types/IProduct';
import { ICatalog, CheckBoxType } from '../../types/storeType';

export default class ProductService {
  static async fetchProductByTitle(
    title: string,
  ): Promise<AxiosResponse<IProduct>> {
    return $api.get<IProduct>(`/product/${title}`);
  }

  static async getRandProducts(
    num: number,
  ): Promise<AxiosResponse<IProduct[]>> {
    return $api.get<IProduct[]>('/product/random', {
      params: { num },
    });
  }

  static async getAllCategories(): Promise<AxiosResponse<string[]>> {
    return $api.get<string[]>('/product/all-categories');
  }

  static async getTopCategories(): Promise<AxiosResponse<string[]>> {
    return $api.get<string[]>('/product/top-categories');
  }

  static async getTopGenres(): Promise<AxiosResponse<string[]>> {
    return $api.get<string[]>('/product/top-first-genres');
  }

  static async getRandProductsWithDiscount(
    num: number,
  ): Promise<AxiosResponse<IProduct[]>> {
    return $api.get<IProduct[]>('/product/random-discount', {
      params: { num },
    });
  }

  static async getProductsForCatalog(
    pageNumber: number,
    pageLimit: number,
    sortColumn: string,
    sortDirection: string,
    tags: CheckBoxType[],
    themes: CheckBoxType[],
    genres: CheckBoxType[],
    minPrice: number,
    maxPrice: number,
  ): Promise<AxiosResponse<ICatalog>> {
    return $api.post<ICatalog>('/product/catalog', {
      pageNumber,
      pageLimit,
      sortColumn,
      sortDirection,
      tags,
      themes,
      genres,
      minPrice,
      maxPrice,
    });
  }

  static async searchProducts(
    query: string,
  ): Promise<AxiosResponse<IProduct[]>> {
    return $api.get<IProduct[]>('/product/search', {
      params: { query },
    });
  }
}
