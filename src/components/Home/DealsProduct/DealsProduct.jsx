import "./styles.css";
import { useSelector } from "react-redux";
import { Image } from "utils";
import { FilterLink } from "helpers";

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
                <FilterLink to={`/products?discount_collection=${item.slug}`}>
                  <Image src={item.image} alt={item.slug} className="w-100 d-block rounded shadow" />
                </FilterLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default DealsProduct;
