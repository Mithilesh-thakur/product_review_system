import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onDelete }) => {
  if (!product) return <div>Loading...</div>;

  return (
    
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Image Section */}
          <div className="md:flex-1 px-4">
            <div className="h-[300px] sm:h-[350px] md:h-[300px] lg:h-[350px] w-full md:w-[400px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={product.image || "default-image-url.jpg"}
                alt={product.name || "Product Image"}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              {/* Delete Button */}
              <div className="w-1/2 px-2">
                <button
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  onClick={() => onDelete(product._id)}
                >
                  Delete Product
                </button>
              </div>
              {/* Wishlist Button */}
              
            </div>
          </div>

          {/* Details Section */}
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name || "Product Name"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description || "Product Description"}
            </p>

            {/* Price and Availability */}
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${product.price || "0.00"}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Review Button */}
            <div className="flex mb-4">
              <Link to={`/products/${product._id}/review`}>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-full font-bold hover:bg-indigo-700">
                  Give Review
                </button>
              </Link>
            </div>

            {/* View Details Button */}
            <div className="flex mb-4">
              <Link to={`/products/${product._id}`}>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-full font-bold hover:bg-indigo-700">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
