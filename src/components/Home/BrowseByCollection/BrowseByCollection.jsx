import "./styles.css";
import { Image } from "utils";
import { useSelector } from "react-redux";
import { FilterLink } from "helpers";

const BrowseByCollection = () => {
  const browseHome = useSelector(state => state.homePageCollection.browseHome)
  if (browseHome) return (
    browseHome.map((browse, index) => (
      <div className="section-wrapper" key={index} style={{ backgroundColor: browse.color }}>
        <div className="container">
          <h3 className="h2 section-title text-white">{browse.title}</h3>
          <div className="row g-3">
            {browse.children.map((item, seIndex) => (
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-6" key={seIndex}>
                <FilterLink to={`/products?${browse.type}=${item.slug}`} >
                  <Image src={item.path} alt={item.start_size} className="img-fluid rounded-3" />
                </FilterLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))
  );
};

export default BrowseByCollection;