import LoginRequest from './loginRequest';
import { AuthorizationFetchResponse, AuthorizationFetchError } from '../../types/interfaces';

const msgForCustomer = 'Please check your password and account name and try again.';

export default async function loginUser(email: string, password: string) {
  let answer: string = '';
  const loginUserInstance = new LoginRequest();
  const response = await loginUserInstance.loginRequest(email, password);
  if (response.response.ok) {
    const responseData: AuthorizationFetchResponse = await response.response.json();
    localStorage.setItem('token', responseData.accessToken);
    answer = 'Login was success';
  }
  if (response.response.statusText === 'Bad Request') {
    const errorData: AuthorizationFetchError = await response.response.json();
    answer = msgForCustomer;
    if (errorData.message === 'Пользователь не активирован') {
      answer = 'Please confirm your email and try again';
    }
  }
  return answer;
}
