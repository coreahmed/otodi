import React from 'react'

import './Main.scss'
import singleProduct from '../../Assets/single-product.png'

const HeroMain: React.FC = () => {
  return (
    <div className="slider-area">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="slider-content">
            <h3>new arrival</h3>
            <h1>
              Summer
              <br />
              Collection
            </h1>
            <button type="button">Shop Now icon</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="slider-img">
            <img src={singleProduct} alt="single-product" />
            <div className="slider-round">
              <h5>
                30% <span>OFF</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMain
