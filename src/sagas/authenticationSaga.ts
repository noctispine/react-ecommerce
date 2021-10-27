import { takeLatest, fork, call, put, take } from 'redux-saga/effects'
import { loginActions } from '../reducers/userReducer'
import { loginActionCreators } from '../reducers/userReducer'
import {
  registerActionCreators,
  registerActions,
} from '../reducers/registerationReducer'

function loginApi(username: string, password: string) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error)
    })
}

function registerApi(username: string, email: string, password: string) {
  return fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((response) => response.json)
    .then((json) => json)
    .catch((error) => console.log(error))
}

function* logout() {
  yield put(loginActionCreators.userLogoutCreator())

  localStorage.removeItem('token')
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
    yield call(registerApi, username, email, password)
    yield put(registerActionCreators.registerSuccessCreator())
    const data: { username: string; token: string; error?: string } =
      yield call(loginApi, username, password)
    if (!data.error) {
      yield put(
        loginActionCreators.userLoginSuccessCreator(data.username, data.token)
      )
      localStorage.setItem('token', JSON.stringify(data.token))
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
    console.log(username, email, password)
    yield fork(registerFlow, username, email, password)
  }
}

export function* logoutWatcher(): Generator<any, any, any> {
  yield takeLatest(loginActions.USER_LOGOUT, logout)
}
