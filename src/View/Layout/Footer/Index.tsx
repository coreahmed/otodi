import React from 'react';
import './Index.scss'

const FooterMain:React.FC = () => {
  return (
    <footer className="footer-area">
      <div className="bg-gray-2">
        <div className="container">
          <div className="footer-top pt-80 pb-35">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about mb-40">
                  <div className="footer-logo">
                    <a href="View/Layout/Main/Footer/Index#"><img alt="logo"/></a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, cons adipi elit, sed do eiusmod tempor incididunt ut
                                        aliqua.</p>
                  <div className="payment-img">
                    <a href="View/Layout/Main/Footer/Index#"><img alt="logo"/></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-widget-margin-1 footer-list mb-40">
                  <h3 className="footer-title">Information</h3>
                  <ul>
                    <li><a href="View/Layout/Main/Footer/Index#">About Us</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Delivery Information</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Privacy Policy</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Terms & Conditions</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Customer Service</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-list mb-40">
                  <h3 className="footer-title">My Accound</h3>
                  <ul>
                    <li><a href="View/Layout/Main/Footer/Index#">My Account</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Order History</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Wish List</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Newsletter</a></li>
                    <li><a href="View/Layout/Main/Footer/Index#">Order History</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-widget-margin-2 footer-address mb-40">
                  <h3 className="footer-title">Get in touch</h3>
                  <ul>
                    <li><span>Address: </span>Your address goes here</li>
                    <li><span>Telephone Enquiry:</span> (012) 345 6789</li>
                    <li><span>Email: </span>demo@example.com</li>
                  </ul>
                  <div className="open-time">
                    <p>Open : <span>8:00 AM</span> - Close : <span>18:00 PM</span></p>
                    <p>Saturday - Sunday : Close</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-3">
        <div className="container">
          <div className="footer-bottom copyright text-center bg-gray-3">
            <p>Copyright ©2021 All rights reserved | Made with <i className="fa fa-heart" /> by <a
              href="View/Layout/Main/Footer/Index"> Team 167</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;