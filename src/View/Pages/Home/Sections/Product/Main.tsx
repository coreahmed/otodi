import React from 'react';

import './Main.scss'
import bannerOne from '../../Assets/Banner/banner-1.png';
import bannerTwo from '../../Assets/Banner/banner-2.png';
import bannerThree from '../../Assets/Banner/banner-3.png';
import bannerFour from '../../Assets/Banner/banner-4.png';
import bannerFive from '../../Assets/Banner/banner-5.png';
import car from '../../Assets/Service/car.png';
import time from '../../Assets/Service/time.png';
import doller from '../../Assets/Service/dollar.png';
import discount from '../../Assets/Service/discount.png';

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
      <div className="deal-the-day">
        <div className="product-area">
          <div className="container">
            <div className="product-title-wrapper">
              <div className="product-title">
                <h3>Deal Of The Day</h3>
              </div>
              <div className="product-time">
                <h5>End In:</h5>
              </div>
            </div>
            <div className="row">
                    list of product
            </div>
          </div>
        </div>
      </div>
      <div className="banner-furniture">
        <div className="banner-area-two">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12">
                <div className="banner-wrap">
                  <div className="banner-content">
                    <span>Sale 30%</span>
                    <h2>New Furniture</h2>
                    <p>Lorem ipsum dolor sit amet consecte adipisicing elit sed do</p>
                    <a href="#" className="banner-btn">Shop Now</a>
                  </div>
                  <div className="banner-img">
                    <img src={bannerFour} alt="bannerFour" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="img">
                  <img src={bannerFive} alt="bannerFive" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area">
        <div className="service-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="serviece-wrap">
                  <div className="img">
                    <a href="#"><img src={car} alt="car" /></a>
                  </div>
                  <div className="content">
                    <h3>Free Shipping</h3>
                    <p>Free shipping on all order</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="serviece-wrap">
                  <div className="img">
                    <a href="#"><img src={time} alt="time" /></a>
                  </div>
                  <div className="content">
                    <h3>Support 24/7</h3>
                    <p>Support 24 hours a day</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="serviece-wrap">
                  <div className="img">
                    <a href="#"><img src={doller} alt="doller" /></a>
                  </div>
                  <div className="content">
                    <h3>Money Return</h3>
                    <p>Back Guarantee Under</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div className="serviece-wrap">
                  <div className="img">
                    <a href="#"><img src={discount} alt="discount" /></a>
                  </div>
                  <div className="content">
                    <h3>Order Discount</h3>
                    <p>Onevery order over $150</p>
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