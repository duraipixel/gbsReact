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
              <img src={require("assets/Store/cpu1.png")} alt="" />
              <p>Chip Level Repair</p>
            </Col>
            <Col>
              <img src={require("assets/Store/ram1.png")} alt="" />
              <p>Memory Upgrade</p>
            </Col>
            <Col>
              <img src={require("assets/Store/low-battery(1).png")} alt="" />
              <p>Adapter & Battery Services</p>
            </Col>
            <Col>
              <img
                src={require("assets/Store/wireless-keyboard(1).png")}
                alt=""
              />
              <p>Keyboard Repair</p>
            </Col>
            <Col>
              <img src={require("assets/Store/laptop1.png")} alt="" />
              <p>Screen Replacement</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default ServiceWeOffer;
