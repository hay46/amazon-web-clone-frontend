import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imge } from "../carasole/imge/data.js"
import "./CarasoleEffect.css"; 

function CarasoleEffect() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {imge.map((imageItemsLink, index) => (
          <div className="slide-container" key={index}>
            <img
              src={imageItemsLink}
              alt={`slide-${index}`}
              className="carousel-image"
            />
            <div className="gradient-overlay"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarasoleEffect;
