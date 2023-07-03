import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useShopify } from "../hooks"
import 'lazysizes';
import ProductCard from "../snippets/ProductCard";

export default (props) => {
  const [sectionProducts, setSectionProducts] = useState([])
  const { fetchCollectionProducts } = useShopify()
  const id = props.collection_id
  useEffect(() => {
    fetchCollectionProducts(id).then((res) => {
      setSectionProducts(res)
    })
  }, [id])
  return (
    <React.Fragment>
      {/* Our products */}
      <div className="our-products modern-our-products collection-our-products">
        {/* Container */}
        <div className="container container--type-4">
          {/* Title */}
          <h4 className="our-products__title font-family-jost">Featured Products</h4>
          {/* End title */}
          {/* Nav */}
          <ul className="our-products__nav">
            <li><Link to="/collections/frontpage" className="active">Best selling</Link></li>
            <li><Link to="/collections/frontpage">New arrivals</Link></li>
            <li><Link to="/collections/frontpage">Editor's pick</Link></li>
          </ul>
          {/* End nav */}
          <div className="row">
            {sectionProducts.slice(0, 8).map((product, i) => {
              return (
                <div className="col-6 col-md-4 col-xl-3" key={product.id}>
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                </div>
              )
            })}
          </div>
          {/* More button */}
          <div className="collection-our-products__more">
            <Link to="/collections/womens-clothing" className="eighth-button">see all products (40)</Link>
          </div>
          {/* End more button */}
        </div>
        {/* End container */}
      </div>
      {/* End our products */}
    </React.Fragment>
  )
}