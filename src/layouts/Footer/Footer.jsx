import React from "react";
import "./styles.scss";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { getCurrentYear, openInNewTab } from "utils";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
// import Logo from "assets/Brand/gbsLogoHighRes.png";

const Footer = () => {
  const brands = useSelector((state) => state.homePageCollection.brands);
  const siteInfo = useSelector((state) => state.homePageCollection.siteInfo);
  const quickLink = useSelector((state) => state.homePageCollection.quickLink);

  if (siteInfo && quickLink && brands)
    return (
      <footer>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={2} xl={2}>
              <img src={siteInfo.logo} alt="" />
              <ListGroup>
                {
                  siteInfo.links.map((i, index)=>(
                    <ListGroup.Item key={index}>
                    <Link
                      rel="noopener noreferrer"
                      onClick={() => openInNewTab(i.link_url)}
                    >
                      <i className={`fa-brands fa-${i.link_name}`}></i>
                    </Link>
                  </ListGroup.Item>
                  ))
                }
                {/* <ListGroup.Item>
                  <Link
                    rel="noopener noreferrer"
                    onClick={() => openInNewTab("https://www.instagram.com")}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    rel="noopener noreferrer"
                    onClick={() => openInNewTab("https://twitter.com")}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    rel="noopener noreferrer"
                    onClick={() => openInNewTab("https://www.facebook.com")}
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </ListGroup.Item> */}
              </ListGroup>
            </Col>
            <Col xs={12} sm={12} md={6} lg={2} xl={2}>
              <h5>Quick Links</h5>
              <div className="footer-links">
                {
                  quickLink.map((item => (
                    <Link to={item.url} key={item.id}>{item.name}</Link>
                  )))
                }
                {/* <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/stores">Stores</Link>
                <Link to="/">Awards</Link>
                <Link to="/">Gallery</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/">Careers</Link> */}
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={2} xl={2}>
              <h5>Shop Brands</h5>
              <div className="footer-links">
                {brands &&
                  brands.map((brand) => (
                    <Link to="/" key={brand.id}>
                      {brand.title}
                    </Link>
                  ))}
                {/* <Link to="/">Acer</Link>
              <Link to="/">Asus</Link>
              <Link to="/">Dell</Link>
              <Link to="/">HP</Link>
              <Link to="/">Lenovo</Link> */}
              </div>
            </Col>

            {/* <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>PC Service</h5>
            <div className="footer-links">
              <Link to="/">Chip Level Repair</Link>
              <Link to="/">Memory Upgrades</Link>
              <Link to="/">Adapter & Battery Issues</Link>
              <Link to="/">Keyboard Repair</Link>
              <Link to="/">Screen Replacement</Link>
            </div>
          </Col> */}

            <Col xs={12} sm={12} md={6} lg={3} xl={3}>
              <h5>Information</h5>
              <div className="footer-links">
                <Link to="/shipping-delivery">Shipping & Delivery</Link>
                {/* <Link to="/">Support Center</Link> */}
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/warantty-policy">Warranty Policy</Link>
                {/* <Link to="/">Terms Of Use</Link> */}
                {/* <Link to="/">Returns Policy</Link> */}
                <Link to="/store-locator">Store Locator</Link>
                <Link to="/service-center-locator">Service Center Locator</Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} xl={3}>
              <h5>Contact Us</h5>
              <p className="footer-text1">
                <RiMapPinLine /> {siteInfo.address}
              </p>
              <p className="footer-text1">
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("mailto:info@gbssystems.in")}
                >
                  <TfiEmail /> {siteInfo.site_email}
                </Link>
              </p>
              <p className="footer-text1">
                <Link
                  rel="noopener noreferrer"
                  // onClick={() => openInNewTab("tel:+919600376222")}
                >
                  <FiPhone /> {/* Sales:  */}
                  {siteInfo.site_mobile_no}
                </Link>
              </p>
              {/* <p className="footer-text1 ms-3">
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("tel:+919841603332")}
                >
                  {" "}
                  Service +91 98416 03332
                </Link>
              </p> */}
            </Col>
          </Row>
        </Container>
        <div className="footer-bottom">
          <p className="footer-bottom-text1">
            Copyright &copy; {getCurrentYear()} {siteInfo.site_name} | All
            Rights Reserved | Designed by Pixel Studios
          </p>
        </div>
      </footer>
    );
};

export default Footer;
