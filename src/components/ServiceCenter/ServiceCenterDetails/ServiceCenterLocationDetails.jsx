import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const ServiceCenterLocationDetails = ({ serviceCenterData }) => {
  return (
    serviceCenterData && (
      <Container>
        <Row className="details-container">
          <Col lg={6}>
            <h2>{serviceCenterData.title}</h2>
            <p>
             {serviceCenterData.description}
            </p>
            <div>
              <h3>Reach Us</h3>
              <p>
                <FiPhone /> {serviceCenterData.contact_no}
              </p>
              <p>
                <TfiEmail /> {serviceCenterData.email}
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img src={serviceCenterData.banner} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default ServiceCenterLocationDetails;
