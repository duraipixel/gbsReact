import React from "react";
import "components/ServiceCenter/ServiceCenterDetails/styles.scss";

const StoreDetailsBanner = ({ storeLocation }) => {
  return (
    storeLocation && (
      <div className="img-banner">
        <img
          src={storeLocation.banner}
          style={{ height: "400px", width: "100%" }}
          className="img-fluid"
          alt="banner"
        />
        <img
          className="img-fluid img-overlay"
          style={{ height: "400px", width: "100%" }}
          src={require("assets/Store/overlay.png")}
          alt="overlay"
        />
        <div className="overlay-text">
          <h3>{storeLocation.title}</h3>
          <div>
            <span>Home</span>
            <span className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            <span>Store locator for Sales</span>{" "}
            <span className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M1 13L7 7L1 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            {storeLocation.title}
          </div>
        </div>
      </div>
    )
  );
};

export default StoreDetailsBanner;
