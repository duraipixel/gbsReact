import Privacypolicy from "components/PrivacyPolicy/Privacypolicy";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function PrivacyPolicyPage() {
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
      <Privacypolicy />
    </div>
  );
}

export default PrivacyPolicyPage;
