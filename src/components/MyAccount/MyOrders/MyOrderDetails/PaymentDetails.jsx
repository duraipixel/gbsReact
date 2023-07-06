import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss";

const PaymentDetails = ({ order }) => {
  return (
    <div>
      <Col className="container-card card p-4 mb-3 payment-details">
        <h4>Payment Details</h4>
        <Row>
          <Col>
            <p>Sub total</p>
            <p>Taxes</p>
            <p>Grand Total</p>
          </Col>
          <Col className="text-align-right">
            <p>₹{order.sub_total}</p>
            <p>₹{order.tax_amount}</p>
            <h5>₹{order.amount}</h5>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default PaymentDetails;
