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
        <title>Shipping & Delivery - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="We Shipping and Delivery Laptops all over India" />
      </Helmet>
      <ShippingDelivery />
    </div>
  );
}

export default ShippingDeliveryPage;
