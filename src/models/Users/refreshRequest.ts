import Get from '../Base/get';
import { FetchResponse } from '../../types/interfaces';

class RefreshRequest extends Get {
  constructor() {
    super();
    this.url = 'api/refresh';
  }

  async refreshRequest(): Promise<FetchResponse> {
    const response = await this.fetch();
    return response;
  }
}

export default RefreshRequest;
