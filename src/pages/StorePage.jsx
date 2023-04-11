import React, { useEffect } from "react";
import { scrollToTop } from "utils";
import OurExclusiveBrand from "components/Stores/OurExclusiveBrand/OurExclusiveBrand";
import FindStoreNearYou from "components/Stores/FindStoreNearYou/FindStoreNearYou";
import StoreBanner from "components/Stores/StoreBanner/StoreBanner";
import GbsStoreServices from "components/Stores/GbsStoreServices/GbsStoreServices";

const StorePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <StoreBanner />
      <GbsStoreServices />
      <FindStoreNearYou />
      <OurExclusiveBrand />
    </div>
  );
};

export default StorePage;
