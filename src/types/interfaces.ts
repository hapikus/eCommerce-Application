import { UserDto } from './types';

interface FetchResponse {
  response: Response;
  error: { msg: string };
}

interface AuthorizationFetchResponse {
  accessToken: string;
  refreshToken: string;
  user: UserDto;
}

interface AuthorizationFetchError {
  message: string;
  errors: string[];
}

export type { FetchResponse, AuthorizationFetchResponse, AuthorizationFetchError };
