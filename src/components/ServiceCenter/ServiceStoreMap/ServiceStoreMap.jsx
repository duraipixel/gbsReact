import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { RiMapPinLine } from "react-icons/ri";
import "components/StoreLocator/StoreDetails/StoreMap/styles.scss";

const ServiceStoreMap = ({ serviceCenterData }) => {
  return (
    serviceCenterData && (
      <Container className="contact-map-section">
        <h2 className="text-center mt-5">Reach Our Store</h2>
        <Row className="contact-map">
          <Col>
            <iframe
              src={serviceCenterData.map_link}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Contact Map"
            ></iframe>
          </Col>

          <div className="contact-card">
            <h2>{serviceCenterData.title}</h2>
            <p>
              <RiMapPinLine />
              {serviceCenterData.address}
            </p>
            <p>
              <FiPhone />
              {serviceCenterData.contact_no}
            </p>
            <p>
              <TfiEmail /> {serviceCenterData.email}
            </p>
          </div>
        </Row>
      </Container>
    )
  );
};

export default ServiceStoreMap;
