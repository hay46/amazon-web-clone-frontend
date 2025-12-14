import React from 'react'
import './LowerHeader.CSS'
const LowerHeader = () => {
  return (
    <div>
      \
      <a href="#" class="sub-nav-link all-menu dropdown-trigger">
        <span class="icon">☰</span> All
        <div class="dropdown-content mega-menu">
          <div class="mega-menu-column">
            <h3>Electronics, Computers & Office</h3>
            <ul>
              <li>
                <a href="#">Computers & Accessories</a>
              </li>
              <li>
                <a href="#">TV & Video</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Wearable Technology</a>
              </li>
              <li>
                <a href="#">Office & School Supplies</a>
              </li>
            </ul>
          </div>

          <div class="mega-menu-column">
            <h3>Home, Garden & Tools</h3>
            <ul>
              <li>
                <a href="#">Kitchen & Dining</a>
              </li>
              <li>
                <a href="#">Furniture</a>
              </li>
              <li>
                <a href="#">Home Improvement</a>
              </li>
              <li>
                <a href="#">Pet Supplies</a>
              </li>
            </ul>
          </div>
        </div>
      </a>
      ;
    </div>
  );
}

export default LowerHeader