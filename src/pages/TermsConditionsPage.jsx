import TermsConditions from "components/TermsConditions/TermsConditions";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function TermsConditionsPage() {
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
      <TermsConditions />
    </div>
  );
}

export default TermsConditionsPage;
