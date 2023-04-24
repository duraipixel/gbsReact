import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

const StoreOffers = () => {
  return (
    <div className="service-we-offer-container">
      <Container>
        <Col>
          <h2>Explore Our Exclusive Store Offers</h2>
          <Row>
            <Col className="offers-card">
              <p>Get instant 5% Cashback Up to ₹2,500*</p>
            </Col>
            <Col className="offers-card">
              <p>No Cost EMI on all major Debit & Credit Cards</p>
            </Col>
            <Col className="offers-card">
              <p>Warranty Upgrades worth ₹5499</p>
            </Col>
            <Col className="offers-card">
              <p>JBL Earbuds worth ₹7999 at ₹999</p>
            </Col>
            <Col className="offers-card">
              <p>JBL Speaker worth ₹4999 at ₹399</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default StoreOffers;
