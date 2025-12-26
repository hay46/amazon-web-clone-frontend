// ProductDetails.jsx
import React, { useState } from "react";
import "./Button.css";

const Button = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Space Gray");
  const [selectedSize, setSelectedSize] = useState("256GB");
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    title: "Apple 2024 MacBook Air Laptop with M3 chip",
    brand: "Apple",
    description:
      "The new MacBook Air with M3 chip is incredibly fast and efficient. Featuring an 8-core CPU, up to 10-core GPU, and up to 24GB of unified memory. With up to 18 hours of battery life, a 13.6-inch Liquid Retina display, and a 1080p FaceTime HD camera.",
    price: 1099.99,
    originalPrice: 1299.99,
    rating: 4.7,
    reviewCount: 1243,
    images: ["💻", "💻", "💻", "💻"],
    colors: [
      { name: "Space Gray", color: "#434343" },
      { name: "Silver", color: "#e2e2e2" },
      { name: "Midnight", color: "#0a0e17" },
      { name: "Starlight", color: "#f0e6d3" },
    ],
    sizes: ["256GB", "512GB", "1TB", "2TB"],
    features: [
      "Apple M3 chip with 8-core CPU, 8-core GPU",
      "13.6-inch Liquid Retina display",
      "Up to 18 hours of battery life",
      "8GB Unified Memory (configurable to 24GB)",
      "256GB SSD Storage (configurable to 2TB)",
      "1080p FaceTime HD camera",
      "Magic Keyboard with Touch ID",
      "Two Thunderbolt / USB 4 ports",
    ],
    isPrime: true,
    inStock: true,
    deliveryDate: "Delivery Tomorrow, October 8",
    freeDelivery: true,
    discount: 15,
    soldBy: "Amazon.com",
    category: "Electronics > Computers & Accessories > Laptops",
  };

  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      rating: 5,
      date: "October 3, 2024",
      title: "Best laptop I've ever owned!",
      content:
        "The M3 chip is incredibly fast. Battery life lasts all day. The display is stunning. Highly recommend!",
      verified: true,
      helpful: 42,
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 4,
      date: "September 28, 2024",
      title: "Great upgrade from my old MacBook",
      content:
        "Noticeable improvement in performance. Only wish it had more ports.",
      verified: true,
      helpful: 18,
    },
    {
      id: 3,
      name: "Tech Reviewer 101",
      rating: 5,
      date: "September 15, 2024",
      title: "Perfect for students and professionals",
      content:
        "Lightweight, powerful, and excellent battery life. The perfect balance of performance and portability.",
      verified: true,
      helpful: 56,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= Math.floor(rating) ? "filled" : ""}`}
        >
          {i <= Math.floor(rating) ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  const calculateSavings = () => {
    return (product.originalPrice - product.price).toFixed(2);
  };

  return (
    <div className="product-details-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="#">Electronics</a>
        <span>›</span>
        <a href="#">Computers & Accessories</a>
        <span>›</span>
        <a href="#">Laptops</a>
        <span>›</span>
        <a href="#">Apple Laptops</a>
        <span>›</span>
        <span className="current">MacBook Air</span>
      </div>

      <div className="product-main">
        {/* Left Column - Images */}
        <div className="product-images">
          <div className="main-image">
            <div className="image-display">{product.images[selectedImage]}</div>
            <div className="image-badge">360° VIEW</div>
          </div>
          <div className="thumbnail-images">
            {product.images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                {img}
              </div>
            ))}
          </div>
        </div>

        {/* Middle Column - Product Info */}
        <div className="product-info">
          <div className="brand">{product.brand}</div>
          <h1 className="product-title">{product.title}</h1>

          <div className="rating-summary">
            <div className="stars-large">
              {renderStars(product.rating)}
              <span className="rating-number">{product.rating}</span>
            </div>
            <a href="#" className="review-count">
              {product.reviewCount} ratings
            </a>
            <span className="separator">|</span>
            <a href="#" className="qa-count">
              354 answered questions
            </a>
          </div>

          <div className="price-section">
            <div className="price-row">
              <span className="current-price">${product.price.toFixed(2)}</span>
              <span className="original-price">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="save-amount">
                Save ${calculateSavings()} ({product.discount}%)
              </span>
            </div>
            <div className="installment">
              <span className="installment-text">
                No Cost EMI available on Amazon Pay Later
              </span>
            </div>
          </div>

          <div className="product-features">
            <h3>About this item</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="color-selection">
            <h4>
              Color: <span className="selected-color">{selectedColor}</span>
            </h4>
            <div className="color-options">
              {product.colors.map((color) => (
                <div
                  key={color.name}
                  className={`color-option ${
                    selectedColor === color.name ? "selected" : ""
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                >
                  <div
                    className="color-circle"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <span className="color-name">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="size-selection">
            <h4>
              Size: <span className="selected-size">{selectedSize}</span>
            </h4>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selection">
            <label>Quantity:</label>
            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                −
              </button>
              <span className="quantity">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <span className="stock-status">In Stock</span>
          </div>
        </div>

        {/* Right Column - Buy Box */}
        <div className="buy-box">
          <div className="buy-box-content">
            <div className="price-display">
              <span className="price">${product.price.toFixed(2)}</span>
              <div className="delivery-info">
                {product.isPrime && (
                  <div className="prime-delivery">
                    <span className="prime-icon">⏱️</span>
                    <span className="prime-text">
                      FREE delivery <strong>{product.deliveryDate}</strong>
                    </span>
                  </div>
                )}
                <div className="fastest-delivery">
                  Or fastest delivery <strong>Today, 8 PM - 10 PM</strong>
                </div>
                <div className="stock-status">In Stock</div>
              </div>
            </div>

            <div className="seller-info">
              Sold by: <a href="#">{product.soldBy}</a>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
              <button className="add-to-list-btn">Add to List</button>
            </div>

            <div className="secure-transaction">
              <span className="lock-icon">🔒</span>
              <span>Secure transaction</span>
            </div>

            <div className="shipping-address">
              <select className="address-select">
                <option>Deliver to New York 10001</option>
                <option>Update address</option>
              </select>
            </div>

            <div className="support-section">
              <div className="support-item">
                <span className="support-icon">🔄</span>
                <span>Returnable until Jan 31, 2025</span>
              </div>
              <div className="support-item">
                <span className="support-icon">🔧</span>
                <span>1-year limited warranty</span>
              </div>
              <div className="support-item">
                <span className="support-icon">💳</span>
                <span>Pay with Amazon Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description">
        <h2>Product Description</h2>
        <p>{product.description}</p>
        <div className="specifications">
          <h3>Technical Specifications</h3>
          <div className="spec-grid">
            <div className="spec-item">
              <span className="spec-label">Display</span>
              <span className="spec-value">13.6-inch Liquid Retina</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Processor</span>
              <span className="spec-value">Apple M3 chip</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Memory</span>
              <span className="spec-value">8GB Unified Memory</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Storage</span>
              <span className="spec-value">256GB SSD</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Battery Life</span>
              <span className="spec-value">Up to 18 hours</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Weight</span>
              <span className="spec-value">2.7 pounds (1.24 kg)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer reviews</h2>
        <div className="review-summary">
          <div className="overall-rating">
            <div className="rating-number-large">{product.rating}</div>
            <div className="stars-large">{renderStars(product.rating)}</div>
            <div className="total-reviews">
              {product.reviewCount} global ratings
            </div>
          </div>
          <div className="rating-breakdown">
            <div className="rating-bar">
              <span>5 star</span>
              <div className="bar-container">
                <div className="bar" style={{ width: "70%" }}></div>
              </div>
              <span>70%</span>
            </div>
            <div className="rating-bar">
              <span>4 star</span>
              <div className="bar-container">
                <div className="bar" style={{ width: "20%" }}></div>
              </div>
              <span>20%</span>
            </div>
            <div className="rating-bar">
              <span>3 star</span>
              <div className="bar-container">
                <div className="bar" style={{ width: "5%" }}></div>
              </div>
              <span>5%</span>
            </div>
            <div className="rating-bar">
              <span>2 star</span>
              <div className="bar-container">
                <div className="bar" style={{ width: "3%" }}></div>
              </div>
              <span>3%</span>
            </div>
            <div className="rating-bar">
              <span>1 star</span>
              <div className="bar-container">
                <div className="bar" style={{ width: "2%" }}></div>
              </div>
              <span>2%</span>
            </div>
          </div>
        </div>

        <div className="review-filters">
          <button className="filter-btn active">All reviews</button>
          <button className="filter-btn">5 star</button>
          <button className="filter-btn">4 star</button>
          <button className="filter-btn">3 star</button>
          <button className="filter-btn">2 star</button>
          <button className="filter-btn">1 star</button>
          <button className="filter-btn">With images</button>
          <button className="filter-btn">Verified purchase</button>
        </div>

        <div className="reviews-list">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="review-stars">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="review-date">{review.date}</div>
              </div>
              <div className="review-title">{review.title}</div>
              <div className="review-content">{review.content}</div>
              <div className="review-footer">
                {review.verified && (
                  <span className="verified-badge">✅ Verified Purchase</span>
                )}
                <div className="review-helpful">
                  <span>Helpful?</span>
                  <button className="helpful-btn">
                    Yes ({review.helpful})
                  </button>
                  <button className="helpful-btn">No</button>
                  <button className="report-btn">Report</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-reviews">
          See all {product.reviewCount} reviews
        </button>
      </div>

      {/* Frequently Bought Together */}
      <div className="frequently-bought">
        <h2>Frequently bought together</h2>
        <div className="bought-together">
          <div className="items-list">
            <div className="item">
              <div className="item-image">💻</div>
              <span className="item-title">MacBook Air</span>
            </div>
            <span className="plus">+</span>
            <div className="item">
              <div className="item-image">🎒</div>
              <span className="item-title">Laptop Sleeve</span>
            </div>
            <span className="plus">+</span>
            <div className="item">
              <div className="item-image">🖱️</div>
              <span className="item-title">Wireless Mouse</span>
            </div>
          </div>
          <div className="total-price">
            <div className="price-breakdown">
              <span>Total price: </span>
              <span className="total">$1,199.97</span>
            </div>
            <button className="add-all-btn">Add all to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
