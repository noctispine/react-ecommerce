import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
import registerationReducer from './registerationReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
  register: registerationReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
