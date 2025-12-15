import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div>
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
    </div>
  );
}

export default Card