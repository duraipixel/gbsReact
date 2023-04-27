import React from "react";
import { Container } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import "./styles.scss";
import { Link } from "react-router-dom";
import { HalfHeightLoader } from "utils";

const LocationContent = ({ storeData, fetching }) => {
  // console.log(storeData.data);
  return fetching ? (
    <HalfHeightLoader />
  ) : (
    <section>
      <Container>
        {storeData &&
          storeData.data.map((item) => (
            <div key={item.id}>
              <div className="flex-jc-btwn flex-wrap location-content-div">
                <div className="location-content">
                  <h3>{item.title}</h3>
                  <div className="align-c gap-3">
                    <RiMapPinLine /> {item.address}
                  </div>
                  <div className="align-c gap-3">
                    <FiPhone /> {item.contact_no}
                  </div>
                  <div className="align-c gap-3">
                    <TfiEmail /> {item.email}
                  </div>
                </div>
                <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
                  <Link
                    to={`/store-location-details/${item.slug}`}
                    className="btn-red-outline"
                  >
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
            </div>
          ))}

        {/* <div className="flex-jc-btwn flex-wrap location-content-div">
          <div className="location-content">
            <h3>Dell Exclusive Store - KK Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> 1070A, Munusamy Salai, Bangaru Colony, K. K.
              Nagar, Opposite to Bata Showroom, Chennai 600078
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> dellkkn@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <Link className="btn-red-outline">More Details</Link>
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
            <h3>Dell Exclusive Store - KK Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> 1070A, Munusamy Salai, Bangaru Colony, K. K.
              Nagar, Opposite to Bata Showroom, Chennai 600078
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> dellkkn@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <Link className="btn-red-outline">More Details</Link>
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
            <h3>Dell Exclusive Store - KK Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> 1070A, Munusamy Salai, Bangaru Colony, K. K.
              Nagar, Opposite to Bata Showroom, Chennai 600078
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> dellkkn@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <Link className="btn-red-outline">More Details</Link>
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
            <h3>Dell Exclusive Store - KK Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> 1070A, Munusamy Salai, Bangaru Colony, K. K.
              Nagar, Opposite to Bata Showroom, Chennai 600078
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> dellkkn@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <Link className="btn-red-outline">More Details</Link>
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
            <h3>Dell Exclusive Store - KK Nagar</h3>
            <div className="align-c gap-3">
              <RiMapPinLine /> 1070A, Munusamy Salai, Bangaru Colony, K. K.
              Nagar, Opposite to Bata Showroom, Chennai 600078
            </div>
            <div className="align-c gap-3">
              <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
            </div>
            <div className="align-c gap-3">
              <TfiEmail /> dellkkn@gbssystems.com
            </div>
          </div>
          <div className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
            <Link className="btn-red-outline">More Details</Link>
            <div>
              <p>Find us on</p>
              <img
                src={require("assets/Store/GooglePin.png")}
                alt="GooglePin"
              />
            </div>
          </div>
        </div>
        <hr /> */}
        {storeData.data.length === 0 && (
          <div className="flex-center mt-3">
            <h2>No Data</h2>
          </div>
        )}

        {storeData.data.length > 5 && (
          <div className="flex-center mt-3">
            <Link className="btn-trans mt-3 p-2 ps-4 pe-4">Load More</Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default LocationContent;
