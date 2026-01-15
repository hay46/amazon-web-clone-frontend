import React from 'react'
import "Header.css"
function Header() {
  return (
    <>
      <section className="amazon-logo">
        <div>
          <img
            src="https://icons8.com/icon/yzEFHZ6FdT4P/amazon"
            alt=""
            className="amzon-icon"
          />
        </div>
      </section>
      <section className="loction-delivery-ethiopia-amazon">
        <div>
          <h2 className="delivery-to-ethiopia">delivery to</h2>
          <div className="delivery-ethiopaia-for-amazon">
            <img
              src="https://www.123rf.com/photo_247501070_map-location-pin-line-icon-geolocation-navigation-and-gps-tracking-outline-symbol-travel-and.html"
              alt=""
            />
            <h1 className="ethiooian-delivery">Ethiopia</h1>
          </div>
        </div>
      </section>
      <section className="All-department">
    
        <label for="department">All</label>
        <select Id="department" className="All-choose-department">
          <option value="All Department">All Department</option>
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
      </section>
      <section></section>
    </>
  );
}

export default Header
