import Post from '../Base/post';
import { FetchResponse } from '../../types/interfaces';

class LoginRequest extends Post {
  constructor() {
    super();
    this.url = 'api/login';
  }

  async loginRequest(email: string, password: string): Promise<FetchResponse> {
    const body = JSON.stringify({
      email,
      password,
    });
    const response = await this.fetch(body);
    return response;
  }
}

export default LoginRequest;
