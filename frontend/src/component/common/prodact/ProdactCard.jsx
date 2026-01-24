import React from "react";
import "./prodact.css";
function ProdactCard() {
  return (
    <div>
      <a href="">
        <img src="" alt="" />
      </a>
      <div>
        {/* title   */}
        <h3>Product Title</h3>
        {/* price  */}
        <p>$100</p>
        {/* rating  */}
        <div>
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        {/* add to cart  */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProdactCard;
