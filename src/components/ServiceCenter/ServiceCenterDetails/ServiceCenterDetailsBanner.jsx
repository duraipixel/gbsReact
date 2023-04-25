import React from "react";
import "./styles.scss";

const ServiceCenterDetailsBanner = ({ serviceCenterData }) => {
  // console.log(serviceCenterData);
  return (
    serviceCenterData && (
      <div className="img-banner">
        <img
          src={serviceCenterData.banner}
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
          <h3>{serviceCenterData.title}</h3>
          <p>{`Home > Store Locator > ${serviceCenterData.title}`}</p>
        </div>
      </div>
    )
  );
};

export default ServiceCenterDetailsBanner;
