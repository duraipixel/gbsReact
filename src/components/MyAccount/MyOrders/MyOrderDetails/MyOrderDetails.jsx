import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss";
import PaymentDetails from "./PaymentDetails";
const MyOrderDetails = () => {
  return (
    <>
      <Col className="container-card card p-4 mb-3">
        <div className="flex-wrap flex-jc-btwn align-c">
          <h2 className="order-details-title">
            <span style={{ fontWeight: "600" }}>Order Details</span> -
            #403-9499889-4551543{" "}
          </h2>
          <Link className="btn btn-cancel">Cancel Order</Link>
        </div>
        <div className="pt-3 pb-3">
          <p>Your order has been shipped and it’s out for delivery</p>
          <div className="pb-4"></div>
        </div>
        <div>
          <div className="flex-jc-btwn align-c t-head-title">
            <p>Product</p>
            <div className="flex-jc-btwn align-c t-head-gap">
              <p>Quantity</p>
              <p>Price</p>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="flex-jc-btwn pt-1">
            <div className="flex gap-3 align-c flex-wrap">
              <img src={require("assets/images/Cart/Cart1.png")} alt="" />
              <p>ASUS ROG Strix G17 - G713IE-HX040W</p>
            </div>
            <div className="flex-jc-btwn t-head-gap align-c">
              <p>1</p>
              <p>₹89,306</p>
            </div>
          </div>
          <hr />
          <div className="flex-jc-btwn pt-1">
            <div className="flex flex-jc-btwn gap-3 align-c flex-wrap">
              <img src={require("assets/images/Cart/warranty.png")} alt="" />
              <p>Extended Warranty - 1 Year</p>
            </div>
            <div className="flex-jc-btwn t-head-gap align-c">
              <p>1</p>
              <p>₹6000</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="billing-details">
          <h4>Shipping & Billing Details</h4>
          <Row>
            <Col>
              <h5>Shipping Address</h5>
              <h6>Kabir L</h6>
              <p>1833, 18th Main Road, Thiruvalluvar Colony, Anna Nagar West</p>
              <p>Chennai - 600040</p>
              <p>Tamil Nadu, India</p>
              <p>Phone: +91 00000 00000</p>
              <h5>Shipping Partner</h5>
              <img
                src={require("assets/images/myOrders/Bluedart.png")}
                alt=""
              />
              <p>AWB: 28443321126</p>
            </Col>

            <Col>
              <h5>Billing Address</h5>
              <h6>Kabir L</h6>
              <p>1833, 18th Main Road, Thiruvalluvar Colony, Anna Nagar West</p>
              <p>Chennai - 600040</p>
              <p>Tamil Nadu, India</p>
              <p>Phone: +91 00000 00000</p>
            </Col>
          </Row>
        </div>
      </Col>
      <PaymentDetails />
    </>
  );
};

export default MyOrderDetails;
