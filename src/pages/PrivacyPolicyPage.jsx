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
        <title>Privacy Policy - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
        <meta name="description" content="Read our Privacy Policy" />
      </Helmet>
      <Privacypolicy />
    </div>
  );
}

export default PrivacyPolicyPage;
