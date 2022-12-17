import React, { useState } from 'react'

import './Index.scss'
import ErrorBoundary from '../../../Config/ErrorHandler/ErrorBoundary'
import FooterMain from '../Footer/Index'

interface Props {
  children?: React.ReactNode
}
const LayoutMain: React.FC<Props> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <ErrorBoundary>
      <div className="layout-main">
        <div className="layout-top-bar">
          <div className="menu-handler">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button">
              faBars icon
            </button>
            {!mobileMenuOpen && 'Logo'}
          </div>
          topbar here.
        </div>
        <div className="main-content">{children}</div>
        <div className="layout-footer">
          <FooterMain />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default LayoutMain
