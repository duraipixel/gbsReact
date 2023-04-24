import React, { useEffect } from "react";
import { scrollToTop } from "utils";
import StoreDetailsBanner from "../components/StoreLocator/StoreDetails/StoreDetailsBanner/StoreDetailsBanner";
import StoreLocationDetails from "../components/StoreLocator/StoreDetails/StoreLocationDetails/StoreLocationDetails";
import StoreOffers from "../components/StoreLocator/StoreDetails/StoreOffers/StoreOffers";
import ProductsAvailInStore from "../components/StoreLocator/StoreDetails/ProductsAvailInStore/ProductsAvailInStore";

const StoreLocationDetailsPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <StoreDetailsBanner />
      <StoreLocationDetails/>
      <StoreOffers/>
      <ProductsAvailInStore/>
    </div>
  );
};

export default StoreLocationDetailsPage;
