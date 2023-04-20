import React from "react";
import store from "assets/images/Stores/Rectangle222.png";
import { Col, Container, Row } from "react-bootstrap";

const GbsStoreServices = () => {
  return (
    <section style={{ background: "#f9f9f9" }}>
      <Container>
        <Row>
          <Col lg={5}>
            <Col className="me-3 store-details store-del-col">
              <h4 className="mb-4">
                GBS Systems & Services - The Preferred Store for Laptops
              </h4>
              <div>
                <p>
                  GBS Systems & Services is an Authorized Laptop Dealer in
                  Chennai, for more than 20 years. All the major PC brands such
                  as Acer, Asus, Dell, HP & Lenovo are available from us.
                  Currently, having 23 Exclusive Showrooms in Chennai and
                  planning to open more in the future. Our stores are famous for
                  our Friendly Customer approach, lowest price and the offers we
                  provide.
                </p>
              </div>
              <div>
                <button className="cta-btn">Find Stores Near You</button>
              </div>
            </Col>
          </Col>

          <Col lg={3}>
            <Col className="me-3 service-data store-del-col">
              <div>
                <h3>28 +</h3>
                <p>Years in IT Industry</p>
              </div>
              <hr />
              <div>
                <h3>24</h3>
                <p>Exclusive Laptop Stores</p>
              </div>
              <hr />
              <div>
                <h3>300,000 +</h3>
                <p>Happy Customers</p>
              </div>
            </Col>
          </Col>
          <Col lg={4}>
            <Col className="store-del-col mt-4">
              <img className="img-fluid" src={store} alt="" />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GbsStoreServices;
