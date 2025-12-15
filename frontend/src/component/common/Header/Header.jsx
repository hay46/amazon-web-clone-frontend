import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="amazon-header">
      {/* Upper Header */}
      <div className="header-top">
        <div className="logo">amazon</div>

        <div className="location">
          <span className="small-text">Deliver to</span>
          <span className="bold-text">Ethiopia</span>
        </div>

        <div className="search-box">
          <select className="search-select">
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="account">
          <span className="small-text">Hello, Sign in</span>
          <span className="bold-text">Account & Lists</span>
        </div>

        <div className="orders">
          <span className="small-text">Returns</span>
          <span className="bold-text">& Orders</span>
        </div>

        <div className="cart">🛒 Cart</div>
      </div>

      {/* Lower Header */}
      <div className="header-bottom">
        <div className="menu">☰ All</div>
        <ul className="nav-links">
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
