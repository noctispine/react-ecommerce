import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { actions } from '../reducers/productReducer'
import { IProduct } from '../types/stateTypes/productStateType'
import { actionCreators } from '../reducers/productReducer'

import productsApi from '../services/productApi'

// workers
export function* onLoadProducts() {
  try {
    const response: AxiosResponse = yield call(productsApi)
    const data: IProduct[] = response.data
    yield put(actionCreators.fetchSuccess(data))
  } catch (error) {
    if (error instanceof Error)
      yield put(actionCreators.fetchFail(error.message))
  }
}
// watchers
export default function* fetchProducts(): Generator<StrictEffect> {
  yield takeEvery(actions.FETCH_PRODUCTS_START, onLoadProducts)
}
