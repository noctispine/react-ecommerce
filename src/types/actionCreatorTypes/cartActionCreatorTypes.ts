import {
  AddToCartAction,
  RemoveFromCartAction,
  SetStateFromLocalAction,
} from '../actionTypes/cartActionTypes'
import { ICartItem } from '../stateTypes/cartStateTypes'
import { IProduct } from '../stateTypes/productStateType'

export type addToCartCreator = (product: IProduct) => AddToCartAction

export type removeFromCartCreator = (id: number) => RemoveFromCartAction

export type setStateFromLocalCreator = (
  products: ICartItem[] | [],
  total: number
) => SetStateFromLocalAction
