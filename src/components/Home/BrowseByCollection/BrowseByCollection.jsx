import "./styles.css";
import { Image } from "utils";
import { useSelector } from "react-redux";

const BrowseByCollection = () => {
  const browseHome = useSelector(state => state.homePageCollection.browseHome)
  if (browseHome) return (
    browseHome.map((browse, index) => (
      <section className="browse-price text-center" key={index} style={{ backgroundColor: browse.color }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="comon-heads">
                <h2>{browse.title}</h2>
              </div>
            </div>
            {browse.children.map((item, seIndex) => (
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" key={seIndex}>
                <div className="deals-imgs">
                  <Image src={item.path} alt={item.start_size} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))
  );
};

export default BrowseByCollection;