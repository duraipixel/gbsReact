import "./styles.scss";
import { useSelector } from "react-redux";
import { FilterLink } from "helpers";

const MustHaves = () => {
  const handpickedCollections = useSelector(
    (state) => state.homePageCollection.handpickedCollections
  );
  if (handpickedCollections)
    return (
      <div className="section-wrapper">
        <div className="container">
          <h5 className="h2 section-title">Latest Laptops, Handpicked for You</h5>
          <div className="row g-3">
            {handpickedCollections.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 poster-img-div">
                <FilterLink to={`products?handpicked=${item.slug}`} >
                  <img
                    src={item.image}
                    alt={item.slug}
                    className="img-fluid poster-image rounded shadow"
                  />
                </FilterLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MustHaves;
