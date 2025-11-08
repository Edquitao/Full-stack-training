import React from "react";
import ProductGuide from "../components/ProductGuide";
import Product_list from "../components/Product_list";
import Header from "../components/Header";

export const Products = () => {
  return (
    <div>
      <Header />
      <ProductGuide />
      <Product_list />
    </div>
  );
};

export default Products;
