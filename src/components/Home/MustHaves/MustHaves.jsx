// import screen1 from "assets/images/screen-5.jpg";
// import screen2 from "assets/images/screen-6.jpg";
// import screen3 from "assets/images/screen-7.jpg";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useSelector } from "react-redux";

const MustHaves = () => {
  const handpickedCollections = useSelector(
    (state) => state.homePageCollection.handpickedCollections
  );

  if (handpickedCollections)
    return (
      <div className="section-wrapper">
        <div className="container">
          <h6 className="h2 section-title">Latest Laptops, Handpicked for You</h6>
          <div className="row g-3">
            {handpickedCollections.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12 poster-img-div">
                <Link to={`products?handpicked=${item.slug}`} >
                  <img
                    src={item.image}
                    alt={item.slug}
                    className="img-fluid poster-image rounded shadow"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default MustHaves;
