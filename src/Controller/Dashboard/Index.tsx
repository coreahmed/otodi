import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../..'
import actionTypes from '../../Config/Cart/action'

const DashboardIndex: React.FC = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state.cart)

  console.log('cart', cart)

  useEffect(() => {
    dispatch({ type: actionTypes.CART_ITEM_GET })
  }, [dispatch])
  return <h1>main page</h1>
}

export default DashboardIndex
