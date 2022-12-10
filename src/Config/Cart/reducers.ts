import actionTypes from './action'
import { CartStateType } from './types'

const initialState: CartStateType = {
  cart: [],
  loading: false,
}

function cartReducer(
  action: {
    type: string
    cart: []
    loading: boolean
  },
  state = initialState,
): CartStateType {
  switch (action?.type) {
  case actionTypes.CART_ITEM_SET_SUCCESS:
    return {
      ...initialState,
      loading: false,
      cart: action.cart,
    }
  case actionTypes.CART_RESET:
    return {
      ...initialState,
      loading: false,
      cart: [],
    }
  default:
    return state
  }
}

export default cartReducer
