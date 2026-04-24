import React from 'react';

const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 – ₹1,000', min: 500, max: 1000 },
  { label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { label: '₹2,000 – ₹4,000', min: 2000, max: 4000 },
  { label: '₹4,000+', min: 4000, max: Infinity },
];

const CATEGORIES = ['All', 'Electronics', 'Footwear', 'Clothing', 'Kitchen', 'Sports', 'Accessories', 'Home'];

export default function Filters({ priceRange, onPriceChange, category, onCategoryChange, sortBy, onSortChange, totalResults }) {
  return (
    <aside className="filters">
      <h2 className="filters-title">Filters</h2>

      <div className="filter-group">
        <h3 className="filter-label">Category</h3>
        <ul className="category-list">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button
                className={`category-btn ${category === cat ? 'active' : ''}`}
                onClick={() => onCategoryChange(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-group">
        <h3 className="filter-label">Price Range</h3>
        <ul className="price-list">
          {PRICE_RANGES.map(range => {
            const key = `${range.min}-${range.max}`;
            const isActive = priceRange.min === range.min && priceRange.max === range.max;
            return (
              <li key={key}>
                <button
                  className={`price-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onPriceChange({ min: range.min, max: range.max })}
                >
                  {range.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="filter-group">
        <h3 className="filter-label">Sort By</h3>
        <select className="sort-select" value={sortBy} onChange={e => onSortChange(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-desc">Price: Low to High</option>
          <option value="price-asc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name: A–Z</option>
        </select>
      </div>

      <p className="results-count">{totalResults} product{totalResults !== 1 ? 's' : ''} found</p>
    </aside>
  );
}
