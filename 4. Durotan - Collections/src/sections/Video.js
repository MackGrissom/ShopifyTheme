import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* video */}
      <div className="collection-video">
        {/* Image */}
        <div className="collection-video__video">
          <div className="collection-video__iframe" style={{backgroundImage: 'url(/images/collection/bg-video.jpg)'}}>
            <iframe src="https://player.vimeo.com/video/428981569?background=1&autoplay=1&loop=1&byline=0&title=0" frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
          </div>
        </div>
        {/* End image */}
        {/* Content */}
        <div className="collection-video__content">
          {/* Title */}
          <h2 className="collection-video__title">limited edition</h2>
          {/* End title */}
          {/* Subtitle */}
          <h3 className="collection-video__subtitle">Fall Winter 2022</h3>
          {/* End subtitle */}
          {/* Description */}
          <div className="collection-video__description">
            Apparels, Shoes, Bags &amp; Accesories, items essential<br />for this seanson
          </div>
          {/* End description */}
          {/* Buttons */}
          <div className="collection-video__buttons">
            <Link to="/collections/womens-clothing">Shop now</Link>
          </div>
          {/* End buttons */}
        </div>
        {/* End content */}
      </div>
      {/* End video */}
    </div>
  )
}