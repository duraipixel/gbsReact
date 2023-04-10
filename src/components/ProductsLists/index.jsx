import React from "react";
import "./styles.scss";
import { Container, Row } from "react-bootstrap";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductListDetails from "./ProductDetails/ProductListDetails";

const ProductLists = () => {
  return (
    <section className="bg-off-grey products-list-layer">
      <Container>
        <Row>
          <ProductFilter />
          <ProductListDetails />
        </Row>
      </Container>
    </section>
  );
};

export default ProductLists;
