import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./styles.css";
import { useSelector } from "react-redux";
import ProductSlider from "components/ProductSlider/ProductSlider";

function ProductCollection() {
  const productCollections = useSelector(state => state.homePageCollection.productCollections)
  if (productCollections)
    return (
      productCollections.map((collection, index) => (
        <div className="section-wrapper section-border-bottom" key={index}>
          <div className="container px-0 px-md-3">
            <div className="d-flex justify-content-between align-items-center mb-2 mb-md-4 px-3">
              <h4 className="h2 section-title m-0 w-75 text-start">{collection.collection_name}</h4>
              <Link to={`/products?collection=${collection.collection_slug}`}>
                <small className="d-flex align-items-center">
                  View All <FiChevronRight className="ms-2"/>
                </small>
              </Link>
            </div>
            <div className="arrival-slider">
              <ProductSlider products={collection.products} />
            </div>
          </div>
        </div>
      ))
    );
}

export default ProductCollection