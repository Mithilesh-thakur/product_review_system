import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ReviewPage = () => {
  const { productId } = useParams(); // Get the product ID from the route
  const [review, setReview] = useState({ user: "", rating: 0, comment: "" });
  const navigate = useNavigate();

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/products/${productId}/review`, review)
      .then((response) => {
        // After successful submission, navigate back to the ProductPage
        navigate(`/products/${productId}`);
      })
      .catch((error) => console.error("Error submitting review:", error));
  };

  // Handle star click
  const handleStarClick = (ratingValue) => {
    setReview({ ...review, rating: ratingValue });
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Submit Review</h2>
      <form onSubmit={handleReviewSubmit}>
        <label className="block mb-2">
          User:
          <input
            type="text"
            name="user"
            value={review.user}
            onChange={(e) => setReview({ ...review, user: e.target.value })}
            className="block w-full border-gray-300 rounded p-2"
            required
          />
        </label>
        <div className="mb-4">
          <span className="block mb-2">Rating:</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((ratingValue) => (
              <svg
                key={ratingValue}
                onClick={() => handleStarClick(ratingValue)}
                xmlns="http://www.w3.org/2000/svg"
                fill={ratingValue <= review.rating ? "gold" : "none"}
                viewBox="0 0 24 24"
                stroke="gold"
                className="w-8 h-8 cursor-pointer"
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
        </div>
        <label className="block mb-2">
          Comment:
          <textarea
            name="comment"
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            className="block w-full border-gray-300 rounded p-2"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
