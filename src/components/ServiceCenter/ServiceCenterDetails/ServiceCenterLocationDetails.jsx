import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const ServiceCenterLocationDetails = () => {
  return (
    <Container>
      <Row className="details-container">
        <Col>
          <h2>Laptop Service @ GBS - OMR, Chennai</h2>
          <p>
            At Laptop Service @ GBS - OMR, Chennai, we offer professional repair
            and maintenance services for laptops and other electronic devices.
            Our team of experienced technicians can diagnose and fix a wide
            range of issues, including hardware and software problems, data
            recovery, virus removal, and more.
          </p>
          <div>
            <h3>Reach Us</h3>
            <p>
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </p>
            <p>
              <TfiEmail /> dellkkn@gbssystems.com
            </p>
          </div>
        </Col>
        <Col>
          <img src={require("assets/Store/Rectangle222.png")} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceCenterLocationDetails;
