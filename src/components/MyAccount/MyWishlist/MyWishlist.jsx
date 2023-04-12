import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import product1 from "assets/images/products/product-1.jpg";
import product2 from "assets/images/products/product-2.jpg";
import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { Link } from "react-router-dom";
import { scrollToTop } from "utils";

const MyWishlist = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <section className="bg-off-grey">
      <Container>
        <Row>
          <Col lg={3} className="align-self-start">
            <Col className="container-card p-4">
              <Sidebar />
            </Col>
          </Col>

          <Col lg={9} className="align-self-start">
            <Col className="p-1 ps-4">
              <h2>My Wishlist</h2>
              <Col className="list-details-side">
                <div className="flex-jc-btwn align-c flex-wrap gap-2 mb-5">
                  <div className="primary-heads">
                    <h3 className="mb-0"> Displaying 1-12 of 6540 results</h3>
                  </div>
                  <div className="sort-order flex-jc-right align-c gap-1">
                    <div> Sort by</div>
                    <select className="form-control" id="enq" name="enq">
                      <option value="">Top Deals</option>
                      <option value="New Products">New Products</option>
                      <option value="High to Low">High to Low</option>
                      <option value="Low to High">Low to High</option>
                    </select>
                  </div>
                </div>
                <div className="product-listing">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 bg-white">
                        <div className="img-covers text-center">
                          <img src={product1} alt="" />
                          <span className="ofer-infs">
                            <h4>
                              30% <h5>OFF</h5>
                            </h4>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-9 pe-0">
                        <div className="img-details">
                          <h2>Acer Nitro 5 Gaming Laptop - Black</h2>
                          <h3>
                            {" "}
                            Laptops{" "}
                            <span className="rat-esr">
                              {" "}
                              <AiFillStar /> 4.5{" "}
                            </span>{" "}
                          </h3>
                          <h4>
                            {" "}
                            ₹83,127 <span className="ori-nal">
                              {" "}
                              ₹62,558{" "}
                            </span>{" "}
                            <h5> You Save (₹26,441) </h5>
                          </h4>
                          <ul className="config-uration">
                            <li> 11th Gen Intel Core i5-11400H </li>
                            <li> 8GB DDR4 3200MHz </li>
                            <li> 512GB SSD Storage </li>
                            <li> NVIDIA GeForce GTX 1650 - 4GB </li>
                          </ul>
                          <div className="clk-optn d-inline-block mt-4">
                            <Link to="">
                              <FiHeart />{" "}
                            </Link>
                            <Link to="">
                              <BiGitCompare />
                            </Link>
                          </div>
                          <div className="d-inline-block mt-4 m-l-1">
                            <Link className="red-bg-btn" to="">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="seprators-prdlst"></div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 bg-white">
                        <div className="img-covers">
                          <img src={product2} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 pe-0">
                        <div className="img-details">
                          <h2>Lenovo IdeaPad Slim 3 - Platinum Grey</h2>
                          <h3>
                            {" "}
                            Laptops{" "}
                            <span className="rat-esr">
                              {" "}
                              <AiFillStar /> 4.9{" "}
                            </span>{" "}
                          </h3>
                          <h4>
                            {" "}
                            <span className="ori-nal"> ₹32,558 </span>{" "}
                          </h4>
                          <ul className="config-uration">
                            <li> 11th Gen Intel Core i3-1115G4 </li>
                            <li> 8GB, DDR4, 2666 MHz </li>
                            <li> 256 GB SSD Storage </li>
                            <li> Intel UHD Graphics </li>
                          </ul>
                          <div className="clk-optn d-inline-block mt-4">
                            <Link to="">
                              <FiHeart />{" "}
                            </Link>
                            <Link to="">
                              <BiGitCompare />
                            </Link>
                          </div>
                          <div className="d-inline-block mt-4 m-l-1">
                            <Link className="red-bg-btn" to="">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="seprators-prdlst"></div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 bg-white">
                        <div className="img-covers text-center">
                          <img src={product1} alt="" />
                          <span className="ofer-infs">
                            <h4>
                              30% <h5>OFF</h5>
                            </h4>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-9 pe-0">
                        <div className="img-details">
                          <h2>Acer Nitro 5 Gaming Laptop - Black</h2>
                          <h3>
                            {" "}
                            Laptops{" "}
                            <span className="rat-esr">
                              {" "}
                              <AiFillStar /> 4.5{" "}
                            </span>{" "}
                          </h3>
                          <h4>
                            {" "}
                            ₹83,127 <span className="ori-nal">
                              {" "}
                              ₹62,558{" "}
                            </span>{" "}
                            <h5> You Save (₹26,441) </h5>
                          </h4>
                          <ul className="config-uration">
                            <li> 11th Gen Intel Core i5-11400H </li>
                            <li> 8GB DDR4 3200MHz </li>
                            <li> 512GB SSD Storage </li>
                            <li> NVIDIA GeForce GTX 1650 - 4GB </li>
                          </ul>
                          <div className="clk-optn d-inline-block mt-4">
                            <Link to="">
                              <FiHeart />{" "}
                            </Link>
                            <Link to="">
                              <BiGitCompare />
                            </Link>
                          </div>
                          <div className="d-inline-block mt-4 m-l-1">
                            <Link className="red-bg-btn" to="">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="seprators-prdlst"></div>
                  </div>

                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 bg-white">
                        <div className="img-covers">
                          <img src={product2} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 pe-0">
                        <div className="img-details">
                          <h2>Lenovo IdeaPad Slim 3 - Platinum Grey</h2>
                          <h3>
                            {" "}
                            Laptops{" "}
                            <span className="rat-esr">
                              {" "}
                              <AiFillStar /> 4.9{" "}
                            </span>{" "}
                          </h3>
                          <h4>
                            {" "}
                            <span className="ori-nal"> ₹32,558 </span>{" "}
                          </h4>
                          <ul className="config-uration">
                            <li> 11th Gen Intel Core i3-1115G4 </li>
                            <li> 8GB, DDR4, 2666 MHz </li>
                            <li> 256 GB SSD Storage </li>
                            <li> Intel UHD Graphics </li>
                          </ul>
                          <div className="clk-optn d-inline-block mt-4">
                            <Link to="">
                              <FiHeart />{" "}
                            </Link>
                            <Link to="">
                              <BiGitCompare />
                            </Link>
                          </div>
                          <div className="d-inline-block mt-4 m-l-1">
                            <Link className="red-bg-btn" to="">
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyWishlist;
