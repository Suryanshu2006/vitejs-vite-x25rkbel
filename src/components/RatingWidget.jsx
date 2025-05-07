import React, { useState } from 'react';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => setRating(value);
  const handleMouseOver = (value) => setHoveredRating(value);
  const handleMouseOut = () => setHoveredRating(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    } else {
      alert('Please select a rating between 1 and 5.');
    }
  };

  return (
    <div>
      <div style={{ fontSize: 24 }}>
        {[1, 2, 3, 4, 5].map(value => (
          <span
            key={value}
            style={{
              cursor: 'pointer',
              color: (hoveredRating || rating) >= value ? '#ffc107' : '#e4e5e9'
            }}
            onClick={() => handleClick(value)}
            onMouseOver={() => handleMouseOver(value)}
            onMouseOut={handleMouseOut}
            data-testid={`star-${value}`}
          >
            ★
          </span>
        ))}
      </div>
      <button style={{ marginTop: 8 }} onClick={handleSubmit}>
        Submit Rating
      </button>
    </div>
  );
}

export default RatingWidget;