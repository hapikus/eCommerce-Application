import { IUserFull } from './storeType';

interface IUpdateData {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  dob?: Date;
  password?: string;
}

interface IUpdateUser {
  updateUserBody: IUpdateData;
}

interface UpdateResp {
  user: IUserFull;
}

interface IPassword {
  password: string;
}

export type { IUpdateData, IUpdateUser, UpdateResp, IPassword };
