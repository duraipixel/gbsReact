import ServiceCenterLocatorBanner from "components/ServiceCenter/ServiceLocatorBanner/ServiceCenterLocatorBanner";
import ServiceLocatorContent from "components/ServiceCenter/ServiceLocatorContent/ServiceLocatorContent";
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
