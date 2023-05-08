import ShippingDelivery from "components/ShippingDelivery/ShippingDelivery";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function ShippingDeliveryPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"page?.meta?.title"}</title>
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <ShippingDelivery />
    </div>
  );
}

export default ShippingDeliveryPage;
