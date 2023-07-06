import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import combo1 from "assets/images/combos/combo-1.jpg";
import combo2 from "assets/images/combos/combo-2.jpg";
import combo3 from "assets/images/combos/combo-3.jpg";
import combo4 from "assets/images/combos/combo-4.jpg";
import combo5 from "assets/images/combos/combo-5.jpg";
import "./styles.css";

const Combos = () => {
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
      <section className="new-arrivals combos">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between">
              <div className="comon-heads">
                <h2>Undeniable Combos</h2>
              </div>
              <div className="next-jump">
                <Link to="/products">
                  View All <FiChevronRight />
                </Link>
              </div>
            </div>

            <div className="arrival-slider">
              <Slider {...settings}>
                <div className="arival-det">
                  <div className="ari-img">
                    <img
                      src={combo1}
                      alt="combo-pic"
                      className="img-fluid poster-image w-100"
                    />
                    <div className="off-prc">
                      <h3>
                        
                        30% <span>OFF</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Combos</h2>
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
                      src={combo2}
                      alt="combo-pic"
                      className="img-fluid poster-image w-100"
                    />
                    <div className="off-prc">
                      <h3>
                        
                        30% <span>OFF</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Combos</h2>
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
                      src={combo3}
                      alt="combo-pic"
                      className="img-fluid poster-image w-100"
                    />
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Combos</h2>
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
                      src={combo4}
                      alt="combo-pic"
                      className="img-fluid poster-image w-100"
                    />
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Combos</h2>
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
                      src={combo5}
                      alt="combo-pic"
                      className="img-fluid poster-image w-100"
                    />
                    <div className="off-prc">
                      <h3>
                        
                        30% <span>OFF</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ari-cnt text-center">
                    <div className="d-flex justify-content-between">
                      <h2>Combos</h2>
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
    </>
  );
};

export default Combos;
