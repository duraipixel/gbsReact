import React from "react";
import "components/ServiceCenter/ServiceCenterDetails/styles.scss";

const StoreDetailsBanner = () => {
  return (
    <div className="img-banner">
      <img
        src={require("assets/Store/StoreBanner.png")}
        style={{height:"400px", width:"100%"}}
        className="img-fluid"
        alt=""
      />
      <img
        className="img-fluid img-overlay"
        style={{height:"400px", width:"100%"}}
        src={require("assets/Store/overlay.png")}
        alt=""
      />
      <div className="overlay-text">
        <h3>Dell Exclusive Store - KK Nagar</h3>
        <p>{"Home > Store Locator > Dell Exclusive Store - KK Nagar"}</p>
      </div>
    </div>
  );
};

export default StoreDetailsBanner;
