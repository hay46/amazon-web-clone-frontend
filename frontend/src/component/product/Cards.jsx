import React from "react";
import "./Cards.css"; // Import the CSS file above

const Cards = () => {
  return (
    <div className="encouragement-card">
      <div className="card-header">
        <div className="icon-circle">
          <span style={{ color: "#ef4444" }}>❤️</span>
        </div>
        <span className="category-tag">New Appreciation</span>
      </div>

      <p className="card-message">
        "The video is great! I really loved it. You have the talent, so please
        keep making more. I truly enjoyed it!"
      </p>

      <button className="create-btn">
        <span>▶</span> Keep Creating
      </button>
    </div>
  );
};

export default Cards;
