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
            <Col lg={8} className="align-self-start">
              <Col className="card-cart p-4 pb-1">
                <ProductDetails />
              </Col>
            </Col>

            <Col lg={4} className="align-self-start">
              <Col className="card-cart p-4 pb-1">
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
