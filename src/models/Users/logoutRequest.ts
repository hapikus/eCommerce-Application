import Post from '../Base/post';

class LogoutRequest extends Post {
  constructor() {
    super();
    this.url = 'api/logout';
  }

  async logoutRequest(): Promise<void> {
    await this.fetch();
  }
}

export default LogoutRequest;
