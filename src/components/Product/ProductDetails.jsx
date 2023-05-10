import "./Product.scss";
import "react-image-lightbox/style.css";
import { Col, Row, Container } from "react-bootstrap";
import ProductsFeaturesTabs from "./ProductFeaturesMenu/ProductsFeaturesTabs";
import ProductInformation from "./ProductInformation";
import ProductGallery from "./ProductGallery";

function ProductDetails({ product }) {
  // console.log(product);
  return (
    <div className="py-lg-3 h-100 py-4">
      {product && (
        <>
          <Container>
            <Row className="h-100 ">
              <Col xl={6}>
                <div className="sticky-top pt-lg-4 px-5">
                  <div className="position-relative sticky-top">
                    <span className="offer-badge">
                      <div>
                        {product.discount_percentage}% <span>OFF</span>
                      </div>
                    </span>
                    <ProductGallery images={product.gallery || product.image} />
                  </div>
                </div>
              </Col>
              <Col xl={6}>
                <ProductInformation product={product} />
              </Col>
            </Row>
          </Container>
          <ProductsFeaturesTabs product={product} />
        </>
      )}
    </div>
  );
}

export default ProductDetails;
