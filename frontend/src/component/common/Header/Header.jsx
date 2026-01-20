import React, { useState } from "react";
import "./Header.css";

const AmazonHeader = ({
  // Props for data from backend/fetching methods
  user = null, // { name: 'User', email: 'user@example.com' }
  cartItems = [],
  recentOrders = [],
  todaysDeals = [],
  countries = [],
  selectedCountry = "US",
  onSearch,
  onSignIn,
  onSignOut,
  //onCountryChange,
  onTrackPackage,
  onViewOrderHistory,
  onViewCart,
  // Configuration
  enableLanguageSelector = true,
  enableOrderTracking = true,
  enablePrimeFeatures = true,
  currentDate = new Date(),
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);

  // Default countries if not provided
  const defaultCountries = [
    {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
      currency: "USD",
      domain: "amazon.com",
    },
    {
      code: "IN",
      name: "India",
      flag: "🇮🇳",
      currency: "INR",
      domain: "amazon.in",
    },
    {
      code: "UK",
      name: "United Kingdom",
      flag: "🇬🇧",
      currency: "GBP",
      domain: "amazon.co.uk",
    },
    {
      code: "CA",
      name: "Canada",
      flag: "🇨🇦",
      currency: "CAD",
      domain: "amazon.ca",
    },
  ];

  const displayCountries = countries.length > 0 ? countries : defaultCountries;

  // Calculate cart count from cartItems
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery);
      } else {
        // Fallback behavior
        console.log(`Searching for: ${searchQuery}`);
        window.location.href = `/s?k=${encodeURIComponent(searchQuery)}`;
      }
    }
  };

  const handleSignIn = () => {
    if (onSignIn) {
      onSignIn();
    } else {
      // Fallback behavior
      setShowAccountMenu(false);
      alert("Sign In functionality would open here");
    }
  };

  const handleSignOut = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      // Fallback behavior
      setShowAccountMenu(false);
      alert("Signed out successfully");
    }
  };

  // const handleCountrySelect = (countryCode) => {
  //   if (onCountryChange) {
  //     onCountryChange(countryCode);
  //   } else {
  //     // Fallback behavior
  //     setSelectedCountry(countryCode);
  //     const country = displayCountries.find((c) => c.code === countryCode);
  //     if (country) {
  //       alert(`Redirecting to ${country.name} Amazon (${country.domain})`);
  //     }
  //   }
  //   setShowLanguageMenu(false);
  // };

  const handleTrackPackage = () => {
    if (onTrackPackage) {
      onTrackPackage();
    } else {
      alert("Opening package tracking...");
    }
  };

  const handleViewOrderHistory = () => {
    if (onViewOrderHistory) {
      onViewOrderHistory();
    } else {
      alert("Opening order history...");
    }
  };

  const handleViewCart = () => {
    if (onViewCart) {
      onViewCart();
    } else {
      window.location.href = "/cart";
    }
  };

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  // Format date
  const getFormattedDate = () => {
    return currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Account menu items based on user status
  const accountMenuItems = user
    ? [
        {
          label: "Your Account",
          action: () => (window.location.href = "/account"),
        },
        { label: "Your Orders", action: handleViewOrderHistory },
        { label: "Track Package", action: handleTrackPackage },
        {
          label: "Your Wish List",
          action: () => (window.location.href = "/wishlist"),
        },
        {
          label: "Your Recommendations",
          action: () => (window.location.href = "/recommendations"),
        },
        {
          label: "Manage Prime",
          action: () => (window.location.href = "/prime"),
        },
        { label: "Sign Out", action: handleSignOut, isSignOut: true },
      ]
    : [
        { label: "Sign in", action: handleSignIn, isSignIn: true },
        {
          label: "New customer? Start here.",
          action: () => (window.location.href = "/register"),
        },
      ];

  // Navigation categories
  const categories = [
    "All",
    "Amazon Basics",
    "Best Sellers",
    "New Releases",
    "Today's Deals",
    "Customer Service",
    "Prime Video",
    "Amazon Music",
    "Books",
    "Fashion",
    "Electronics",
    "Home & Kitchen",
    "Computers",
    "Smart Home",
    "Toys & Games",
  ];

  // Main navigation items
  const navItems = [
    "Today's Deals",
    "Customer Service",
    "Registry",
    "Gift Cards",
    "Sell",
    "Coupons",
    "Health & Household",
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
              <div className="deliver-to">{getGreeting()}</div>
              <div className="country">Select your address</div>
            </div>
          </div>
        </div>

        <div className="header-center">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-category">
              <select className="category-select">
                <option>All Departments</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
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
          {/* Language/Country Selector */}
          {enableLanguageSelector && (
            <div
              className="header-item language-selector"
              onMouseEnter={() => setShowLanguageMenu(true)}
              onMouseLeave={() => setShowLanguageMenu(false)}
            >
              <div className="language-content">
                <div className="flag-icon">
                  {displayCountries.find((c) => c.code === selectedCountry)
                    ?.flag || "🇺🇸"}
                </div>
                <div className="language-text">EN</div>
                <i className="dropdown-arrow">▼</i>
              </div>

              {showLanguageMenu && (
                <div className="language-menu">
                  <div className="menu-header">
                    <h3>Change language & currency</h3>
                    <p>
                      Choose your preferred language and currency for shopping.
                    </p>
                  </div>
                  <div className="countries-list">
                    {displayCountries.map((country) => (
                      <div
                        key={country.code}
                        className={`country-item ${selectedCountry === country.code ? "selected" : ""}`}
                        // onClick={() => handleCountrySelect(country.code)}
                      >
                        <div className="country-flag">{country.flag}</div>
                        <div className="country-info">
                          <div className="country-name">{country.name}</div>
                          <div className="country-domain">{country.domain}</div>
                        </div>
                        <div className="country-currency">
                          {country.currency}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Account & Lists */}
          <div
            className="header-item account"
            onMouseEnter={() => setShowAccountMenu(true)}
            onMouseLeave={() => setShowAccountMenu(false)}
          >
            <div className="account-top">
              <div className="hello-text">
                {user ? `Hello, ${user.name || "User"}` : "Hello, sign in"}
              </div>
              <div className="account-text">Account & Lists</div>
            </div>

            {showAccountMenu && (
              <div className="account-menu">
                <div className="menu-top-section">
                  {user ? (
                    <>
                      <div className="welcome-message">
                        <h3>Welcome back!</h3>
                        <p>{user.email || "Manage your account and orders"}</p>
                      </div>

                      {enableOrderTracking && recentOrders.length > 0 && (
                        <div className="recent-orders">
                          <h4>Recent Orders</h4>
                          {recentOrders.slice(0, 3).map((order) => (
                            <div
                              key={order.id}
                              className="order-item"
                              onClick={handleTrackPackage}
                            >
                              <div className="order-product">
                                {order.product}
                              </div>
                              <div
                                className={`order-status ${order.status?.toLowerCase()}`}
                              >
                                {order.status}
                              </div>
                              <div className="order-date">{order.date}</div>
                            </div>
                          ))}
                          <button
                            className="view-all-orders"
                            onClick={handleViewOrderHistory}
                          >
                            View all orders →
                          </button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="sign-in-section">
                      <button className="sign-in-button" onClick={handleSignIn}>
                        Sign in
                      </button>
                      <p className="sign-in-text">
                        New customer? <a href="/register">Start here.</a>
                      </p>
                    </div>
                  )}
                </div>

                <div className="menu-sections">
                  <div className="menu-section">
                    <h3>Your Lists</h3>
                    <ul>
                      <li>Create a List</li>
                      <li>Find a List or Registry</li>
                      <li>AmazonSmile Charity Lists</li>
                    </ul>
                  </div>

                  <div className="menu-section">
                    <h3>Your Account</h3>
                    <ul>
                      {accountMenuItems.map((item, index) => (
                        <li
                          key={index}
                          onClick={item.action}
                          className={
                            item.isSignOut || item.isSignIn ? "highlighted" : ""
                          }
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="menu-bottom">
                  <div className="todays-date">{getFormattedDate()}</div>
                  {todaysDeals.length > 0 && (
                    <div className="todays-deals-preview">
                      <h4>Today's Deals</h4>
                      {todaysDeals.slice(0, 2).map((deal) => (
                        <div key={deal.id} className="deal-item">
                          <span className="deal-title">{deal.title}</span>
                          <span className="deal-discount">{deal.discount}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Returns & Orders */}
          <div className="header-item returns" onClick={handleViewOrderHistory}>
            <div className="returns-top">Returns</div>
            <div className="returns-bottom">& Orders</div>
          </div>

          {/* Cart */}
          <div className="header-item cart" onClick={handleViewCart}>
            <a
              href="/cart"
              className="cart-link"
              onClick={(e) => e.preventDefault()}
            >
              <div className="cart-icon">
                <i className="cart-symbol">🛒</i>
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </div>
              <div className="cart-text">Cart</div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="header-bottom">
        <nav className="main-nav">
          <div
            className="nav-item all-menu"
            onMouseEnter={() => setShowAllMenu(true)}
            onMouseLeave={() => setShowAllMenu(false)}
          >
            <i className="menu-icon">☰</i>
            <span>All</span>

            {showAllMenu && (
              <div className="all-menu-dropdown">
                <div className="menu-column">
                  <h4>Trending</h4>
                  <ul>
                    <li>Best Sellers</li>
                    <li>New Releases</li>
                    <li>Movers & Shakers</li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Digital Content & Devices</h4>
                  <ul>
                    <li>Amazon Music</li>
                    <li>Echo & Alexa</li>
                    <li>Fire TV</li>
                    <li>Kindle E-readers & Books</li>
                  </ul>
                </div>
                <div className="menu-column">
                  <h4>Shop By Category</h4>
                  <ul>
                    <li>Electronics</li>
                    <li>Computers</li>
                    <li>Smart Home</li>
                    <li>Arts & Crafts</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {navItems.map((item, index) => (
            <div key={index} className="nav-item">
              {item}
            </div>
          ))}

          {enablePrimeFeatures && (
            <div className="nav-item prime-deal">
              <div className="prime-text">
                Prime Early Access
                <span className="prime-badge">Prime</span>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

// Default props
AmazonHeader.defaultProps = {
  user: null,
  cartItems: [],
  recentOrders: [],
  todaysDeals: [],
  countries: [],
  selectedCountry: "US",
  enableLanguageSelector: true,
  enableOrderTracking: true,
  enablePrimeFeatures: true,
  currentDate: new Date(),
};

export default AmazonHeader;
