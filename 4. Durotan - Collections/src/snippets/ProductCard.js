import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Product */}
      <div className="product-grid-item product-grid-item--type-2">
        {props.variants[0].compareAtPrice != null &&
          <div className="product-grid-item__tag">Sale</div>
        }
        {/* Product images */}
        <div className="product-grid-item__images">
          {/* Product image */}
          <div className="product-grid-item__image active">
            <Link to={'/product/' + props.handle }>
              <img alt="Image" data-sizes="auto" data-srcset={props.images[0].src + ' 270w'} src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
            </Link>
          </div>
          {/* End product image */}
          {/* Product action */}
          <div className="product-grid-item__action-2">
            {/* D-flex */}
            <div className="d-flex align-items-center">
              {/* Quickview */}
              <div className="product-grid-item__quickview">
                <a href="#"><i className="lnil lnil-full-screen" /> Quick view</a>
              </div>
              {/* End quickview */}
              {/* Wishlist */}
              <div className="product-grid-item__wishlist">
                <a href="#"><i className="lnil lnil-heart" /> Add to wishlist</a>
              </div>
              {/* End wishlist */}
            </div>
            {/* End d-flex */}
          </div>
          {/* End product action */}
        </div>
        {/* End product images */}
        {/* Product name */}
        <div className="product-grid-item__name">
          <Link to={'/product/' + props.handle }>{props.title}</Link>
        </div>
        {/* End product name */}
        {/* Product price */}
        <div className="product-grid-item__price">
          {props.variants[0].compareAtPrice != null ? (
            <React.Fragment>
              <span className="product-grid-item__price-new">${props.variants[0].price}</span> <span className="product-grid-item__price-old">${props.variants[0].compareAtPrice}</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span>${props.variants[0].price}</span>
            </React.Fragment>
          )}
        </div>
        {/* End product price */}
        {/* Product add to cart */}
        <div className="product-grid-item__add-to-basket">
          <a href="#">Add to basket</a>
        </div>
        {/* End product add to cart */}
      </div>
      {/* End Product */}
    </div>
  )
}