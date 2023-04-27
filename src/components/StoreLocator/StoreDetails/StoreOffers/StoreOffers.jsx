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
              <p>Get instant 5% Cashback Up to <sup>₹</sup>2,500*</p>
            </Col>
            <Col className="offers-card">
              <p>No Cost EMI on all major Debit & Credit Cards</p>
            </Col>
            <Col className="offers-card">
              <p>Warranty Upgrades worth <sup>₹</sup>5499</p>
            </Col>
            <Col className="offers-card">
              <p>JBL Earbuds worth <sup>₹</sup>7999 at <sup>₹</sup>999</p>
            </Col>
            <Col className="offers-card">
              <p>JBL Speaker worth <sup>₹</sup>4999 at <sup>₹</sup>399</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default StoreOffers;
