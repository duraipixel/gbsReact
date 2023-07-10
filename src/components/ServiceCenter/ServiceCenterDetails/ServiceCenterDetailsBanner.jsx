import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { openInNewTab } from "utils";
import { FaRegHandPointRight } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const ServiceCenterDetailsBanner = ({ serviceCenterData }) => {
  // console.log(serviceCenterData);
  return (
    serviceCenterData && (
      <div className="img-banner">
        <img
          src={serviceCenterData.banner}
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
          <h1>{serviceCenterData.title}</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
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
            </span>
            <Link to="/store-locator-for-service" className="text-white">Store locator for service</Link>
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
            </span>
            <span>{serviceCenterData.title} </span>
          </div>
          <div>
            {serviceCenterData.whatsapp_no && (
              <div className="mt-3">
                <FaRegHandPointRight className="me-2" />
                <div onClick={() => openInNewTab(`https://wa.me/${serviceCenterData.whatsapp_no}`)} className="btn btn-success me-2">
                  <BsWhatsapp />
                  <b className="ms-2">{serviceCenterData.whatsapp_no}</b>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ServiceCenterDetailsBanner;
