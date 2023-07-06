import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import Poster1 from "assets/images/tablets/product-1.jpg";
import Poster2 from "assets/images/tablets/product-2.jpg";
import Poster3 from "assets/images/tablets/product-3.jpg";
import Poster4 from "assets/images/tablets/product-4.jpg";
import Poster5 from "assets/images/tablets/product-5.jpg";
import screen1 from "assets/images/screen-1.jpg";
import screen2 from "assets/images/screen-2.jpg";
import screen3 from "assets/images/screen-3.jpg";
import screen4 from "assets/images/screen-4.jpg";
import "./styles.css";

const Tablets = () => {
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
                <h2>Tablets that Help You Work on the Move</h2>
              </div>
              <div className="next-jump">
                <Link to="">
                  View All <FiChevronRight />
                </Link>
              </div>
            </div>

            <div className="arrival-slider">
              <Slider {...settings}>
                <div className="arival-det">
                  <div className="ari-img">
                    <img
                      src={Poster1}
                      alt="poster-pic"
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        
                        30% <span>OFF</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Tablets</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>
                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />
                        </Link>
                        <Link to="">
                          <BiGitCompare />
                        </Link>
                      </div>
                      <div>
                        <Link className="red-bg-btn" to="">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="arival-det">
                  <div className="ari-img">
                    <img
                      src={Poster2}
                      alt="poster-pic"
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        
                        30% <span>OFF</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Tablets</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />
                        </Link>
                        <Link to="">
                          <BiGitCompare />
                        </Link>
                      </div>
                      <div>
                        <Link className="red-bg-btn" to="">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="arival-det">
                  <div className="ari-img">
                    <img
                      src={Poster3}
                      alt="poster-pic"
                      className="img-fluid poster-image"
                    />
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Tablets</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />
                        </Link>
                        <Link to="">
                          <BiGitCompare />
                        </Link>
                      </div>
                      <div>
                        <Link className="red-bg-btn" to="">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="arival-det">
                  <div className="ari-img">
                    <img
                      src={Poster4}
                      alt="poster-pic"
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        
                        30% <span>OFF</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Tablets</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />
                        </Link>
                        <Link to="">
                          <BiGitCompare />
                        </Link>
                      </div>
                      <div>
                        <Link className="red-bg-btn" to="">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="arival-det">
                  <div className="ari-img">
                    <img
                      src={Poster5}
                      alt="poster-pic"
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        
                        30% <span>OFF</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Tablets</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />
                        </Link>
                        <Link to="">
                          <BiGitCompare />
                        </Link>
                      </div>
                      <div>
                        <Link className="red-bg-btn" to="">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="screen-size">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="comon-heads text-center">
                <h2>Browse by Screen Size</h2>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src={screen1} alt="poster-pic" className="img-fluid poster-image" />
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src={screen2} alt="poster-pic" className="img-fluid poster-image" />
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src={screen3} alt="poster-pic" className="img-fluid poster-image" />
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <img src={screen4} alt="poster-pic" className="img-fluid poster-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tablets;
