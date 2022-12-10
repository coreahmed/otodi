import React, { lazy } from 'react'

import uris from './URI'
import Layout from '../../View/Layout/Index'

export const routes = [
  // sort alphabetically by uris
  {
    path: uris.home,
    Component: lazy(() => import(`../../Controller/Home/Index`)),
    exact: true,
  },
]

const Router: React.ComponentType = () => {
  return <Layout />
}
export default Router
