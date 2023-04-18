import React from "react";
import { Col, Row } from "react-bootstrap";

const PaymentDetails = () => {
  return (
    <div>
      <Col className="container-card card p-4 mb-3 payment-details">
        <h4>Payment Details</h4>
        <Row>
          <Col>
            <p>Payment Method</p>
            <p>Sub total</p>
            <p>Taxes</p>
            <p>Grand Total</p>
          </Col>
          <Col>
            <img src={require("assets/images/Cart/razorpay.png")} alt="" />
            <p>₹68,588</p>
            <p>₹12,345.84</p>
            <h5>₹80,933.8</h5>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default PaymentDetails;
