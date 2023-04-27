import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

const StoreOffers = ({ storeLocation }) => {
  // console.log(storeLocation && storeLocation.offers);
  return (
    storeLocation &&
    storeLocation.offers.length !== 0 && (
      <div className="service-we-offer-container">
        <Container>
          <Col>
            <h2>Explore Our Exclusive Store Offers</h2>
            <Row>
              {storeLocation &&
                storeLocation.offers.map((item) => (
                  <Col className="offers-card">
                    <p>{item}</p>
                  </Col>
                ))}
          </Row>
        </Col>
      </Container>
    </div>
  ))
};

export default StoreOffers;
