import "./styles.css";
import { useSelector } from "react-redux";
import { Image } from "utils";

const CategoriesPoster = () => {
  const subcategoryCollections = useSelector(state => state.homePageCollection.subcategoryCollections)
  if (subcategoryCollections) return (
    <>
      <section className="laptop-based text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="comon-heads">
                <h2>Get the Right Laptop Based on Your Use</h2>
              </div>
            </div>
            {
              subcategoryCollections.map(item => (
                <div key={item.id} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="deals-imgs">
                    <Image src={item.image} alt={item.slug} className="img-fluid" />
                    <div className="btm-liner">
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPoster;
