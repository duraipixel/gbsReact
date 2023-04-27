import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import "components/ServiceCenter/ServiceCenterDetails/styles.scss";

const StoreLocationDetails = ({ storeLocation }) => {
  return (
    storeLocation && (
      <Container>
        <Row className="details-container">
          <Col lg={6}>
            <h2>{storeLocation.title}</h2>
            <p>{storeLocation.description}</p>
            <div>
              <h3>Reach Us</h3>
              <p>
                <FiPhone /> {storeLocation.contact_no}
              </p>
              <p>
                <TfiEmail /> {storeLocation.email}
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={storeLocation.store_image}
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default StoreLocationDetails;
