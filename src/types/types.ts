type UserInstance = {
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
};

type LoginFormValues = {
  username: string;
  password: string;
};

type UserDto = {
  email: string;
  id: string;
  isActivated: boolean;
};

export type { UserInstance, UserDto, LoginFormValues };
