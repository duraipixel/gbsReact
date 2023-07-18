import { Link } from "react-router-dom";
import "./styles.css";
import useApiFetch from "hooks/useApiFetch";

const ServiceCenter = () => {
  const { data, isSuccess } = useApiFetch('/get/home/service/places')
  return (
    <section className="ran-trouble text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="comon-heads">
              <h3 className="h2">Your PC Ran into Trouble?</h3>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="details-locations">
              <span>
                Don't worry, the experts at GBS Services can help you fix
                issues <br />
                with your PC in no time
              </span>
              <h4>23 Service Centers Across South India</h4>
              <ul>
                {isSuccess ? data.map(item => (
                  <li className="text-capitalize" key={item.slug}>
                    <Link to={`/${item.slug}`} className="text-light">{item.name}</Link>
                  </li>
                )) : null}
              </ul>
              <Link to="/store-locator-for-service" className="btn-action">
                Find Your Nearest GBS After Sales Service Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenter;
