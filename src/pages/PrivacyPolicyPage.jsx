import Privacypolicy from 'components/PrivacyPolicy/Privacypolicy'
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

function PrivacyPolicyPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
        <Privacypolicy />
    </div>
  );
}

export default PrivacyPolicyPage