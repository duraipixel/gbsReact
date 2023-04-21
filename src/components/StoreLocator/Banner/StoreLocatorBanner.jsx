import React from "react";
import "./styles.scss";
import { Col, Container } from "react-bootstrap";

const StoreLocatorBanner = () => {
  return (
    <section className="banner">
      <Container>
        <Col>
          <h2 className="text-center">Store Locator</h2>
          <div>
            <div className="m-2 flex-center flex-wrap">
              <select className="" id="" name="">
                <option value="Chennai - All Stores">
                  Chennai - All Stores
                </option>
              </select>
              <select className="" id="" name="">
                <option value="Select Brand">Select Brand</option>
              </select>
              <input type="number" placeholder="Search by Pincode" />
            </div>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default StoreLocatorBanner;