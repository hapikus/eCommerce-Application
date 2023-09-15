import { AxiosResponse } from 'axios';
import $api from '../Base/http';

import { BasketItemsResponse, BasketFullResponse } from '../../types/storeType';
import { ChangeQuantity } from '../../types/types';

export default class BasketService {
  static async create(): Promise<AxiosResponse<string>> {
    return $api.post<string>('/basket/create');
  }

  static async addToUser(basketId: string): Promise<AxiosResponse<string>> {
    return $api.post<string>('/basket/add-to-user', { basketId });
  }

  static async mergeBaskets(
    basketAnonId: string,
    basketUserId: string,
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>('/basket/merge-baskets', {
      basketAnonId,
      basketUserId,
    });
  }

  static async getBasketItems(
    basketId: string,
  ): Promise<AxiosResponse<BasketItemsResponse>> {
    return $api.get<BasketItemsResponse>(
      `/basket/${basketId}/get-basket-items`,
    );
  }

  static async getBasketFull(
    basketId: string,
  ): Promise<AxiosResponse<BasketFullResponse>> {
    return $api.get<BasketFullResponse>(`/basket/${basketId}/get-basket-full`);
  }

  static async deleteBasket(basketId: string): Promise<AxiosResponse<string>> {
    return $api.delete<string>(`/basket/${basketId}/clear`);
  }

  static async addItem(
    basketId: string,
    gameTitle: string,
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(`/basket/${basketId}/add-item`, { gameTitle });
  }

  static async changeQuantity(
    basketId: string,
    changeQuantity: ChangeQuantity,
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(
      `/basket/${basketId}/change-quantity`,
      changeQuantity,
    );
  }

  static async removeItem(
    basketId: string,
    gameTitle: string,
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(`/basket/${basketId}/remove-item`, { gameTitle });
  }

  static async addPromo(
    basketId: string,
    promo: string,
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(`/basket/${basketId}/add-promo`, { promo });
  }

  static async deletePromo(basketId: string): Promise<AxiosResponse<string>> {
    return $api.delete<string>(`/basket/${basketId}/delete-promo`);
  }

  static async getBasketIdFromUser(): Promise<AxiosResponse<string>> {
    return $api.get<string>(`/user/get-basket-id`);
  }
}
