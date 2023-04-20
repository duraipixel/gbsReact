import React from "react";
import { Container } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import "components/StoreLocator/LocationContent/styles.scss";
import { Link } from "react-router-dom";

const ServiceLocatorContent = () => {
  return (
    <section>
      <Container>
        <div className="flex-jc-btwn flex-wrap location-content-div">
          <div className="location-content">
            <h3>GBS Systems & Services, OMR Perungudi</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> No. 390, Rajiv Gandhi Salai, Kandhanchavadi,
              Perungudi, Chennai 600041.
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 98416 36517, +91 98416 03332
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> ls_omr@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <Link to="/service-center-details" className="btn-red-outline">
              More Details
            </Link>
            <div>
              <p>Find us on</p>
              <img
                src={require("assets/Store/GooglePin.png")}
                alt="GooglePin"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex-jc-btwn flex-wrap location-content-div">
          <div className="location-content">
            <h3>GBS Systems & Services, OMR Thoraipakkam</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> 5/357, Old Mahabalipuram Road, Rajiv Gandhi
              Salai, Nehru Nagar, Thoraipakkam, Chennai 600097.
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 98416 55532, +91 98416 03302
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> ls_omr@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <button className="btn-red-outline">More Details</button>
            <div>
              <p>Find us on</p>
              <img
                src={require("assets/Store/GooglePin.png")}
                alt="GooglePin"
              />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="flex-jc-btwn flex-wrap location-content-div">
          <div className="location-content">
            <h3>GBS Systems & Services, K.K. Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> Plot #1070-A, Munusamy Salai, KK Nagar West, K.
              K. Nagar, Chennai 600078.
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> ls_kknagar@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <button className="btn-red-outline">More Details</button>
            <div>
              <p>Find us on</p>
              <img
                src={require("assets/Store/GooglePin.png")}
                alt="GooglePin"
              />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="flex-jc-btwn flex-wrap location-content-div">
          <div className="location-content">
            <h3>GBS Systems & Services, K.K. Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> Plot #1070-A, Munusamy Salai, KK Nagar West, K.
              K. Nagar, Chennai 600078.
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> ls_kknagar@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <button className="btn-red-outline">More Details</button>
            <div>
              <p>Find us on</p>
              <img
                src={require("assets/Store/GooglePin.png")}
                alt="GooglePin"
              />
            </div>
          </div>
        </div>
        <hr />{" "}
        <div className="flex-jc-btwn flex-wrap location-content-div">
          <div className="location-content">
            <h3>GBS Systems & Services, K.K. Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> Plot #1070-A, Munusamy Salai, KK Nagar West, K.
              K. Nagar, Chennai 600078.
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> ls_kknagar@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <button className="btn-red-outline">More Details</button>
            <div>
              <p>Find us on</p>
              <img
                src={require("assets/Store/GooglePin.png")}
                alt="GooglePin"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex-jc-btwn flex-wrap location-content-div">
          <div className="location-content">
            <h3>GBS Systems & Services, K.K. Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> Plot #1070-A, Munusamy Salai, KK Nagar West, K.
              K. Nagar, Chennai 600078.
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> ls_kknagar@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <button className="btn-red-outline">More Details</button>
            <div>
              <p>Find us on</p>
              <img
                src={require("assets/Store/GooglePin.png")}
                alt="GooglePin"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex-center mt-3">
          <button className="btn-trans mt-3 p-2 ps-4 pe-4">Load More</button>
        </div>
      </Container>
    </section>
  );
};

export default ServiceLocatorContent;
