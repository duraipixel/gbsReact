import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "utils";

const DealsProduct = () => {
  const discountCollections = useSelector(state => state.homePageCollection.discountCollections)
  if (discountCollections) return (
    <section className="deals-we-have text-center pb-0">
      <div className="container">
        <div className="row justify-content-center g-0">
          <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="comon-heads">
                  <h2>Deals you Might Want to Consider</h2>
                </div>
              </div>
              {
                discountCollections.map(item => (
                  <div key={item.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <Link to="/product-list" className="deals-imgs">
                      <Image src={item.image} alt={item.slug} className="img-fluid" />
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsProduct;
