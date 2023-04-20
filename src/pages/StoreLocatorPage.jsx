import React, { useEffect } from "react";
import { scrollToTop } from "utils";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";
import StoreLocatorBanner from "components/StoreLocator/Banner/StoreLocatorBanner";
import LocationContent from "components/StoreLocator/LocationContent/LocationContent";

const StoreLocatorPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <StoreLocatorBanner />
      <LocationContent />
      <ServiceCenter />
    </>
  );
};

export default StoreLocatorPage;
