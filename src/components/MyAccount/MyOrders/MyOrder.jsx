import React from "react";
import Sidebar from "../Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const MyOrder = () => {
  return (
    <section className="bg-off-grey">
      <Container>
        <Row>
          <Col lg={3} className="align-self-start">
            <Col className="container-card p-4">
              <Sidebar />
            </Col>
          </Col>

          <Col lg={9} className="align-self-start">
            <Col className="container-card p-4">My Orders</Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyOrder;
