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
      <div >
        <Row className=" h-100">
          <Col xl={6} className="sticky-top h-100 sticky-padding-2">
            <ProductBreadcrumb
              slug={product.category_slug}
              category={product.category_name}
              title={product.product_name}
            />
            <div className="position-relative ">
              <span className="offer-badge">
                <div>
                  {product.discount_percentage}% <span>OFF</span>
                </div>
              </span>
              <ProductGallery videos={product.video_link} images={product.gallery || product.image} />
            </div>
          </Col>
          <Col xl={6} className="sticky-padding-2">
            <ProductInformation product={product} />
          </Col>
        </Row>
        <ProductsFeaturesTabs product={product} />
        {product.related_products.length !== 0 ? (
          <div className="py-5 related-slider">
            <h5 className="text-center mb-4">Related Products</h5>
            <ProductSlider products={product.related_products} />
          </div>
        ) : ''}
      </div>
    );
  }
}

export default ProductDetails;
