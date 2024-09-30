import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="cards">
      {products.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
          {/* Link to the individual ProductPage */}
          {/* <Link
            to={`/products/${product._id}`}
            className="text-blue-500 hover:underline"
          >
            View Product Details
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
