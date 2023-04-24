import React from "react";
import "./styles.scss";

const ServiceCenterDetailsBanner = () => {
  return (
    <div className="img-banner">
      <img
        src={require("assets/Store/ServiceBanner.png")}
        className="img-fluid"
        alt=""
      />
      <img
        className="img-fluid img-overlay"
        src={require("assets/Store/overlay.png")}
        alt=""
      />
      <div className="overlay-text">
        <h3>GBS Systems & Services, OMR Perungudi</h3>
        <p>{"Home > Store Locator > GBS Systems & Services, OMR Perungudi"}</p>
      </div>
    </div>
  );
};

export default ServiceCenterDetailsBanner;
