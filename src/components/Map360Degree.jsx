import React from "react";
import { Container } from "react-bootstrap";

const Map360Degree = () => {
  return (
    <Container className="map-360-div">
      <h2 className="text-center">Experience Our Store</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!4v1670568357394!6m8!1m7!1sbxTUFsVN-7Y42gRQeSZ0RA!2m2!1d40.7579191103458!2d-73.9854234488782!3f13.89!4f5.219999999999999!5f0.7820865974627469"
        allowfullscreen=""
        loading="lazy"
        title="Google Street View map"
        class="iframe-image"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map360Degree;
