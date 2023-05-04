import { Tab, Nav } from "react-bootstrap";
import Description from "./Description";
import Specification from "./Specification";
import CustomerReview from "./CustomerReview";

function ProductsFeaturesTabs({ product }) {
  return (
    <div className="product-features-tab">
      <Tab.Container defaultActiveKey="0">
        <Nav variant="pills" className="sticky-top bg-light">
          {product.description_products.length ? (
            <Nav.Item>
              <Nav.Link eventKey="0">Description</Nav.Link>
            </Nav.Item>
          ) : (
            ""
          )}

          {product.attributes.length ? (
            <Nav.Item>
              <Nav.Link eventKey="1">Product Specifications</Nav.Link>
            </Nav.Item>
          ) : (
            ""
          )}
          <Nav.Item>
            <Nav.Link eventKey="2">Customer Reviews</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="p-3 pt-4">
          <Tab.Pane eventKey="0">
            <Description product={product.description_products} />
          </Tab.Pane>

          <Tab.Pane eventKey="1">
            <Specification product={product.attributes} />
          </Tab.Pane>
          <Tab.Pane eventKey="2">
            <CustomerReview is_review={product.is_review} product={product} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default ProductsFeaturesTabs;
