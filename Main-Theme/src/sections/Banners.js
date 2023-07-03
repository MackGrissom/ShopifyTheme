import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Banners */}
      <div className="collection-banners d-flex">
        {/* Banner */}
        <div className="collection-banners__banner">
          {/* Image */}
          <div className="collection-banner__image">
            <img data-id={1} alt="Image" data-sizes="auto" data-srcset="/images/collection/banner-01.jpg 400w,
            /images/collection/banner-01.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
          </div>
          {/* End image */}
          {/* Content */}
          <div className="collection-banner__content">
            {/* Title */}
            <h2 className="collection-banner__title">autumn vibes</h2>
            {/* End title */}
            {/* Description */}
            <div className="collection-banner__description">
              From editor’s choice with basic items, help you simple but good at all
            </div>
            {/* End description */}
            {/* Buttons */}
            <div className="collection-banner__buttons">
              <Link to="/collections/womens-clothing">Mens</Link>
              <Link to="/collections/womens-clothing" className="without-background">Womens</Link>
            </div>
            {/* End buttons */}
          </div>
          {/* End content */}
        </div>
        {/* End banner */}
        {/* Banner */}
        <div className="collection-banners__banner">
          {/* Image */}
          <div className="collection-banner__image">
            <img data-id={1} alt="Image" data-sizes="auto" data-srcset="/images/collection/banner-02.jpg 400w,
            /images/collection/banner-02.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
          </div>
          {/* End image */}
          {/* Content */}
          <div className="collection-banner__content">
            {/* Title */}
            <h2 className="collection-banner__title">must have</h2>
            {/* End title */}
            {/* Description */}
            <div className="collection-banner__description">
              Apparels, Shoes, Bags &amp; Accesories, items essential for this seanson
            </div>
            {/* End description */}
            {/* Buttons */}
            <div className="collection-banner__buttons">
              <Link to="/collections/womens-clothing">Explore now</Link>
            </div>
            {/* End buttons */}
          </div>
          {/* End content */}
        </div>
        {/* End banner */}
      </div>
      {/* End banners */}
    </div>
  )
}