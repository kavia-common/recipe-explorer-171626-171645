import React from "react";
import PropTypes from "prop-types";

/**
 * PUBLIC_INTERFACE
 * RatingStars renders star icons for a rating out of 5.
 */
export default function RatingStars({ rating = 0 }) {
  /** Show five stars with filled state up to rating */
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  return (
    <div aria-label={`Rating ${rating} out of 5`} role="img" style={{ color: "#F59E0B", fontSize: 14 }}>
      {stars.map((filled, idx) => (
        <span key={idx} aria-hidden="true">{filled ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number
};
