import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const ProductFilter = () => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Col lg={3} className="pb-0 align-self-start">
      <Col className="filters-side">
        <Link className="product-filter-btn" onClick={ToggleClass}>
          Filters
        </Link>
        <div
          className={
            isActive
              ? "filter-lists product-filters"
              : "active product-filters filter-lists"
          }
        >
          <Link className="close-btn" onClick={ToggleClass}>
            <IoMdClose />
          </Link>
          <ul>
            <h4>Product Availability</h4>
            <li>
              <label className="cstm-chkbx">
                In Stock
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="cstm-chkbx">
                Upcoming
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="cstm-chkbx">
                Exclude Out Of Stock
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
          <div className="seperator-hgt-30"></div>

          <ul>
            <h4>Price</h4>
            <li>
              <label className="cstm-chkbx">
                Below ₹30,000
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="cstm-chkbx">
                ₹30,000 to ₹49,999
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="cstm-chkbx">
                ₹50,000 to ₹69,999
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="cstm-chkbx">
                ₹70,000 to ₹99,999
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="cstm-chkbx">
                ₹1,00,000 & above
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </Col>
    </Col>
  );
};

export default ProductFilter;