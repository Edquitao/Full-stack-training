import React from "react";
import { products } from "../api/products";

const Product_list = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Product list</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {products.slice(0, 6).map((product, index) => (
          <div
            key={index}
            className="product-card border rounded-lg p-6 shadow-lg hover:shadow-xl/20 transition-shadow flex flex-col items-center "
          >
            {/* Image retains original size */}
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 max-w-full"
            />

            {/* Name and Price Row */}
            <div className="flex justify-between w-full mb-3">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="font-bold text-lg">{product.price}</p>
            </div>

            {/* Brand and Buy Button Row */}
            <div className="flex justify-between items-center w-full mb-2">
              <p className="text-gray-700">{product.brand}</p>
              <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-blue-600 transition">
                Buy
              </button>
            </div>

            {/* Category */}
            <p className="mt-2 text-gray-600">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_list;
