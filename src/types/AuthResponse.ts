import { IUserDto } from './IUser';

export default interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserDto;
}
