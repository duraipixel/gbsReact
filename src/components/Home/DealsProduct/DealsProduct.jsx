import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "utils";

const DealsProduct = () => {
  const discountCollections = useSelector(
    (state) => state.homePageCollection.discountCollections
  );
  if (discountCollections)
    return (
      <div className="section-wrapper">
        <div className="container">
          <div className="section-title">
            Best Deals of the Day{" "}
            <h1 className="h5 mt-2">Get Today's Best Discounts</h1>{" "}
          </div>
          <div className="row g-3">
            {discountCollections.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-3 col-6 col-xs-12">
                <Link
                  to={`/products?discount_collection=${item.slug}`}
                  className="d-block"
                >
                  <Image
                    src={item.image}
                    alt={item.slug}
                    className="w-100 d-block rounded shadow"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default DealsProduct;
