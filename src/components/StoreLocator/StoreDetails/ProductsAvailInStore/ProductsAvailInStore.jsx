import React from "react";
import "components/Home/CategoriesPoster/styles.css";
import { useSelector } from "react-redux";
import { Image } from "utils";
import { useNavigate } from "react-router-dom";

const ProductsAvailInStore = () => {
  const subcategoryCollections = useSelector(
    (state) => state.homePageCollection.subcategoryCollections
  );

  const navigate = useNavigate();
  const linkHandler = (slug) => {
    navigate(`/products?categories=${slug}`);
  };
  if (subcategoryCollections)
    return (
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
                    className="col-lg-3 col-md-3 col-sm-6 col-xs-12"
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
                        <h3>{item.name}</h3>
                      </div>
                    </div>
                  </span>
                )
            )}
          </div>
        </div>
      </section>
    );
};

export default ProductsAvailInStore;
