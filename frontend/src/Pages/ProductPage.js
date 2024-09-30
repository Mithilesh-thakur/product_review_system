import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { productId } = useParams(); // Get the product ID from the route
  const [product, setProduct] = useState(null);

  // Fetch the product data from the server
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${productId}/review`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            fill={star <= rating ? "gold" : "none"}
            viewBox="0 0 24 24"
            stroke="gold"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image || "default-image-url.jpg"}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">{product.description}</p>

      {/* Reviews Section */}
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {product.reviews && product.reviews.length > 0 ? (
        product.reviews.map((review, index) => (
          <div key={index} className="bg-gray-200 p-4 mb-2 rounded-md">
            <p>
              <strong>User:</strong> {review.user}
            </p>
            <p className="flex items-center">
              <strong>Rating:</strong>
              {renderStars(review.rating)}
            </p>
            <p>
              <strong>Comment:</strong> {review.comment}
            </p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      {/* Link to submit a review */}
      <Link
        to={`/products/${productId}/review`}
        className="text-blue-500 hover:underline mt-4 block"
      >
        Submit a Review
      </Link>
    </div>
  );
};

export default ProductPage;
