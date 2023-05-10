import TermsConditions from "components/TermsConditions/TermsConditions";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function TermsConditionsPage() {
  const [page, setPage] = useState([]);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{page?.meta?.title || "Terms Conditions | GBS"}</title>
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <TermsConditions />
    </div>
  );
}

export default TermsConditionsPage;
