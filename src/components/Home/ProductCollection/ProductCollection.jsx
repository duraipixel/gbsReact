import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./styles.css";
import { useSelector } from "react-redux"; 
import ProductSlider from "components/ProductSlider/ProductSlider";

function ProductCollection() {
  const productCollections = useSelector(state => state.homePageCollection.productCollections)
  if (productCollections)
    return (
      productCollections.map((collection) => (
        <section className="new-arrivals" key={collection.id}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between">
                <div className="comon-heads">
                  <h2>{collection.collection_name}</h2>
                </div>
                <div className="next-jump">
                  <Link to={`/product-list/${collection.collection_slug}`}>
                    View All <FiChevronRight />
                  </Link>
                </div>
              </div> 
              <div className="arrival-slider">
                <ProductSlider products={collection.products}/>
              </div>
            </div>
          </div>
        </section>
      ))
    );
}

export default ProductCollection