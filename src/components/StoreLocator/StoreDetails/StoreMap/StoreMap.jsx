import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { RiMapPinLine } from "react-icons/ri";

const StoreMap = ({ storeLocation }) => {
  // console.log(storeLocation);
  return (
    storeLocation && (
      <Container className="contact-map-section">
        <h2 className="text-center mt-5">Reach Our Store</h2>
        <Row className="contact-map">
          <Col>
            <iframe
              src={storeLocation.map_link}
              allowFullScreen=""
              loading="lazy"
              title="Google Street View map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>

          <div className="contact-card">
            <h2>{storeLocation.title}</h2>
            <p>
              {storeLocation.address && <RiMapPinLine />}
              {storeLocation.address}
            </p>
            <p>
              {storeLocation.contact_no && <FiPhone />}
              {storeLocation.contact_no}
            </p>
            <p>
              {storeLocation.contact_no && <TfiEmail />} {storeLocation.email}
            </p>
          </div>
        </Row>
      </Container>
    )
  );
};

export default StoreMap;
