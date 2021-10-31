import { ICartItem } from '../stateTypes/cartStateTypes'

export interface AddToCartAction {
  type: 'ADD_TO_CART'
  payload: ICartItem
}

export interface RemoveFromCartAction {
  type: 'REMOVE_FROM_CART'
  payload: number
}

export interface FetchItemsStartAction {
  type: 'FETCH_ITEMS_START'
}

export interface FetchItemsSuccessAction {
  type: 'FETCH_ITEMS_SUCCESS'
  payload: ICartItem[]
}

export interface FetchItemsFailAction {
  type: 'FETCH_ITEMS_FAIL'
  payload: string
}

type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | FetchItemsStartAction
  | FetchItemsSuccessAction
  | FetchItemsFailAction

export default CartAction
