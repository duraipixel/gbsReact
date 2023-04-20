import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "components/StoreLocator/Banner/styles.scss";

const ServiceCenterLocatorBanner = () => {
  return (
    <section className="banner">
      <Container>
        <Col>
          <h2 className="text-center">Service Center Locator</h2>
          <Row>
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
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default ServiceCenterLocatorBanner;
