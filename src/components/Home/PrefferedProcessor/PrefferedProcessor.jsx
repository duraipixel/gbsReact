import { Link } from "react-router-dom";
import "./styles.scss";
import { useSelector } from "react-redux";

const PrefferedProcessor = () => {
  const modalData = useSelector((state) => state.homePageCollection.modalData);
  // console.log(modalData);
  return (
    <section className="new-arrivals preffered-processor">
      <div className="container">
        <div className="row g-2">
          {modalData &&
            modalData.map(({ banner, title, processors }, i) => (
              <div className="col-6" key={i}>
                <div className="intel-core text-center">
                  <div>
                    <div className="proc-img">
                      <img
                        src={banner}
                        alt="banner-pic"
                        className="img-fluid w-100 poster-image"
                      />
                    </div>
                    <h4>{title}</h4>
                    <div className="lay-btns">
                      <div className="row g-2">
                        {processors.map(({ slug, name }, i) => (
                          <div className="col-lg-6" key={i}>
                            <Link to={`products?${slug}`}>{name}</Link>
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
