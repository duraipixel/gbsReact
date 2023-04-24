import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { RiMapPinLine } from "react-icons/ri";

const StoreMap = () => {
  return (
    <Container className="contact-map-section">
      <h2 className="text-center">Reach Our Store</h2>
      <Row className="contact-map">
        <Col>
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3886.9221913261663!2d80.19084101482271!3d13.040624590810598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1070A%2C%20Munusamy%20Salai%2C%20Bangaru%20Colony%2C%20K.%20K.%20Nagar%2C%20Opposite%20to%20Bata%20Showroom%2C%20Chennai%20600078!5e0!3m2!1sen!2sin!4v1682341107544!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            title="Contact Map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>

        <div className="contact-card">
          <h2>Dell Exclusive Store - KK Nagar</h2>
          <p>
            <RiMapPinLine />
            1070A, Munusamy Salai, Bangaru Colony, K. K. Nagar, Opposite to Bata
            Showroom, Chennai 600078
          </p>
          <p>
            <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
          </p>
          <p>
            <TfiEmail /> dellkkn@gbssystems.com
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default StoreMap;
