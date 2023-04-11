import React from "react";
import Poster1 from "assets/images/brands/product-1.jpg";
import Poster2 from "assets/images/brands/product-2.jpg";
import Poster3 from "assets/images/brands/product-3.jpg";
import Poster4 from "assets/images/brands/product-4.jpg";
import Slider from "react-slick";

const OurExclusiveBrand = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="narroww-search text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 justify-content-center">
              <div className="comon-heads">
                <h2>Our Exclusive Brand Stores</h2>
              </div>
            </div>

            <div className="col-lg-12 justify-content-center">
              <div className="brands-list-slider">
                <Slider {...settings}>
                  <div className="brnd-sector">
                    <img src={Poster1} alt="" className="img-fluid" />
                  </div>

                  <div className="brnd-sector">
                    <img src={Poster2} alt="" className="img-fluid" />
                  </div>

                  <div className="brnd-sector">
                    <img src={Poster3} alt="" className="img-fluid" />
                  </div>

                  <div className="brnd-sector">
                    <img src={Poster4} alt="" className="img-fluid" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurExclusiveBrand;
