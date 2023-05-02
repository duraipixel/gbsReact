import "./styles.css";
import { useSelector } from "react-redux";
import { Image } from "utils";
import ProductSlider from "components/ProductSlider/ProductSlider";
import { Link } from "react-router-dom";

const NarrowSearch = () => {
  const brands = useSelector(state => state.homePageCollection.brands)
  if (brands) return (
    <>
      <section className="narroww-search text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="comon-heads">
                <h2>Narrow Your Search to the Brands you Trust</h2>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="brands-list-slider">
                <ProductSlider slidesToShow={3}>
                  {
                    brands.map((item, i) => (
                      <Link to={`products?brand=${item.slug}`} key={i} className="brnd-sector">
                        <Image src={item.image} alt={item.title} className="img-fluid poster-image"/>
                      </Link>
                    ))
                  }
                </ProductSlider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NarrowSearch;
