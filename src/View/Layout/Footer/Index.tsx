import React from 'react'

import './Index.scss'
import logo from './Assets/otodi-logo.png'
import uris from '../../../Config/Router/URI'

const FooterMain: React.FC = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container-main">
        <div className="company-info">
          <a href={uris.index}>
            <img src={logo} alt="company logo" />
          </a>
          <p>
            OTODI is a Bangladesh-based furniture manufacturer and retailer. The company was
            established in 1975 by Abdullah.
          </p>
        </div>
        <div className="footer-menu">
          <h3 className="footer-menu-title">Information</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Delivery Information</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3 className="footer-menu-title">My Account</h3>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Wish List</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3 className="footer-menu-title">Get in touch</h3>
          <address>
            Email to{' '}
            <a href="mailto:avvdullah@gmail.com" className="email">
              Abdullah Al Fahim
            </a>{' '}
            <br />
            <p>Visit us at: Chittagong, Bangladesh</p>
            <p>
              Open : <span>8:00 AM</span> - Close : <span>18:00 PM</span>
            </p>
            <p>Saturday - Sunday : Close</p>
          </address>
        </div>
      </div>
      <div className="footer-copy">
        <hr />
        <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterMain
