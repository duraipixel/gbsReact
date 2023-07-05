import { FilterLink } from "helpers";
import "./styles.css";
import { useSelector } from "react-redux";
import { Image } from "utils";
const CategoriesPoster = () => {
  const subcategoryCollections = useSelector(
    (state) => state.homePageCollection.subcategoryCollections
  ); 
  if (subcategoryCollections)
    return (
      <div className="section-wrapper bg-light">
        <div className="container">
          <h2 className="section-title">Products Available In-store</h2>
          <div className="row g-3">
            {subcategoryCollections.map(
              (item, index) =>
                index < 4 && (
                  <div
                    key={item.id}
                    className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-6"
                  >
                    <FilterLink to={`/products?categories=${item.slug}`}>
                      <Image
                        src={item.image}
                        alt={item.slug}
                        className="img-fluid"
                      />
                      <div className="btm-liner">
                        <h3 className="fs-20">{item.name}</h3>
                      </div>
                    </FilterLink>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
};

export default CategoriesPoster;
