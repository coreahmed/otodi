import React, { lazy } from 'react'

import uris from './URI'
import Layout from '../../View/Layout/Index'

export const routes = [
  // sort alphabetically by uris
  {
    path: uris.dashboard,
    Component: lazy(() => import(`../../Controller/Dashboard/Index`)),
    exact: true,
  },
  {
    path: uris.users,
    Component: lazy(() => import(`../../Controller/Users/Index`)),
    exact: true,
  },
]

const Router: React.ComponentType = () => {
  return <Layout />
}
export default Router
