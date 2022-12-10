import React, { Fragment, ReactElement, Suspense } from 'react'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Helmet } from 'react-helmet'

import LayoutMain from './Main/Index'
import uris from '../../Config/Router/URI'
import LayoutNotFound from './Error/400/Index'
import { history } from '../..'
import { routes } from '../../Config/Router/Router'

const LayoutIndex: React.FC = () => {
  return (
    <Fragment>
      <Helmet titleTemplate="%s | Furniture Buy Made Easy!" title="OTODI" />
      <ConnectedRouter history={history}>
        <LayoutMain>
          <Route
            render={(state): ReactElement => {
              const { location } = state
              return (
                <SwitchTransition>
                  <CSSTransition
                    key={location.pathname}
                    appear
                    classNames="slide-fadein-up"
                    timeout={150}
                  >
                    <Switch location={location}>
                      <Route
                        exact
                        path={uris.index}
                        render={(): ReactElement => <Redirect to={uris.home} />}
                      />
                      {routes.map(({ path, Component, exact }) => (
                        <Route
                          path={path}
                          key={path}
                          exact={exact}
                          render={(): ReactElement => {
                            return (
                              <div className="slide-fadein-up">
                                <Suspense fallback={<p>Loading...</p>}>
                                  <Component />
                                </Suspense>
                              </div>
                            )
                          }}
                        />
                      ))}
                      <Route exact path="*" render={(): ReactElement => <LayoutNotFound />} />
                    </Switch>
                  </CSSTransition>
                </SwitchTransition>
              )
            }}
          />
        </LayoutMain>
      </ConnectedRouter>
    </Fragment>
  )
}

export default withRouter(LayoutIndex)
