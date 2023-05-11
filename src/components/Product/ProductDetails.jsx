import "./Product.scss";
import "react-image-lightbox/style.css";
import { Col, Row, Container } from "react-bootstrap";
import ProductsFeaturesTabs from "./ProductFeaturesMenu/ProductsFeaturesTabs";
import ProductInformation from "./ProductInformation";
import ProductGallery from "./ProductGallery";
import ProductSlider from "components/ProductSlider/ProductSlider";
import "components/Home/HomeProductsSlider/styles.scss";

function ProductDetails({ product }) {
  // console.log(product);
  return (
    <div className="py-lg-3 h-100 py-4">
      {product && (
        <>
          <Container className="p-0">
            <Row className="h-100 ">
              <Col xl={6}>
                <div className="sticky-top pt-lg-4 pe-5">
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
          {product.related_products[0] && (
            <section className="new-arrivals">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between">
                    <div className="comon-heads">
                      <h2>Related Products</h2>
                    </div>
                  </div>
                  <div className="arrival-slider">
                    <ProductSlider products={product.related_products} />
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

export default ProductDetails;
