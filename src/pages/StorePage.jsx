import React, { useEffect } from "react";
import OurExclusiveBrand from "components/Stores/OurExclusiveBrand/OurExclusiveBrand";
import FindStoreNearYou from "components/Stores/FindStoreNearYou/FindStoreNearYou";
import { scrollToTop } from "utils";

const StorePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <FindStoreNearYou />
      <OurExclusiveBrand />
    </div>
  );
};

export default StorePage;
