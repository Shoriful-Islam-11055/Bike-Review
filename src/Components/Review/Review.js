import React from "react";
import useReviews from "../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="reviews-container mb-5">
        <h2 className="review-page-title">Reviews From Bikers</h2>
      <div className="review-card container p-3">
        {reviews.map((review) => (
            <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
