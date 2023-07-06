import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import Poster1 from "assets/images/arrivals/product-1.jpg";
import Poster2 from "assets/images/arrivals/product-2.jpg";
import Poster3 from "assets/images/arrivals/product-3.jpg";
import Poster4 from "assets/images/arrivals/product-4.jpg";
import Poster5 from "assets/images/arrivals/product-5.jpg";
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
                      <h2>Laptops</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>
                    <ul>
                      <li>12th Gen Intel Core i5-1235U</li>
                      <li>8GB, DDR4, 2666 MHz</li>
                      <li>512GB SSD Storage</li>
                      <li>Intel Integrated Graphics</li>
                    </ul>
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
                      <h2>Laptops</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>
                    <ul>
                      <li>12th Gen Intel Core i5-1235U</li>
                      <li>8GB, DDR4, 2666 MHz</li>
                      <li>512GB SSD Storage</li>
                      <li>Intel Integrated Graphics</li>
                    </ul>
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
                      <h2>Laptops</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>
                    <ul>
                      <li>12th Gen Intel Core i5-1235U</li>
                      <li>8GB, DDR4, 2666 MHz</li>
                      <li>512GB SSD Storage</li>
                      <li>Intel Integrated Graphics</li>
                    </ul>
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
                      <h2>Laptops</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>
                    <ul>
                      <li>12th Gen Intel Core i5-1235U</li>
                      <li>8GB, DDR4, 2666 MHz</li>
                      <li>512GB SSD Storage</li>
                      <li>Intel Integrated Graphics</li>
                    </ul>
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
                      <h2>Laptops</h2>
                      <h3>
                        <AiFillStar /> 4.5
                      </h3>
                    </div>
                    <h4>Dell Vostro 3420 -Carbon Black</h4>
                    <h5>
                      <span>₹83,127</span> ₹57,990
                    </h5>
                    <ul>
                      <li>12th Gen Intel Core i5-1235U</li>
                      <li>8GB, DDR4, 2666 MHz</li>
                      <li>512GB SSD Storage</li>
                      <li>Intel Integrated Graphics</li>
                    </ul>
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

export default NewArrivals;
