import WarrantyPolicy from "components/WarrantyPolicy/WarrantyPolicy";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function WaranttyPolicyPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Warranty Policy - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Read our Warranty Policy" />

      </Helmet>
      <WarrantyPolicy />
    </div>
  );
}

export default WaranttyPolicyPage;
