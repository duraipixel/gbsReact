import React from "react";
import Slider from "react-slick";
import { FiChevronRight } from "react-icons/fi";
import Poster1 from "assets/images/HomeProductsPoster/Poster1.png";
import "./styles.css";

const NewArrivals = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
  <>
  <section className="new-arrivals">
  <div className="container">
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between">
    <div className="comon-heads">
      <h2>New Arrivals</h2>
    </div>
    <div className="next-jump">
      <a href="">View All <FiChevronRight /></a>
    </div>
    </div> 

    <Slider {...settings}>
      <div>
         
      </div>
    </Slider>

    </div>
    </div>
  </section>
  </>
  );
};

export default NewArrivals;
