import { all, fork } from '@redux-saga/core/effects'
import fetchProducts from './productSaga'
import { loginWatcher, registerationWatcher } from './authenticationSaga'

export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
    fork(loginWatcher),
    fork(registerationWatcher),
  ])
}
