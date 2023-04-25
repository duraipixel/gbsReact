import React from "react";
import "./styles.scss";

const ServiceCenterDetailsBanner = ({ serviceCenterData }) => {
  console.log(serviceCenterData);
  return (
    serviceCenterData && (
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
          <h3>{serviceCenterData.title}</h3>
          <p>{`Home > Store Locator > ${serviceCenterData.title}`}</p>
        </div>
      </div>
    )
  );
};

export default ServiceCenterDetailsBanner;
