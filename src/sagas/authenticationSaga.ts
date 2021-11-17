import { takeLatest, fork, call, put, take } from 'redux-saga/effects'
import { loginActions } from '../reducers/userReducer'
import { loginActionCreators } from '../reducers/userReducer'
import {
  registerActionCreators,
  registerActions,
} from '../reducers/registerationReducer'
import { loginApi, registerApi } from '../services/authenticationService'

function* logout() {
  console.log('hey')
  yield put(loginActionCreators.userLogoutCreator())
}

function* loginFlow(username: string, password: string) {
  try {
    const data: { username: string; token: string; error?: string } =
      yield call(loginApi, username, password)

    if (!data.error) {
      yield put(
        loginActionCreators.userLoginSuccessCreator(data.username, data.token)
      )
      localStorage.setItem('token', JSON.stringify(data.token))
      localStorage.setItem('username', JSON.stringify(data.username))
      return data.token
    } else {
      yield put(loginActionCreators.userLoginFailureCreator(data.error))
    }
  } catch (error) {
    if (error instanceof Error)
      yield put(registerActionCreators.registerFailureCreator(error.message))
  }
}

function* registerFlow(username: string, email: string, password: string) {
  try {
    const registerApiResponse: { error?: string } = yield call(
      registerApi,
      username,
      email,
      password
    )
    const loginApiResponse: {
      username: string
      token: string
      error?: string
    } = yield call(loginApi, username, password)

    if (registerApiResponse.error) {
      yield put(
        registerActionCreators.registerFailureCreator(registerApiResponse.error)
      )
    } else {
      yield put(registerActionCreators.registerSuccessCreator())
      yield put(
        loginActionCreators.userLoginSuccessCreator(
          loginApiResponse.username,
          loginApiResponse.token
        )
      )
      localStorage.setItem('token', JSON.stringify(loginApiResponse.token))
    }
  } catch (error) {
    if (error instanceof Error)
      yield put(registerActionCreators.registerFailureCreator(error.message))
  }
}

export function* loginWatcher(): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(loginActions.USER_LOGIN_START)
    const { username, password } = payload
    yield fork(loginFlow, username, password)
  }
}

export function* registerationWatcher(): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(registerActions.REGISTER_START)
    const { username, email, password } = payload
    yield fork(registerFlow, username, email, password)
  }
}

export function* logoutWatcher(): Generator<any, any, any> {
  yield takeLatest(loginActions.USER_LOGOUT, logout)
}
