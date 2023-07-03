import React from "react"
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div>
      {/* Our journal */}
      <div className="modern-our-journal collection-our-journal">
        {/* Container */}
        <div className="container container--type-4">
          {/* Second container */}
          <div className="collection-our-journal__container">
            {/* Title */}
            <h4 className="modern-our-journal__title">Our journal</h4>
            {/* End title */}
            {/* Row */}
            <div className="row">
              {/* Post */}
              <div className="col-lg-6 col-xl-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/collection/post-1.jpg 1560w,
                      /images/collection/post-1.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><a href="#">Inspiration</a></li>
                    <li>Dec 24, 2022</li>
                    <li>By Admin</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title font-family-jost">
                    <Link to="/blogs/news/article">How to choose a sneakers suit for any your style</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div> 
              {/* End post */}
              {/* Post */}
              <div className="col-lg-6 col-xl-4">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/collection/post-2.jpg 1560w,
                      /images/collection/post-2.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><a href="#">Tips &amp; Tricks</a></li>
                    <li>Dec 24, 2022</li>
                    <li>By Firmino</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title font-family-jost">
                    <Link to="/blogs/news/article">How to mixed minimalist fashion style with basic items</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div> 
              {/* End post */}
              {/* Post */}
              <div className="col-lg-6 col-xl-4 d-lg-none d-xl-block">
                <div className="blog-article">
                  {/* Image */}
                  <div className="blog-article__image">
                    <Link to="/blogs/news/article">
                      <img alt="Image" data-sizes="auto" data-srcset="/images/collection/post-3.jpg 1560w,
                      /images/collection/post-3.jpg 3120w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" className="lazyload" />
                    </Link>
                  </div>
                  {/* End image */}
                  {/* Meta */}
                  <ul className="blog-article__meta">
                    <li><a href="#">Lookbook</a></li>
                    <li>Dec 24, 2022</li>
                    <li>By Logan Cee</li>
                  </ul>
                  {/* End meta */}
                  {/* Title */}
                  <h5 className="blog-article__title font-family-jost">
                    <Link to="/blogs/news/article">Hello summer, discover the new sunglasses in lookbook #82</Link>
                  </h5>
                  {/* End Title */}
                </div>
              </div> 
              {/* End post */}
            </div>
            {/* End row */}
          </div>
          {/* End second container */}
          {/* Line 1px */}
          <hr />
          {/* End line 1px */}
        </div>
        {/* End container */}
      </div>
      {/* End our journal */}
    </div>
  )
}