# KIET_FSD_DebugChallenge

Bug Sheet — ShopEasy Debugging Assignment
Instructions: Find and fix all 9 bugs spread across 4 files. The app compiles and runs without errors — all bugs are logical/behavioral.

Bug 1 — App.js | Easy
Symptom: Price range filters exclude products at the exact boundary price (e.g. "Under ₹500" won't show the ₹499 product; "₹500–₹1,000" won't show the ₹500 or ₹1,000 products).


Bug 2 — App.js | Hard
Symptom: Clicking any Category button (Electronics, Footwear, etc.) has no effect — the product grid never changes.


Bug 3 — App.js | Easy
Symptom: Clicking the 🗑️ delete button in the cart removes all other items and keeps only the one you tried to delete.


Bug 4 — App.js | Medium
Symptom: The cart badge on the header button always shows nothing (or 0) even after adding multiple items.


Bug 5 — App.js | Hard
Symptom: The "+ Add to Cart" button never turns green and never says "✓ Added", even after a product is in the cart.


Bug 6 — Cart.jsx | Medium
Symptom: The cart total always shows ₹0, no matter how many items or quantities are added.


Bug 7 — Cart.jsx | Medium
Symptom: The − (decrease) button in the cart is never disabled, allowing quantity to drop to 0 (and below), breaking the total.


Bug 8 — Filters.jsx | Easy
Symptom: The sort order is inverted — selecting "Price: Low to High" sorts highest-priced items first, and vice versa.


Bug 9 — ProductCard.jsx | Easy
Symptom: A product rated 4.5 shows only 4 filled stars instead of 5. All half-star ratings are rounded down.
