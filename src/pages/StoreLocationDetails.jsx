import React, { useEffect } from "react";
import { scrollToTop } from "utils";
import StoreDetailsBanner from "../components/StoreLocator/StoreDetails/StoreDetailsBanner/StoreDetailsBanner";
import StoreLocationDetails from "../components/StoreLocator/StoreDetails/StoreLocationDetails/StoreLocationDetails";
import StoreOffers from "../components/StoreLocator/StoreDetails/StoreOffers/StoreOffers";
import ProductsAvailInStore from "../components/StoreLocator/StoreDetails/ProductsAvailInStore/ProductsAvailInStore";
import StoreMap from "../components/StoreLocator/StoreDetails/StoreMap/StoreMap";
import Map360Degree from "components/Map360Degree";

const StoreLocationDetailsPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <StoreDetailsBanner />
      <StoreLocationDetails />
      <StoreOffers />
      <ProductsAvailInStore />
      <StoreMap />
      <Map360Degree />
    </div>
  );
};

export default StoreLocationDetailsPage;
