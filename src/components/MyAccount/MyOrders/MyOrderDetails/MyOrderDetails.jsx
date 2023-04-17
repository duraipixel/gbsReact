import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss";

const MyOrderDetails = () => {
  return (
    <>
      <Col className="container-card card p-4 mb-3">
        <div className="flex-wrap flex-jc-btwn align-c">
          <h2 className="order-details-title">
            Order Details - #403-9499889-4551543{" "}
          </h2>
          <Link className="btn btn-cancel">Cancel Order</Link>
        </div>
        <div>
          <p>Your order has been shipped and it’s out for delivery</p>
        </div>
      </Col>
    </>
  );
};

export default MyOrderDetails;
