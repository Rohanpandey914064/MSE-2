import React from 'react';

export default function Cart({ items, onRemove, onClose, onUpdateQty }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-panel">
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</p>
                    <div className="cart-item-controls">
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 0}
                      >−</button>
                      <span className="qty-value">{item.qty}</span>
                      <button
                        className="qty-btn"
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      >+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item.id)} title="Remove">
                    🗑️
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="cart-total-value">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
