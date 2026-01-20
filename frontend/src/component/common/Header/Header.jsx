// import React from 'react'
// import './Header.css'
// import { CiSearch } from "react-icons/ci"
// import { IoLocationOutline } from "react-icons/io5"
// //import { HiSelector } from "react-icons/hi";
// function Header() {
//   return (
//     <div className="amazon-header-container">
//       <section className="amazon-logo">
//         <div>
//           <a href="">
//             <img
//               src="https://img.icons8.com/color/48/amazon.png"
//               alt=""
//               className="amzon-icon"
//             />
//           </a>
//         </div>
//       </section>
//       <section className="loction-delivery-ethiopia-amazon">
//         <div>
//           <h2 className="delivery-to-ethiopia">delivery to</h2>
//           <div className="delivery-ethiopaia-for-amazon">
//             <h3>
//               <IoLocationOutline />
//             </h3>

//             <h1 className="ethiooian-delivery">Ethiopia</h1>
//           </div>
//         </div>
//       </section>

//       <section className="All-department">
//         <div className="the-all-departement-and-the-input">
//           <select id="department" className="All-choose-department">
//             <option value="All Departments"> All Departments</option>
//             <option value="Arts & Crafts">Arts & Crafts</option>
//             <option value="Automotive">Automotive</option>
//             <option value="Baby">Baby</option>
//             <option value="butiy & Prsonal Care">butiy & Prsonal Care</option>
//             <option value="Books">Books</option>
//             <option value="Boys' Fastion">Boys' Fastion</option>
//             <option value="Computers">Computers</option>
//             <option value="Deals">Deals</option>
//             <option value="Digital Music">Digital Music</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Grils Fashion">Grils Fashion </option>
//             <option value="Health & household">Health & household</option>
//             <option value="Home & Kichen">Home & Kichen</option>
//             <option value="Indestrial & scientific">
//               Indestrial & scientific
//             </option>
//             <option value="Kindle store">Kindle store</option>
//             <option value="Lunguge">Lunguge</option>
//             <option value="Mens' Fashion ">Mens' Fashion </option>
//             <option value="Movies & TV">Movies & TV</option>
//             <option value="Deals">Musics, CDs & Vinyl</option>
//           </select>
//           <div className="input-search-Amazon-">
//             <input
//               className="input-search-amazon"
//               type="search"
//               placeholder="Search Amazon..."
//             />
//             {/* The Search Button with Icon */}
//             <button type="submit" className="search-icon-button">
//               <h2>
//                 <CiSearch />
//               </h2>
//             </button>
//           </div>
//         </div>
//       </section>
//       <section className="languge-option">
//         <a href="/">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
//             alt="ethiopia"
//             className="flag-icon"
//           />
//           <span className="languge-opration">AM</span>
//         </a>

//         <div className="language-dropdown-menu">
//           <div className="dropdown-item">
//             <label htmlFor="language-select">Choose a language:</label>
//             <select id="language-select" className="language-select">
//               <option value="en">English - EN</option>
//               <option value="am" selected>
//                 Amharic - AM
//               </option>
//               <option value="om">Oromigna - OM</option>
//               <option value="ti">Tigragna - TI</option>
//             </select>
//           </div>
//         </div>
//       </section>
//       <div className="signup-and-accont-page">
//         <label htmlFor="language">
//           <h1 className="Hello">Hello,sign in</h1>
//           <br />
//           <h1 className="Account">Account & list </h1>
//         </label>
//         <select id="Account-list" className="language">
//           <option value="Sign in "></option>
//           <h2>
//             New customer?
//             <a href="stars here">stars here</a>
//           </h2>
//           <option value="your a list ">your a list </option>
//           <option value="Create a list">Create a list</option>
//           <option value="find">find the list of Register</option>
//           <div className="Your-account">
//             <option value="gt ">
//               <a href="Account">Account</a>
//             </option>
//             <option value="or">
//               <a href="">order</a>
//             </option>
//             <option value="Recom">
//               <a href="Recomen"></a>Recomendation
//             </option>
//             <option value="ht">
//               <a href="">your shope</a>
//             </option>
//           </div>
//         </select>
//       </div>
//       <a href="">
//         <div className="returns-order-that">
//           <h1>Return & orderd</h1>
//         </div>
//         <div className='cart-methode'>

//         </div>
//       </a>
//     </div>
//   );
// }

// export default Header





import React, { useState } from 'react';
import './Header.css'; // We'll create this CSS file

const AmazonHeader = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement actual search functionality here
    }
  };

  const categories = [
    'All',
    'Amazon Basics',
    'Best Sellers',
    'New Releases',
    'Today\'s Deals',
    'Customer Service',
    'Prime',
    'Books',
    'Fashion',
    'Electronics',
    'Home & Kitchen'
  ];

  return (
    <header className="amazon-header">
      {/* Top Row */}
      <div className="header-top">
        <div className="header-left">
          <div className="logo-container">
            <a href="/" className="amazon-logo">
              <span className="logo-text">amazon</span>
              <span className="logo-domain">.com</span>
            </a>
          </div>
          
          <div className="location-container">
            <div className="location-icon">
              <i className="location-pin"></i>
            </div>
            <div className="location-text">
              <div className="deliver-to">Deliver to</div>
              <div className="country">United States</div>
            </div>
          </div>
        </div>

        <div className="header-center">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-category">
              <select className="category-select">
                <option>All Departments</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search Amazon"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <i className="search-icon">🔍</i>
            </button>
          </form>
        </div>

        <div className="header-right">
          <div className="header-item language">
            <div className="flag-icon">🇺🇸</div>
            <div className="language-text">EN</div>
          </div>

          <div className="header-item account" 
               onMouseEnter={() => setShowAccountMenu(true)}
               onMouseLeave={() => setShowAccountMenu(false)}>
            <div className="account-top">
              <div className="hello-text">Hello, sign in</div>
              <div className="account-text">Account & Lists</div>
            </div>
            {showAccountMenu && (
              <div className="account-menu">
                <div className="menu-section">
                  <h3>Your Lists</h3>
                  <ul>
                    <li>Create a List</li>
                    <li>Find a List or Registry</li>
                  </ul>
                </div>
                <div className="menu-section">
                  <h3>Your Account</h3>
                  <ul>
                    <li>Account</li>
                    <li>Orders</li>
                    <li>Recommendations</li>
                    <li>Browsing History</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="header-item returns">
            <div className="returns-top">Returns</div>
            <div className="returns-bottom">& Orders</div>
          </div>

          <div className="header-item cart">
            <div className="cart-icon">
              <i className="cart-symbol">🛒</i>
              <span className="cart-count">0</span>
            </div>
            <div className="cart-text">Cart</div>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="header-bottom">
        <nav className="main-nav">
          <div className="nav-item all-menu">
            <i className="menu-icon">☰</i>
            <span>All</span>
          </div>
          
          {[
            'Today\'s Deals',
            'Customer Service',
            'Registry',
            'Gift Cards',
            'Sell',
            'Electronics'
          ].map((item, index) => (
            <div key={index} className="nav-item">
              {item}
            </div>
          ))}
          
          <div className="nav-item prime-deal">
            <div className="prime-text">
              Prime Day deals
              <span className="prime-badge">Prime</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AmazonHeader;