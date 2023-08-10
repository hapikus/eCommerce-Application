interface AuthState {
  loginAnswer: string;
  isAuthorizedUser: boolean;
  accountEmail: string;
}

interface SetLoginAnswerAction {
  type: string;
  payload: string;
}

interface SetIsAuthorizedUserAction {
  type: boolean;
  payload: boolean;
}

interface SetAccountEmailAction {
  type: string;
  payload: string;
}

export type {
  AuthState,
  SetLoginAnswerAction,
  SetIsAuthorizedUserAction,
  SetAccountEmailAction,
};
