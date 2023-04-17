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
          <div className="p-2"></div>
        </div>
        <div>
          <div className="flex-jc-btwn align-c t-head-title">
            <p>Product</p>
            <div className="flex-jc-btwn align-c gap-8rem">
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
            <div className="flex-jc-btwn gap-8rem align-c">
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
            <div className="flex-jc-btwn gap-8rem align-c">
              <p>1</p>
              <p>₹6000</p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default MyOrderDetails;
