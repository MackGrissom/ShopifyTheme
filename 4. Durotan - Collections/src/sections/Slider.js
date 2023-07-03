import React, { useEffect, useState, useRef } from "react"
import { Link } from 'react-router-dom';
import 'lazysizes';
import Slider from "react-slick";

export default (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
  };
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  }
  const prev = () => {
    sliderRef.current.slickPrev();
  }
  const [activeSlider, setActiveSlider] = useState(false)
  useEffect(() => {
    setTimeout(function () {
      setActiveSlider(true)
    }, 100);
  })
  return (
    <div>
      {/* Slider */}
      <div className="collection-slider">
        {/* Slider js */}
        <Slider ref={sliderRef} {...settings}>
          {/* Slider item */}
          <div className="collection-slider__item js-slider-item" data-id={1}>
            {/* Image */}
            <div className="collection-slider__image">
              <img data-id={1} alt="Image" data-sizes="auto" data-srcset="/images/collection/slider-01.jpg 400w,
              /images/collection/slider-01.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload js-slider-item-image active" />
            </div>
            {/* End image */}
            {/* Current slider number */}
            <div className="collection-slider__current-slider">
              <span className="current-slider">1</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="37.438" height="34.624" viewBox="0 0 37.438 34.624">
                <path id="Shape_2_copy" data-name="Shape 2 copy" className="cls-1" d="M109.534,903.679l0.678,0.734L73.466,938.322l-0.678-.735Z" transform="translate(-72.781 -903.688)" />
              </svg>
              <span>3</span>
            </div>
            {/* End current slider number */}
            {/* Short description */}
            <div className="collection-slider__short-description">
              <span>description</span>
              <p>Casual line. Short design. 100% suede leather.<br />Backstitched elbow patche</p>
            </div>
            {/* End short description */}
            {/* Content */}
            <div className="collection-slider__content">
              <h2 className={activeSlider == true ? 'collection-slider__title is-active' : 'collection-slider__title'}>new in<br />items</h2>
              <div className={activeSlider == true ? 'collection-slider__buttons is-active' : 'collection-slider__buttons'}>
                <Link to="/collections/womens-clothing">Mens</Link>
                <Link to="/collections/womens-clothing" className="without-background">Womens</Link>
              </div>
            </div>
            {/* End content */}
          </div>
          {/* End slider item */}
          {/* Slider item */}
          <div className="collection-slider__item js-slider-item" data-id={2}>
            {/* Image */}
            <div className="collection-slider__image">
              <img data-id={1} alt="Image" data-sizes="auto" data-srcset="/images/collection/slider-02.jpg 400w,
              /images/collection/slider-02.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload js-slider-item-image active" />
            </div>
            {/* End image */}
            {/* Current slider number */}
            <div className="collection-slider__current-slider">
              <span className="current-slider">2</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="37.438" height="34.624" viewBox="0 0 37.438 34.624">
                <path id="Shape_2_copy" data-name="Shape 2 copy" className="cls-1" d="M109.534,903.679l0.678,0.734L73.466,938.322l-0.678-.735Z" transform="translate(-72.781 -903.688)" />
              </svg>
              <span>3</span>
            </div>
            {/* End current slider number */}
            {/* Short description */}
            <div className="collection-slider__short-description">
              <span>description</span>
              <p>Casual line. Short design. 100% suede leather.<br />Backstitched elbow patche</p>
            </div>
            {/* End short description */}
            {/* Content */}
            <div className="collection-slider__content">
              <h2 className={activeSlider == true ? 'collection-slider__title is-active' : 'collection-slider__title'}>best seler items</h2>
              <div className={activeSlider == true ? 'collection-slider__buttons is-active' : 'collection-slider__buttons'}>
                <Link to="/collections/womens-clothing">Mens</Link>
                <Link to="/collections/womens-clothing" className="without-background">Womens</Link>
              </div>
            </div>
            {/* End content */}
          </div>
          {/* End slider item */}
          {/* Slider item */}
          <div className="collection-slider__item js-slider-item" data-id={3}>
            {/* Image */}
            <div className="collection-slider__image">
              <img data-id={1} alt="Image" data-sizes="auto" data-srcset="/images/collection/slider-03.jpg 400w,
              /images/collection/slider-03.jpg 800w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload js-slider-item-image active" />
            </div>
            {/* End image */}
            {/* Current slider number */}
            <div className="collection-slider__current-slider">
              <span className="current-slider">3</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="37.438" height="34.624" viewBox="0 0 37.438 34.624">
                <path id="Shape_2_copy" data-name="Shape 2 copy" className="cls-1" d="M109.534,903.679l0.678,0.734L73.466,938.322l-0.678-.735Z" transform="translate(-72.781 -903.688)" />
              </svg>
              <span>3</span>
            </div>
            {/* End current slider number */}
            {/* Short description */}
            <div className="collection-slider__short-description">
              <span>description</span>
              <p>Casual line. Short design. 100% suede leather.<br />Backstitched elbow patche</p>
            </div>
            {/* End short description */}
            {/* Content */}
            <div className="collection-slider__content">
              <h2 className={activeSlider == true ? 'collection-slider__title is-active' : 'collection-slider__title'}>discount 25% off</h2>
              <div className={activeSlider == true ? 'collection-slider__buttons is-active' : 'collection-slider__buttons'}>
                <Link to="/collections/womens-clothing">Mens</Link>
                <Link to="/collections/womens-clothing" className="without-background">Womens</Link>
              </div>
            </div>
            {/* End content */}
          </div>
          {/* End slider item */}
        </Slider>
        {/* End slider js */}
      </div>
      {/* End slider */}
    </div>
  )
}