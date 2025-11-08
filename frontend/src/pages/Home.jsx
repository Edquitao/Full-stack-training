import React from "react";
import Header from "../components/Header";
import Hero from "../components/hero";
import ProductGuide from "../components/ProductGuide";
import Product_list from "../components/Product_list";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductGuide />
      <Product_list />
    </div>
  );
};

export default Home;
