import React, { Dispatch, SetStateAction } from 'react'
import CartItem from './CartItem'
import { CartListWrapper, CartTitle } from './Cart.styles'
import { RootState } from '../../reducers/rootReducer'
import CartState from '../../types/stateTypes/cartStateTypes'
import { useSelector } from 'react-redux'


const CartList = () => {
  const cart: CartState = useSelector((state: RootState) => state.cart)

  return (
    <CartListWrapper>
      <CartTitle>Basket</CartTitle>
      {cart.products.length > 0 &&
        cart.products.map((item) => {
          const { title, price, quantity, image, id } = item
          return (
            <CartItem
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              quantity={quantity}
            />
          )
        })}
      <div>
        <h2>Total: ${cart.total <= 0 ? 0 : cart.total.toFixed(1)}</h2>
      </div>
    </CartListWrapper>
  )
}

export default CartList
