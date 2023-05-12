import { Link } from "react-router-dom";
import "./styles.scss";
import { useSelector } from "react-redux";

const PrefferedProcessor = () => {
  const modalData = useSelector((state) => state.homePageCollection.modalData);
  console.log(modalData);
  return (
    <section className="new-arrivals preffered-processor">
      <div className="container">
        <div className="row">
          {modalData &&
            modalData.map(({ banner, title, processors }, i) => (
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4" key={i}>
                <div className="intel-core text-center">
                  <div>
                    <div className="col">
                      <div className="proc-img">
                        <img
                          src={banner}
                          alt=""
                          className="img-fluid w-100 poster-image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h4>{title}</h4>
                    </div>

                    <div className="col-lg-12 lay-btns">
                      <div className="row">
                        {processors.map(({ slug, name }, i) => (
                          <div className="col-lg-6">
                            <Link to={`/${slug}`} key={i}>
                              {name}
                              {/* <span>Ideal for Casual Use</span> */}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PrefferedProcessor;
