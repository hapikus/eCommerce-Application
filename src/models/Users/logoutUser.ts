import LogoutRequest from './logoutRequest';

export default async function logoutUser() {
  const loginUserInstance = new LogoutRequest();
  await loginUserInstance.logoutRequest();
  localStorage.removeItem('token');
}
