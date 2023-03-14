import React from "react";
import Slider from "react-slick";
import Poster1 from "assets/images/HomeProductsPoster/Poster1.png";
import "./styles.css";

const HomeProductsSlider = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Poster1} alt="" className="img-fluid w-100 poster-image" />
        <div className="poster-content">
          <h3>PUSH PERFORMANCE to New Heights with ROG Strix Scar 16</h3>
          <p>
            Up to Intel Core i9-13980HX | Up to GeForce RTX 4090 | Up to 64GB
            DDR5 RAM
          </p>
          <h4>Starting From ₹82,000</h4>
          <button className="btn btn-cta">Shop Now</button>
        </div>
      </div>
      <div>
        <img src={Poster1} alt="" className="img-fluid w-100" />
        <div className="poster-content">
          <h3>PUSH PERFORMANCE to New Heights with ROG Strix Scar 16</h3>
          <p>
            Up to Intel Core i9-13980HX | Up to GeForce RTX 4090 | Up to 64GB
            DDR5 RAM
          </p>
          <h4>Starting From ₹82,000</h4>
          <button className="btn btn-cta">Shop Now</button>
        </div>
      </div>
      <div>
        <img src={Poster1} alt="" className="img-fluid w-100" />
        <div className="poster-content">
          <h3>PUSH PERFORMANCE to New Heights with ROG Strix Scar 16</h3>
          <p>
            Up to Intel Core i9-13980HX | Up to GeForce RTX 4090 | Up to 64GB
            DDR5 RAM
          </p>
          <h4>Starting From ₹82,000</h4>
          <button className="btn btn-cta">Shop Now</button>
        </div>
      </div>
      <div>
        <img src={Poster1} alt="" className="img-fluid w-100" />
        <div className="poster-content">
          <h3>PUSH PERFORMANCE to New Heights with ROG Strix Scar 16</h3>
          <p>
            Up to Intel Core i9-13980HX | Up to GeForce RTX 4090 | Up to 64GB
            DDR5 RAM
          </p>
          <h4>Starting From ₹82,000</h4>
          <button className="btn btn-cta">Shop Now</button>
        </div>
      </div>
    </Slider>
  );
};

export default HomeProductsSlider;
