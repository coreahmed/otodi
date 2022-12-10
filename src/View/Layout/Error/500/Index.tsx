import React from 'react'

import './Index.scss'

import uris from '../../../../Config/Router/URI'
import ButtonMain from '../../../../Components/Button/Main'

const LayoutIndex: React.FC = () => {
  return (
    <main className="error-500-main">
      <div className="top-500-nav">
        <div className="logo-container">logo</div>
      </div>
      <div className="error-500-container">
        <div className="error-500-div">
          <h1>500!</h1>
          <span>Something Went Wrong!</span>
          <p className="mt-3">Please try to refresh the page or try again later.</p>
          <a href={uris.index}>
            <ButtonMain className="button-main">RETURN HOME</ButtonMain>
          </a>
        </div>
      </div>
      footer will be here
    </main>
  )
}

export default LayoutIndex
