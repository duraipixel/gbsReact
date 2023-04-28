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
                storeLocation.offers.map((item,i) => (
                  <Col className="offers-card" key={i}>
                    <p>{item}</p>
                  </Col>
                ))}
              {/* <Col className="offers-card">
              <p>
                Get instant 5% Cashback Up to <sup>₹</sup>2,500*
              </p>
            </Col> */}
            </Row>
          </Col>
        </Container>
      </div>
    )
  );
};

export default StoreOffers;
