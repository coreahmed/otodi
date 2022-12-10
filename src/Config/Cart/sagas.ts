import { takeEvery, all, put } from 'redux-saga/effects'

import actionTypes from './action'

function* getCartItemSaga() {
  yield put({
    type: actionTypes.CART_ITEM_SET_SUCCESS,
    cart: ['fahim', 'abdullah', 'sojim'],
  })
}

function* clearCartSaga() {
  localStorage.removeItem('name')
  yield null
}

export default function* watcherSaga(): Generator {
  yield all([
    takeEvery(actionTypes.CART_ITEM_GET, getCartItemSaga),
    takeEvery(actionTypes.CART_RESET, clearCartSaga),
  ])
}
