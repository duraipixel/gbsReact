import React, { useEffect } from "react";
import { scrollToTop } from "utils";
import ServiceCenter from "components/Home/ServiceCenter/ServiceCenter";
import StoreLocatorBanner from "components/StoreLocator/Banner/StoreLocatorBanner";

const StoreLocatorPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <StoreLocatorBanner />
      <ServiceCenter />
    </>
  );
};

export default StoreLocatorPage;
