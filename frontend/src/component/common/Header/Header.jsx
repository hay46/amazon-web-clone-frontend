import React from "react";
import "./Header.css";
// Note: Consider importing icons from a library like react-icons for the search and cart
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <section className="header">
      {/* Top Navigation */}
      <section className="header__main">
        {/* Logo and Address */}
        <div className="header__left">
          <a href="/" className="header__logoLink">
            <img
              className="header__logo"
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" // Clean logo version
              alt="amazon-logo"
            />
          </a>
          <a href="/" className="header__location">
            <SlLocationPin className="header__locationIcon" />
            <div className="header__locationText">
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </a>
        </div>

        {/* Search Bar */}
        <div className="header__search">
          <select className="header__searchSelect">
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="books">Books</option>
            <option value="clothing">Clothing</option>
            <option value="computers">Computers</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
            <option value="sports">Sports</option>
          </select>
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search Amazon.com"
          />
          <div className="header__searchIconContainer">
            <BsSearch className="header__searchIcon" />
          </div>
        </div>

        {/* Right Side Links */}
        <div className="header__right">
          <div className="header__language">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="flag"
              className="header__flag"
            />
            <select className="header__langSelect">
              <option value="en">EN</option>
              <option value="am">Am</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="es">ES</option>
              <option value="it">IT</option>
              <option value="zh">ZH</option>
            </select>
          </div>

          <a href="/login" className="header__link">
            <div className="header__option">
              <p className="header__optionLineOne">Hello, Sign In</p>
              <span className="header__optionLineTwo">Account & Lists</span>
            </div>
          </a>

          <a href="/orders" className="header__link">
            <div className="header__option">
              <p className="header__optionLineOne">Returns</p>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </a>

          <a href="/checkout" className="header__link">
            <div className="header__optionBasket">
              <BiCart className="header__basketIcon" />
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            </div>
          </a>
        </div>
      </section>
    </section>
  );
}

export default Header;
