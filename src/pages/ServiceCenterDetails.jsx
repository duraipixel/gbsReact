import Map360Degree from "components/Map360Degree";
import ServiceCenterDetailBanner from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterDetailsBanner";
import ServiceCenterLocationDetails from "components/ServiceCenter/ServiceCenterDetails/ServiceCenterLocationDetails";
import ServiceWeOffer from "components/ServiceCenter/ServiceCenterDetails/ServiceWeOffer";
import ServiceStoreMap from "components/ServiceCenter/ServiceStoreMap/ServiceStoreMap";
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

const ServiceCenterDetails = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <ServiceCenterDetailBanner />
      <ServiceCenterLocationDetails />
      <ServiceWeOffer />
      <ServiceStoreMap/>
      <Map360Degree/>
    </>
  );
};

export default ServiceCenterDetails;
