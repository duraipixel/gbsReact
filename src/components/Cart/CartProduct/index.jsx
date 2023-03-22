import React from "react";
import "./styles.css";
import "../styles.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductDetails from "./ProductDetails";
import CartDetails from "./CartDetails";

const CartProduct = () => {
  return (
    <>
      <section className="bg-off-grey">
        <Container>
          <Row>
            <Col lg={8} className="card-cart p-4 pb-0">
              <ProductDetails />
            </Col>

            <Col lg={{ span: 3, offset: 1 }} className="card-cart p-4">
              <h4>Cart Details</h4>
              <CartDetails />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CartProduct;
