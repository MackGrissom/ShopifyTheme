import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Footer collection */}
      <footer className="modern-footer collection-footer">
        {/* Container */}
        <div className="container container--type-4">
          {/* Newsletter */}
          <div className="blog-with-sidebar__newsletter">
            {/* Container */}
            <div className="container">
              {/* Row */}
              <div className="row blog-newsletter">
                <div className="col-lg-4">
                  {/* Newsletter Title */}
                  <h3 className="blog-newsletter__title font-family-jost">Our Newsletter</h3>
                  {/* End newsletter title */}
                </div>
                <div className="col-lg-8">
                  {/* Newsletter form */}
                  <form className="blog-newsletter__form">
                    <input type="email" placeholder="Your email address" className="blog-newsletter__input" />
                    <button type="submit" className="blog-newsletter__submit">Subscribe</button>
                  </form>
                  {/* End newsletter form */}
                </div>
              </div>
              {/* End row */}
            </div>
            {/* End container */}
          </div>
          {/* End newsletter */}
          {/* Line 1px */}
          <hr />
          {/* End line 1px */}
          {/* Menu */}
          <ul className="modern-footer__menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">shop </a></li>
            <li><a href="#">product</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">pages</a></li>
          </ul>
          {/* End menu */}
          {/* Row */}
          <div className="row">
            <div className="col-lg-4 mobile-order-2">
              {/* Social */}
              <div className="modern-footer__social">
                <p>follow us</p>
                <ul>
                  <li><a href="#"><i className="lnil lnil-twitter" /></a></li>
                  <li><a href="#"><i className="lnil lnil-facebook" /></a></li>
                  <li><a href="#"><i className="lnil lnil-Instagram" /></a></li>
                </ul>
              </div>
              {/* End social */}
            </div>
            <div className="col-lg-4">
              {/* Logo */}
              <div className="modern-footer__logo">
                Durotan
              </div>
              {/* End logo */}
              {/* Address */}
              <div className="modern-footer__address">
                268 Elizaberth Ave Str, Brooklyn, CA, 90025<br />
                +0082 561 43 34<br />
                support@durotan.com
              </div>
              {/* End address */}
              {/* Payment */}
              <div className="modern-footer__payment d-none d-lg-block">
                <img src="/images/modern/payment.png" alt="Payment" />
              </div>
              {/* End payment */}
            </div>
            <div className="col-lg-4 mobile-order-3">
              {/* Currency */}
              <div className="modern-footer__currency">
                <p>Currency</p>
                <ul>
                  <li><a href="#" className="active">USD</a></li>
                  <li><a href="#">EUR</a></li>
                  <li><a href="#">VND</a></li>
                </ul>
              </div>
              {/* End currency */}
            </div>
          </div>
          {/* End row */}
          {/* Payment */}
          <div className="modern-footer__payment d-block d-lg-none">
            <img src="/images/modern/payment.png" alt="Payment" />
          </div>
          {/* End payment */}
          {/* Copyright */}
          <div className="modern-footer__copyright">© durotan 2022</div>
          {/* End copyright */}
        </div>
        {/* End container */}
      </footer>
      {/* End footer collection */}
    </div>
  )
}