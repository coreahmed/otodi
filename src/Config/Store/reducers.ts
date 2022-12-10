import { combineReducers, Reducer } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import cartReducer from '../Cart/reducers'

const index = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    cart: cartReducer,
  })

export default index
