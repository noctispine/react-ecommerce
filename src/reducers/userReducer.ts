import { Reducer } from 'redux'
import UserState from '../types/stateTypes/userStateType'
import { UserLoginActions } from '../types/actionTypes/userActionTypes'
import {
  userLoginStartActionCreator,
  userLoginFailureActionCreator,
  userLoginSuccessActionCreator,
  userLogoutActionCreator,
} from '../types/actionCreatorTypes/userActionCreators'

const initialState: UserState = {
  username: '',
  token: '',
  loading: false,
  error: null,
}

// Actions
const USER_LOGIN_START = 'USER_LOGIN_START'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
const USER_LOGOUT = 'USER_LOGOUT'

const userReducer: Reducer<UserState, UserLoginActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case USER_LOGIN_START: {
      return { ...state, loading: true }
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
        loading: false,
        error: '',
      }
    }

    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      }
    }

    case USER_LOGOUT: {
      return initialState
    }

    default:
      return state
  }
}

// Action Creators
const userLoginStartCreator: userLoginStartActionCreator = (
  username: string,
  password: string
) => {
  return { type: USER_LOGIN_START, payload: { username, password } }
}

const userLoginSuccessCreator: userLoginSuccessActionCreator = (
  username: string,
  token: string
) => {
  return { type: USER_LOGIN_SUCCESS, payload: { username, token } }
}

const userLoginFailureCreator: userLoginFailureActionCreator = (
  error: string
) => {
  return { type: USER_LOGIN_FAILURE, payload: error }
}

const userLogoutCreator: userLogoutActionCreator = () => {
  return { type: USER_LOGOUT }
}

export const loginActions = {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
}

export const loginActionCreators = {
  userLoginStartCreator,
  userLoginSuccessCreator,
  userLoginFailureCreator,
  userLogoutCreator,
}

export default userReducer
