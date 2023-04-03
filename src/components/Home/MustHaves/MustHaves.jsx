import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import Poster1 from "assets/images/havespc/pc-1.jpg";
import Poster2 from "assets/images/havespc/pc-2.jpg";
import Poster3 from "assets/images/havespc/pc-3.jpg";
import Poster4 from "assets/images/havespc/pc-4.jpg";
import Poster5 from "assets/images/havespc/pc-5.jpg";
import screen1 from "assets/images/screen-5.jpg";
import screen2 from "assets/images/screen-6.jpg";
import screen3 from "assets/images/screen-7.jpg";
import "./styles.css";

const MustHaves = () => {
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
                <h2>Must Haves for Your PC</h2>
              </div>
              <div className="next-jump">
                <Link to="/product-list">
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
                      alt=""
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        {" "}
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
                    <h4>Acer Nitro Vg270 S 27” Gaming Monitor</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>
                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />{" "}
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
                      alt=""
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        {" "}
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
                    <h4>ASUS ROG Strix Scope RX Mechanical Gaming Keyboard </h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />{" "}
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
                      alt=""
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
                    <h4>Lenovo Q-Series 24” FHD IPS Monitor</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />{" "}
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
                      alt=""
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        {" "}
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
                    <h4>Lenovo 600 Bluetooth 5.0 Silent Mouse</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />{" "}
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
                      alt=""
                      className="img-fluid poster-image"
                    />
                    <div className="off-prc">
                      <h3>
                        {" "}
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
                    <h4>SanDisk 1TB Extreme Portable SSD</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>

                    <div className="d-flex justify-content-between">
                      <div className="clk-optn">
                        <Link to="">
                          <FiHeart />{" "}
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
                <h2>Latest Laptops, Handpicked for You</h2>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src={screen1} alt="" className="img-fluid poster-image" />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src={screen2} alt="" className="img-fluid poster-image" />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src={screen3} alt="" className="img-fluid poster-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MustHaves;
