export type UserLoginPayloadType = {
  username: string
  token: string
}

export interface UserLoginStartAction {
  type: 'USER_LOGIN_START'
}

export interface UserLoginSuccessAction {
  type: 'USER_LOGIN_SUCCESS'
  payload: UserLoginPayloadType
}

export interface UserLoginFailureAction {
  type: 'USER_LOGIN_FAILURE'
  payload: string
}

export interface UserLogoutAction {
  type: 'USER_LOGOUT'
}

export type UserLoginActions =
  | UserLoginStartAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
  | UserLogoutAction
