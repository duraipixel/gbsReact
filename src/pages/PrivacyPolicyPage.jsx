import Privacypolicy from "components/PrivacyPolicy/Privacypolicy";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function PrivacyPolicyPage() {
  const [page, setPage] = useState([]);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{page?.meta?.title || "Privacy Policy | GBS"}</title>
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <Privacypolicy />
    </div>
  );
}

export default PrivacyPolicyPage;
