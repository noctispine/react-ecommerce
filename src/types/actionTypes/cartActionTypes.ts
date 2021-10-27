import { ICartItem } from '../stateTypes/cartStateTypes'

export interface AddToCartAction {
  type: 'ADD_TO_CART'
  payload: ICartItem
}

export interface RemoveFromCartAction {
  type: 'REMOVE_FROM_CART'
  payload: number
}

export interface SetStateFromLocalAction {
  type: 'SET_STATE_FROM_LOCAL'
  payload: { products: ICartItem[] | []; total: number }
}

type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | SetStateFromLocalAction

export default CartAction
