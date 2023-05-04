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
      <>
        <section className="screen-size pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="comon-heads text-center">
                  <h2>Latest Laptops, Handpicked for You</h2>
                </div>
              </div>

              {handpickedCollections.map((item) => (
                <Link
                  to={`products?handpicked=${item.slug}`}
                  className="col-lg-4 col-md-4 col-sm-6 col-xs-12 poster-img-div"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid poster-image"
                  />
                </Link>
              ))}
              {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src={screen1} alt="" className="img-fluid poster-image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src={screen2} alt="" className="img-fluid poster-image" />
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src={screen3} alt="" className="img-fluid poster-image" />
            </div> */}
            </div>
          </div>
        </section>
      </>
    );
};

export default MustHaves;
