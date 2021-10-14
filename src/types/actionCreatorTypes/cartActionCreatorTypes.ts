import { AddToCartAction } from '../actionTypes/actionTypes'
import { IProduct } from '../stateTypes.ts/cartStateTypes'

export type addToCartCreator = (product: IProduct) => AddToCartAction

