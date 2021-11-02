import {
  AddToCartAction,
  RemoveFromCartAction,
  FetchItemsStartAction,
  FetchItemsSuccessAction,
  FetchItemsFailAction,
} from '../actionTypes/cartActionTypes'
import { ICartItem } from '../stateTypes/cartStateTypes'
import { IProduct } from '../stateTypes/productStateType'

export type addToCartCreator = (product: IProduct) => AddToCartAction

export type removeFromCartCreator = (id: number) => RemoveFromCartAction

export type fetchItemsStartCreator = () => FetchItemsStartAction

export type fetchItemsSuccessCreator = (
  items: ICartItem[],
  total: number
) => FetchItemsSuccessAction

export type fetchItemsFailCreator = (error: string) => FetchItemsFailAction
