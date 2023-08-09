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
            <h2 className="h2">{serviceCenterData.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: serviceCenterData.description}}></p>
            <div>
              {(serviceCenterData.email || serviceCenterData.contact_no) && (
                <h3>Reach Us</h3>
              )}
              <p>
                {serviceCenterData.contact_no && <FiPhone />}
                {serviceCenterData.contact_no}
              </p>
              <p>
                {serviceCenterData.email && <TfiEmail />}
                {serviceCenterData.email}
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={serviceCenterData.service_center_image}
              alt="service_center_image"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default ServiceCenterLocationDetails;
