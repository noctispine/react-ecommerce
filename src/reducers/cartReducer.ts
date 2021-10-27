import { Reducer } from 'redux'
import indexOfObject from '../helpers/indexOfObject'
// State Types
import CartState, { ICartItem } from '../types/stateTypes/cartStateTypes'
// Action Types
import CartAction from '../types/actionTypes/cartActionTypes'

// Action Creator Types
import {
  addToCartCreator,
  removeFromCartCreator,
  setStateFromLocalCreator,
} from '../types/actionCreatorTypes/cartActionCreatorTypes'
import { IProduct } from '../types/stateTypes/productStateType'

// Actions
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_STATE_FROM_LOCAL = 'SET_STATE_FROM_LOCAL'

// Initial State
export const initialState: CartState = {
  products: [],
  total: 0,
}

// Reducer
const cartReducer: Reducer<CartState, CartAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_STATE_FROM_LOCAL: {
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
      }
    }
    case ADD_TO_CART: {
      const newState = { ...state }
      newState.total = state.total + action.payload.price

      // if item has been already added to the cart, increase the quantity
      const item = action.payload
      const indexOfItem = indexOfObject(newState.products, item)
      if (indexOfItem !== -1) {
        newState.products[indexOfItem].quantity++
        return { ...state, products: newState.products, total: newState.total}
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        total: newState.total,
      }
    }

    case REMOVE_FROM_CART: {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload
      )
      if (itemIndex !== -1) {
        const product = state.products[itemIndex]
        const newTotal = state.total - product.price
        if (product.quantity === 1) {
          const newProducts = state.products.filter(
            (item) => item.id !== action.payload
          )
          return { ...state, products: newProducts, total: newTotal }
        } else {
          product.quantity--
          let newProducts = state.products
          newProducts[itemIndex] = product
          return { ...state, products: newProducts, total: newTotal }
        }
      }
      return state
    }

    default: {
      return state
    }
  }
}
// Action Creators
export const addToCart: addToCartCreator = (product: IProduct) => {
  const newCartProduct: ICartItem = { ...product, quantity: 1 }
  return {
    type: ADD_TO_CART,
    payload: newCartProduct,
  }
}

export const removeFromCart: removeFromCartCreator = (id: number) => {
  return { type: REMOVE_FROM_CART, payload: id }
}

export const setStateFromLocal: setStateFromLocalCreator = (
  products,
  total
) => {
  return {
    type: SET_STATE_FROM_LOCAL,
    payload: { products: products, total: total },
  }
}

export default cartReducer
