import { combineReducers, Reducer } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

const index = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
  })

export default index
