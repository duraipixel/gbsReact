import ShippingDelivery from 'components/ShippingDelivery/ShippingDelivery'
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

function ShippingDeliveryPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <ShippingDelivery /> 
    </div>
  );
}

export default ShippingDeliveryPage