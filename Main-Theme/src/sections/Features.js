import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Features */}
      <div className="collection-features">
        <div className="container container--type-4">
          {/* Container */}
          <div className="about-page__features">
            {/* Row */}
            <div className="row">
              {/* Feature */}
              <div className="col-lg-4">
                <div className="about-feature">
                  {/* Icon */}
                  <div className="about-feature__icon">
                    <i className="lnil lnil-tshirt" />
                  </div>
                  {/* End icon */}
                  {/* Text */}
                  <div className="about-feature__text">
                    {/* Title */}
                    <h3 className="about-feature__title">Quality materials</h3>
                    {/* End title */}
                    {/* Description */}
                    <div className="about-feature__description">Gurantee 100% polyurethane and 100% polyester</div>
                    {/* End description */}
                  </div>  
                  {/* End text */}
                </div>
              </div>
              {/* End feature */}
              {/* Feature */}
              <div className="col-lg-4">
                <div className="about-feature">
                  {/* Icon */}
                  <div className="about-feature__icon">
                    <i className="lnil lnil-ship" />
                  </div>
                  {/* End icon */}
                  {/* Text */}
                  <div className="about-feature__text">
                    {/* Title */}
                    <h3 className="about-feature__title">Free shipping</h3>
                    {/* End title */}
                    {/* Description */}
                    <div className="about-feature__description">We free shipping for all oders over $199</div>
                    {/* End description */}
                  </div>  
                  {/* End text */}
                </div>
              </div>
              {/* End feature */}
              {/* Feature */}
              <div className="col-lg-4">
                <div className="about-feature">
                  {/* Icon */}
                  <div className="about-feature__icon">
                    <i className="lnil lnil-money-protection" />
                  </div>
                  {/* End icon */}
                  {/* Text */}
                  <div className="about-feature__text">
                    {/* Title */}
                    <h3 className="about-feature__title">Secure payment</h3>
                    {/* End title */}
                    {/* Description */}
                    <div className="about-feature__description">Guarante 100% secure payment online on our website</div>
                    {/* End description */}
                  </div>  
                  {/* End text */}
                </div>
              </div>
              {/* End feature */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
        </div>  
      </div>
      {/* End features */}
    </div>
  )
}