import React from "react";
import { Col, Container } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import "components/StoreLocator/LocationContent/styles.scss";
import { Link } from "react-router-dom";
import { HalfHeightLoader } from "utils";
import { Paper } from "@mui/material";
import NoDataComponent from "components/NoDataComponent/NoDataComponent";

const ServiceLocatorContent = ({ fetching, serviceCenterFilteredData }) => {
  console.log(serviceCenterFilteredData);
  return fetching ? (
    <HalfHeightLoader />
  ) : (
    <div className="py-5">
      <Container>
        {serviceCenterFilteredData &&
          serviceCenterFilteredData.data.map((item) => {
            return (
              <Paper elevaton={30} key={item.id}>
                <div className="flex-jc-btwn flex-wrap location-content-div">
                  <Col lg={9}>
                    <div className="location-content">
                      <h3>{item.title}</h3>
                      <div className="align-c gap-3">
                        {item.address && <RiMapPinLine />}
                        {item.address}
                      </div>
                      <div className="align-c gap-3">
                        {item.contact_no && <FiPhone />} {item.contact_no}
                      </div>
                      <div className="align-c gap-3">
                        {item.email && <TfiEmail />} {item.email}
                      </div>
                    </div>
                  </Col>
                  <Col className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
                    <Link
                      to={`/service-center-details/${item.slug}`}
                      className="btn-red-outline"
                    >
                      More Details
                    </Link>
                    <div
                      className="flex-d-clm-align-c"
                      style={{ position: "relative" }}
                    >
                      <p>Find us on</p>
                      <iframe
                        style={{
                          width: "80px",
                          height: "80px",
                          border: "0",
                          opacity: "0",
                          display: "block",
                        }}
                        src={item.map_link}
                        frameborder="0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Contact Map"
                      ></iframe>
                      <img
                        style={{
                          position: "absolute",
                          top: "28px",
                        }}
                        src={require("assets/Store/GooglePin.png")}
                        alt="GooglePin"
                      />
                    </div>
                  </Col>
                </div>
              </Paper>
            );
          })}
        {serviceCenterFilteredData.data.length === 0 && (
          <NoDataComponent data={"No Data have been found..."} />
        )}
        {/* {serviceCenterFilteredData.data.length > 5 && (
          <div className="flex-center mt-3">
            <button className="btn-trans mt-3 p-2 ps-4 pe-4">Load More</button>
          </div>
        )} */}
      </Container>
    </div>
  );
};

export default ServiceLocatorContent;
