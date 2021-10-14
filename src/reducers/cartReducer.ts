import { Reducer } from 'redux'
import indexOfObject from '../helpers/indexOfObject'
// State Types
import CartState, { IProduct } from '../types/stateTypes.ts/cartStateTypes'

// Action Types
import CartAction from '../types/actionTypes/actionTypes'

// Action Creator Types
import { addToCartCreator } from '../types/actionCreatorTypes/cartActionCreatorTypes'

// Actions
const ADD_TO_CART = 'react-ecommerce/reducer/ADD_TO_CART'

// Initial State
const initialState: CartState = {
  products: [],
  total: 0,
}

// Reducer
const cartReducer: Reducer<CartState, CartAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newState = { ...state }
      newState.total = newState.total + action.payload.price

      // if item has been already added to the cart, increase the quantity
      // Otherwise, add the product to the cart
      const idx = indexOfObject(newState.products, action.payload)
      if (~idx) {
        newState.products[idx].quantity++
        return { ...state, products: newState.products }
      } else return { ...state, products: [...state.products, action.payload] }
    }

    default: {
      return { ...state }
    }
  }
}
// Action Creators
export const addToCart: addToCartCreator = (product: IProduct) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

export default cartReducer
