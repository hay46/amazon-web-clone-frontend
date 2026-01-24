import React from "react";
import "./prodact.css";

function ProdactCard({ product }) {
  // ከአማዞን የሚመጡ ዳታዎችን ነጥሎ ማውጣት
  const title = product.ItemInfo?.Title?.DisplayValue;
  const image = product.Images?.Primary?.Large?.URL;
  const price = product.Offers?.Listings?.[0]?.Price?.DisplayAmount;
  const link = product.DetailPageURL;
  //const rating = product.BrowseNodeInfo?.BrowseNodes?.[0]?.SalesRank; // አማዞን እንደየምድቡ ይለያያል

  return (
    <div className="product-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="price">{price || "Price not available"}</p>

        <div className="rating">
          {/* አማዞን ትክክለኛ የኮከብ ምልክት ካልሰጠ በደፈናው ማስቀመጥ ይቻላል */}
          <span>⭐⭐⭐⭐⭐</span>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProdactCard;
