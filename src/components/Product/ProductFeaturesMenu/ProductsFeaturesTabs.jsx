import { Tab, Nav } from "react-bootstrap";
import Description from "./Description";
import Specification from "./Specification";
import CustomerReview from "./CustomerReview";
import { useEffect, useState } from "react";

function ProductsFeaturesTabs({ product }) {
  const [defaultActiveKey, setDefaultActiveKey] = useState('')

  useEffect(() => {
    if (product?.description_products?.length !== 0) {
      setDefaultActiveKey('Description')
    } else {
      if (product?.attributes?.length !== 0) {
        setDefaultActiveKey('ProductSpecifications')
      } else {
        if (product.common_review.total > 0) {
          setDefaultActiveKey('CustomerReview')
        }
      }
    }
  }, [])
  if (
    (product.description_products.length ||
    product.attributes.length ||
    product.common_review.total > 0) && defaultActiveKey
  )
    return (
      <div className="product-features-tab">
        <Tab.Container defaultActiveKey={defaultActiveKey.toString()}>
          <Nav variant="pills" className="sticky-top-0 bg-light">
            {product.description_products.length ? (
              <Nav.Item>
                <Nav.Link eventKey="Description">Description</Nav.Link>
              </Nav.Item>
            ) : (
              ""
            )}
            {product.attributes.length ? (
              <Nav.Item>
                <Nav.Link eventKey="ProductSpecifications">Product Specifications</Nav.Link>
              </Nav.Item>
            ) : (
              ""
            )}
            {product.common_review.total > 0 ? (
              <Nav.Item>
                <Nav.Link eventKey="CustomerReview">Customer Reviews</Nav.Link>
              </Nav.Item>
            ) : (
              ""
            )}
          </Nav>
          <Tab.Content className="p-3 pt-4">
            {product.description_products.length ? (
              <Tab.Pane eventKey="Description">
                <Description product={product.description_products} />
              </Tab.Pane>
            ) : (
              ""
            )}
            {product.attributes.length ? (
              <Tab.Pane eventKey="ProductSpecifications">
                <Specification product={product.attributes} />
              </Tab.Pane>
            ) : (
              ""
            )}
            {product.common_review.total > 0 ? (
              <Tab.Pane eventKey="CustomerReview">
                <CustomerReview
                  is_review={product.is_review}
                  product={product}
                />
              </Tab.Pane>
            ) : (
              ""
            )}
          </Tab.Content>
        </Tab.Container>
      </div>
    );
}

export default ProductsFeaturesTabs;
