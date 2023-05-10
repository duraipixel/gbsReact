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
    navigate(`/products?category=${slug}`);
  };
  if (subcategoryCollections)
    return (
      <>
        <section className="laptop-based text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="comon-heads">
                  <h2>Products Available In-store</h2>
                </div>
              </div>

              {subcategoryCollections.map(
                (item, index) =>
                  index < 4 && (
                    <span
                      key={item.id}
                      className="col-lg-3 col-md-3 col-sm-6 col-xs-12 "
                    >
                      <div
                        onClick={() => linkHandler(item.slug)}
                        className="deals-imgs cursor-clickable"
                      >
                        <Image
                          src={item.image}
                          alt={item.slug}
                          className="img-fluid"
                        />
                        <div className="btm-liner">
                          <h4>{item.name}</h4>
                        </div>
                      </div>
                    </span>
                  )
              )}
            </div>
          </div>
        </section>
      </>
    );
};

export default CategoriesPoster;
