import { all } from 'redux-saga/effects'

import cart from '../Cart/sagas'

export default function* rootSaga(): Generator {
  yield all([cart()])
}
