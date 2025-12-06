import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../API/api_base";
import Loading from "./Loading.jsx";

const Product_list = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const toggleMoreInfo = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Product list</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {products.slice(0, 6).map((product, index) => (
          <div
            key={index}
            className="product-card border rounded-lg p-6 shadow-lg hover:shadow-xl/20 transition-shadow flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={`${BASE_URL}/${product.image}`}
              alt={product.product_name}
              className="mb-4 max-w-full"
            />

            {/* Name and Price */}
            <div className="flex justify-between w-full mb-3">
              <h2 className="font-semibold text-lg">{product.product_name}</h2>
              <p className="font-bold text-lg">{product.product_price}</p>
            </div>

            {/* Brand and Buy Button */}
            <div className="flex flex-col w-full mb-2">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700">{product.brand}</p>
                <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded hover:bg-blue-600 transition">
                  Buy
                </button>
              </div>

              {/* More Info below Brand */}
              {product.description && (
                <>
                  <button
                    onClick={() => toggleMoreInfo(index)}
                    className="text-blue-500 hover:underline text-sm mb-1"
                  >
                    {expandedIndex === index ? "Hide Info" : "More Info"}
                  </button>

                  {expandedIndex === index && (
                    <p className="text-gray-800 text-sm text-justify">
                      {product.description}
                    </p>
                  )}
                </>
              )}
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
