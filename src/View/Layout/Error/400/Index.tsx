import React from 'react'

import { Link } from 'react-router-dom'

import uris from '../../../../Config/Router/URI'
import ButtonMain from '../../../../Components/Button/Main'

import './Index.scss'

const LayoutNotFound: React.FC = () => {
  return (
    <main className="error-400-main">
      <div>
        <h1>404!</h1>
        <span>Page Not Found!</span>
        <p>Sorry, the page that you are looking for doesn’t exist.</p>
        <Link to={uris.index}>
          <ButtonMain className="button-400-not-found">RETURN HOME</ButtonMain>
        </Link>
      </div>
    </main>
  )
}

export default LayoutNotFound
