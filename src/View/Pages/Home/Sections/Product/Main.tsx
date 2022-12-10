import React from 'react';

import './Main.scss'
import bannerOne from '../../Assets/banner/banner-1.png';
import bannerTwo from '../../Assets/banner/banner-2.png';
import bannerThree from '../../Assets/banner/banner-3.png';

const ProductMain:React.FC = () => {
  return (
    <div className="product-main">
      <div className="banner-main">
        <div className="banner-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="banner-wrap">
                  <div className="banner-content">
                    <h5>NEW ARRIVAL</h5>
                    <h3>Office Chair</h3>
                    <a href="#">Shop Now</a>
                  </div>
                  <div className="banner-img">
                    <img src={bannerOne} alt="bannerOne" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="banner-wrap">
                  <div className="banner-content">
                    <h5>NEW ARRIVAL</h5>
                    <h3>Hanging Chair</h3>
                    <a href="#">Shop Now</a>
                  </div>
                  <div className="banner-img">
                    <img src={bannerTwo} alt="bannerTwo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="banner-wrap">
                  <div className="banner-content">
                    <h5>NEW ARRIVAL</h5>
                    <h3>Folding Chair</h3>
                    <a href="#">Shop Now</a>
                  </div>
                  <div className="banner-img">
                    <img src={bannerThree} alt="bannerThree" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMain;