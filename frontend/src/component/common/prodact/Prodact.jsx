import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call your local server, NOT the Amazon API directly
    fetch("http://localhost:5000/api/amazon-products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (loading) return <p>Loading Products...</p>;

  return (
    <div className="product-grid">
      {products.map((item) => (
        <div key={item.ASIN} className="product-card">
          <img
            src={item.Images.Primary.Large.URL}
            alt={item.ItemInfo.Title.DisplayValue}
          />
          <h3>{item.ItemInfo.Title.DisplayValue}</h3>
          <p>{item.Offers.Listings[0].Price.DisplayAmount}</p>
          <a href={item.DetailPageURL} target="_blank">
            View on Amazon
          </a>
        </div>
      ))}
    </div>
  );
};

export default Product;
