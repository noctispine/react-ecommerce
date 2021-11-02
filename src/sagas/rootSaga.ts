import { all, fork } from '@redux-saga/core/effects'
import fetchProducts from './productSaga'
import { loginWatcher, registerationWatcher } from './authenticationSaga'
import { addToCartWatcher, removeFromCartWatcher, fetchCartWatcher } from './cartSaga'

export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
    fork(loginWatcher),
    fork(registerationWatcher),
    fork(addToCartWatcher),
    fork(removeFromCartWatcher),
    fork(fetchCartWatcher)
  ])
}
