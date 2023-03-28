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
            <Col lg={8} className="card-cart p-4 pb-0 align-self-start">
              <ProductDetails />
            </Col>

            <Col lg={{ span: 3, offset: 1 }} className="card-cart p-4 align-self-start pb-0">
              <CartDetails />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CartProduct;
