import React from 'react'

import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import './View/Layout/Styles/Globals/_style.scss'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { routerMiddleware } from 'connected-react-router'

import Router from './Config/Router/Router'
import rootSaga from './Config/Store/sagas'
import reducers from './Config/Store/reducers'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]
const store = createStore(reducers(history), composeWithDevTools(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)
const container = document.getElementById('root') as Element
const Root = createRoot(container)

Root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
)

export type RootState = ReturnType<typeof store.getState>
export { store, history }
