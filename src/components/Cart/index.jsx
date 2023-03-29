import React from "react";
import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductDetails from "./ProductDetails/ProductDetails";
import CartDetails from "./CartDetails/CartDetails";

const CartProduct = () => {
  return (
    <>
      <section className="bg-off-grey">
        <Container>
          <Row>
            <Col lg={8} className="pb-0 align-self-start">
              <Col className="card-cart p-4">
              <ProductDetails />
              </Col>
            </Col>

            <Col lg={4} className="align-self-start pb-0">
              <Col className="card-cart p-4">
              <CartDetails />
              </Col>       
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CartProduct;
