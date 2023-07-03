import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Home from "../templates/Index"
import ErrorPage from '../templates/404';
import { useShopify } from "../hooks"
import { NotificationContainer } from 'react-notifications';
import Blog from '../templates/Blog';
import Article from '../templates/Article';
import Collection from "../templates/Collection"
import Product from "../templates/Product"
import Wishlist from "../templates/Wishlist"
import Login from "../templates/account/Login"
import ContactUs from "../templates/ContactUs"
import AboutUs from "../templates/AboutUs"
import Cart from "../templates/Cart"
import Checkout from "../templates/Checkout"
import OrderComplete from "../templates/OrderComplete"

export default (props) => {
  const {
    createShop,
    createCheckout,
    fetchProducts,
    fetchCollections,
  } = useShopify()

  useEffect(() => {
    createShop()
    fetchProducts()
    createCheckout()
    fetchCollections()
  }, [])

	return (
		<Router>
      <div id="app">
        <Switch>
  				<Route exact path="/" render={() => <Redirect to="/home" />} />
  				<Route path="/home" component={Home} />
          <Route path="/blogs/:blogId/:articleId" component={Article} />
          <Route path="/blogs/:blogId" component={Blog} />
          <Route path="/collections/:collectionId" component={Collection} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/pages/wishlist" component={Wishlist} />
          <Route path="/pages/contact-us" component={ContactUs} />
          <Route path="/pages/about-us" component={AboutUs} />
          <Route path="/account/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order-complete" component={OrderComplete} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
      <NotificationContainer/>
		</Router>
	)
}
