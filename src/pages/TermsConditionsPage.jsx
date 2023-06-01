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
        <title>Terms & Conditions - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="Read our Terms & Conditions" />
      </Helmet>
      <TermsConditions />
    </div>
  );
}

export default TermsConditionsPage;
