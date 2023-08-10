type LoginFormValues = {
  username: string;
  password: string;
};

type UserDto = {
  email: string;
  id: string;
  isActivated: boolean;
};

export type { UserDto, LoginFormValues };
