import "./Product.scss";
import "react-image-lightbox/style.css";
import { Col, Row, Container } from "react-bootstrap";
import ProductsFeaturesTabs from "./ProductFeaturesMenu/ProductsFeaturesTabs";
import ProductInformation from "./ProductInformation";
import ProductGallery from "./ProductGallery";
import ProductSlider from "components/ProductSlider/ProductSlider";
import "components/Home/HomeProductsSlider/styles.scss";
import "components/Home/NewArrivals/styles.css";
import ProductBreadcrumb from "./ProductBreadcrumb";

function ProductDetails({ product }) {
  if (product) {
    return (
      <div>
        <Container className="p-0">
          <Row className="sticky-wrapper">
            <Col xl={6} className="sticky-inner sticky-inner-pdp h-100 pt-lg-5">
              <ProductBreadcrumb
                slug={product.category_slug}
                category={product.category_name}
                title={product.product_name}
              />
              <div className="position-relative">
                <span className="offer-badge">
                  <div>
                    {product.discount_percentage}% <span>OFF</span>
                  </div>
                </span>
                <ProductGallery images={product.gallery || product.image} />
              </div>
            </Col>
            <Col xl={6} className="pt-lg-5">
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
      </div>
    );
  }
}

export default ProductDetails;
