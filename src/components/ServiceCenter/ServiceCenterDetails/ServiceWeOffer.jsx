import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

const ServiceWeOffer = () => {
  return (
    <div className="service-we-offer-container">
      <Container>
        <Col>
          <h2>Services We Offer</h2>
          <Row>
            <Col>
              <img src={require("assets/Store/cpu1.png")} alt="cpu-icon" />
              <p>Chip Level Repair</p>
            </Col>
            <Col>
              <img src={require("assets/Store/ram1.png")} alt="ram-icon" />
              <p>Memory Upgrade</p>
            </Col>
            <Col>
              <img src={require("assets/Store/low-battery(1).png")} alt="low-battery-icon" />
              <p>Adapter & Battery Services</p>
            </Col>
            <Col>
              <img
                src={require("assets/Store/wireless-keyboard(1).png")}
                alt="Keyboard Repair icon"
              />
              <p>Keyboard Repair</p>
            </Col>
            <Col>
              <img src={require("assets/Store/laptop1.png")} alt="Screen-replacement-icon" />
              <p>Screen Replacement</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default ServiceWeOffer;
