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
        <title>{"page?.meta?.title"}</title>
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <WarrantyPolicy />
    </div>
  );
}

export default WaranttyPolicyPage;
