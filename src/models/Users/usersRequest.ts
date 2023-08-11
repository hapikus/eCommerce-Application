import Get from '../Base/get';
import { FetchResponse } from '../../types/interfaces';

class UsersRequest extends Get {
  constructor() {
    super();
    this.url = 'api/users';
  }

  async usersRequest(): Promise<FetchResponse> {
    const response = await this.fetch();
    return response;
  }
}

export default UsersRequest;
