import { loginAsync } from './authSlice';

describe('auth/login', () => {
  it('should loginAsync rejected with Error', async () => {
    const mockLoginData = {
      email: 'testlogin@email.com',
      password: 'testpassword',
    };
    const dispatch = jest.fn();
    const thunk = loginAsync(mockLoginData);

    await thunk(dispatch, () => {}, '_');
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);

    const [start, end] = calls;
    expect(start[0].type).toBe('auth/login/pending');
    expect(end[0].type).toBe('auth/login/rejected');
    expect(end[0].payload).toBe('An unknown error occurred');
  });
});
