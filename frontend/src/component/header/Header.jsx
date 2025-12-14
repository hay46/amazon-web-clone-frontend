import React from 'react'
import './Header.css'
import LowerHeader from '../lowerHeader/LowerHeader';
const Header = () => {
  return (
    <div>
      <header class="amazon-header">
        <div class="header-left">
          <a href="#" class="header-logo">
            <img src="amazon_logo.png" alt="Amazon Home" />
          </a>
          <a href="#" class="header-location">
            <span class="icon">📍</span>
            <div class="text">
              <span class="line-1">Deliver to</span>
              <span class="line-2">Ethiopia</span>
            </div>
          </a>
        </div>

        <div class="header-center">
          <div class="nav-search">
            <select class="search-dropdown">
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
            </select>
            <input
              type="text"
              class="search-input"
              placeholder="Search Amazon"
            />
            <button class="search-button">
              <span class="icon">🔍</span>
            </button>
          </div>
        </div>

        <div class="header-right">
          <a href="#" class="nav-link">
            <span class="line-1">Hello, Sign in</span>
            <span class="line-2">Account & Lists ▼</span>
          </a>
          <a href="#" class="nav-link">
            <span class="line-1">Returns</span>
            <span class="line-2">& Orders</span>
          </a>
          <a href="#" class="nav-cart">
            <span class="icon">🛒</span>
            <span class="cart-count">0</span>
            <span class="line-2">Cart</span>
          </a>
        </div>
      </header>
      <LowerHeader/>
    </div>
  );
}

export default Header