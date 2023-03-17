import React from "react";
import "./styles.css";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getCurrentYear, openInNewTab } from "utils";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Logo from "assets/Brand/gbsLogoHighRes.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <img src={Logo} alt="" />
            <ListGroup>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("")}
                >
                  <AiOutlineInstagram />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("")}
                >
                  <RiTwitterFill />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link
                  rel="noopener noreferrer"
                  onClick={() => openInNewTab("")}
                >
                  <RiFacebookFill />
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>Quick Links</h5>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Stores</Link>
              <Link to="/">Awards</Link>
              <Link to="/">Gallery</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>Shop Brands</h5>
            <div className="footer-links">
              <Link to="/">Acer</Link>
              <Link to="/">Asus</Link>
              <Link to="/">Dell</Link>
              <Link to="/">HP</Link>
              <Link to="/">Lenovo</Link>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>PC Service</h5>
            <div className="footer-links">
              <Link to="/">Chip Level Repair</Link>
              <Link to="/">Memory Upgrades</Link>
              <Link to="/">Adapter & Battery Issues</Link>
              <Link to="/">Keyboard Repair</Link>
              <Link to="/">Screen Replacement</Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>Information</h5>
            <div className="footer-links">
              <Link to="/">Shipping & Delivery</Link>
              <Link to="/">Support Center</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Warranty Policy</Link>
              <Link to="/">Terms Of Use</Link>
              <Link to="/">Returns Policy</Link>
              <Link to="/">Store Locator</Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={2} xl={2}>
            <h5>Contact Us</h5>
            <p className="footer-text1">
              <RiMapPinLine /> 1070A, Munusamy Salai,
              <br /> KK Nagar, Chennai-600078.
            </p>
            <p className="footer-text1">
              <Link
                rel="noopener noreferrer"
                onClick={() => openInNewTab("mailto:info@gbssystems.in")}
              >
                {" "}
                <TfiEmail /> info@gbssystems.in
              </Link>
            </p>
            <p className="footer-text1">
              <Link
                rel="noopener noreferrer"
                onClick={() => openInNewTab("tel:+919600376222")}
              >
                {" "}
                <FiPhone /> Sales: +91 96003 76222
              </Link>
            </p>
            <p className="footer-text1">
              <Link
                rel="noopener noreferrer"
                onClick={() => openInNewTab("tel:+919841603332")}
              >
                {" "}
                Service +91 98416 03332
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <p className="footer-bottom-text1">
          Copyright &copy; {getCurrentYear()} GBS Systems & Services Pvt Ltd. |
          All Rights Reserved | Designed by Pixel Studios
        </p>
      </div>
    </footer>
  );
};

export default Footer;
