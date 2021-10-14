import { IProduct } from '../stateTypes.ts/cartStateTypes'

export interface AddToCartAction {
  type: 'react-ecommerce/reducer/ADD_TO_CART'
  payload: IProduct
}
type CartAction = AddToCartAction

export default CartAction
