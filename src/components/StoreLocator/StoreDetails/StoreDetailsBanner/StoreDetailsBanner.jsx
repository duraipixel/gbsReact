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
          alt=""
        />
        <img
          className="img-fluid img-overlay"
          style={{ height: "400px", width: "100%" }}
          src={require("assets/Store/overlay.png")}
          alt=""
        />
        <div className="overlay-text">
          <h3>{storeLocation.title}</h3>
          <p>{`Home > Store Locator > ${storeLocation.title}`}</p>
        </div>
      </div>
    )
  );
};

export default StoreDetailsBanner;
