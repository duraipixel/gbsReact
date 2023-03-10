import React from "react";
import Slider from "react-slick";
import Poster1 from "assets/images/HomeProductsPoster/Poster1.png";

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
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Poster1} alt="" />
      </div>
      <div>
        <img src={Poster1} alt="" />
      </div>
      <div>
        <img src={Poster1} alt="" />
      </div>
    </Slider>
  );
};

export default HomeProductsSlider;
