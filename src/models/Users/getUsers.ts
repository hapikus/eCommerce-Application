import UsersRequest from './usersRequest';
import { UserInstance } from '../../types/types';

export default async function getUsers(): Promise<UserInstance[]> {
  const refreshUserInstance = new UsersRequest();
  const response = await refreshUserInstance.usersRequest();
  const responseData = await response.response.json();
  return responseData;
}
