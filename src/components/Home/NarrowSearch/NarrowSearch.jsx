import "./styles.css";
import { useSelector } from "react-redux";
import { Image } from "utils";
import { Link } from "react-router-dom";

const NarrowSearch = () => {
  const brands = useSelector(state => state.homePageCollection.brands)
  if (brands) return (
    <>
      <div className="section-wrapper">
        <div className="container">
          <h5 className="h2 section-title">Narrow Your Search to the Brands you Trust</h5>
          <div className="row g-3 justify-content-center">
            {
              brands.map((item, i) => (
                <div className="col-6 col-xl col-lg-3 col-md-4"  key={i}>
                  <Link to={`products?brands=${item.slug}`}>
                    <Image src={item.image} alt={item.title} className="w-100" />
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default NarrowSearch;
