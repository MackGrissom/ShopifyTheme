import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Logo from "../snippets/Logo"
import MobileNav from "../snippets/MobileNav"
import MainNav from "../snippets/MainNav"
import ShoppingCart from "../snippets/ShoppingCart"
import CanvasCart from "../snippets/CanvasCart"
import SearchForm from "../snippets/SearchForm"
import { useShopify } from "../hooks"

export default (props) => {
  const { checkoutState, removeLineItem, openCart, openSearch, openCanvasMenu } = useShopify()
  const [counter, setCounter] = useState(0)

  function showSearch() {
    openSearch();
  }

  function showCart() {
    openCart();
  } 

  function showCanvasMenu() {
    openCanvasMenu();
  } 
  
  useEffect(() => {
    function getCount() {
      let lineItems =
        checkoutState.lineItems && checkoutState.lineItems.length > 0
          ? checkoutState.lineItems
          : []
      let count = 0
      lineItems.forEach((item) => {
        count += item.quantity
        return count
      })
      setCounter(count)
    }

    getCount()
  }, [checkoutState]) 
  return (
    <div>
      {/* Header */}
      <header className="header header--type-4">
        {/* Container */}
        <div className="container container--type-3">
          {/* Header container */}
          <div className="header__container d-flex align-items-center">
            <MobileNav />
            {/* Desktop menu */}
            <div className="header__desktop-menu">
              <a onClick={(e) => showCanvasMenu()}><i className="lnil lnil-line-double" /><span>Menu</span></a>
            </div>
            {/* End desktop menu */}
            <Logo />
            {/* Header right */}
            <ul className="header__right">
              <li><a onClick={(e) => showSearch()}><i className="lnil lnil-search-alt" /></a></li>
              <li className="d-none d-lg-block"><Link to="/account/login"><i className="lnil lnil-user" /></Link></li>
              <li className="header__cart">
                <a onClick={(e) => showCart()}><i className="lnil lnil-cart" /><span>{counter}</span></a>
              </li>
            </ul>
            {/* End header right */}
          </div>
          {/* End header container */}
        </div>
        {/* End container */}
      </header>
      {/* End header */}
      <SearchForm />
      <CanvasCart />
      <MainNav />
    </div>
  )
}