import React from 'react'
import './Header.css'
import { CiSearch } from "react-icons/ci"
import { IoLocationOutline } from "react-icons/io5"
//import { HiSelector } from "react-icons/hi";
function Header() {
  return (
    <div className="amazon-header-container">
      <section className="amazon-logo">
        <div>
          <a href="">
            <img
              src="https://img.icons8.com/color/48/amazon.png"
              alt=""
              className="amzon-icon"
            />
          </a>
        </div>
      </section>
      <section className="loction-delivery-ethiopia-amazon">
        <div>
          <h2 className="delivery-to-ethiopia">delivery to</h2>
          <div className="delivery-ethiopaia-for-amazon">
            <h3>
              <IoLocationOutline />
            </h3>

            <h1 className="ethiooian-delivery">Ethiopia</h1>
          </div>
        </div>
      </section>

      <section className="All-department">
        <div className="the-all-departement-and-the-input">
          <select id="department" className="All-choose-department">
            <option value="All Departments"> All Departments</option>
            <option value="Arts & Crafts">Arts & Crafts</option>
            <option value="Automotive">Automotive</option>
            <option value="Baby">Baby</option>
            <option value="butiy & Prsonal Care">butiy & Prsonal Care</option>
            <option value="Books">Books</option>
            <option value="Boys' Fastion">Boys' Fastion</option>
            <option value="Computers">Computers</option>
            <option value="Deals">Deals</option>
            <option value="Digital Music">Digital Music</option>
            <option value="Electronics">Electronics</option>
            <option value="Grils Fashion">Grils Fashion </option>
            <option value="Health & household">Health & household</option>
            <option value="Home & Kichen">Home & Kichen</option>
            <option value="Indestrial & scientific">
              Indestrial & scientific
            </option>
            <option value="Kindle store">Kindle store</option>
            <option value="Lunguge">Lunguge</option>
            <option value="Mens' Fashion ">Mens' Fashion </option>
            <option value="Movies & TV">Movies & TV</option>
            <option value="Deals">Musics, CDs & Vinyl</option>
          </select>
          <div className="input-search-Amazon-">
            <input
              className="input-search-amazon"
              type="search"
              placeholder="Search Amazon..."
            />
            {/* The Search Button with Icon */}
            <button type="submit" className="search-icon-button">
              <h2>
                <CiSearch />
              </h2>
            </button>
          </div>
        </div>
      </section>
      <section className="languge-option">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
            alt="ethiopia"
            className="flag-icon"
          />
          <span className="languge-opration">AM</span>
        </a>

        <div className="language-dropdown-menu">
          <div className="dropdown-item">
            <label htmlFor="language-select">Choose a language:</label>
            <select id="language-select" className="language-select">
              <option value="en">English - EN</option>
              <option value="am" selected>
                Amharic - AM
              </option>
              <option value="om">Oromigna - OM</option>
              <option value="ti">Tigragna - TI</option>
            </select>
          </div>
        </div>
      </section>
      <div className="signup-and-accont-page">
        <label htmlFor="language">
          <h1 className="Hello">Hello,sign in</h1>
          <br />
          <h1 className="Account">Account & list </h1>
        </label>
        <select id="Account-list" className="language">
          <option value="Sign in "></option>
          <h2>
            New customer?
            <a href="stars here">stars here</a>
          </h2>
          <option value="your a list ">your a list </option>
          <option value="Create a list">Create a list</option>
          <option value="find">find the list of Register</option>
          <div className="Your-account">
            <option value="gt ">
              <a href="Account">Account</a>
            </option>
            <option value="or">
              <a href="">order</a>
            </option>
            <option value="Recom">
              <a href="Recomen"></a>Recomendation
            </option>
            <option value="ht">
              <a href="">your shope</a>
            </option>
          </div>
        </select>
      </div>
      <a href="">
        <div className="returns-order-that">
          <h1>Return & orderd</h1>
        </div>
        <div className='cart-methode'>

        </div>
      </a>
    </div>
  );
}

export default Header
