import { IProduct } from './productStateType'

export interface ICartItem extends IProduct {
  quantity: number
}

interface CartState {
  products: ICartItem[] | []
  total: number
}

export default CartState
