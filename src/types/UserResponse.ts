import { IUserFull } from './storeType';

interface IUpdateData {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
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
interface IAddress {
  _id: '';
  country: '';
  city: '';
  street: '';
  postalCode: '';
  isDefault: false;
}

type IUpdateShipAddress = {
  shippingAddresses: Array<{
    city?: string;
    country?: string;
    _id: string;
    isDefault?: boolean;
    postalcode?: string;
    street?: string;
  }>;
};

export type { IUpdateData, IUpdateUser, UpdateResp, IPassword, IAddress, IUpdateShipAddress };
