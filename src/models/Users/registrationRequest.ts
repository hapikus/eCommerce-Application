import Post from '../Base/post';
import {
  AuthorizationFetchResponse,
  AuthorizationFetchError,
} from '../../types/interfaces';

class RegistrationRequest extends Post {
  constructor() {
    super();
    this.url = 'api/registration';
  }

  async registrationRequest(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<AuthorizationFetchResponse | AuthorizationFetchError> {
    const body = JSON.stringify({
      email,
      password,
      firstName,
      lastName,
    });
    const response = await this.fetch(body);
    if (response.response.ok) {
      const responseData: AuthorizationFetchResponse = await response.response.json();
      return responseData;
    }
    const errorData: AuthorizationFetchError = await response.response.json();
    return errorData;
  }
}

export default RegistrationRequest;
