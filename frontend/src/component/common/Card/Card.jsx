// Card.jsx
import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  // Sample product data
  const initialProducts = [
    {
      id: 1,
      title: "Apple 2024 MacBook Air Laptop with M3 chip",
      price: 1099.99,
      originalPrice: 1299.99,
      rating: 4.7,
      reviewCount: 1243,
      image: "💻",
      imageColor: "#f5f5f5",
      isPrime: true,
      inStock: true,
      deliveryDate: "Tomorrow",
      freeDelivery: true,
      discount: 15,
      category: "Electronics",
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      price: 328.0,
      originalPrice: 399.99,
      rating: 4.6,
      reviewCount: 892,
      image: "🎧",
      imageColor: "#333333",
      isPrime: true,
      inStock: true,
      deliveryDate: "Oct 10-12",
      freeDelivery: true,
      discount: 18,
      category: "Electronics",
    },
    {
      id: 3,
      title: "Apple Watch Series 9 [GPS 45mm] Smartwatch",
      price: 399.0,
      originalPrice: 429.0,
      rating: 4.5,
      reviewCount: 756,
      image: "⌚",
      imageColor: "#000000",
      isPrime: true,
      inStock: false,
      deliveryDate: "Oct 15-20",
      freeDelivery: true,
      discount: 7,
      category: "Electronics",
    },
    {
      id: 4,
      title: "Amazon Echo Dot (5th Gen) | Smart speaker with Alexa",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.4,
      reviewCount: 2345,
      image: "🔊",
      imageColor: "#1a1a1a",
      isPrime: true,
      inStock: true,
      deliveryDate: "Tomorrow",
      freeDelivery: true,
      discount: 17,
      category: "Smart Home",
    },
    {
      id: 5,
      title: 'Kindle Paperwhite (16 GB) – Now with a 6.8" display',
      price: 149.99,
      originalPrice: 169.99,
      rating: 4.8,
      reviewCount: 1890,
      image: "📖",
      imageColor: "#2c3e50",
      isPrime: true,
      inStock: true,
      deliveryDate: "Oct 9-11",
      freeDelivery: true,
      discount: 12,
      category: "Electronics",
    },
    {
      id: 6,
      title: "PlayStation 5 Console – Marvel's Spider-Man 2 Bundle",
      price: 499.99,
      originalPrice: 559.99,
      rating: 4.9,
      reviewCount: 567,
      image: "🎮",
      imageColor: "#003087",
      isPrime: true,
      inStock: true,
      deliveryDate: "Tomorrow",
      freeDelivery: true,
      discount: 11,
      category: "Gaming",
    },
  ];

  const [products] = useState(initialProducts);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <span key={i} className="star">
            ★
          </span>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="star">
            ☆
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="card-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Amazon</h1>
            <p>
              Discover deals, shop electronics, fashion, books, and more — all
              in one place.
            </p>
            <button className="hero-btn">Shop Now</button>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="filters-left">
          <span className="results-count">{products.length} results for</span>
          <span className="search-query">"Electronics & Accessories"</span>
        </div>
        <div className="filters-right">
          <select className="filter-select">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Avg. Customer Review</option>
            <option>Newest Arrivals</option>
          </select>
          <div className="filter-tags">
            <span className="filter-tag">Prime ✓</span>
            <span className="filter-tag">Free Shipping</span>
            <span className="filter-tag">Today's Deals</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              {/* Product Image */}
              <div
                className="product-image-container"
                style={{ backgroundColor: product.imageColor }}
              >
                <div className="product-image">{product.image}</div>
                <div
                  className="wishlist-icon"
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist.includes(product.id) ? "❤️" : "🤍"}
                </div>
                {product.discount > 0 && (
                  <div className="discount-badge">-{product.discount}%</div>
                )}
                {!product.inStock && (
                  <div className="out-of-stock">Out of Stock</div>
                )}
              </div>

              {/* Product Info */}
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>

                {/* Rating */}
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                    <span className="rating-number">{product.rating}</span>
                  </div>
                  <span className="review-count">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="product-price">
                  <span className="current-price">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="original-price">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="save-amount">
                        Save $
                        {(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>

                {/* Prime Badge */}
                {product.isPrime && (
                  <div className="prime-badge">
                    <span className="prime-icon">⏱️</span>
                    <span className="prime-text">Prime</span>
                  </div>
                )}

                {/* Delivery Info */}
                <div className="delivery-info">
                  {product.freeDelivery && (
                    <span className="free-delivery">FREE Delivery</span>
                  )}
                  <span className="delivery-date">
                    {product.inStock
                      ? product.deliveryDate
                      : "Temporarily out of stock"}
                  </span>
                </div>

                {/* Category */}
                <div className="product-category">{product.category}</div>

                {/* Action Buttons */}
                <div className="action-buttons">
                  {product.inStock ? (
                    <>
                      <button className="add-to-cart-btn">Add to Cart</button>
                      <button className="buy-now-btn">Buy Now</button>
                    </>
                  ) : (
                    <button className="notify-btn">
                      Notify when available
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn prev">◀ Previous</button>
        <div className="page-numbers">
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <span className="page-number">4</span>
          <span className="page-number">5</span>
          <span className="page-dots">...</span>
          <span className="page-number">20</span>
        </div>
        <button className="page-btn next">Next ▶</button>
      </div>
    </div>
  );
};

export default Card;
