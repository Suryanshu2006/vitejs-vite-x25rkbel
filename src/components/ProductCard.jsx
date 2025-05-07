import React from 'react';
import RatingWidget from './RatingWidget';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="card" style={{ width: 320, margin: '1rem auto', border: '1px solid #ccc', borderRadius: 8 }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 8 }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Average Rating:</strong> {product.avgRating.toFixed(1)} ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

export default ProductCard;