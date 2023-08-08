import FetchResponse from '../../types/interfaces';

class Post {
  public domain: string;

  public url: string;

  constructor() {
    this.domain = 'http://localhost:5000';
    this.url = '';
  }

  async fetch(body: string): Promise<FetchResponse> {
    const response = await fetch(`${this.domain}/${this.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    const error = { msg: '' };
    if (!response.ok) {
      error.msg = 'POST fetch: Incorrect request';
    }
    return { response, error };
  }
}

export default Post;
