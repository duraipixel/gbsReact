import ServiceCenterLocatorBanner from "components/ServiceCenter/ServiceCenterLocator/ServiceCenterLocatorBanner";
import ServiceLocatorContent from "components/ServiceCenter/ServiceLocator/ServiceLocatorContent";
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

const ServiceCenterLocator = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <ServiceCenterLocatorBanner />
      <ServiceLocatorContent />
    </>
  );
};

export default ServiceCenterLocator;
