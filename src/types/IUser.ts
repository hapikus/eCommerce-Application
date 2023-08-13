interface IUserDto {
  email: string;
  id: string;
  isActivated: boolean;
}

interface IUserDb {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isActivated: boolean;
  activationLink: string;
  billingAddress: string[];
  shippingAddress: string[];
  orders: string[];
}

export type {
  IUserDto,
  IUserDb,
};
