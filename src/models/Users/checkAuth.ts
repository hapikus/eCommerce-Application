import RefreshRequest from './refreshRequest';
import { AuthorizationFetchResponse } from '../../types/interfaces';
import { UserDto } from '../../types/types';

export default async function checkAuth(): Promise<UserDto> {
  let answer: UserDto = {
    email: '',
    id: '',
    isActivated: false,
  };

  const refreshUserInstance = new RefreshRequest();
  const response = await refreshUserInstance.refreshRequest();

  if (response.response.ok) {
    const responseData: AuthorizationFetchResponse = await response.response.json();
    localStorage.setItem('token', responseData.accessToken);
    answer = responseData.user;
  }
  return answer;
}
