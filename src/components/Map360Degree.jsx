import React from "react";
import { Container } from "react-bootstrap";

const Map360Degree = ({ serviceCenterData }) => {
  return (
    serviceCenterData && (
      <Container className="map-360-div">
        <h2 className="text-center">Experience Our Store</h2>
        <iframe
          src={serviceCenterData.image_360_link}
          allowFullScreen=""
          loading="lazy"
          title="Google Street View map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    )
  );
};

export default Map360Degree;
