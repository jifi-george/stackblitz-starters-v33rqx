import React from 'react';
import Header from './common/Header';
import Banner from './components/Banner';
import LatestProducts from './components/LatestProducts';
import ProductCategory from './components/ProductCategory';
import ProductSlider from './components/ProductSlider';
import NewsLetter from './components/NewsLetter';
import OfferBanner from './components/OfferBanner';
import Testimonials from './components/Testimonials';
import PremiumProducts from './components/PremiumProducts';

import Offer from './components/Offer';
import Footer from './common/Footer';
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ProductCategory />

      <ProductSlider products={LatestProducts} title="LATEST ARRIVALS" />
      <OfferBanner />
      <ProductSlider
        products={PremiumProducts}
        title="PREMIUM PRODUCTS
"
      />

      <Offer />
      <NewsLetter />

      <Testimonials />
      <Footer />
    </div>
  );
}
