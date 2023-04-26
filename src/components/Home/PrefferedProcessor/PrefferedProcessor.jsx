import { Link } from "react-router-dom";
import corew from "assets/images/core.jpg";
import amdr from "assets/images/amdr.jpg";
import "./styles.css";

const PrefferedProcessor = () => {
  return (
    <section className="new-arrivals">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="intel-core text-center">
            <div>
              <div className="col">
                <div className="proc-img">
                  <img
                    src={corew}
                    alt=""
                    className="img-fluid w-100 poster-image"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <h4>Intel® CoreTM Processors</h4>
              </div>

              <div className="col-lg-12 lay-btns">
                <div className="row">
                  <div className="col-lg-6">
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                  </div>
                  <div className="col-lg-6">
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="intel-core text-center">
            <div>
              <div className="col">
                <div className="proc-img">
                  <img
                    src={amdr}
                    alt=""
                    className="img-fluid w-100 poster-image"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <h4>Intel® CoreTM Processors</h4>
              </div>

              <div className="col-lg-12 lay-btns">
                <div className="row">
                  <div className="col-lg-6">
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                  </div>
                  <div className="col-lg-6">
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                    <Link to="">
                      Intel® CoreTM i3 Processors
                      <span>Ideal for Casual Use</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
  );
};

export default PrefferedProcessor;
