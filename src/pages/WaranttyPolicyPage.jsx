import WarrantyPolicy from 'components/WarrantyPolicy/WarrantyPolicy'
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

function WaranttyPolicyPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <WarrantyPolicy />  
    </div>
  );
}

export default WaranttyPolicyPage