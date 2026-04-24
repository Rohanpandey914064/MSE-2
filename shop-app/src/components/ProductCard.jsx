import React from 'react';

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={star <= Math.floor(rating) ? 'star filled' : 'star'}>★</span>
      ))}
      <span className="rating-value">({rating})</span>
    </div>
  );
}

export default function ProductCard({ product, onAddToCart, inCart }) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <StarRating rating={product.rating} />
        <div className="product-footer">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <button
            className={`add-btn ${inCart ? 'in-cart' : ''}`}
            onClick={() => onAddToCart(product)}
          >
            {inCart ? '✓ Added' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
