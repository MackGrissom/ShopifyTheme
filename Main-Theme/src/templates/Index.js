import React, { useEffect } from 'react';
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Slider from "../sections/Slider";
import HomeProducts from "../sections/HomeProducts"
import OurJournal from "../sections/OurJournal"
import Features from "../sections/Features"
import Banners from "../sections/Banners"
import Video from "../sections/Video"
import { useShopify } from "../hooks"

export default (props) => {
  const { closeCart, closeSearch, closeCanvasMenu } = useShopify()
  useEffect(() => {
    window.scrollTo(0, 0);
    closeCart();
    closeSearch();
    closeCanvasMenu();
  }, []) 
  return (
    <React.Fragment>
      <div className="home-2 absolute-header">
        <Header />
        <Slider />
        <Banners />
        <Video />
        <HomeProducts collection_id="womens-clothing" />
        <OurJournal />
        <Features />
        <Footer />
      </div>
    </React.Fragment>
  )
}