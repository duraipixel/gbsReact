import "./styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image } from "utils";

const CategoriesPoster = () => {
  const navigate = useNavigate();
  const subcategoryCollections = useSelector(
    (state) => state.homePageCollection.subcategoryCollections
  );
  const linkHandler = (slug) => {
    navigate(`/products?categories=${slug}`);
  };
  if (subcategoryCollections)
    return (
      <div className="section-wrapper bg-light">
        <div className="container">
          <h1 className="section-title">Products Available In-store</h1>
          <div className="row g-3">
            {subcategoryCollections.map(
              (item, index) =>
                index < 4 && (
                  <div
                    key={item.id}
                    className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-6"
                  >
                    <div
                      onClick={() => linkHandler(item.slug)}
                      className="deals-imgs cursor-clickable m-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.slug}
                        className="img-fluid"
                      />
                      <div className="btm-liner">
                        <h4 className="fs-20">{item.name}</h4>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    );
};

export default CategoriesPoster;
