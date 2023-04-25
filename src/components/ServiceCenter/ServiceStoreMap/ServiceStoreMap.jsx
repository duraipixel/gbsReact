import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { RiMapPinLine } from "react-icons/ri";
import "components/StoreLocator/StoreDetails/StoreMap/styles.scss";

const ServiceStoreMap = () => {
  return (
    <Container className="contact-map-section">
      <h2 className="text-center mt-5">Reach Our Store</h2>
      <Row className="contact-map">
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.978246723673!2d80.25000829999999!3d12.973243099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d695f6bc21b%3A0xa5a81440ba84c7b9!2s390%2C%20Rajiv%20Gandhi%20Salai%2C%20Nehru%20Nagar%2C%20OMR%2C%20Chennai%2C%20Tamil%20Nadu%20600041!5e0!3m2!1sen!2sin!4v1682402042070!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Contact Map"
          ></iframe>
        </Col>

        <div className="contact-card">
          <h2>GBS Systems & Services, OMR Perungudi</h2>
          <p>
            <RiMapPinLine />
            No. 390, Rajiv Gandhi Salai, Kandhanchavadi, Perungudi, Chennai
            600041.
          </p>
          <p>
            <FiPhone /> +91 98416 36517, +91 98416 03332
          </p>
          <p>
            <TfiEmail /> ls_omr@gbssystems.com
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default ServiceStoreMap;
